import {Injectable} from "@angular/core";
import {StepModel} from "../Engine/stepModel";
import { GlobalVariable } from "../global";
import {Http, Headers, RequestOptions} from "@angular/http";
import { Observable } from "rxjs/Observable";
import includes = require("core-js/fn/string/includes");

@Injectable()
export class GridPanelService {

    constructor (private _http: Http) {}
    dataGrid = [];
    keysName = [];
    colTitle = [];
    originalData = this.dataGrid;

    getDatas(grid_name){
        this.dataGrid = [];
        this.keysName = [];
        this.colTitle = [];
        let query = "grid_name="+grid_name;
        let headers= new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        var completeUrl = GlobalVariable.BASE_URL+'data_grid?'+query;
        return this._http.get(completeUrl)
            .map(response =>
            {
                console.log(response);
                let data = response.json();
                console.log(data);
                for (var i in data[0].config){
                    // if (key != '_id' && key != 'step_id'){
                    console.log(data[0].config[i]);
                    // console.lota[0].config[i] === "object"){
                    var result = "";
                    if(typeof data[0].config[i].field_panel_name != 'undefined' ) {
                        //var j = 0;
                        for (var q in data[0].config[i].field_panel_values){
                            // console.log(p)
                            // console.log(q);
                            // result += p + " , " + data[0].colNames[i][p] + "\n";
                            // console.log(p+"_"+data[0].colNames[i][p][j])
                            // this.keysName.push(p+"_"+data[0].colNames[i][p][j]);
                            this.keysName.push(data[0].config[i].field_panel_name + '_' + data[0].config[i].field_panel_values[q].data);
                            this.colTitle.push({"title":data[0].config[i].field_panel_values[q].title, "key" : data[0].config[i].field_panel_name + '_' + data[0].config[i].field_panel_values[q].data, "type": "field_panel"})
                            // console.log(data[0].colNames[i][p])
                            //j++;
                        }
                    }
                    else if(typeof data[0].config[i].type != 'undefined' ) {
                        switch (data[0].config[i].type) {
                            case 'checkbox': {
                                this.keysName.push(data[0].config[i].data);
                                this.colTitle.push({"title": data[0].config[i].title, "key": data[0].config[i].data, "type": "checkbox"})
                            }
                            break;
                        }
                    }
                    else{
                        this.keysName.push(data[0].config[i].data);
                        this.colTitle.push({"title": data[0].config[i].title, "key": data[0].config[i].data, "type": "value"})
                    }
                }
                data.shift();
                console.log(this.keysName);
                console.log(this.colTitle);
                this.dataGrid = data;
                this.originalData = this.dataGrid;
                return 'ok'
            })



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

    updateCheckBox(val){

    }

    getActivatedGrids(){
        // let query = "master="+master_name;
        let headers= new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        var completeUrl = GlobalVariable.BASE_URL+'get_grids';
        return this._http.get(completeUrl)
            .toPromise().then(response => response.json())
            .catch(error => Observable.throw(error))
    }

    filterParNom(obj, arg){

        console.log(obj);
        console.log(arg);
        console.log(this)
        let key = this.key;
        let value = this.value;
        console.log(key);
        console.log(value);
        console.log(obj[key])
        // var res = value.match(/obj[key]/g);
        if (value.indexOf(obj[key]) >=0)
        {return true}
        else {
            return false
        }
        //console.log(res);
        // if (res != null)
        // {
        //
        // // }
        // // if (obj[key] === value) {
        //      return true;
        //
        // } else {
        //     return false
        // }
    }

    filterData(value, key){
        console.log(value);
        //this.originalData = this.dataGrid;
        if (value == ''){
            this.dataGrid = this.originalData;
        }
        else {
            let result = this.dataGrid.filter(this.filterParNom, {"key":key, "value": value});
            console.log(result);
            if (result.length > 0) {
                this.dataGrid = result;
            } else {
                this.dataGrid = this.originalData;
            }
        }
        //console.log(arrByNom);
    }

    updateCheckbox(value,_id){
        // console.log('saveDemande');
        // console.log(form );

        //this._formService.arraySteps.push({"step_id": currentStep});
        let body = JSON.stringify({"value" : value, "_id": _id});
        //
        // console.log("body");
        // console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        // return this._http.post('http://localhost:3000/demand', body, {headers: headers})
        var completeUrl = GlobalVariable.BASE_URL + 'update_checkbox';
        return this._http.post(completeUrl, body, {headers: headers})
            .map(response => response)
            .catch(error => Observable.throw(error.json()));
    }

}