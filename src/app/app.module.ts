import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserDatasService } from './user-datas.service';
import { CompaniesService } from './companies.service';
import { MyprofileService } from './myprofile.service';
import { CiUsersComponent } from './ci-users/ci-users.component';
import { HeadercompComponent } from './headercomp/headercomp.component';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FooterComponent } from './footer/footer.component';
import { CompaniesComponent } from './companies/companies.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { SlidertestComponent } from './slidertest/slidertest.component';


@NgModule({
  declarations: [
    AppComponent,		
    CiUsersComponent, HeadercompComponent, MyprofileComponent, LoginformComponent, CompaniesComponent, HomeComponentComponent, FooterComponent, CompaniesComponent, MyprofileComponent, CompanydetailsComponent, SlidertestComponent
  ],
  imports: [
  BrowserModule,
	ReactiveFormsModule,
  HttpModule,
  RouterModule.forRoot([
    {
      path: 'login',
      component: LoginformComponent,
    },
    {
      path: 'home',
      component: HomeComponentComponent

    },
    {
      path: 'companies',
      component: CompaniesComponent
    },
    {
      path: 'myprofile',
      component: MyprofileComponent
    } 
    ,
    {
      path: 'slider',
      component: SlidertestComponent
    } 
  ])  
  ],
  providers: [UserDatasService, CompaniesService, MyprofileService],
  bootstrap: [AppComponent]
})

export class AppModule { }
