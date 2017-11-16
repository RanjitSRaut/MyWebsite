import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyworkComponent } from './mywork/mywork.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ContactmeComponent } from './contactme/contactme.component';
import {ScrollToModule} from 'ng2-scroll-to';
import { WorktabComponent } from './worktab/worktab.component';



// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
import { ModalGalleryModule } from 'angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// **************************************************************************

//Contact US Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ControlMessagesComponent } from './contactme/control-messages';

import { ValidationService } from './contactme/validation.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutmeComponent,
    MyworkComponent,
    MyprofileComponent,
    ContactmeComponent,
    WorktabComponent,
    ControlMessagesComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot()  ,
    ModalGalleryModule.forRoot(), // <--  --- angular-modal-gallery module import
    ReactiveFormsModule,
    
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule {  
}
