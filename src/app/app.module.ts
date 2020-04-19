
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule, Component } from '@angular/core';
import {  HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import {CoursesService} from './courses.service';
import {SummaryPipe} from './summary.pipe';
import { AuthorsComponent } from './authors.component';
import {AuthorsService} from './authors.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { CaseCorrect } from './favorite/casecorrect.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {SignupFormComponent} from './signup-form/Signup-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './Services/post.service';
import { ZippyComponent } from './zippy/zippy.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MyFollowersComponent } from './my-followers/my-followers.component';
import { MyFollowersService } from './Services/my-followers.service';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

// import { HttpClientModule, Http, BaseRequestOptions } from '@angular/common/http';
import { HttpClientModule, HttpClient, HttpRequest } from '@angular/common/http';

import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { GitHubProfileComponent } from './git-hub-profile/git-hub-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    SummaryPipe,
    AuthorsComponent,
    FavoriteComponent,
    CaseCorrect,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseComponent,
    PostsComponent,
    ZippyComponent,
    CourseFormComponent,
    ChangePasswordComponent,
    MyFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GitHubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot(
     [
       {
         path: '',
         component: HomeComponent
       },
       {
         path: 'followers/:id/:username',
         component: GitHubProfileComponent

       },
       {
         path: 'followers',
         component: MyFollowersComponent
       },
       {
         path: 'posts',
         component: PostsComponent
       },
       {
         path: '**',
         component: NotFoundComponent
       }
     ]
    )
  ],
  // providers: [CoursesService,AuthorsService , PostService,MyFollowersService,
  //   fakeBackendProvider,
  //   { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  //   { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
