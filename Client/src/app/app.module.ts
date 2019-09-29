import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { RegisterProjectComponent } from './components/projects/register-project/register-project.component';
import { RegisterResourcesComponent } from './components/resources/register-resources/register-resources.component';
import { RegisterUsersComponent } from './components/users/register-users/register-users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateUsersComponent } from './components/users/update-users/update-users.component';
import { UpdateProjectsComponent } from './components/projects/update-projects/update-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    ProjectsComponent,
    ResourcesComponent,
    RegisterProjectComponent,
    RegisterResourcesComponent,
    RegisterUsersComponent,
    ProfileComponent,
    UpdateUsersComponent,
    UpdateProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
