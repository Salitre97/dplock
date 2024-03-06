import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/dashboard', icon: 'mail' },
    { title: 'DPAccess', url: '/folder/dpaccess', icon: 'paper-plane' },

  ];
  constructor() {}
}
