import { Component, OnInit } from '@angular/core';
import { DemotestService } from '../shared/demotest/demotest.service';

@Component({
  selector: 'app-demotest-list',
  templateUrl: './demotest-list.component.html',
  styleUrls: ['./demotest-list.component.css']
})
export class DemotestListComponent implements OnInit {
  demotests: Array<any>;

  constructor(private demotestService: DemotestService) { }

  ngOnInit() {
    this.demotestService.getAll().subscribe(data => {
      this.demotests = data;
    });
  }

}
