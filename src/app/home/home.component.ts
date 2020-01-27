import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPost(){
    // this.router.navigate(['/posts',1,1],{queryParams:{pageNo:1,order:'updated'}})
    this.router.navigate(['/posts'],{queryParams:{pageNo:1,order:'updated'}})
  }
}
