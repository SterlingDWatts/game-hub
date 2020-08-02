import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchBarRoutingModule } from './search-bar-routing.module';
import { SearchBarComponent } from './search-bar.component';
import { HotnessComponent } from './hotness/hotness.component';
import { GameFormComponent } from './game-form/game-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SearchBarRoutingModule],
  declarations: [SearchBarComponent, HotnessComponent, GameFormComponent],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
