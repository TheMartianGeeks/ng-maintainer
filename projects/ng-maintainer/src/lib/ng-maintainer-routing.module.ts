import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgMaintainerComponent } from './components/ng-maintainer.component';

const routes: Routes = [
  { path: 'maintenance-mode', component: NgMaintainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NgMaintainerRoutingModule {
  //
}
