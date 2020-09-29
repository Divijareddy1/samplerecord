import { Component, OnInit } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  results:any;
  userId =[];
  

  constructor(private httpClient :HttpClient) { }

  ngOnInit() 
  {
    fetch('./assets/inputfile/inputdata.json').then(res => res.json()).then(json => {
      console.log('results :',json);
      this.results=json;
      //this.userId = this.results;
      //console.log(this.userId);
     /* this.httpClient.get('./assets/inputfile/inputdata.json').subscribe(data =>
        {
          console.log(data);
          this.userId = data;
        })*/
    })
  }

}
