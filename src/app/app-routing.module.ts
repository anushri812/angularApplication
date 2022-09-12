import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { DeviceComponent } from './device/device.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OwnerComponent } from './owner/owner.component';
import { RegisterComponent } from './register/register.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent, children:[{path:'owner',component:OwnerComponent},
  {path:'device',component:DeviceComponent},
  {path:'report', component:ReportComponent}]},
  {path:'register', component:RegisterComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
