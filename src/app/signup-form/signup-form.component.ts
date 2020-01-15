import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../common/validators/usernameValidators';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  loader = faSpinner;
  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    username : new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[a-zA-z0-9]+$/),
      UsernameValidators.cannotContainSpace,
    ],
    UsernameValidators.shouldBeUnique
    ),
    password : new FormControl('', Validators.required)
  })

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  login(){
    // let isValid = authService.login(this.form.value);
    let isValid = false;
    if(!isValid){
      this.form.setErrors({invalidLogin:true})
    }
  }
}
