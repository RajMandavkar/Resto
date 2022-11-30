import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register= new FormGroup({
    name: new FormControl('',[Validators.required]),
    Email: new FormControl('',[Validators.required,Validators.email]),
    Password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    gender: new FormControl('',[Validators.required])
  })


  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }


  get user()

  {

    return this.register.get('name')
  }

  get email(){

    return this.register.get('Email')
  }

  get pass(){

    return this.register.get('Password')
  }

  get gender(){

    return this.register.get('gender')
  }



  collectvalue(){
    // console.warn(this.register.value);
    // console.warn(this.resto.registerUser(this.register.value));
   return this.resto.registerUser({ data: this.register.value }).subscribe((result)=>{
      console.warn(result);
    })

    
  }

}
