import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { AppInsights } from 'applicationinsights-js';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public router: Router) {}

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

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          AppInsights.trackPageView('home');
        } else {
          AppInsights.trackPageView(event.url.substring(1));
        }
      }
    });
  }
}
