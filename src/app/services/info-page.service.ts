import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  loaded = false;
  profile: any[] = [];

  constructor(private http: HttpClient) {

    this.loadInfo();
    this.loadProfile();

  }

  private loadInfo(): void {
    this.http.get('./assets/data/data.page.json')
      .subscribe((resp: InfoPage) => {
        this.loaded = true;
        this.info = resp;
      });
  }

  private loadProfile(): void {
    this.http.get('./assets/data/data-profile.json')
      .subscribe((resp: any[]) => {
        this.profile = resp;
      });
  }
}
