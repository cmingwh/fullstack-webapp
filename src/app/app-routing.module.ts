import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TrainingSearchComponent } from './pages/training-search/training-search.component';
import { MentorTrainingsComponent } from './pages/mentor-trainings/mentor-trainings.component';
import { UserTrainingsComponent } from './pages/user-trainings/user-trainings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminUserComponent } from './pages/admin-user/admin-user.component';
import { AdminTechFeeComponent } from './pages/admin-tech-fee/admin-tech-fee.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'userTrainings', component: UserTrainingsComponent },
  { path: 'mentorTrainings', component: MentorTrainingsComponent },
  { path: 'search', component: TrainingSearchComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin/user', component: AdminUserComponent },
  { path: 'admin/tech', component: AdminTechFeeComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
