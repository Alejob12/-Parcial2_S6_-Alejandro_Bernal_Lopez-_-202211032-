import { Component, OnInit }      from '@angular/core';
import { CommonModule }           from '@angular/common';
import { RouterModule }           from '@angular/router';
import { AirlineService, Airline } from '../airline.service';

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AirlineListComponent implements OnInit {
  airlines: Airline[] = [];

  constructor(private svc: AirlineService) {}

  ngOnInit(): void {
    this.svc.getAirlines().subscribe(list => this.airlines = list);
  }
}