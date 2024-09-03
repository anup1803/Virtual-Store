import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  value1:string=""
  value2:string=""
  name:string=""
  togle:boolean=true
  displayConsole(event:any){
    console.log(event.target.value)
  }
  displayOnClick(event:any){
    this.value2=event.target.value;                                                                                                                                                                                                    
  }
  showSearch(value:boolean){
    this.togle=value;
  }

}
