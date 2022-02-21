import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  static STATUS: string[] = ['online', 'offline'];

  id: number = 127001;
  status: string = 'offline';

  constructor() {
    this.status = ServerComponent.STATUS[Math.round(Math.random())];
  }

  getStatus() {
    return this.status;
  }

  getColor() {
    return this.status === 'online' ? 'green' : 'red';
  }
}
