import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'doctors',
    loadChildren: () =>
      import('./modules/doctors/doctors.module').then((m) => m.DoctorsModule),
  },
  {
    path: '',
    redirectTo: 'doctors',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'doctors',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
