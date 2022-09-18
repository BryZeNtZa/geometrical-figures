import { Component, OnInit } from '@angular/core';
import { UnitsService } from './units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  units:any;
  defaultUnit: string = "meter";

  pi = Math.PI;

  constructor(private service:UnitsService) {}

  ngOnInit() {
    this.service.getUnits()
      .subscribe(response => {
        this.units = response;
      });
  }


  toNumber(val: string): number{
    return Number(val);
  }

}
