import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotnessComponent } from './hotness/hotness.component';

const routes: Routes = [
  { path: '', outlet: 'hotOutlet', component: HotnessComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SearchBarRoutingModule {}
