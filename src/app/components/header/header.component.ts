import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public productRoute = "products";
  public aboutRoute = "about";
  constructor() { }

  ngOnInit(): void {
  }

}
