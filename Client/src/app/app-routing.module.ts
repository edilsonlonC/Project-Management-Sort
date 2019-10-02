import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterProjectComponent } from './components/projects/register-project/register-project.component';
import { RegisterResourcesComponent } from './components/resources/register-resources/register-resources.component';
import { RegisterUsersComponent } from './components/users/register-users/register-users.component';
import { UpdateUsersComponent } from './components/users/update-users/update-users.component';
import { UpdateProjectsComponent } from './components/projects/update-projects/update-projects.component';
import { UpdateResourcesComponent } from './components/resources/update-resources/update-resources.component';
import { UpdateActivitiesComponent } from './components/resources/update-activities/update-activities.component';
import { UpdateFunctionalitiesComponent } from './components/resources/update-functionalities/update-functionalities.component';
import { UpdateTasksComponent } from './components/resources/update-tasks/update-tasks.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] , children: [
      { path: 'users', component: UsersComponent, children: [
        { path: '', component: RegisterUsersComponent }
        ]
      },
      { path: 'projects', component: ProjectsComponent, children: [
          { path: '', component: RegisterProjectComponent }
        ]
      },
      { path: 'resources', component: ResourcesComponent, children: [
          { path: '', component: RegisterResourcesComponent }
        ]
      },
      { path: '', component: ProfileComponent },
      { path: 'users-update', component: UpdateUsersComponent},
      { path: 'projects-update', component: UpdateProjectsComponent},
      { path: 'resources-update', component: UpdateResourcesComponent},
      { path: 'activities-update', component: UpdateActivitiesComponent},
      { path: 'functionalities-update', component: UpdateFunctionalitiesComponent},
      { path: 'tasks-update', component: UpdateTasksComponent}
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
