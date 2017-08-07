import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NsmanComponent} from './nsman.component';
import {NsmanFormComponent} from './nsman-form/nsman-form.component';
import {NsmanDetailComponent} from './nsman-detail/nsman-detail.component';

const NsmanRoutes = [
  {path: 'NSMan', component: NsmanComponent, children: [
    { path: 'new', component: NsmanFormComponent },
    { path: ':id', component: NsmanDetailComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(NsmanRoutes)],
  exports: [RouterModule]
})

export class NsmanRoutingModule {}
