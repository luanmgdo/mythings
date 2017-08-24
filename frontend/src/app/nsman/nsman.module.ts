import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { NsmanComponent } from './nsman.component';
import { NsmanDetailComponent } from './nsman-detail/nsman-detail.component';
import { NsmanRoutingModule } from './nsman.routing.module';
import {NsmanService} from './nsman.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    NsmanRoutingModule,
  ],
  exports: [],
  declarations: [
    NsmanComponent,
    NsmanDetailComponent
  ],
  providers: [NsmanService],
})

export class NsmanModule {}
