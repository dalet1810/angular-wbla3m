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
}
