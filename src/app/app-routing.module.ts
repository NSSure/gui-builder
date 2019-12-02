import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './components/authorized/editor/editor.component';
import { GuiWizardComponent } from './components/authorized/gui-wizard/gui-wizard.component';
import { LoginComponent } from './components/public/login/login.component';
import { MySectionsComponent } from './components/authorized/my-sections/my-sections.component';
import { AppAuthorized } from './components/authorized/app.authorized';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { AppPublic } from './components/public/app.public';
import { RegisterComponent } from './components/public/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/layout/not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'editor', pathMatch: 'full' },
  { path: 'editor', component: AppAuthorized, canActivate: [AuthenticatedGuard], children: [
      { path: '', component: EditorComponent, canActivate: [AuthenticatedGuard], data: { title: 'Editor' } },
      { path: 'editor/:sectionId', component: EditorComponent, canActivate: [AuthenticatedGuard], data: { title: 'Editor' } },
      { path: 'my-sections', component: MySectionsComponent, canActivate: [AuthenticatedGuard], data: { title: 'My Saved Sections' } },
      { path: 'gui-wizard', component: GuiWizardComponent, canActivate: [AuthenticatedGuard], data: { title: 'GUI Wizard' } }
    ] 
  },
  { path: 'login', component: AppPublic, children: [
    { path: '', component: LoginComponent, data: { animation: 'Register' } },
    { path: 'register', component: RegisterComponent, data: { animation: 'Login' } }
  ]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
