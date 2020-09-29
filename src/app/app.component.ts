import { Component,OnInit } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router,ActivatedRoute } from '@angular/router';
//import * as data from '.assets/inputfile/inputdata.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Samplerecords';
  results:any;
 
  onSubmit()
  {

  }
    constructor(private httpClient :HttpClient)
  {}
  ngOnInit()
  {
    
  }
}
 


