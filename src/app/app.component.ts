import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'PayPal';


  loggedIn() {
    if (localStorage.getItem('loggedIn') != null && localStorage.getItem('started')!=null) {
      return true;
    }
    return false;
  }

  
}
