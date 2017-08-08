import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DetailsPage} from "../details/details";

/**
 * Generated class for the CardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
  }

}
