import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  home = false;

  constructor() {
  }

  ngOnInit() {
    this.home = false;
  }

  onActivate(event: any) {
    this.home = true;
  }

  onDeactivate(event: any) {
    this.home = false;
  }
}
