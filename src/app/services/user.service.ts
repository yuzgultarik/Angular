import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

// Servisler app.module.ts icerisinde providers'e eklenmeli
@Injectable()
export class UserService {
    private apiUrl = 'https://localhost:5001/api/users';
    constructor(private _httpClient: HttpClient) { }

    getAll(): Observable<any> {
        return this._httpClient.get(this.apiUrl + '/all');
    }

    createUser(user: User) {
        return this._httpClient.post(this.apiUrl + '/createUser', user);
    }
    deleteUser(deleteuserid: any) {
        // alert("alertım geldi : " + deleteuserid)
        return this._httpClient.delete(this.apiUrl + '/deleteUser/' + deleteuserid);
    }


}