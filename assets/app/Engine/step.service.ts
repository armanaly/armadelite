import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import { StepModel } from "./stepModel";
import {GlobalVariable} from "../global";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";
@Injectable()
export class StepService {

    constructor (private _http: Http) {}
    //datas;
    step = new Array();
    steps: StepModel[] = [];
    language = 'en';
    getSteps(appName): Promise<void>{
        console.log(window);
        console.log(appName);

        var query = 'app_name=' +appName;
        var completeUrl = GlobalVariable.BASE_URL+'step?'+query;
        return this._http.get(completeUrl)
            .toPromise()
            .then(response => {
                console.log(window.location)

                // const data = response.json();

                this.steps = response.json();
                let objs: any[] = [];
                let objTest = [];

                for (let i = 0; i < this.steps.length; i++) {
                    // console.log(data[i].step_id);
                    this.step[i] = (new StepModel(
                        this.steps[i].step_id,
                        this.steps[i].type,
                        this.steps[i].name,
                        this.steps[i].logo_url,
                        this.steps[i].configuration,
                        this.steps[i].master_name,
                        this.steps[i].master_type,
                        this.steps[i].conditions,
                    []));
                 }

                 if (window.location.hash == '#/admin'){
                    this.steps[0].master_type = 'admin'
                }
                console.log(this.steps);
        })
            .catch(error => Observable.throw(error));
    }
}
