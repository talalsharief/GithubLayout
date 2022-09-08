import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import githubTrends from 'github-trends-api';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  options = {
    section: 'repositories', // default: empty (repositories) - or 'developers'
    language: 'javascript', // default: empty (all) - or 'javascript', 'java' etc..
    since: 'daily', // default: empty (daily) - or 'weekly', 'monthly'
    spoken_language_code: 'en' // default: empty (all) - or en - fs - zh ...
  }

  constructor(
    public http:HttpClient
  ) { 
    
  }

 
  
  Get(): Promise<any> {
    return new Promise((resolve, error) => {
      console.log("Final API Url : "+environment.baseURL);
      this.http.get(environment.baseURL).subscribe((data: any) => {
          console.log(data)
        let respData= data
        return resolve(respData);
      }, (ServiceErr) => {
        return error(ServiceErr)

      });
    });
  }
  GetDev(): Promise<any> {
    return new Promise((resolve, error) => {
      console.log("Final API Url : "+environment.devURL);
      this.http.get(environment.devURL).subscribe((data: any) => {
          console.log(data)
        let respData= data
        return resolve(respData);
      }, (ServiceErr) => {
        return error(ServiceErr)

      });
    });
  }
}
