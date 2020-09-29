import { Component, OnInit } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  results:any;
  results1:any;
  heroes = [
    { id: 11, name: 'Mr. Nice', country: 'India' },
    { id: 12, name: 'Narco' , country: 'USA'},
    { id: 13, name: 'Bombasto' , country: 'UK'},
    { id: 14, name: 'Celeritas' , country: 'Canada'},
    { id: 15, name: 'Magneta' , country: 'Russia'},
    { id: 16, name: 'RubberMan' , country: 'China'},
    { id: 17, name: 'Dynama' , country: 'Germany'},
    { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
    { id: 19, name: 'Magma' , country: 'South Africa'},
    { id: 20, name: 'Tornado' , country: 'Sri Lanka'}
  ];

  constructor(private httpClient :HttpClient) { }
  
  ngOnInit()
   {
    fetch('./assets/inputfile/inputdata.json').then(res => res.json()).then(json => {
      console.log('results :',json);
      this.results=json;
      console.log(this.results);
      
     this.results1=this.results.filter(res1=>
        res1.userId =='1' && res1.completed =='true');
        console.log(this.results1);

      //this.userId = this.results.value;
      //console.log(this.userId);
     /* this.httpClient.get('./assets/inputfile/inputdata.json').subscribe(data =>
        {
          console.log(data);
          this.userId = data;
        })*/
    })
  }
  setData(userId){
  //this.userId = this.results.userId;
  console.log(userId);
  //this.results=userId.value;
  //console.log(this.results);
    
  }


}
