import { Component, OnInit, Input , Output, EventEmitter , ViewEncapsulation} from '@angular/core';
import { FavoriteChangeEvent} from '../FavoriteChangeEvent.interface';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('isActive') isSelected = false;
  title: string;
  @Output('change') click = new EventEmitter();
  constructor() { }



  MakeChange() {
    this.isSelected = !this.isSelected;
    const eventArgs = new FavoriteChangeEvent;
    eventArgs.isChangeValue = this.isSelected;
    this.click.emit(eventArgs);
  }




  ngOnInit(): void {
  }

}
