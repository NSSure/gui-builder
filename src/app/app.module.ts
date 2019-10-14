import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 3rd party modules.
import { AceEditorModule } from 'ng2-ace-editor';

// Application components.
import { EditorComponent } from './editor/editor.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { AboutComponent } from './about/about.component';
import { MySectionsComponent } from './my-sections/my-sections.component';
import { GuiWizardComponent } from './gui-wizard/gui-wizard.component';

// Application services.
import { SectionService } from './services/section.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SectionRibbonComponent } from './gui-wizard/section-ribbon/section-ribbon.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    SideMenuComponent,
    AboutComponent,
    MySectionsComponent,
    GuiWizardComponent,
    SectionRibbonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AceEditorModule
  ],
  providers: [
    SectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
