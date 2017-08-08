import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PaymentdetailsPage} from "../paymentdetails/paymentdetails";

/**
 * Generated class for the ShippingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-shipping',
  templateUrl: 'shipping.html',
})
export class ShippingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShippingPage');
  }
  public openpayments() {
    this.navCtrl.push(PaymentdetailsPage);
  }
}
