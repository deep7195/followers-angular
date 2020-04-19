import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, AbstractControl , FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group(
      {
        name: ['', Validators.required],
        contact: formBuilder.group(
          {
            email: [],
            phone: []
          },
        )
      }

    );
   }

  form = new FormGroup(
    {
      topics: new FormArray([])


    }
  );
  get Topics() {
    return (this.form.get('topics') as FormArray).controls;
  }

  ngOnInit(): void {
  }
 AddCourse(topic: HTMLInputElement) {
   console.log('test');
   this.Topics.push(new FormControl(topic.value));
   topic.value = '';
 }
 RemoveTopic(topic: FormControl) {   console.log('testing');
                                     const index = this.Topics.indexOf(topic.value);
                                     console.log(index);
                                     this.Topics.splice(index);


 }
}
