import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { ProfileComponent } from './profile/profile.component';
import { Signal } from '@angular/core';
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
  /* name = "";
  displayName = "";
  getName(event:Event){
   this.name= (event.target as HTMLInputElement).value;
  }
  showName(){
   this.displayName = this.name;
  }
  setName(){
   this.name = "Bob"
  } */
  /* display=true;
  toggleDiv = true; */
  /* x=10;
  hide(){
    this.display=false;
  }
  show(){
    this.display=true;
  }
  toggle(){
    this.display=!this.display;
  } */
  /* toggletwo(){
    this.toggleDiv = !this.toggleDiv;
  } */
  /* color=3;
  handleColor(val:number){
   this.color=val
  }
  handleInput(event:Event){
   this.color = parseInt((event.target as HTMLInputElement).value);;
  } */
  /* color="red";
  handleColor(val:string){
    this.color=val;
  }
  changeColor(event: Event){
    this.color=(event.target as HTMLInputElement).value;
  } */
  /* users=["Anil", "Sam", "Amit", "Rahul", "Anuj"];
  students=[
   {name: 'Tanishq', age:19},
   {name: 'Anil', age:37},
   {name: 'Amit', age:45},
   {name: 'Sam', age:29},
  ] */
  /* count = signal(10);
  x = 20;
  constructor() {
    effect(() => {
      console.log(this.count());

    })
  }
  updateValue() {
    this.count.set(this.count()+1);
  } */
  /* data = signal<string|number>(10);
  count: Signal<number> = computed(()=>10);
  updateSignal(){
    this.data.set("Hello");
  } */
  print(){
    console.log("Hello World");
  }
}
