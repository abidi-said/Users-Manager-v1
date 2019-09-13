import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})

export class UserComponent implements OnInit {
  // Properties..
  user: User;

  // Methods..
  Constructor() {
  }
  ngOnInit() {
    this.user = {
      firstName: 'Abidi',
      lastName: 'Saïd',
      age: 27,
      address: {
        city: 'Riadh',
        country: 'Sousse',
        state: 'TN'
      }
    };
  }
}
