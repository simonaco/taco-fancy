import { Component, OnInit } from '@angular/core';
import { TacosService } from './tacos.service';
import { Taco } from './taco.model';
import { AppInsights } from 'applicationinsights-js';

@Component({
  selector: 'app-tacos-list',
  templateUrl: './tacos-list.component.html',
  styleUrls: ['./tacos-list.component.scss']
})
export class TacosListComponent implements OnInit {
  tacos: Taco[];
  constructor(private tacosService: TacosService) {}

  ngOnInit() {
    AppInsights.trackPageView('tacos');
    this.tacosService.getTacos().subscribe(tacos => (this.tacos = tacos));
  }
}
