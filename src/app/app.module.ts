import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { SummaryPipe } from './summary.pipe';
import { PostService } from './services/post.service';
// import { RouterModule, Routes } from '@angular/router';

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

// const appRoutes : Routes =[
//   {
//     path: '',
//     component: HomeComponent,
//   },
//   {
//     // path: 'posts/:id',
//     path: 'posts/:id/:userId',
//     component: PostDetailsComponent,
//   },
//   {
//     path: 'posts',
//     component: PostsComponent,
//     data: { title: 'Post List' }
//   },
//   { 
//     path: 'courses',
//      component: CoursesComponent
//    },
//    { 
//     path: 'contact-us',
//      component: ContatctFormComponent
//    },
//    { 
//     path: 'bs-panel',
//      component: BootstrapPanelComponent
//    },
//    { 
//     path: 'favourite',
//      component: FavouriteComponent
//    },
//    { 
//     path: 'sign-up',
//      component: SignupFormComponent
//    },
//   // { path: '',
//   //   redirectTo: '/HomeComponent',
//   // },
//   { path: '**', component: NotFoundComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CoursesComponent,
    FavouriteComponent,
    BootstrapPanelComponent,
    SummaryPipe,
    ContatctFormComponent,
    SignupFormComponent,
    AddCardDetailsComponent,
    PostsComponent,
    PostDetailsComponent,
    NotFoundComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule.forRoot(appRoutes)
  //   RouterModule.forRoot([
  //     {
  //       path: '',
  //       component: HomeComponent,
  //     },
  //     {
  //       path: 'posts',
  //       component: PostsComponent,
  //       data: { title: 'Post List' }
  //     },
  //     { 
  //       path: 'posts/:id',
  //        component: PostDetailsComponent
  //      },
  //     // { path: '',
  //     //   redirectTo: '/HomeComponent',
  //     // },
  //     { path: '**', component: NotFoundComponent }
  //   ])
   ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
