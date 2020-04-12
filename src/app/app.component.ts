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
        {headerName: 'Make', field: 'make', resizable: true },
        {headerName: 'Model', field: 'model' , resizable: true},
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

    selectedNodes = [];
    selectData = {};         
    fixer4= function(node : any) : any {
      console.log('fixer4 keys:'+Object.keys(node));
      return node.data;
    }


onRowSelected(event) {
  console.log('selected:' + event.node.selected);
  //console.log('selected node:' + Object.keys(event.node));
  if(event.node.selected){ 
   console.log('selected row index:' + event.rowIndex);
   console.log('selected data:' + Object.keys(event));
   console.log('selected data items:'+
    event.data.make + " " + event.data.model + " $" + event.data.price);
   //event.api.getSelected();
  }
  if(event.node.selected) {
      //this.selectedNodes.push(event.data);
      this.selectedNodes = [event.data];
      this.selectData = event.data;
   }
}
kf1 = function(rowV:any): any {
 
 let r=[]; 
 let k0=Object.keys(rowV);
 for(let i=0; i<k0.length; i++) {
   r.push(k0[i] +':'+rowV[k0[i]])
 }
 return(r);
}

}
