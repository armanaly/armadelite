import {Injectable} from "@angular/core";
import {StepModel} from "../Engine/stepModel";
import { GlobalVariable } from "../global";
import {Http, Headers} from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ExportService {

    constructor (private _http: Http) {}


    toExcel(course_type,stage){
        let body = JSON.stringify({"course_type" : course_type, "stage": stage});

        // const headers = new Headers({'Content-Type': 'application/json'});
        const headers = new Headers({'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'Content-Disposition' : 'attachment; filename=sheet.xlsx'});
        var completeUrl = GlobalVariable.BASE_URL + 'export_excel';
        return this._http.post(completeUrl, body, {headers: headers})
            .map(response => response)
            .catch(error => Observable.throw(error.json()));
    }

}