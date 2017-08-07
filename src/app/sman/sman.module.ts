import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { SmanComponent } from './sman.component';
import { SmanFormComponent } from './sman-form/sman-form.component';
import { SmanDetailComponent } from './sman-detail/sman-detail.component';
import { SManRoutingModule } from './sman.routing.module';
import {SmanService} from './sman.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SManRoutingModule,
  ],
  exports: [],
  declarations: [
    SmanComponent,
    SmanFormComponent,
    SmanDetailComponent
  ],
  providers: [SmanService],
})

export class SmanModule {}
