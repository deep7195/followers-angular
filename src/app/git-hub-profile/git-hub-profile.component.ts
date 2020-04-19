import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-git-hub-profile',
  templateUrl: './git-hub-profile.component.html',
  styleUrls: ['./git-hub-profile.component.css']
})
export class GitHubProfileComponent implements OnInit {
  profileId: number;
  constructor(private routeObj: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {



    console.log(this.routeObj.snapshot.paramMap.get('id'));
    this.routeObj.paramMap.
    subscribe(param => {
        this.profileId = +param.get('id');
      });
  }
  submit() {
    this.route.navigate(['/followers'], {
      queryParams: { page: 2 , order: 'newest'}
    });
  }

}
