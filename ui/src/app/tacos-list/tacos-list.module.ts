import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TacosListRoutingModule } from './tacos-list-routing.module';
import { TacosListComponent } from './tacos-list.component';

@NgModule({
  imports: [CommonModule, TacosListRoutingModule, HttpClientModule],
  declarations: [TacosListComponent]
})
export class TacosListModule {}
