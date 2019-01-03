import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

var firebaseconfig = {
  apiKey: "AIzaSyBKZVi9TO-fd1cWPMlaLRveQK_mDXoWiM4",
  authDomain: "buildingappwithangularfi-25861.firebaseapp.com",
  databaseURL: "https://buildingappwithangularfi-25861.firebaseio.com",
  projectId: "buildingappwithangularfi-25861",
  storageBucket: "buildingappwithangularfi-25861.appspot.com",
  messagingSenderId: "387785663622"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,AngularFireModule.initializeApp(firebaseconfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
