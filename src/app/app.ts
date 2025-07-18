import {
  afterNextRender,
  afterRenderEffect,
  Component,
  computed,
  effect,
  signal,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Header } from './header/header';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
// import { User1 } from "./user1/user";
import { CurrencyConvertorPipe } from './pipe/currency-convertor-pipe';
import { Product } from './Services/product';
import { Users } from './Services/users';
import { User } from './interfaces/user';
// Line 7 removed or commented out
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
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
  /*  name=new FormControl();
 password=new FormControl();
  displayValue(){
    console.log(this.name.value);
    console.log(this.password.value);
  }
  setValue(){
    this.name.setValue('Tanishq'); 
    this.password.setValue('Tanishq@123'); 
  } */
  /* profileForm = new FormGroup({
  name:new FormControl('',[Validators.required]),
  password: new FormControl('',[Validators.minLength(5),Validators.required]),
  email:new FormControl('',[Validators.required, Validators.maxLength(50), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
 })
 onSubmit(){  
  console.log(this.profileForm.value);
 } */
  /* setValue(){
  this.profileForm.setValue({
    name: 'Tanishq',
    password: "Blahblah",
    email: "Blahblah"
  })
 } */
  /* get name(){
  return this.profileForm.get('name');
}
get password(){
  return this.profileForm.get('password');
}
get email(){
  return this.profileForm.get('email');
} */
  /*   userDetails:any;
    addDetails(val: NgForm) {
      console.log(val);
      this.userDetails = val;
    } */
  /* userName="Tanishq"
  city="Mumbai"
  onUserChange(user:string){
   this.userName= user;
  } */
  // users=["Anil", "Tanishq", "Peter", "Tom", "Bruce", "John"];
  // username = "Tanishq";
  // amount = 10;
  /* counter = 0;
  @ViewChild('user') UserComponent: any
  constructor(){
    afterRenderEffect(()=>{
      console.log("AfterRender",this.UserComponent.counter);
      
    })
    afterNextRender(()=>{
      console.log("AfterNextRender",this.UserComponent.counter);
      
    })
  }
  updatetCounter(){
    this.counter++;
  } */
  /* productData: {
    name: string;
    brand: string;
    price: string;
  }[] | undefined;
  constructor(private productService: Product) {

  }
  ngOnInit() {
    this.productData=this.productService.getProductData()
    console.log(this.productData);
    
  } */
  /* productList: any
  constructor(private productService: Product) {

  }
  ngOnInit() {
    this.productService.getProductList().subscribe((data:any)=>{
      console.log(data);
      this.productList=data.products
    })
  } */
  users: User[] = [];
  constructor(private userService: Users) {}
  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);
    });
  }

  addUser(user: User) {
    this.userService.saveUsers(user).subscribe((data: User) => {
      if (data) {
        this.getUser();
      }
    });
  }

  deleteUser(id: string) {
    this.userService.deleteUsers(id).subscribe((data: User) => {
      if (data) {
        this.getUser();
      }
    });
  }
}
