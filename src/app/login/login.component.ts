import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginResto= new FormGroup({
    name: new FormControl('',[Validators.required]),
    Password: new FormControl('',[Validators.required,Validators.minLength(8)])
  })


  constructor() { }

  ngOnInit(): void {
  }
  get user(){

    return this.loginResto.get('name')
  }

  get pass(){

    return this.loginResto.get('Password')
  }

}
