import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { AppError } from '../Common/app-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
email;
url: string;

constructor(private postService: PostService) {
}
ngOnInit() {
  this.postService.getPost()
  .subscribe(response => {
    this.posts = response as any[];
  }, error => {
    const alertMessage = 'An unexpected error occured get';
    alert(alertMessage);
    console.log(alertMessage);
  }
  );
}

CreatePosts(input: HTMLInputElement) {
  const postObj = {title: input.value};
  console.log(postObj.title);
  this.postService.createPost(postObj)
  .subscribe(
    response => {
    postObj.id = response.id;
    console.log(response);
    this.posts.splice(0, 0, postObj);
    },
    (error: AppError) => {
      if (error instanceof AppError) {
        alert('This requeest has bad data');
      } else {
      const alertMsg = 'An unexpected error occured create';
      alert(alertMsg);
      console.log(alertMsg);
      }
    }    );
}
UpdatePost(input) {
  console.log(input.title);
  this.postService.updatePost(input)
  .subscribe(
    response => {
      console.log(response);
    },
    error => {
        const alertMsg = 'an unexpected error occured update';
        alert(alertMsg);
        console.log(alertMsg);
    });

}
DeletePost(input) {
  input.id = 23213;
  console.log(input.title);
  this.postService.deletePost(21344324)
  .subscribe(
    response => {
      console.log(response);
    },
    (error: AppError) => {
      if (error instanceof AppError) {
        alert('this post is already deleted');
      } else {
      const errorMsg = 'An unexpected error occured delete';
      alert(errorMsg);
      console.log(errorMsg);
      }
    });
  const index = this.posts.indexOf(input);
  this.posts.splice(index, 1);
}
}
