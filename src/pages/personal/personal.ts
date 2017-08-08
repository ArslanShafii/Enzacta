import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProductPage} from "../product/product";
import {TreePlacementPage} from "../tree-placement/tree-placement";

/**
 * Generated class for the PersonalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
  }
  openproduct(){
    this.navCtrl.push(ProductPage);
  }

  opentree(){
    this.navCtrl.push(TreePlacementPage);



  }
}
