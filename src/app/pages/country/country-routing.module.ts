import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/services';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ConsultComponent } from './consult/consult.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add',
        component: AddComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'list',
        component: ListComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'consult',
        component: ConsultComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'delete',
        component: DeleteComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'update',
        component: UpdateComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
