import { Injectable } from '@angular/core';
import { APIURL, IURL } from 'src/app/core/services/http/api';
import { CoreService } from 'src/app/core/services/http/core.service';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService extends CoreService {
  override apiUrl: IURL = APIURL.doctors;
}
