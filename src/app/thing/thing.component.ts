import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../core/data.service';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css'],
  providers: [DataService],
})
export class ThingComponent implements OnInit {
  thing = {
    name: '',
    rank: '',
    average: '',
    usersRated: '',
    yearPublished: '',
    minPlayers: '',
    maxPlayers: '',
    minPlayTime: '',
    maxPlayTime: '',
    playingTime: '',
    minAge: '',
    picture: '',
    description: [''],
  };

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.dataService.getThing(id).subscribe((res) => {
      const xmlDoc = this.dataService
        .toXmlDoc(res)
        .getElementsByTagName('item')[0];
      this.thing = this.dataService.xmlToGame(xmlDoc);
    });
  }
}
