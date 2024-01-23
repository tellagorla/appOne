import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { RestService } from './rest.service';
// import { Rest1Service } from './rest1.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends RestService {

  getData(){
    return this.get("http://localhost:9090/employees")
      
  }
}
