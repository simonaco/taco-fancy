import { Component, OnInit } from '@angular/core';
import { Nav } from './nav.model';
import { AppInsights } from 'applicationinsights-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;

  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/tacos',
      name: 'Tacos',
      exact: false
    }
  ];

  constructor() {
    this.title = 'Taco Fancy 🌮';
  }

  ngOnInit() {
    AppInsights.downloadAndSetup({
      instrumentationKey: '2c847176-e1b4-4b63-b2c5-996753f5410b',
      enableCorsCorrelation: true
    });
    AppInsights.queue.push(() => {
      AppInsights.context.addTelemetryInitializer(envelope => {
        envelope.tags['ai.cloud.role'] = 'UI';
      });
    });
  }
}
