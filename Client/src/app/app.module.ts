import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResourcesComponent } from './components/resources/resources.component';
<<<<<<< HEAD
import { RegisterProjectComponent } from './components/projects/register-project/register-project.component';
import { RegisterResourcesComponent } from './components/resources/register-resources/register-resources.component';
=======
>>>>>>> 4ccf56664803f4248c927463513aec1f5c2fe19b


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    ProjectsComponent,
<<<<<<< HEAD
    ResourcesComponent,
    RegisterProjectComponent,
    RegisterResourcesComponent
=======
    ResourcesComponent
>>>>>>> 4ccf56664803f4248c927463513aec1f5c2fe19b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
