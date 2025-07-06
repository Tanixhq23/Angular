import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink, RouterOutlet],
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
}
