
import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {GlobalVariable} from "../global";
import { Observable } from "rxjs/Observable";

import {User} from "./user.model";

@Injectable()
export class AuthService {
    constructor(private _http: Http){}

    signup(user: User){
        console.log(user);
        let body = JSON.stringify(user);
        let headers = new Headers({'Content-Type': 'application/json'});

        var completeUrl = GlobalVariable.BASE_URL + 'auth_signup';

         return this._http.post(completeUrl, body, {headers: headers})
             .map((res: Response) => res.json())
             .catch(error => Observable.throw(error))

    }

    signin(credentials){
        console.log("connecting");
        let body = JSON.stringify(credentials);
        let headers = new Headers({'Content-Type': 'application/json'});

        var completeUrl = GlobalVariable.BASE_URL + 'auth_signin';
        return this._http.post(completeUrl, body, {headers: headers})
            .map((res: Response) => res.json())
            .catch(error => Observable.throw(error))
    }
}