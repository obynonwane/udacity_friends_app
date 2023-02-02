import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/Friend';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent implements OnInit {
  listOfFriend: Friend[] = [];
  title: string = 'List of my childhood friends';
  friendsExist: boolean = false;
  constructor() {}
  ngOnInit(): void {
    this.listOfFriend = [
      { id: 1, name: 'Wilson', age: 21, nationality: 'Kenya' },
      { id: 2, name: 'Edward', age: 20, nationality: 'Gambia' },
      { id: 3, name: 'Yahaya', age: 23, nationality: 'Nigeria' },
    ];

    this.checkFriendExist();
  }

  checkFriendExist() {
    if (this.listOfFriend.length > 0) {
      this.friendsExist = true;
    } else {
      this.friendsExist = false;
    }
  }
}
