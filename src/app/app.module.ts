import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatNativeDateModule} from '@angular/material';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { QformComponent } from './qform/qform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeadsformFooterComponent } from './leadsform-footer/leadsform-footer.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QformComponent,
    LeadsformFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatCheckboxModule,MatRadioModule,MatButtonModule,MatDatepickerModule,MatNativeDateModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

