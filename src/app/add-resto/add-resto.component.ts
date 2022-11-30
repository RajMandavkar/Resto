import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {


  addResto= new FormGroup({
    name: new FormControl('',[Validators.required]),
    Email: new FormControl('',[Validators.required,Validators.email]),
    Address: new FormControl('',[Validators.required])
  })

  constructor(private resto:RestoService) { }

alert:boolean=false
  ngOnInit(): void {
  }

  collectResto()
  {
     this.resto.saveResto(this.addResto.value).subscribe((result)=>{
        this.alert=true
     })
    this.addResto.reset({})
  }
  closeAlert(){
    this.alert=false
  };

  get user(){

    return this.addResto.get('name')
  }

  get email(){

    return this.addResto.get('Email')
  }

  get address(){

    return this.addResto.get('Address')
  }
  
}
