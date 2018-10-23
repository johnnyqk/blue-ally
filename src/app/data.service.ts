import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSubnets() {
    return this.http.get('http://localhost:8080/allsubnets')
  }
  
  getSubnetIp(cidr) {
   return this.http.get('http://localhost:8080/subnet/'+cidr)
  }

  getSubnetDetail(id) {
    return this.http.get('http://localhost:8080/subnetdetail/'+id)
  }
}
