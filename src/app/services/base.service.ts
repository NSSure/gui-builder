import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BaseService {
    constructor(public http: HttpClient) { }
  
    baseUrl = 'http://localhost:54565/api/';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
}