import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../../servcies/doctors.service';

@Component({
  selector: 'app-list-all-doctors',
  templateUrl: './list-all-doctors.component.html',
  styleUrls: ['./list-all-doctors.component.css'],
})
export class ListAllDoctorsComponent implements OnInit {
  doctors: any = [];

  pageNumber: number = 1;
  constructor(private service: DoctorsService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll(this.pageNumber).subscribe((resp) => {
      this.doctors = resp.data.therapists;
      console.log(this.doctors);
    });
  }
  next() {
    this.pageNumber = this.pageNumber + 1;
    this.getAll();
  }
  previous() {
    this.pageNumber = this.pageNumber - 1;
    if (this.pageNumber <= 1) this.pageNumber = 1;

    this.getAll();
  }
}
