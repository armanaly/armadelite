import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import { StepModel } from "./stepModel";
import {GlobalVariable} from "../global";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";
@Injectable()
export class StepService {

    constructor (

        private _http: Http
      )
    {}

    datas;
    steps: any;
    step: StepModel[] = [];
    //appName = '';

    getSteps(appName): Promise<void>{
        console.log(window);
        //let appName = "ballet";
        //let appName = this.route.snapshot.queryParams["app"];
        console.log(appName);
        var query = 'app_name=' +appName;
        var completeUrl = GlobalVariable.BASE_URL+'step?'+query;
        return this._http.get(completeUrl)
            .toPromise()
            .then(response => {
                console.log(window.location)

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
                        data[i].master_type,
                    []));
                //     console.log(step);
                     //objs.push(step);
                //     console.log(objs);
                //   //  objTest.push(step);
                }
                //this.step = objs;
                if (window.location.hash == '#/admin'){
                    this.steps[0].master_type = 'admin'


                }

                 console.log(this.step[0]);
                // for (let i = 0; i < this.step.length; i++) {
                //     console.log(this.step[i].step_id);
                // }


                //console.log(objTest);
             //   return objs;

        })
            .catch(error => Observable.throw(error));
    }

}