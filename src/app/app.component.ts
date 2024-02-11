import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elements = [
    "Lorem ipsum dolor",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ];

  onSubmit(e:any){
    e.preventDefault();
    const newValue = e.target.elements.title.value;
    this.elements.push(newValue);
    e.target.reset();
  }
  elementDelete(i: number){
    this.elements.splice(i,1);

  }
}
