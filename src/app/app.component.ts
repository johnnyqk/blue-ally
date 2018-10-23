import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'ng6-bootstrap';
  subnets$: Object;
  subip$: Object;
  subdetail$: Object;
  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.getSubnets().subscribe(
      data => this.subnets$ = data['subnets']
    )
  }

  getSubnetIp(cidr) {
    this.data.getSubnetIp(cidr).subscribe(
      data => this.subip$ = data['sub']
    )
  }

  getSubnetDetail(id) {
    this.data.getSubnetDetail(id).subscribe(
      data => this.subdetail$ = data['sub']
    )
  }
}
