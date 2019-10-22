import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  place='sod';
  cost=12.3;
  columns=['name','place','cost'];
  tab2=[
    {name:'yasha', place:'makom', cost:3.0},
    {name:'sasha', place:'trantor', cost:11.2},
    {name:'mitya', place:'bilek', cost:9.73}
  ];

  columnDefs = [
        {headerName: 'Make', field: 'make' },
        {headerName: 'Model', field: 'model' },
        {headerName: 'Price', field: 'price', width: 100}
  ];

  rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make:'Citroen', model:'2CV', price:5000 }
  ];
  
  fixed2 = function(x: string): string 
    {return parseFloat(x).toFixed(2);};
}
