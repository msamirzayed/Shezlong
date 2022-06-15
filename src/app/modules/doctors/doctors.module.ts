import { NgModule } from '@angular/core';

import { DoctorsComponent } from './doctors.component';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, DoctorsRoutingModule],
  declarations: [DoctorsComponent],
})
export class DoctorsModule {}
