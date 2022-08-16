import { Component, OnInit } from '@angular/core';
import {Event} from "@angular/router";

@Component({
  selector: '.app-servers',
  // template:
  //
  //   `<app-server></app-server>
  //    <app-server></app-server>`,

  templateUrl:'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'No server was created!';
  serverName='Kz';
  serverCreated = false;
  servers = ['testserver', 'testserver 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    },2000);
  }

  ngOnInit(): void {
  }

      onCreateServer(){
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = 'Server was crreate! Name is ' + this.serverName;
    }

  onUpdateServerName($event: Event){
      this.serverName = (<HTMLInputElement>event.target).value;
    }
  }

