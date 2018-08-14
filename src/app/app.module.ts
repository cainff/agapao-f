import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ForumPage } from '../pages/forum/forum';
import { ConnectionPage } from '../pages/connection/connection';
import { SubscribePage } from '../pages/subscribe/subscribe';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { GaleriePage } from '../pages/galerie/galerie';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ForumPage,
    GaleriePage,
    ConnectionPage,
    SubscribePage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ForumPage,
    GaleriePage,
    ConnectionPage,
    SubscribePage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
