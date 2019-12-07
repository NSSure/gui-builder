import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 3rd party modules.
import { AceEditorModule } from 'ng2-ace-editor';

// Application components.

// Application services.
import { SectionService } from './services/section.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from './components/authorized/editor/editor.component';
import { SideMenuComponent } from './components/authorized/layout/side-menu/side-menu.component';
import { MySectionsComponent } from './components/authorized/my-sections/my-sections.component';
import { GuiWizardComponent } from './components/authorized/gui-wizard/gui-wizard.component';
import { SectionRibbonComponent } from './components/authorized/gui-wizard/section-ribbon/section-ribbon.component';
import { SimpleTagsComponent } from './components/authorized/tags/simple-tags.component';
import { LoginComponent } from './components/public/login/login.component';
import { AppAuthorized } from './components/authorized/app.authorized';
import { AppPublic } from './components/public/app.public';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { RegisterComponent } from './components/public/register/register.component';
import { UserService } from './services/user.service';
import { AuthInterceptor } from './interceptors/auth.interceptors';
import { PageNotFoundComponent } from './components/layout/not-found/page-not-found.component';
import { SectionRendererComponent } from './components/authorized/gui-wizard/section-renderer/section-renderer.component';

@NgModule({
  declarations: [
    AppAuthorized,
    AppPublic,
    AppComponent,
    EditorComponent,
    SideMenuComponent,
    MySectionsComponent,
    GuiWizardComponent,
    SectionRibbonComponent,
    SectionRendererComponent,
    SimpleTagsComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  entryComponents: [
    SectionRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AceEditorModule
  ],
  providers: [
    SectionService,
    UserService,
    AuthenticatedGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
