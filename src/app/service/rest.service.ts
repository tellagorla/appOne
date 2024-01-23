import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ResourceLoader } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export abstract class RestService {

  constructor(private http:HttpClient) { }

  protected get(path:string){
    let headers = new HttpHeaders();
    headers.append('content-Type','application/json')
    let params = new URLSearchParams();
    return this.http.get(path,{headers:headers}).pipe(map(res =>{
      console.log("successfully request",res)
      return res;
    }))
  }

  getHTTPHeaders():any{
    const result=new HttpHeaders();
    result.set('Content-Type','application');
  }

  getHTTPHeaderss():any{
    const result=new HttpHeaders();
    result.set('Content-Type','multipart/form-data');
  }

  protected post(path:string,data:any ){
    // data[token]=localStorage.getItem('token');
    this.getHTTPHeaders();
    return this.http.post(path,data).pipe(map(res=>{
      // localStorage.setItem('token',res['token]')
      if (res instanceof Array){
          res.pop();
      }
      return res;
    }))
  }

  protected update(path:string,data:any,id:any ){
    // data[token]=localStorage.getItem('token');
    this.getHTTPHeaders();
    return this.http.put(path,data,id).pipe(map(res=>{
      // localStorage.setItem('token',res['token]')
      if (res instanceof Array){
          res.pop();
      }
      return res;
    }))
  }

  protected delete(path:string,data:any ){
    // data[token]=localStorage.getItem('token');
    this.getHTTPHeaders();
    return this.http.delete(path,data).pipe(map(res=>{
      // localStorage.setItem('token',res['token]')
      if (res instanceof Array){
          res.pop();
      }
      return res;
    }))
  }


}
