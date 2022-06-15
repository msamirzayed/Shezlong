import { NgModule } from '@angular/core';
import { DoctorsComponent } from './doctors.component';
import { DoctorsRoutingModule } from './doctors-routing.module';
import { CommonModule } from '@angular/common';
import { ListAllDoctorsComponent } from './pages/components/list-all-doctors/list-all-doctors.component';

@NgModule({
  imports: [CommonModule, DoctorsRoutingModule],
  declarations: [DoctorsComponent, ListAllDoctorsComponent],
})
export class DoctorsModule {}
