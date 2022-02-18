import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';
  name: string = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  getAllowNewServer(): boolean {
    return this.allowNewServer;
  }

  onCreateServer(): void {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event): void {
    this.name = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {}
}
