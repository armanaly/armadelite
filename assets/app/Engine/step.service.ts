import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import { StepModel } from "./stepModel";
import {GlobalVariable} from "../global";
@Injectable()
export class StepService {

    constructor (private _http: Http) {}

    steps: StepModel[] = [];
    language = '';
    languages = [];
    template: '';
    menu_level = 0

    getSteps(appName): Promise<void>{
        var query = 'app_name=' +appName;
        var completeUrl = GlobalVariable.BASE_URL+'step?'+query;
        return this._http.get(completeUrl)
            .toPromise()
            .then(response => {
                this.steps = response.json();
                this.language = response.json()[0].default_language;
                this.languages = response.json()[0].languages;
                this.template = response.json()[0].design;
                this.menu_level = response.json()[0].menu_level;

                this.steps.splice(0,1);
                console.log(window.location.hash);
                if (window.location.hash == '#/admin'){
                    this.steps[0].master_type = 'admin';
                }
                else this.steps[0].master_type = 'form';

                console.log(this.steps)
        })
            .catch(error => console.log(error.json()));
    }
}
