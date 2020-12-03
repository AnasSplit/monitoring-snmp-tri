import { Injectable } from '@angular/core';
import httpClient from '../infrastructure/http-client';

@Injectable()
export class UserRepository {

  async random() {
    const resp = await fetch('https://snmp-server.herokuapp.com');
    const data = await resp.json();
    const { hello } = data;
    return hello;
  }
}
