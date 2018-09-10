import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TacosListRoutingModule } from './tacos-list-routing.module';
import { TacosListComponent } from './tacos-list.component';

@NgModule({
  imports: [CommonModule, TacosListRoutingModule],
  declarations: [TacosListComponent]
})
export class TacosListModule {}
