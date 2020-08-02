import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  gameForm = new FormGroup({
    gameName: new FormControl('')
  });

  constructor() {

  }

  @Input() home: any;

  ngOnInit() {
  }
}
