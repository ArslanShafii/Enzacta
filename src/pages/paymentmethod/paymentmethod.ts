import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PaymentPage} from "../payment/payment";

/**
 * Generated class for the PaymentmethodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-paymentmethod',
  templateUrl: 'paymentmethod.html',
})
export class PaymentmethodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentmethodPage');
  }
  public openpayment() {
    this.navCtrl.push(PaymentPage);
  }
}
