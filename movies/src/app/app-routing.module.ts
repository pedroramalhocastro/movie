import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'filmes',
    loadChildren: () =>
        import('./filmes/filmes.module').then((m) => m.FilmesModule),
  },
  {
    path: '',
    redirectTo: '/filmes',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
