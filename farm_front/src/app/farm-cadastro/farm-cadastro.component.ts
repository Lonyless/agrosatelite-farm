import { Component } from '@angular/core';
import { OwnerService } from '../farm/services/owner.service';
import { Owner } from '../farm/models/Owner';
import { CityService } from '../farm/services/city.service';
import { City } from '../farm/models/City';
import { FarmService } from '../farm/services/farm.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Farm } from '../farm/models/Farm';

@Component({
  selector: 'app-farm-cadastro',
  templateUrl: './farm-cadastro.component.html',
  styleUrls: ['./farm-cadastro.component.scss']
})
export class FarmCadastroComponent {

  constructor(private _farmService: FarmService,
    private _ownerService: OwnerService,
    private _cityService: CityService,
    private _router: Router,
    private route: ActivatedRoute) { }

  owners: Owner[] = []
  cities: City[] = []

  farm: Farm = {}

  saveLabel: string = ''

  getSelectOptions() {
    this._cityService.list().subscribe((data) => {
      this.cities = data
    })
    this._ownerService.list().subscribe((data) => {
      this.owners = data
    })
  }

  ngOnInit() {
    this.route.params.subscribe((data: Data) => {
      if (data['id'] != null) {
        this.saveLabel = 'Save'

        this._farmService.read(data['id']).subscribe((data) => {
          this.farm = data

          this.getSelectOptions()

        })
      } else {
        this.saveLabel = 'Create'
        this.getSelectOptions()
      }


    })
  }

  saveFarm(name?: string,
    owner_id?: string,
    city_id?: string,
  ) {

    this._farmService.save({
      id: this.farm.id,
      name: name!,
      owner: Number(owner_id),
      city: Number(city_id!),
    }).subscribe((data) => {
      this._router.navigateByUrl('')
    })
  }

  removeFarm(
  ) {
    this._farmService.delete(this.farm.id!).subscribe((data) => {
      this._router.navigateByUrl('')
    })
  }

}
