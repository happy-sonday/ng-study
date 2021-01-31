import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { LangSelectorComponent } from './lang-selector/lang-selector.component';
import { I18nSupportService } from './i18n-support.service';
import { COMPOSITION_BUFFER_MODE, FormsModule } from '@angular/forms';
import { LangSelectorBtnPipe } from './lang-selector/lang-selector-btn.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeMsgComponent,
    LangSelectorComponent,
    LangSelectorBtnPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSnackBarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
   ],
  providers: [{provide:COMPOSITION_BUFFER_MODE,useValue:false},I18nSupportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
