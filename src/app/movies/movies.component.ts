import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest, filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  emptyarr: boolean = false;
  $Movies!: Observable<any[]>;
  constructor(private serv: DataService) {
    this.$Movies = combineLatest([
      this.serv.alldata,
      this.serv.$inputValue,
    ]).pipe(
      map(([arr, str]: [any[], string]) => {
        let moviesarr = arr.filter((item) => {
          return item.category == 'Movie';
        });
        if (str) {
          return moviesarr.filter((item) => {
            return item.title.trim().toLowerCase().includes(str.toLowerCase());
          });
        }
        return moviesarr;
      })
    );
  }

  ngOnInit(): void {}
}
