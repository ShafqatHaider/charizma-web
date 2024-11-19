import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { config } from "./models/IConfig";

@Injectable({
    providedIn:'root'
})

export class SharedService{

headers=new HttpHeaders({
    'accept':'application/json',
    'content-type':'application/json'
})
constructor(private http:HttpClient) {
    
    
}

getAnalaysis():Observable<any>{
    return this.http.get(config.getAnyalysisDataApi, {headers:this.headers});
}
}