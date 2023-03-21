import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  map,
  Observable,
  Subject,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  API: string = 'http://localhost:3000/arr';
  $inputValue = new BehaviorSubject<string>('');
  checkifempty = new BehaviorSubject<string>('');
  Obsforcheck = this.checkifempty as Observable<string>;
  alldata = new BehaviorSubject<any[]>([]);
  Bookmarks = new BehaviorSubject<any[]>([]);
  bookmarksObs$ = this.Bookmarks as Observable<any[]>;
  constructor(private http: HttpClient) {}
  get(): Observable<any[]> {
    return this.http.get<any>('assets/db.json').pipe(
      map((val) => {
        let value = val.arr;
        this.alldata.next(value);
        return value;
      }),
      tap((val) => {
        console.log(val);
        let arr = val.filter((item) => {
          return item.isBookmarked;
        });
        this.Bookmarks.next(arr);
      })
    );
  }

  addOrremove(obj: any) {
    let data = this.alldata.getValue();
    let index = data.findIndex((item) => item.title === obj.title);
    data[index].isBookmarked = !data[index].isBookmarked;
    this.alldata.next(data);
    let bookmarks = this.Bookmarks.getValue();
    if (data[index].isBookmarked) {
      bookmarks.push(data[index]);
    } else {
      bookmarks = bookmarks.filter((item) => item.title !== data[index].title);
    }
    this.Bookmarks.next(bookmarks);
  }
}
