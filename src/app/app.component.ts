import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

export let browserRefresh = false;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  name = 'Angular 6';
  subscription: Subscription;

  constructor(private router: Router) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        //browserRefresh = !router.navigated;
        console.log('app' + browserRefresh);
        router.routeReuseStrategy.shouldReuseRoute = () => false;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
