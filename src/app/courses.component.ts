import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component(
    {
        selector: 'test1',
        template:
        `
        {{pipe.title | uppercase|lowercase}} <br/>
        {{pipe.rating | number}} <br/>
        {{pipe.students | number:'2.2-2'}} <br/>
       {{pipe.price| currency :'AUD':true}}<br/>
       {{pipe.releaseDate| date :'shortDate'}}<br/>
       {{text|summary:10}}<br/>
{{text}}

       <ul>
            <li *ngFor="let course of courses">
                  {{ course }}
            </li>
       </ul>
       <table>
       <tr>
       <td [attr.colspan]="colSpan">
       </td>
       </tr>
       </table>

<div (click)="OnDivClick($event)">
<button class="btn btn-primary" [class.IsActive]="active" [style.backgroundColor]="active ? 'red' : 'white'"
(click)="OnClick($event)">Save</button>
       <img [src]="Image"/>
       <input [(ngModel)]="email" (keyup.enter)="OnEnter()"/>
       <div>{{email}}</div>
       </div>`
    }
)

export class CoursesComponent {
 // title:string;
 text = 'We need a summary for this this is a summary of India. Independence day 15 august';
pipe = {
    title: 'Testing upper case lowe case',
    rating: 4.21312,
    students: 21241,
    price: 190.65,
    releaseDate: new Date(2016, 3, 1)
};


 courses;
 colSpan = 2;
 active = true;

 email = 'deep7195@gmail.com';
 private image: string;
    constructor(courseService: CoursesService) {

        this.courses = courseService.getCourse();
        this.Image = courseService.getImageUrl();

    }
    public OnEnter() {
        console.log('On enter pres ' + this.email );
    }
    public get Image(): string {
        return this.image;
    }
    public set Image(value: string) {
        this.image = value;
    }

public OnClick($event): void {
    $event.stopPropagation();
    console.log('Button clicked', $event);
}
public OnDivClick($event) {

console.log('testing div');
}
  //  constructor()
   // {
    //    this.title="this is coming from class Courses";
  //  }
  //  get()
  //  {
        // this.courseList.push("English");
        // this.courseList.push("Maths");
 //       return this.courseList;
 //   }
}
