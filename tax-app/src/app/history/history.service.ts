import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../authentication.service";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }

  deleteCalculations(calculationIds): Promise<Object> {
    return this.http.put(`/api/deleteCalculations/${this.userId()}`, calculationIds).toPromise();
  }

  getCalculations(): Promise<Object> {
    return this.http.get(`/api/getCalculations/${this.userId()}`).toPromise();
  }

  private userId() {
    return this.auth.getUserDetails()["_id"];
  }
}
