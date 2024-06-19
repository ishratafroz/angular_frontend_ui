import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-chat-users-list',
  templateUrl: './chat-users-list.component.html',
  styleUrls: ['./chat-users-list.component.css']
})
export class ChatUsersListComponent implements OnInit {
  users: any[] = [
    { name: 'User 1', online: true },
    { name: 'User 2', online: true },
    { name: 'User 3', online: true },
    // Add more user objects as needed
  ];
  filteredUsers: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filteredUsers = this.users; // Initially display all users

  }
  filterUsers(): void {
    const searchInput = (document.getElementById('search-bar') as HTMLInputElement).value.toLowerCase();
    if (searchInput) {
      this.filteredUsers = this.users.filter(user => user.name.toLowerCase().includes(searchInput));
    } else {
      this.filteredUsers = this.users;
    }
  }
//  highlight(name: string): string {
//     const searchInput = (document.getElementById('search-bar') as HTMLInputElement).value.toLowerCase();
//     if (!searchInput) {
//       return name;
//     }
//     const regex = new RegExp(`(${searchInput})`, 'gi');
//     return name.replace(regex, '<span class="highlight">$1</span>');
//   }

}
