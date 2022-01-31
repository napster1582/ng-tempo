import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Actividad } from 'src/app/@core/models/actividad.model';

@Component({
  selector: 'app-dashboard-actividades',
  templateUrl: './dashboard-actividades.component.html',
  styleUrls: ['./dashboard-actividades.component.css'],
})
export class DashboardActividadesComponent implements OnInit {
  //#region Inputs
  @Input() dataSource: Actividad[] = [];
  //#endregion

  //#region Output
  @Output() onUpdate = new EventEmitter<Actividad>();
  @Output() onRemove = new EventEmitter<Actividad>();
  @Output() onClickAddHours = new EventEmitter<Actividad>();
  //#endregion

  //#region ViewChild
  @ViewChild('actividadesDataGrid', { static: true })
  actividadesDataGrid!: DxDataGridComponent;
  //#endregion

  //#region Models

  //#endregion

  //#region atributos (generales)
  //#endregion

  //#region Atributos privados
  //#endregion

  //#region atributos (componentes)
  //#endregion

  //#region Constructor y ciclos de vida
  constructor() {
    this.onClickAgregarHoras = this.onClickAgregarHoras.bind(this);
  }
  ngOnInit() {}
  //#endregion

  //#region servicios
  //#endregion

  //#region  Eventos

  onRowUpdatedActividad({ data }: { data: Actividad }) {
    this.onUpdate.emit(data);
  }

  onRowRemovedActividad({ data }: { data: Actividad }) {
    this.onRemove.emit(data);
  }

  onClickAgregarHoras({ row: { data } }) {
    this.onClickAddHours.emit(data);
  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.forEach((item) => {
      if (item.name === 'addRowButton') {
        item.options.text = 'Crear actividad';
        item.options.type = 'default';
        item.icon = 'add';
        item.showText = 'always';
      }
    });
  }

  //#endregion

  //#region Métodos privados
  //#endregion
}
