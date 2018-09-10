import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TacosListComponent } from './tacos-list.component';

const routes = [
  {
    path: 'tacos',
    children: [{ path: '', component: TacosListComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TacosListRoutingModule {}
