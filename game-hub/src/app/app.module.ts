import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { HeaderComponent } from './header/header.component';
import { QuizGameModule } from './quiz-game/quiz-game.module';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AngularFireModule } from '@angular/fire/compat';
import { UsersListComponent } from './scoreboard/users-list/users-list.component';
import { UserRecordsComponent } from './scoreboard/user-records/user-records.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ScoreboardComponent,
    ProfileComponent,
    UsersListComponent,
    UserRecordsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    HttpClientModule,
    QuizGameModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
