import {Injectable} from "@angular/core";
import {StepModel} from "../Engine/stepModel";
import { GlobalVariable } from "../global";
import {Http, Headers, ResponseContentType} from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ExportService {

    constructor (private _http: Http) {}


    toExcel(course_type,stage,export_id){

        let body = JSON.stringify({"course_type" : course_type, "stage": stage, "export_id": export_id});
        let headers= new Headers({'Content-Type': 'application/json'});
        // headers.append('Content-Type', 'application/json');
      // headers.append('responseType', ResponseContentType.Blob);
        // const headers = new Headers({'Content-Type':  'application/octet-stream'});
        // const headers = new Headers({'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        //     'Content-Disposition' : 'attachment; filename=sheet.xlsx'});
        var completeUrl = GlobalVariable.BASE_URL + 'export_excel';
        return this._http.post(completeUrl, body, {  headers: headers, responseType: ResponseContentType.Blob }
        )        // return this._http.post(completeUrl, body, {headers: headers})
            .map(response => response.blob())
            .catch(error => Observable.throw(error));
    }

}