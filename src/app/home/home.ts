import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // constructor(private router: Router) {}
  /* goToProfile() {
    this.router.navigate(['profile'],{queryParams:{name:'Tanishq Lokhande'}});
  } */
  /* users = [
    {
      id: 1,
      name: 'Tanishq',
      age: 28,
      emialid: 'tansihq@gmail.com'
    },
    {
      id: 2,
      name: 'Amit',
      age: 28,
      emialid: 'amit@gmail.com'
    },
    {
      id: 3,
      name: 'Tanveer',
      age: 28,
      emialid: 'tanveer@gmail.com'
    },
    {
      id: 4,
      name: 'Aamir',
      age: 28,
      emialid: 'aamir@gmail.com'
    }
  ] */

}
