import { Observable, combineLatest, map } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.scss'],
})
export class TvSeriesComponent implements OnInit {
  bool: boolean = false;
  displaySeries$!: Observable<any[]>;
  constructor(private serv: DataService) {
    this.displaySeries$ = combineLatest([
      this.serv.$inputValue,
      this.serv.alldata,
    ]).pipe(
      map(([str, arr]: [string, any[]]) => {
        let series = arr.filter((item) => {
          return item.category == 'TV Series';
        });
        if (str) {
          return series.filter((item) => {
            return item.title.trim().toLowerCase().includes(str.toLowerCase());
          });
        }
        return series;
      })
    );
  }

  ngOnInit(): void {}
}
