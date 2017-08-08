import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AddPage} from "../add/add";

/**
 * Generated class for the AutoshipPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-autoship',
  templateUrl: 'autoship.html',
})
export class AutoshipPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutoshipPage');
  }
  public openadd() {
    this.navCtrl.push(AddPage);
  }
}
