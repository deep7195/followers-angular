import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  test: number[] = [];
  isActive = false;
  constructor() { }
  // courseList:any[]=[{id:1,name:'Maths',marks:10},{id:2,name:'Science',marks:20},{id:3,name:'English',marks:30}];
  courses = [{id: 1, name: 'Test'}, {id: 2, name: 'test2'}];
  putObj = {id: 1, marks: null};
  viewMode = 'map';
  ngOnInit(): void {
  }
  SwitchActive() {
    this.isActive = !this.isActive;
  }
  AddCourse() {
    this.courses.push({id: 3, name: 'test2'});
  }
  OnRemove(course) {
   const index = this.courses.indexOf(course);
   this.courses.splice(index, 1);
  }
  OnChange(course) {
    course.name = 'Deepu';
  }
  CheckCourseExist(): boolean {
    if (this.test.length == 0) {
      return false;
    } else {
      return true;
    }
  }
  trackCourse(index, course) {
return course ? course.id : undefined;
  }
}

