import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {FormService} from "../components/form.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { GlobalVariable } from "../global";
@Injectable()
export class ProfileService {
    constructor(private _http:Http) {}

    saveDemand(form: FormService){
        // console.log('saveDemande');
        // console.log(form);
        const body = JSON.stringify(form);
        // console.log("body");
        // console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
       // return this._http.post('http://localhost:3000/demand', body, {headers: headers})
        var completeUrl = GlobalVariable.BASE_URL + 'demand';
        return this._http.post(completeUrl, body, {headers: headers})
             .map(response => response.json())
             .catch(error => Observable.throw(error.json()));
    }
}