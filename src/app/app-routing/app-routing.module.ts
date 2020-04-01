import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { UsersComponent } from '../components/users/users.component';
import { UserCreationComponent } from '../components/user-creation/user-creation.component';

const routes: Route[] = [
  { path: 'users', component: UsersComponent},
  { path: 'user-creation', component: UserCreationComponent},
  { path: '**', redirectTo: 'users'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
