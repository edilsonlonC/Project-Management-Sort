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
import { UpdateResourcesComponent } from './components/resources/update-resources/update-resources.component';
import { UpdateActivitiesComponent } from './components/resources/update-activities/update-activities.component';
import { UpdateFunctionalitiesComponent } from './components/resources/update-functionalities/update-functionalities.component';
import { UpdateTasksComponent } from './components/resources/update-tasks/update-tasks.component';
import { CocomollComponent } from './components/cocomoll/cocomoll.component';
import { ConfiguracionComponent } from './components/cocomoll/configuracion/configuracion.component';

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
    UpdateProjectsComponent,
    UpdateResourcesComponent,
    UpdateActivitiesComponent,
    UpdateFunctionalitiesComponent,
    UpdateTasksComponent,
    CocomollComponent,
    ConfiguracionComponent
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
