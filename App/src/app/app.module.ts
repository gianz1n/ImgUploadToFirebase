import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';

import { FormBuilder } from '@angular/forms'
import { TrustHTMLPipe } from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [AppComponent, TrustHTMLPipe],
  entryComponents: [],
  
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()), 
    provideStorage(() => getStorage()),],
  providers: [FormBuilder, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
