import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent  {
  courseValues;
  categoryList = [
    {  name: 'Angular', value: 1    },
    {name: 'MVC', value: 2},
    {name: 'SQL', value: 3}
  ];
  onCreate(courseform) {
    console.log(courseform);
  }

}
