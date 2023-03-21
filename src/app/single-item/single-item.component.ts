import { DataService } from './../data.service';
import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss'],
})
export class SingleItemComponent implements OnInit {
  @Input() item: any;
  constructor(private serv: DataService) {}

  ngOnInit(): void {}

  checkifbookmarked() {
    this.serv.addOrremove(this.item);
  }
}
