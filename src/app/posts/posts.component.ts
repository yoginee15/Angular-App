import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/Errors/NotFoundErrors';
import { AppError } from '../common/Errors/AppError';
import { BadInputError } from '../common/Errors/BadInputError';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  post = { title: "", body: "", id: "" };
  isUpdate: boolean = false;
  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(
        (response: any[]) =>
          this.posts = response,
        (error) => {
          alert("Unexpected error occured...!!!");
          console.log("Error", error);
        }
      )
  }

  createPost() {
    // console.log("post",this.post);
    let post = { ...this.post, userId: 1 };
    this.postService.createPost(post)
      .subscribe(
        (response: any) => {
          console.log("Response", response);
          // this.posts.unshift({...response});
          this.posts.splice(0, 0, { ...response })
        },
        // (error:Response) => {
        //   if(error.status===404){
        //     // this.form.setErrors(error);
        //     alert(error);
        //   }else{
        //     alert("Unexpected error occured...!!!");
        //     console.log("Error", error);
        //   }
        // }
        (error:AppError) => {
          if(error instanceof BadInputError){
            alert("Bad input "+error);
            console.log("Error", error);
          }else{
            alert("Unexpected error occured...!!!");
            console.log("Error", error);
          }
        }
      );
    this.resetPostForm();
  }

  setPostData(post) {
    this.post = { ...post };
    this.isUpdate = true;
  }

  updatePost() {
    let foundPost = this.posts.find((post) => post.id == this.post.id);
    let index = this.posts.indexOf(foundPost);
    // console.log("index",index);
    this.postService.updatePost(this.post)
      .subscribe(
        (response:{}) => this.posts[index] = { ...response },
        (error) => {
          alert("Unexpected error occured...!!!");
          console.log("Error", error);
        }
      );
    this.resetPostForm();
  }

  deletePost(post) {
    // let foundPost = this.posts.find((curPost)=>curPost.id==post.id);
    // let index = this.posts.indexOf(foundPost);
    let index = this.posts.indexOf(post);
    // console.log("index",index);
    this.postService.deletePost(post.id)
      .subscribe(
        (response) => { this.posts.splice(index, 1); },
        // (error:Response) => {
          // if(error.status===404){
          //   alert("This post has been already deleted...!!!");
          //   console.log("Error", error);
          // }else{
          //   alert("Unexpected error occured...!!!");
          //   console.log("Error", error);
          // }
          (error:AppError) => {
          if(error instanceof NotFoundError){
            alert("This post has been already deleted...!!!");
            console.log("Error", error);
          }else{
            alert("Unexpected error occured...!!!");
            console.log("Error", error);
          }
        }
      );
    this.resetPostForm();
  }

  resetPostForm() {
    this.post = { title: "", body: "", id: "" };
    this.isUpdate = false;
  }

} 
