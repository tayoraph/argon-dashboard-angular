import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SermonsComponent } from './sermons/sermons.component';
import { AllSermonsComponent } from './all-sermons/all-sermons.component';
import { AddNewSermonComponent } from './add-new-sermon/add-new-sermon.component';
import { EditSermonComponent } from './edit-sermon/edit-sermon.component';



@NgModule({
  declarations: [    SermonsComponent,
    AllSermonsComponent,
    AddNewSermonComponent,
    EditSermonComponent],
  imports: [
    CommonModule
  ],
  exports:[SermonsComponent,
    AllSermonsComponent,
    AddNewSermonComponent,
    EditSermonComponent]
})
export class SermonModule { }
