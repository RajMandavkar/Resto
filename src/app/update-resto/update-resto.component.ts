import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  editResto= new FormGroup({
    name: new FormControl(''),
    Email: new FormControl(''),
    Address: new FormControl('')
  })
  updateResto: any;
  constructor(private resto:RestoService , private router:ActivatedRoute) { }
  //id:any=[];
  
  ngOnInit(): void {
    // this.router.params.subscribe((params)=>{
    //   console.warn(this.resto.getCurrentResto(params['id']));
    // })
    //console.warn(this.router.snapshot.params['id']);
    
    this.resto.getCurrentResto(this.router.snapshot.params['id']).subscribe((result:any)=>{
    console.log(result);
      this.editResto= new FormGroup({
        name: new FormControl(result.name),
        Email: new FormControl(result.Email),
        Address: new FormControl(result.Address)
      })
    })
    
  }
  collection(){
    console.warn("item",this.editResto.value);
    this.resto.updateResto(this.router.snapshot.params['id'],this.editResto.value).subscribe((result)=>{
      console.warn("result",result);
      
    })
    this.updateResto.reset({})
  }
}
