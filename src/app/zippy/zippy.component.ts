import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent  {
 @Input('shipping') shipping: string;
 @Input('billing') billing: string;
isExpanded;
change() {
  this.isExpanded = !this.isExpanded;
}
}
