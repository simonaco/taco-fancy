import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { TacosListRoutingModule } from './tacos-list-routing.module';
import { TacosListComponent } from './tacos-list.component';
import { TacoDetailComponent } from './taco-detail/taco-detail.component';
import { TacoFormComponent } from './taco-form/taco-form.component';

@NgModule({
  imports: [
    CommonModule,
    TacosListRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ],
  declarations: [TacosListComponent, TacoDetailComponent, TacoFormComponent]
})
export class TacosListModule {}
