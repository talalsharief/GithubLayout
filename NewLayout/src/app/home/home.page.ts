import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';
import githubTrends from 'github-trends-api';
import { promise } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  options = {
    section: 'developers', // default: empty (repositories) - or 'developers'
    language: 'javascript', // default: empty (all) - or 'javascript', 'java' etc..
    since: 'daily', // default: empty (daily) - or 'weekly', 'monthly'
    spoken_language_code: 'en' // default: empty (all) - or en - fs - zh ...
  }
  arrdata
  devdata
  category:any = "Repositories";

  constructor(
    public data:DataService
  ) {
    this.LoadData()
    
     
  }

  segmentChanged(ev: any) {
    this.category = ev.detail.value;
    console.log(this.category);
  }

  LoadData(){
      this.data.Get().then((res:any)=>{
        this.arrdata = res
      });
      this.data.GetDev().then((res:any)=>{
        this.devdata = res
      })
   console.log(this.arrdata)
  }

}
