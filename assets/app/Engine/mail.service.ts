import {Http, RequestOptions, Headers, Response} from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { GlobalVariable } from "../global";
import {StepService} from "./step.service";
import {FormService} from "../components/form.service";

@Injectable()

export class MailService {

    constructor(private _http: Http, private _formService: FormService, private _stepService: StepService) {
    }

    sendMail(mail_id, form_id,appName){
        let body = { "mail_id": mail_id, "form_id": form_id, "app_name": appName}
        console.log(form_id)
        const headers = new Headers({'Content-Type': 'application/json'});
        let completeUrl = GlobalVariable.BASE_URL+'send_mail';
        return this._http.post(completeUrl, JSON.stringify(body), {headers: headers})
            .map(mailState => {return mailState})
            .catch(error => Observable.throw(error.json()));

}


    logMail(key, value, appName){
        console.log(appName)
        this._formService.arraySteps.push({"current_key": key, "value_to_update": value ,"app_name" : appName});
        //this._formService.arraySteps.push()
        let body = this._formService.arraySteps;

        //SAVE FORM DATA INTO COLLECTION
        const headers = new Headers({'Content-Type': 'application/json'});
        var completeUrl = GlobalVariable.BASE_URL + 'log_mail';
        return this._http.post(completeUrl, JSON.stringify(body), {headers: headers})
            .map(response => response)
            .catch(error => Observable.throw(error.json()));
    }
}