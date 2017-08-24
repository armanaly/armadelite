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

    getSteps(appName): Promise<void>{
        console.log(window);
        console.log(appName);

        var query = 'app_name=' +appName;
        var completeUrl = GlobalVariable.BASE_URL+'step?'+query;
        return this._http.get(completeUrl)
            .toPromise()
            .then(response => {
                console.log(window.location)

                const data = response.json();

                this.steps = response.json();
                let objs: any[] = [];
                let objTest = [];
                console.log("data");
                console.log(data);
                // console.log(this.steps);
                // VIRE STEP CAR INUTILE
                for (let i = 0; i < data.length; i++) {
                    // console.log(data[i].step_id);
                    this.step[i] = (new StepModel(
                        data[i].step_id,
                        data[i].type,
                        data[i].name,
                        data[i].configuration,
                        data[i].master_name,
                        data[i].master_type,
                        data[i].conditions,
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
