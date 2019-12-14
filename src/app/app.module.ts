import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 3rd party modules.
import { AceEditorModule } from 'ng2-ace-editor';
import { TagInputModule } from 'ngx-chips';

// Application components.

// Application services.
import { SectionService } from './services/section.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SideMenuComponent } from './components/authorized/layout/side-menu/side-menu.component';
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
import { SectionListComponent } from './components/authorized/section/list/section-list.component';
import { SectionManageComponent } from './components/authorized/section/manage/section-manage.component';
import { DropdownComponent } from './components/authorized/dropdown/dropdown.component';
import { EditorComponent } from './components/authorized/editor/editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionTokenListComponent } from './components/authorized/section/tokens/list/section-token-list.component';
import { SectionTokenManageComponent } from './components/authorized/section/tokens/manage/section-token-manage.component';

@NgModule({
  declarations: [
    AppAuthorized,
    AppPublic,
    AppComponent,
    SideMenuComponent,
    EditorComponent,
    SectionManageComponent,
    SectionListComponent,
    GuiWizardComponent,
    SectionRibbonComponent,
    SectionRendererComponent,
    SectionTokenListComponent,
    SectionTokenManageComponent,
    SimpleTagsComponent,
    DropdownComponent,
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
    AceEditorModule,
    TagInputModule,
    BrowserAnimationsModule
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
