import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule }      from '@angular/router';
import { ActivatedRoute }    from '@angular/router';
import { AirlineService, Airline } from '../airline.service';

@Component({
  selector: 'app-airline-flights',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './airline-flights.component.html',
  styleUrls: ['./airline-flights.component.css']
})
export class AirlineFlightsComponent implements OnInit {
  airline!: Airline;

  constructor(
    private route: ActivatedRoute,
    private svc: AirlineService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.svc.getAirlineById(id).subscribe(a => {
      if (a) this.airline = a;
    });
  }
}