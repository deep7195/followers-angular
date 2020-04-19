import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError, Observable} from 'rxjs';
import { AppError } from '../Common/app-error';
import { NotFoundError } from '../Common/app-notFoundError';
import { BadRequestError } from '../Common/app-BadRequestError';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/todos/';
res;
  constructor(private httpClient: HttpClient) {

   }
   getPost() {

    return this.httpClient.get(this.url)
    .pipe(catchError(
    (error: Response) => {
     return throwError(new AppError(error));
   }
     ));
   }

   createPost(postObj) {
      return this.httpClient.post(this.url, JSON.stringify(postObj)).pipe(catchError(
        (error: Response) => {
          if (error.status === 400) {
            return Observable.throw(new AppError(error));
            // return throwError(new BadRequestError(error));
          }
          {
            return Observable.throw(new NotFoundError(error));
          }
      }
      ));
   }
    updatePost(input) {
    return this.httpClient.patch(this.url + input.id, JSON.stringify({completed: false})).pipe(catchError(
      (error: Response) => {
        return Observable.throw(new AppError(error));
      }
    ));
  }
   deletePost(input) {
  return  this.httpClient.delete(this.url + input).pipe(catchError(
    (error: Response) => {
      if (error.status === 404) { console.log('App error');
                                  return Observable.throw(new BadRequestError(error));
      } else {
        return throwError(new AppError(AppError));
      }

    }
  ));
}
}
