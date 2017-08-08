import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DetailsPage} from "../details/details";
import {CardPage} from "../card/card";

/**
 * Generated class for the PaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  public opencarddetails() {
    this.navCtrl.push(DetailsPage);
  }
}
