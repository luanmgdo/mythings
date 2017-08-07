import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SmanComponent} from './sman.component';
import {SmanFormComponent} from './sman-form/sman-form.component';
import {SmanDetailComponent} from './sman-detail/sman-detail.component';

const SManRoutes = [
  {path: 'SMan', component: SmanComponent, children: [
    { path: 'new', component: SmanFormComponent},
    { path: ':id', component: SmanDetailComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(SManRoutes)],
  exports: [RouterModule]
})

export class SManRoutingModule {}
