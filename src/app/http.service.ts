import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBrew } from './interfaces/Brew';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  getBeer() {
    return this.http.get<IBrew[]>('https://api.openbrewerydb.org/breweries')
  }
}
