import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
// app
import { AppComponent } from './app.component';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';

export let browserRefresh = false;

const appRoutes: Routes = [
  { path: 'a', component: PageAComponent },
  { path: 'b', component: PageBComponent },
  { path: '', redirectTo: '/a', pathMatch: 'full' },
];

const config: ExtraOptions = {
  useHash: false,
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, config),
  ],
  declarations: [AppComponent, PageAComponent, PageBComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
