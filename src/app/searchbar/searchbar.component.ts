import { DataService } from './../data.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  inputVal = new FormControl();
  val: string = '';

  constructor(private serv: DataService) {
    this.inputVal.valueChanges
      .pipe(
        tap((val) => {
          this.val = val;
          this.serv.$inputValue.next(val);
          this.serv.checkifempty.next(this.val);
        })
      )
      .subscribe();
  }
  ngOnInit(): void {}
}
