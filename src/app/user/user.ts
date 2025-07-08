import { Component, input, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  /* name:null|string ="";
  constructor(private route: ActivatedRoute){
    
  }
  ngOnInit(){
    this.route.params.subscribe((params)=>{
      console.log(params);
      this.name= params['name'];
    })
  } */
 /* @Input() user:string='';
 @Input() city:string=''; */
//  @Input() user:string='';
name = "Tansihq"
// Info: Initialized
/* constructor(){
  console.log("Initialized");
  this.name = "Amit";
} */
// Info: Change detection
/* ngOnInit(){
  console.log("Change");
  this.name = "Anil";
  
} */
// Info: Destruction
/* ngOnDestroy(){
  console.log("Destroyed");
  
} */
/* ngOnChanges(){
  console.log("ng value change");
  
} */
@Input() counter=0;


}
