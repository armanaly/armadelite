/*
    This file will send the file uploaded the the filestack Rest API
 */

import { Injectable } from "@angular/core";
import {StepService} from "../Engine/step.service";
import { Observable } from "rxjs/Observable";
import {Http, Headers, RequestOptions} from "@angular/http";
import {GlobalVariable} from "../global";
@Injectable()
export class FileUploadService {

    constructor (private _http: Http, private _stepService: StepService) {}

    storeFile(fileUploaded) {

        console.log(fileUploaded);
         //let options = new RequestOptions({ headers: headers });

         let body = fileUploaded;
         console.log(body);
         const headers = new Headers({'Content-Type': 'multipart/form-data'});
         var completeUrl = GlobalVariable.BASE_URL + 'store_file';
        return this._http.post(completeUrl, body, {headers: headers})
            .map(response => response)
            .catch(error => Observable.throw(error.json()));



    }
}