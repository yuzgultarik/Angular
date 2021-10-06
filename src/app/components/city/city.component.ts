import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';




@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {


  cities = new Array<City>();
  cit = new City;

  constructor(private _cityService: CityService) { }

  ngOnInit(): void {
  }

}
