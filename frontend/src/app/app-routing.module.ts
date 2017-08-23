import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { ProductComponent } from './product';
import { SignupComponent } from './signup';
import { ProductDetailsComponent } from './productdetails';
import { SearchComponent } from './search';
import { LoginGuard } from './guard';
import { NotFoundComponent } from './not-found';

export const routes: Routes = [
  {
    path: 'admin',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'admin/product',
    component: ProductComponent,
    pathMatch: 'full'
  },
    {
    path: 'admin/product/:id',
    component: ProductComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin/search',
    component: SearchComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin/productdetails/:id',
    component: ProductDetailsComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
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
