import {Http, RequestOptions, Headers, Response} from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";


// import { Marque } from "./marque";
import { GlobalVariable } from "../global";
import {StepService} from "./step.service";
import {FormService} from "../components/form.service";
import {StepModel} from "./stepModel";
@Injectable()
export class CollectionService { 

     constructor (private _http: Http, private _formService: FormService, private _stepService: StepService) {}
    /*
        PARAMS: collName --> Name of the collection where are stored the data
                filters  --> Object with the filter name and the step_id where is stored the value of the filter
                select   --> The value that will be retrieved in the collection and displayed on the screen
     */
    getFormData(_id, collName, filters, select){
        let filtersNameToString = [];
        let filtersValueToString = [];
        for (let i=0; i< filters.length;i++) {
            filtersNameToString.push(filters[i].field);
            filtersValueToString.push(this.getValueSelected(filters[i].step_id));
        }

        var query = '_id=' +_id + '&collName=' + collName + '&filters_name=' + filtersNameToString + '&filters_value=' + filtersValueToString;

        let completeUrl =  GlobalVariable.BASE_URL+'getFormData?'+query;
        //return Promise.resolve (this._http.get(completeUrl)
        //  let body = { "filters": filters, "collName" : collName};
        let headers= new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this._http.get(completeUrl)
            .map((response : Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))




        // return this._http.get(completeUrl)
        //     .toPromise()
        //     .then(response =>response.json())
        //     .catch(error => Observable.throw(error))

    }

    getDatas(collName, filters, select, type) {
        var filtersNameToString = []
        var filtersValueToString = []
        console.log(filters);
        console.log("FIELD FILTER SIZE")
        console.log(filters);
        console.log(select);
        let query = 'col_name=' + collName + '&return_type=' + type
        if (filters.length > 0 ) {

            for (var i = 0; i < filters.length; i++) {
                filtersNameToString.push(filters[i].field);
                filtersValueToString.push(encodeURIComponent(this.getValueSelected(filters[i].step_id)));

                console.log(filtersValueToString);
                // filtersValueToString.push('AUDI');
            }

            // for (var i=0; i< filters.length;i++) {
            //     for (var j=0; i< filters[j].field.length;j++) {
            //         filtersNameToString.push(filters[i].field[j]);
            //         filtersValueToString.push(this.getValueSelected(filters[i].step_id[j]));
            //     }


            query = query + '&filters_name=' + filtersNameToString + '&filters_value=' + filtersValueToString;
        }
        else{
            query = query + '&filters_name=&filters_value=';
        }

        if (select != ''){
            query = query + '&select=' + select;
        }
       // console.log(filtersToString);
        let completeUrl =  GlobalVariable.BASE_URL+'custom_collection?'+query;
        //return Promise.resolve(this._http.get(completeUrl)
      //  let body = { "filters": filters, "collName" : collName};
        let headers= new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        console.log('before GET')
        // let myPromise = new Promise((resolve, reject) => {
        //
        // })
        return this._http.get(completeUrl)
            .toPromise()
            .then(response =>response.json())
            .catch(error => Observable.throw(error))

    }

    private getValueSelected(stepId) {
        console.log(this._formService);
        console.log(this._stepService);
        //RETRIEVE IN STEP CONFIG FILE THE NAME OF SAVED VALUE FOR THE SPECIFIED STEP
        for (var item of this._stepService.steps) {
            if (item.step_id == stepId) {
                var valueForFormService = item.configuration.form_value.name;
            }
        }
        console.log(valueForFormService);
        // RETURN THE CONTENT OF VARIABLE PICKED UP IN STEP SERVICE
        for (let item of this._formService.arraySteps as Array<StepModel>) {
            if (typeof eval('item.' + valueForFormService) != 'undefined') {
                return eval('item.' + valueForFormService);
            }
        }
        // return valueSelected;
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    }

