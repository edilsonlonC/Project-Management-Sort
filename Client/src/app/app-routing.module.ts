import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { RegisterProjectComponent } from './components/projects/register-project/register-project.component';
import { RegisterResourcesComponent } from './components/resources/register-resources/register-resources.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, children: [
      { path: 'users', component: UsersComponent, children: [
        { path: '', component: RegisterComponent }
        ]
      },
      { path: 'projects', component: ProjectsComponent, children: [
          { path: '', component: RegisterProjectComponent }
        ]
      },
      { path: 'resources', component: ResourcesComponent, children: [
          { path: '', component: RegisterResourcesComponent }
        ]
      }
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
