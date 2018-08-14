import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConnectionPage } from '../connection/connection';
import { SubscribePage } from '../subscribe/subscribe';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users = [];

  constructor(
    public navCtrl: NavController,
     public _http: HttpClient
    ) {
  
    _http.get<any>('http://51.254.36.167:3030/api/members').subscribe(
        res => {
          this.users = res;
        },
        err => console.log('ERREUR', err)
    );

  }
  lienConnection() {
    this.navCtrl.push(ConnectionPage);
  }
  lienInscription() {
    this.navCtrl.push(SubscribePage);
  }
}
