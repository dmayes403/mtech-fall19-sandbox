import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private db: AngularFirestore
  ) { }

  getUser(): Observable<User> {
    return this.db.doc<User>('users/AosP9V2B3aqwj8zqfDYW').valueChanges();
  }

  saveUser(user: User) {
    this.db.doc('users/AosP9V2B3aqwj8zqfDYW').set(user);
  }
}
