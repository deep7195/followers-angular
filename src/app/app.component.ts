import { Component } from '@angular/core';
import { FavoriteChangeEvent } from './favoriteChangeEvent.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shipping = 'ShippingDetails';
  billing = 'BillingDetails';
  isActive = false;
  text: string;
  tweet = {
    likeChange: true, likeCount: 5
  };

  OnFavoriteChange(eventArgs: FavoriteChangeEvent) {
    console.log('testing' + eventArgs.isChangeValue);
    this.text = 'Change occured in favorite' + eventArgs.isChangeValue;
  }
}
