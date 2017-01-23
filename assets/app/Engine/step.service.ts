import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import { StepModel } from "./stepModel";
import {GlobalVariable} from "../global";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
@Injectable()
export class StepService {
    datas;
    constructor (private _http: Http) {}
    steps: any;
    step: StepModel[] = [];
    getSteps(){
        var completeUrl = GlobalVariable.BASE_URL+'step';
        return this._http.get(completeUrl)
            .map(response => {
                console.log(response.json());
                const data = response.json();

                this.steps = response.json();
                let objs: any[] = [];
                let objTest = [];
                console.log("data");
                console.log(data);
                for (let i = 0; i < data.length; i++) {
                    console.log(data[i].step_id);
                    this.step.push(new StepModel(
                        data[i].step_id,
                        data[i].type,
                        data[i].name,
                        data[i].configuration,
                        data[i].master_name,
                        data[i].master_type));
                //     console.log(step);
                     //objs.push(step);
                //     console.log(objs);
                //   //  objTest.push(step);
                }
                //this.step = objs;
                console.log(this.step[0]);
                for (let i = 0; i < this.step.length; i++) {
                    console.log(this.step[i].step_id);
                }


                //console.log(objTest);
                return objs;

        })
            .catch(error => Observable.throw(error));
    }

}