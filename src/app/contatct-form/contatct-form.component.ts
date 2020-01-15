import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatct-form',
  templateUrl: './contatct-form.component.html',
  styleUrls: ['./contatct-form.component.css']
})
export class ContatctFormComponent implements OnInit {
  userNamePattern = /^[A-Za-z0-9 ]+$/;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f) { console.log("Form submitted successfully!!!",f.value) }  
  log(name){ console.log(name)};

}
