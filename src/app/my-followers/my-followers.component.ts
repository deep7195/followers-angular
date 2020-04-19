import { Component, OnInit } from '@angular/core';
import { MyFollowersService } from '../Services/my-followers.service';
import { ActivatedRoute } from '@angular/router';
import {combineLatest} from 'rxjs';
import {switchMap} from 'rxjs/operators';


@Component({
  selector: 'my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.css']
})
export class MyFollowersComponent implements OnInit {

  serviceObj: MyFollowersService;
  myFollowers: any[];
  constructor(private activeRouterObj: ActivatedRoute, myFollowerServiceObj: MyFollowersService) {
    this.serviceObj = myFollowerServiceObj;
  }

  ngOnInit(): void {


    combineLatest(
      [this.activeRouterObj.paramMap, this.activeRouterObj.queryParamMap]
    ).
    pipe(switchMap
    (combine => {
        console.log(combine[0].get('id'));
        console.log(combine[1].get('page'));
        return this.serviceObj.getFollowers();
      })).subscribe(followObj => this.myFollowers = followObj as  any[]);

    // this.serviceObj.getFollowers().subscribe(x=>this.myFollowers=x as any[]) ;
  }


}
