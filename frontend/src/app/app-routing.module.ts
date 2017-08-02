import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { ProductComponent } from './product';
import { ProductDetailsComponent } from './productdetails';
import { SearchComponent } from './search';
import { LoginGuard } from './guard';
import { NotFoundComponent } from './not-found';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'product',
    component: ProductComponent,
    pathMatch: 'full'
  },
    {
    path: 'product/:id',
    component: ProductComponent,
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchComponent,
    pathMatch: 'full'
  },
  {
    path: 'productdetails/:id',
    component: ProductDetailsComponent,
    pathMatch: 'full'
  },
  {
    path:'404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
