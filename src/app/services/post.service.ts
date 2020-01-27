import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AppError } from '../common/Errors/AppError';
import { NotFoundError } from '../common/Errors/NotFoundErrors';
import { BadInputError } from '../common/Errors/BadInputError';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(this.url);
  }
  
  createPost(post):Observable<{}> {
    return this.http.post(this.url, post).pipe(
      catchError((error: Response) => {
        if (error.status == 400 || error.status == 404)
          return throwError(new BadInputError(error));
        return throwError(new AppError(error));
      })
    );
  }

  updatePost(post):Observable<{}>{
    let id = post.id;
    // delete post.id;
    return this.http.put(`${this.url}/${id}`,post).pipe(catchError(
      (error:Response)=>{
        if(error.status==404)
        return throwError(new NotFoundError(error));
      return throwError(new AppError(error));
    }));
  }

  deletePost(postId):Observable<{}>{
    return this.http.delete(`${this.url}/${postId}`).pipe(catchError(
      (error:Response)=>{
        if(error.status==404)
        return throwError(new NotFoundError(error));
      return throwError(new AppError(error));
    }))
  }

  getPostDetails(id):Observable<{}>{
    return this.http.get(`${this.url}/${id}`).pipe(catchError(
      (error:Response) =>{
        if(error.status==404)
        return throwError(new NotFoundError(error));
        return throwError(new AppError(error))
      }
    ))
  }

}
