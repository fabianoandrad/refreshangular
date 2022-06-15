import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// app
import { browserRefresh } from '../app.component';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css'],
})
export class PageBComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('refreshed?:B', browserRefresh);
  }
}
