import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ShippingPage} from "../shipping/shipping";

/**
 * Generated class for the AddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
  public shipping() {
    this.navCtrl.push(ShippingPage);
  }
}
