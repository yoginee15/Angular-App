import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = "List of courses";
  viewMode = 'list';
  courses : any[];
  constructor(private courseService:CoursesService) { }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

}
