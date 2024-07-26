import { Component, EventEmitter, OnInit, Output } from '@angular/core';


export interface Filter{
  searchTerm: string ;
  category: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  ngOnInit(): void {
  }
  searchTerm: string = '';
  category: string='';

  @Output() filterChange = new EventEmitter<Filter>();

  applyFilter():void {
    this.filterChange.emit({
      searchTerm: this.searchTerm,
      category:this.category
    });
  }
}