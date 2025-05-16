import { Component, OnInit }    from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule }         from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineService, Airline } from '../airline.service';

@Component({
  selector: 'app-airline-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './airline-detail.component.html',
  styleUrls: ['./airline-detail.component.css']
})
export class AirlineDetailComponent implements OnInit {
  airline!: Airline;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private svc: AirlineService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.svc.getAirlineById(id).subscribe(a => {
      if (!a) this.router.navigate(['/airlines']);
      else this.airline = a;
    });
  }

  goToFlights() {
    this.router.navigate(['/airlines', this.airline.id, 'flights']);
  }
}
