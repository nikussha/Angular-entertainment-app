import { SearchbarComponent } from './searchbar/searchbar.component';
import { DataService } from './data.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Data } from '@angular/router';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private serv: DataService) {
    this.serv.get().subscribe();
  }
  ngAfterViewInit(): void {}
  ngOnInit(): void {}
}
