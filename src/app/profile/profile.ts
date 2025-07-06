import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  username:string|null = ""; 
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    // Info: Method 1
    /* this.username = this.route.snapshot.paramMap.get('name');
    console.log(this.username); */
    
    // Info: Method 2
    /* this.route.queryParams.subscribe(params=>{
      this.username = params['name'];
      
      }) */
   // Info: Method 3
   /* this.route.data.subscribe(data=>{
    this.username=data['name'];
   }) */
  }
}
