import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import {TableComponent} from './table.component';
import {TableTextComponent} from './table-text/table-text.component';
import { TableSelectComponent } from './table-select/table-select.component';
import { TableStatusComponent } from './table-status/table-status.component';
import { EditComponent } from './table-operations/edit/edit.component';
import { DeleteComponent } from './table-operations/delete/delete.component';
import { TableOperationsComponent } from './table-operations/table-operations.component';



@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
  ],
})
export class TableModule { }
