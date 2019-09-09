import { BrowserModule, } from '@angular/platform-browser';
import { NgModule, Injectable,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatToolbarModule,
MatSelectModule, MatOptionModule, MatDatepickerModule, MatNativeDateModule, MatTableModule,
MatPaginatorModule, MatDialogModule, MatTabsModule, MatListModule, MatIconModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TrainingSearchComponent } from './pages/training-search/training-search.component';
import { MentorTrainingsComponent } from './pages/mentor-trainings/mentor-trainings.component';
import { UserTrainingsComponent } from './pages/user-trainings/user-trainings.component';
import { HeaderComponent } from './component/header/header.component';
import { ProposeComponent } from './pages/propose/propose.component';
import { WithdrawComponent } from './pages/withdraw/withdraw.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { AdminUserComponent } from './pages/admin-user/admin-user.component';
import { AdminTechFeeComponent } from './pages/admin-tech-fee/admin-tech-fee.component';
import { HttpClientModule, HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppService } from './service/app.service';
import { HomeComponent } from './pages/home/home.component';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TrainingSearchComponent,
    MentorTrainingsComponent,
    UserTrainingsComponent,
    HeaderComponent,
    ProposeComponent,
    WithdrawComponent,
    ProfileComponent,
    SkillsComponent,
    AdminUserComponent,
    AdminTechFeeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    HttpClientModule
  ],
  entryComponents: [
    ProposeComponent,
    WithdrawComponent
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AppService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
