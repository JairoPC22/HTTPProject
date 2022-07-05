import { Component } from '@angular/core';
//import {HttpClient, HttpClientModule} from '@angular/common/http';

import {Observable} from 'rxjs';
import {NavController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  peliculas: Observable<any>;

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    this.peliculas = this.httpClient.get('https://swapi.co/api/films');
    this.peliculas
      .subscribe(data => {
        console.log('my data: ', data);
      });
  }
}
