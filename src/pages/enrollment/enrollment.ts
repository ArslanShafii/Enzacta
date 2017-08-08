import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PersonalPage} from "../personal/personal";

/**
 * Generated class for the EnrollmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-enrollment',
  templateUrl: 'enrollment.html',
})
export class EnrollmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnrollmentPage');
  }
  public openperson() {
    this.navCtrl.push(PersonalPage);
  }
}
