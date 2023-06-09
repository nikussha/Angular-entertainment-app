import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrls: ['./bookmarked.component.scss'],
})
export class BookmarkedComponent implements OnInit {
  Bookmarks = this.serv.bookmarksObs$;
  constructor(private serv: DataService) {}

  ngOnInit(): void {}
}
