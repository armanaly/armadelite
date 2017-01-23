import {Injectable} from "@angular/core";
import {StepModel} from "../Engine/stepModel";
import { GlobalVariable } from "../global";
import {Http} from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class GridPanelService {

    constructor (private _http: Http) {}


    getDatas(){
        var completeUrl = GlobalVariable.BASE_URL+'data_grid';
        return this._http.get(completeUrl)
            .map(response => response.json())
            // {
            //     const data = response.json();
            //     // let objs: any[] = [];
                // for (let i = 0; i < data.length; i++) {
                //     let step = new StepModel(data[i].step_id, data[i].type, data[i].configuration);
                //     objs.push(step);
                //
                // }
                // return objs;
            //})
            .catch(error => Observable.throw(error))
    }

}