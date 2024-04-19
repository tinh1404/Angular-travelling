import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"fir-angular-2174c","appId":"1:865665924237:web:f93f80c04d357c81fa36c4","storageBucket":"fir-angular-2174c.appspot.com","apiKey":"AIzaSyDyLwqX9B_I6t2nWZ-CzjEBJNaOr3g0NMU","authDomain":"fir-angular-2174c.firebaseapp.com","messagingSenderId":"865665924237"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"fir-angular-2174c","appId":"1:865665924237:web:f93f80c04d357c81fa36c4","storageBucket":"fir-angular-2174c.appspot.com","apiKey":"AIzaSyDyLwqX9B_I6t2nWZ-CzjEBJNaOr3g0NMU","authDomain":"fir-angular-2174c.firebaseapp.com","messagingSenderId":"865665924237"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"fir-angular-2174c","appId":"1:865665924237:web:f93f80c04d357c81fa36c4","storageBucket":"fir-angular-2174c.appspot.com","apiKey":"AIzaSyDyLwqX9B_I6t2nWZ-CzjEBJNaOr3g0NMU","authDomain":"fir-angular-2174c.firebaseapp.com","messagingSenderId":"865665924237"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
