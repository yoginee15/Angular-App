import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent } from './helloWorld.component';
import { CoursesComponent } from './courses/courses.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { ContatctFormComponent } from './contatct-form/contatct-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AddCardDetailsComponent } from './add-card-details/add-card-details.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    // path: 'posts/:id',
    path: 'posts/:id/:userId',
    component: PostDetailsComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
    data: { title: 'Post List' }
  },
  { 
    path: 'courses/:id',
     component: CourseDetailsComponent
   },
  { 
    path: 'courses',
     component: CoursesComponent
   },
   { 
    path: 'contact-us',
     component: ContatctFormComponent
   },
   { 
    path: 'bs-panel',
     component: BootstrapPanelComponent
   },
  //  { 
  //   path: 'favourite',
  //    component: FavouriteComponent
  //  },

   { 
    path: 'add-card',
     component: AddCardDetailsComponent
   },
   { 
    path: 'sign-up',
     component: SignupFormComponent
   },
  // { path: '',
  //   redirectTo: '/HomeComponent',
  // },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
