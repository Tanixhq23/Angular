import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signup, ProfileComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /* title = 'Angular 19 Tutorial';
  name = 'Tanishq';
  handleClickEvent(){
    alert("Function called")
  } */
  /* count = 0
  handleCounter(val:string){
   if(val=="minus"){
     if(this.count>0){
       this.count= this.count-1;
     }
     else{
       this.count = 0;
     }
     
   }else if(val=="add"){
     this.count= this.count+1;
   }
   else{
     this.count = 0;
   }
  } */
  /* handleEvent(event: Event) {
    console.log("Function called", event.type);
    console.log("value", (event.target as HTMLInputElement).value);
  } */
 name = "";
 displayName = "";
 getName(event:Event){
  this.name= (event.target as HTMLInputElement).value;
 }
 showName(){
  this.displayName = this.name;
 }
 setName(){
  this.name = "Bob"
 }
}
