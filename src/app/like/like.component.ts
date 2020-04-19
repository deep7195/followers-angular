import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('likeChange') likeChange: boolean;
  @Input('likeCount') likeCount: number;


  constructor() { }

  ngOnInit(): void {
  }

  OnButtonClick() {
    this.likeCount++;
    this.likeChange = !this.likeChange;
  }

}
