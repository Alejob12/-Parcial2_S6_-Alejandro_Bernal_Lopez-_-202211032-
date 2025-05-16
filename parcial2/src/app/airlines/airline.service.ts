import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Airline {
  id: string;
  airlineName: string;
  identityColor: string;
  country: string;
  city: string;
  address: string;
  slogan: string;
}

@Injectable({ providedIn: 'root' })
export class AirlineService {
  private url = 'https://raw.githubusercontent.com/NoNameLab/ISIS2603_Parcial2_S6_202510/refs/heads/main/flights.json';

  constructor(private http: HttpClient) {}

  getAirlines(): Observable<Airline[]> {
    return this.http.get<Airline[]>(this.url);
  }

  getAirlineById(id: string): Observable<Airline | undefined> {
    return this.http.get<Airline[]>(this.url).pipe(
      map(list => list.find(a => a.id === id))
    );
  }
}
