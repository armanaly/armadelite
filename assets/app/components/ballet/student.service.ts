import {Injectable} from "@angular/core";
import { GlobalVariable } from "../../global";
import {Http, Headers, RequestOptions} from "@angular/http";
import { Observable } from "rxjs/Observable";
import {Student} from "./student";

@Injectable()
export class StudentService {

    constructor (private _http: Http) {}
    dataGrid = [];
    keysName = [];
    colTitle = [];
    keysName_details = [];
    colTitle_details = [];
    originalData = this.dataGrid;

    updateStudent(data) {
        let body = data;

        console.log("body");
        console.log(body);



        const headers = new Headers({'Content-Type': 'application/json'});
        var completeUrl = GlobalVariable.BASE_URL + 'update_student';
        return this._http.post(completeUrl, JSON.stringify(body), {headers: headers})
            .map(response => response)
            .catch(error => Observable.throw(error.json()));

    }

}