import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PaymentmethodPage} from "../paymentmethod/paymentmethod";

/**
 * Generated class for the PaymentdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-paymentdetails',
  templateUrl: 'paymentdetails.html',
})
export class PaymentdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentdetailsPage');
  }
  public paymentmethod() {
    this.navCtrl.push(PaymentmethodPage);
  }

}
