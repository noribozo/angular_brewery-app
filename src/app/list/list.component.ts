import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { IBrew } from '../interfaces/Brew';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  brews: IBrew[] = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews)
    });
  }

}
