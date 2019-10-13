import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { AboutComponent } from './about/about.component';
import { MySectionsComponent } from './my-sections/my-sections.component';
import { GuiWizardComponent } from './gui-wizard/gui-wizard.component';


const routes: Routes = [
  { path: '', redirectTo: 'editor', pathMatch: 'full' },
  { path: 'editor', component: EditorComponent, data: { title: 'Editor' } },
  { path: 'editor/:sectionId', component: EditorComponent, data: { title: 'Editor' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'my-sections', component: MySectionsComponent, data: { title: 'My Saved Sections' } },
  { path: 'gui-wizard', component: GuiWizardComponent, data: { title: 'GUI Wizard' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
