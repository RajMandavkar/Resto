import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service'
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {


  constructor(private resto:RestoService) { }
  collection:any=[];
  item:any=[];
  ngOnInit(): void {

    this.resto.getlist().subscribe((result)=>{
    
      this.collection=result;
         })
  }
  deleteResto(item:any)
  {
    console.warn(item);
    
    this.resto.deleteResto(item -1).subscribe((result)=>{
      console.warn(result);
      this.collection.splice(item-1,1)
      

    })
  }

}
