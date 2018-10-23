import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
// ***All below urls need to be changed based on where your API is hosting.
  constructor(private http: HttpClient) { }
  // Get all Subnets (Parent Level)
   getSubnets() {
    return this.http.get('http://localhost:8080/allsubnets')
  }
  
  // Get All IPs by cidr
  getSubnetIp(cidr) {
   return this.http.get('http://localhost:8080/subnet/'+cidr)
  }

  // Get Subnet/IP detail by ip Id
  getSubnetDetail(id) {
    return this.http.get('http://localhost:8080/subnetdetail/'+id)
  }
}
