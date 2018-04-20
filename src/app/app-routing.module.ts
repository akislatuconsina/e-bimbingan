import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { EmptyComponent } from './empty/empty.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampleComponent } from './sample/sample.component';
import { FormsComponent } from './forms/forms.component';
import { DataComponent } from './data/data.component';
import { PanelsComponent } from './panels/panels.component';
import { OverlaysComponent } from './overlays/overlays.component';
import { MenusComponent } from './menus/menus.component';
import { ChartsComponent } from './charts/charts.component';
import { UtilsComponent } from './utils/utils.component';
import { MessagesComponent } from './messages/messages.component';
import { FileComponent } from './file/file.component';
import { MiscComponent } from './misc/misc.component';


// Import Services
import { AuthGuard } from './../service/service/index';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'home', component: HomeComponent },
      { path: 'not-found', component: NotFoundComponent },
      { path: 'error', component: ErrorComponent },
      { path: 'empty', component: EmptyComponent },
      { path: 'sample', component: SampleComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'data', component: DataComponent },
      { path: 'panels', component: PanelsComponent },
      { path: 'overlays', component: OverlaysComponent },
      { path: 'menus', component: MenusComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'utils', component: UtilsComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'file', component: FileComponent },
      { path: 'misc', component: MiscComponent }
    ]
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
