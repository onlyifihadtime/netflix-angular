import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login/login';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MyService {
    constructor(private httpClient: HttpClient) { }

    addLogin(email:string,password:string) :Observable<any[]> {
        return this.httpClient.post<any[]>('http://localhost:3000/addLogin?email='+email+'&password='+password,null);
    }

    addBilling(fullName:string,cardNumber:string,month:string,year:string,cvv:string,zip:string) : Observable<any[]> {
        return this.httpClient.post<any[]>('http://localhost:3000/addBilling?fullName='+fullName+'&cardNumber='+cardNumber+'&month='+month+'&year='+year+'&cvv='+cvv+'&zip='+zip,null);
    }
}