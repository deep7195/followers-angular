import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AppError } from '../Common/app-error';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyFollowersService {

  httpObj: HttpClient;
  url: string;
  constructor(_httpObj: HttpClient) {
    this.httpObj = _httpObj;
    this.url = 'https://api.github.com/users/mosh-hamedani/followers';
  }

  getFollowers() {
    return this.httpObj.get(this.url);
  }
}
