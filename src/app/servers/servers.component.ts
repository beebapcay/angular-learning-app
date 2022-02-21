import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';
  created: boolean = false;
  name: string = '';
  servers: string[] = ['Testserver 1', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  getAllowNewServer(): boolean {
    return this.allowNewServer;
  }

  onCreateServer(): void {
    this.created = true;
    this.servers.push(this.name);
    this.serverCreationStatus = `Server was created! Name is ${this.name}`;
  }

  ngOnInit(): void {}
}
