import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThingComponent } from './thing.component';
import { ThingRoutingModule } from './thing-routing.module';

@NgModule({
  imports: [CommonModule, ThingRoutingModule],
  declarations: [ThingComponent],
  exports: [ThingComponent],
})
export class ThingModule {}
