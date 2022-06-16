import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Shopping';
  public itemList = [];
  public item: string;
  addItem(listOfItems) {
    this.itemList = listOfItems;
  }
  onDeleteButton(item) {
    const index = this.itemList.indexOf(item, 0);
    this.itemList.splice(index, 1);
  }
}
