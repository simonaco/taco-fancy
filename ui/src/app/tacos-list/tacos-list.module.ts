import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';

import { TacosListRoutingModule } from './tacos-list-routing.module';
import { TacosListComponent } from './tacos-list.component';

@NgModule({
  imports: [
    CommonModule,
    TacosListRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule
  ],
  declarations: [TacosListComponent]
})
export class TacosListModule {}
