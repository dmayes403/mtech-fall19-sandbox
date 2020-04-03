import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private db: AngularFirestore,
    private router: Router,
    private http: HttpClient
  ) { }

  saveUser(user: User) {
    this.db.collection('users').add(user).then(_ => {
      this.router.navigateByUrl('/users');
    });
  }

  getUsersObservable(): Observable<User[]> {
    return this.db.collection<User>('users').valueChanges();
  }

}
