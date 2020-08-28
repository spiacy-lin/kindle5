import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './home.component';
import {NotFoundComponent} from './notfound.component';
import {GitHubComponent} from './github.component';
import {HelpComponent} from './help.component';
import {GitHubUserComponent} from './githubuser.component';
import {LoginService} from './login.service';
import {AuthGuard} from './auth-guard.service';
import {LoginComponent} from './login.component';
import {routing} from './app.routing'
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, NotFoundComponent, GitHubComponent, HelpComponent, 
    GitHubUserComponent, LoginComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule,
    AppRoutingModule, routing
  ],
  providers: [LoginService, AuthGuard, PreventUnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
