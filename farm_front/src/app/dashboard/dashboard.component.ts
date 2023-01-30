import { Component } from '@angular/core';
import { FarmService } from '../farm/services/farm.service';
import { Router } from '@angular/router';
import { Farm } from '../farm/models/Farm';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})
export class DashboardComponent {

  constructor(private _farmService: FarmService, private router: Router) { }

  ngOnInit() {
    this.fetch()
  }

  dataSource: Farm[] = [];

  fetch(search?: string) {
    this._farmService.list(search).subscribe((data) => {
      this.dataSource = data
    })
  }

}
