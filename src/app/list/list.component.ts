import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  listOfItems = [];

  @Output() addListEvent = new EventEmitter<any>();

  addItem(value: string) {
    this.listOfItems.push(value);
  }
  onAddItems() {
    this.addListEvent.emit(this.listOfItems);
  }
}
