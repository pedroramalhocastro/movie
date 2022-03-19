import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { BuscarFilmesService } from '../buscar-filmes.service';
import { Filmes } from '../filmes.model';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;


 filme:any[];
 buscarfilme: string;
 totalPages: any;
 imgUrl: string;
 page: any[];
 titleImg: string;
 IMG_Url = 'https://image.tmdb.org/t/p/w500';

 Search(){
  this.filme = this.filme.filter(res => {
    return res.title.toLocaleLowerCase().match(this.buscarfilme.toLocaleLowerCase());
  })
 }

  constructor(private filmes: BuscarFilmesService) {
      this.filmes.filmes().subscribe(res =>
        {
            this.filme = res.results;
            console.log(this.filme);
            this.page = this.filme.slice(0,5);
            console.log(this.page);
            this.totalPages = res.total_pages;
        });
  }

  OnpageChange(event: PageEvent){
   console.log(event);
   const startIndex = event.pageIndex * event.pageSize;
   let endIndex = startIndex + event.pageIndex;
   if(endIndex > this.totalPages){
     endIndex = this.totalPages;
   }
   this.page = this.filme.slice(startIndex, endIndex);
  }



  ngOnInit(): void {

  }

}


