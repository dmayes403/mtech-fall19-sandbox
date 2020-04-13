import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('fadeInAndOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1}))
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0}))
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {
  user$: Observable<User[]>;
  users: User[] = [];

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.user$ = this.userService.getUsersObservable();

    this.userService.getUsersObservable().subscribe(users => {
      this.users = users.map(user => {
        return {
          ...user,
          show: true
        };
      });
      console.log(this.users);
    });
  }

  deleteUser(date: Date) {
    const selected = this.users.filter(user => date === user.creationDate);
    selected[0].show = false;
  }
}
