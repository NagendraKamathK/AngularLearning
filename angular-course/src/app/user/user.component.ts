import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { DUMMY_USERS } from './dummy-users';  
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];
}
