import { Component } from '@angular/core';
import {AuthorsService} from './authors.service';

@Component({
    selector: 'authors',
    template: `
<h3>This are Author names  </h3>
    <input [(ngModel)]="value" (click)="OnClick()" placeholder="test"/>
   {{value}}<br/>
            <ul>
            <li *ngFor="let aut of Authors">
                    {{aut}}
           </li>
            </ul>



    `
})

export class AuthorsComponent {
    private authors: string[];
    public value = 'test';
    constructor(authorsService: AuthorsService) {
        this.authors = authorsService.GetAuthors();
        // this.authors=['deepu','deeku','subha','vikram']
    }
    public OnClick() {
        console.log('test');
    }
    get Authors(): string[] {
        return this.authors;
    }
    // set Authors(value:string)
    // {
   //     this.authors.push(value);
   // }

}
