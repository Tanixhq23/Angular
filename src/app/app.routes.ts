import { Routes } from '@angular/router';
import { About } from './about/about';
import { Login } from './login/login';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';
// import { User } from './user1/user';
import { Admin } from './admin/admin';

export const routes: Routes = [
  /* { path: 'about', component: About },
  { path: 'login', component: Login },
  { path: 'contact', component: Contact },
  { path: '', component: Home },
  { path: 'profile', component: Profile , data: {name:'Tanishq Lokhande'} },
  { path: 'user/:id/:name', component: User},
  { path: '**', component: PageNotFound }, */
  //  {path: 'admin', component: Admin},
  //  {path: 'admin', loadComponent:()=>{import('./admin/admin')}}.then((c)=>c.Admin)
];
