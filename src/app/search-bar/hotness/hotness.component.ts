import { Component, OnInit } from '@angular/core';

import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-hotness',
  templateUrl: './hotness.component.html',
  styleUrls: ['./hotness.component.css'],
  providers: [DataService],
})
export class HotnessComponent implements OnInit {
  hotnessList: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getHotness()
      .subscribe((hotness) => {
        const xmlDoc = this.dataService.toXmlDoc(hotness);
        const gamesArray = this.dataService.xmlToGameArray(xmlDoc);
        this.hotnessList = gamesArray;
      });
  }
}
