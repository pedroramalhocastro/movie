import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmesComponent } from './filmes.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [FilmesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: '',
          component: FilmesComponent,
      },
  ])
  ]
})
export class FilmesModule { }
