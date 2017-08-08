import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Customers1Page} from "../customers1/customers1";

/**
 * Generated class for the CustomersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-customers',
  templateUrl: 'customers.html',
})
export class CustomersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomersPage');
  }
  public openperson() {
    this.navCtrl.push(Customers1Page);
  }
}
