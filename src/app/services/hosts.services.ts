import { Ihosts } from './hosts';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class HostService {
  private _url: string = '/assets/data/hosts.json';

  constructor(private http: HttpClient) {}
  getHosts() {
    return this.http.get<Ihosts[]>(this._url);
  }
}
