import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RolGuard } from './guards/rol.guard';
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
import { CocomollComponent } from './components/cocomoll/cocomoll.component';
import { ConfiguracionComponent } from './components/cocomoll/configuracion/configuracion.component';


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
      { path: 'users-update', component: UpdateUsersComponent, canActivate: [RolGuard]},
      { path: 'projects-update', component: UpdateProjectsComponent, canActivate: [RolGuard]},
      { path: 'resources-update', component: UpdateResourcesComponent, canActivate: [RolGuard]},
      { path: 'activities-update', component: UpdateActivitiesComponent, canActivate: [RolGuard]},
      { path: 'functionalities-update', component: UpdateFunctionalitiesComponent, canActivate: [RolGuard]},
      { path: 'tasks-update', component: UpdateTasksComponent, canActivate: [RolGuard]},
      { path: 'cocomoll', component: CocomollComponent, children: [
        { path: '', component: ConfiguracionComponent }
      ]}
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
