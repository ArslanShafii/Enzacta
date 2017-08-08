import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {EnrollmentPage} from "../pages/enrollment/enrollment";
import {PersonalPage} from "../pages/personal/personal";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {PaymentPage} from "../pages/payment/payment";
import {CustomersPage} from "../pages/customers/customers";
import {Customers1Page} from "../pages/customers1/customers1";
import {ProductPage} from "../pages/product/product";
import {AutoshipPage} from "../pages/autoship/autoship";
import {AddPage} from "../pages/add/add";
import {ShippingPage} from "../pages/shipping/shipping";
import {PaymentdetailsPage} from "../pages/paymentdetails/paymentdetails";
import {PaymentmethodPage} from "../pages/paymentmethod/paymentmethod";
import {DetailsPage} from "../pages/details/details";
import {TreePlacementPage} from "../pages/tree-placement/tree-placement";
import {CardPage} from "../pages/card/card";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EnrollmentPage,
    PersonalPage,
    LoginPage,
    PaymentPage,
    CustomersPage,
    Customers1Page,
    ProductPage,
    AutoshipPage,
    AddPage,
    ShippingPage,
    PaymentdetailsPage,
    PaymentmethodPage,
    DetailsPage,
    TreePlacementPage,
    CardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    EnrollmentPage,
    PersonalPage,
    PaymentPage,
    CustomersPage,
    Customers1Page,
    ProductPage,
    AutoshipPage,
    AddPage,
    ShippingPage,
    PaymentdetailsPage,
    PaymentmethodPage,

    DetailsPage,
    TreePlacementPage,
    CardPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
