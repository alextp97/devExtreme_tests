import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { ListComponent } from './pages/country/list/list.component'
import { CommonModule } from '@angular/common';
import { ComponentModule } from "./shared/components/components.module";

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: "country",
    loadChildren: () => import("./pages/country/country.module").then(h => h.CountryModule),
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
    providers: [AuthGuardService],
    exports: [RouterModule],
    declarations: [
        HomeComponent,
        ProfileComponent,
        TasksComponent,
        ListComponent
    ],
    imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule, CommonModule, ComponentModule]
})
export class AppRoutingModule { }
