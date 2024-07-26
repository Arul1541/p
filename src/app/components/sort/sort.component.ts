import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() sortChanged = new EventEmitter<string>();

  onSortChange(event: Event):void {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;
    this.sortChanged.emit(value);
  }

}
