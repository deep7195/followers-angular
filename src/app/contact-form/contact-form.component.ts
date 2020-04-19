import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }
contactDetails = [{id: 1 , name: 'email'}, {id: 2 , name: 'phone'}];

  ngOnInit(): void {
  }

  submit(form) {
console.log(form);
  }
 // Submit(f)
 // {
 //  console.log(f);
  // console.log(f.value.firstName);

 // }

 // log(value)
//  {
 //   console.log(value);

 // }
}
