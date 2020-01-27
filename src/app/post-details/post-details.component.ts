import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postDetails: any;
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    // this.route.paramMap
    // .subscribe(
    //   (params)=>{
    //     console.log("Params",params)
    //     let id = +params.get('id');
    //     console.log("Id",id);
    // this.postService.getPostDetails(id).subscribe(
    //   (res:any) => this.postDetails = res
    // )
    //   }
    // )


    // let id = +this.route.snapshot.paramMap.get('id');
    // console.log("post id",id);
    // let userId = +this.route.snapshot.paramMap.get('userId');
    // console.log("user id",userId)
    // this.postService.getPostDetails(id).subscribe(
    //   (res:any) => this.postDetails = res
    // )

    // this.route.queryParamMap.subscribe(
    //   (qParam) => { 
    //     console.log("Query parmas",qParam);
    //     let pageNo = qParam.get('pageNo');
    //     console.log("Page No", pageNo);
    //   }
    // )
    // console.log("Page no using snapshot",this.route.snapshot.queryParamMap.get('pageNo'));

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('pageNo');
      console.log("id", id);
      console.log("page", page);
      this.postService.getPostDetails(id).subscribe(
        (res:any) => this.postDetails = res
      )
    });
  }

}
