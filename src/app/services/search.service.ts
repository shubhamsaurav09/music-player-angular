import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private url = 'https://saavn.me/modules?language=hindi,english';
  constructor(private client: HttpClient) {}

  getHomeData(){
    return this.client.get(this.url);
  }
}
