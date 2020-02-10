import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  courseDetails : {};

  constructor(private route:ActivatedRoute,private courseService: CoursesService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(
      (params)=>{
        console.log("Params",params)
        let id = +params.get('id');
        console.log("Id",id);
        this.courseDetails=  this.courseService.getCourse(id);
      }
    )
  }

}
