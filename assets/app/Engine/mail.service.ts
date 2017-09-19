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

    const headers = new Headers({'Content-Type': 'application/json'});
    let completeUrl = GlobalVariable.BASE_URL+'send_mail';
    return this._http.post(completeUrl, JSON.stringify(body), {headers: headers})
        .map(mailState => {return mailState})
        .catch(error => Observable.throw(error.json()));


    //     let completeUrl =  GlobalVariable.BASE_URL+'send_mail?'+'mail_id='+mail_id+'&form_id='+form_id;
    // let headers= new Headers({'Content-Type': 'application/json'});
    // let options = new RequestOptions({ headers: headers });
    // return this._http.get(completeUrl)
    //     .map(mailState => {return mailState})
    //     .catch(error => Observable.throw(error));
}

}