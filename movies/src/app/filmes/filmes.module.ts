import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmesComponent } from './filmes.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FilmesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    RouterModule.forChild([
      {
          path: '',
          component: FilmesComponent,
      },
  ])
  ]
})
export class FilmesModule { }
