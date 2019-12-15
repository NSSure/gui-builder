import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuiWizardComponent } from './components/authorized/gui-wizard/gui-wizard.component';
import { LoginComponent } from './components/public/login/login.component';
import { AppAuthorized } from './components/authorized/app.authorized';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { AppPublic } from './components/public/app.public';
import { RegisterComponent } from './components/public/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/layout/not-found/page-not-found.component';
import { SectionListComponent } from './components/authorized/section/list/section-list.component';
import { SectionManageComponent } from './components/authorized/section/manage/section-manage.component';
import { SectionTokenListComponent } from './components/authorized/section/tokens/list/section-token-list.component';
import { SectionTokenManageComponent } from './components/authorized/section/tokens/manage/section-token-manage.component';
import { SectionTokensDrawerComponent } from './components/authorized/section/tokens/drawer/section-tokens-drawer.component';

const routes: Routes = [
  { path: '', redirectTo: 'builder', pathMatch: 'full' },
  {
    path: 'builder', component: AppAuthorized, canActivate: [AuthenticatedGuard], children: [
      { path: '', pathMatch: 'full', redirectTo: 'editor' },
      {
        path: 'section', component: SectionManageComponent, canActivate: [AuthenticatedGuard], data: { title: 'Editor', animationKey: 0 }
      },
      {
        path: 'section/:sectionId', component: SectionManageComponent, canActivate: [AuthenticatedGuard], data: { title: 'Editor', animationKey: 1 }, children: [
          { path: '', pathMatch: 'full', redirectTo: 'tokens' },
          { path: 'tokens', component: SectionTokensDrawerComponent, children: [
              { path: '', pathMatch: 'full', redirectTo: 'list' },
              { path: 'list', component: SectionTokenListComponent },
              { path: 'manage', component: SectionTokenManageComponent },
              { path: 'manage/:sectionTokenId', component: SectionTokenManageComponent }
            ]
          },
        ]
      },
      { path: 'sections', component: SectionListComponent, canActivate: [AuthenticatedGuard], data: { title: 'My Saved Sections', animationKey: 2 } },
      { path: 'gui-wizard', component: GuiWizardComponent, canActivate: [AuthenticatedGuard], data: { title: 'GUI Wizard', animationKey: 3 } }
    ]
  },
  {
    path: 'login', component: AppPublic, children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
