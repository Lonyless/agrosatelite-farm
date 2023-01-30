import { Component, Input } from '@angular/core';
import { Farm } from '../../farm/models/Farm';
import { Model } from 'src/app/farm/models/abstract_model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'name', 'area', 'creation_date', 'owner'];

  @Input()
  route!: string

  @Input()
  dataSource: Model[] = [];


}
