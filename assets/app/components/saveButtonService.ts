import {Injectable} from "@angular/core";
import { GlobalVariable } from "../global";
import {Http, Headers} from "@angular/http";
import { Observable } from "rxjs/Observable";
import {FormService} from "../vehicule/form.service";

@Injectable()
export class SaveButtonService {

    constructor (private _http: Http, private _formService: FormService) {}

    saveDatas(currentStep){
        // console.log('saveDemande');
        // console.log(form);

        this._formService.arraySteps.push({"step_id": currentStep});
        let body = JSON.stringify(this._formService.arraySteps);

        console.log("body");
        console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        // return this._http.post('http://localhost:3000/demand', body, {headers: headers})
        var completeUrl = GlobalVariable.BASE_URL + 'save_datas';
        return this._http.post(completeUrl, body, {headers: headers})
            .map(response => response)
            .catch(error => Observable.throw(error.json()));
    }

}