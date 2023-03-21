import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import {
  combineLatest,
  map,
  Observable,
  switchMap,
  tap,
  BehaviorSubject,
  filter,
} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  checkinput: Observable<string> = this.serv.Obsforcheck;
  trending: any[] = [];
  filteredarr!: Observable<any[]>;
  AllData!: Observable<any[]>;
  constructor(private serv: DataService) {
    this.AllData = this.serv.alldata.pipe(
      tap((item) => {
        this.trending = item.filter((obj: any) => {
          return obj.isTrending;
        });
      })
    );

    this.filteredarr = combineLatest([
      this.AllData,
      this.serv.$inputValue,
    ]).pipe(
      map(([arr, str]: [any[], string]) => {
        let filtered = arr.filter((obj: any) => {
          return obj.title.trim().toLowerCase().includes(str);
        });
        return filtered;
      })
    );
  }
  ngOnInit(): void {}
}
