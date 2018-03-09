import {Injectable} from "@angular/core";
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
    keysName_details = [];
    colTitle_details = [];
    config ={ "export":false,"export_id":0, "details_activated": false, "group": false}
    // config = {"export":false,"export_id":0, "details_activated": false};
    // config = {"export":false,"export_id":0, "details_activated""};
    originalData = this.dataGrid;
    key;
    value;

    getDatas(grid_name,valeur){
        this.keysName = [];
        this.colTitle = [];

        let query = "grid_name="+grid_name+"&filter="+valeur;
        let completeUrl = GlobalVariable.BASE_URL+'data_grid?'+query;
        return this._http.get(completeUrl)
            .map(response =>
            {
                let data = response.json();
                this.config = data[0];

                console.log(this.config);
                console.log(this.config.group);
                console.log(this.config.details_activated);
                for (var i in data[0].config){
                    // if (key != '_id' && key != 'step_id'){
                    // console.log(data[0].config[i]);
                    // console.lota[0].config[i] === "object"){
                    var result = "";
                    /* FIELDS PANEL */
                    if(typeof data[0].config[i].field_panel_name != 'undefined' ) {
                        //var j = 0;
                        for (var q in data[0].config[i].field_panel_values){
                            this.keysName.push(data[0].config[i].field_panel_name + '_' + data[0].config[i].field_panel_values[q].data);
                            let objColTitle = {title:'',key:'',type:'', filterable: false, filter_type: "text", data_combo: []}
                            objColTitle.title = data[0].config[i].field_panel_values[q].title;
                            objColTitle.key = data[0].config[i].field_panel_name + '_' + data[0].config[i].field_panel_values[q].data;
                            objColTitle.type = "field_panel";

                            if (typeof (data[0].config[i].field_panel_values[q].filterable) != 'undefined'){
                                objColTitle.filterable = true;
                                if (typeof (data[0].config[i].field_panel_values[q].filter_type) != 'undefined'){
                                    objColTitle.filter_type = data[0].config[i].field_panel_values[q].filter_type
                                }
                            }
                            this.colTitle.push(objColTitle);
                        }
                    }
                    /* CHECK BOX OR COMBO */
                    else if(typeof data[0].config[i].type != 'undefined' ) {
                        switch (data[0].config[i].type) {
                            case 'checkbox': {
                                this.keysName.push(data[0].config[i].data);
                                this.colTitle.push({"title": data[0].config[i].title, "key": data[0].config[i].data, "type": "checkbox"})
                                break;
                            }
                            case 'combo': {
                                this.keysName.push(data[0].config[i].data);
                                this.colTitle.push({
                                    "title": data[0].config[i].title,
                                    "key": data[0].config[i].data,
                                    "type": "combo"
                                })
                                break;
                            }
                        }
                    }
                    /* VALUE FROM BUTTON */
                    else{
                        let keyName = data[0].config[i].data;
                        this.keysName.push(keyName);

                        /* IF FIELD CAN BE FILTERED */
                        if (typeof (data[0].config[i].filterable) != 'undefined'){
                            /* FILTERING BY TEXT BY DEFAULT */
                            let filter_type = 'text'
                            let data_combo = [" ALL"];
                            if (typeof (data[0].config[i].filter_type) != 'undefined' || data[0].config[i].filter_type == 'combo' ){

                                filter_type = data[0].config[i].filter_type;
                                let x = 0
                                for (let filterValue of data){
                                    if (x == 0) { x++}
                                    else {
                                        if (data_combo.indexOf(filterValue[keyName]) == -1) {
                                            data_combo.push(filterValue[keyName])
                                        }
                                    }
                                }
                                data_combo.sort()
                            }


                            this.colTitle.push({
                                "title": data[0].config[i].title,
                                "key": data[0].config[i].data,
                                "type": "standard",
                                "filterable" : true,
                                "filter_type": filter_type,
                                "data_combo": data_combo});
                            }
                        else {
                            this.colTitle.push({
                                "title": data[0].config[i].title,
                                "key": data[0].config[i].data,
                                "type": "standard",
                                "filterable": false
                            })
                        }
                    }
                }
                // DETAILS DATA
                 for (let i in data[0].config_details){
                     switch (data[0].config_details[i].type) {
                        case 'file_details': {
                            this.keysName_details.push(data[0].config_details[i].file_name);
                            this.colTitle_details.push({
                                "title": data[0].config_details[i].label,
                                "key": data[0].config_details[i].file_name,
                                "type": "file"})
                            break;
                        }
                         case 'field': {
                             this.keysName_details.push(data[0].config_details[i].data);
                             this.colTitle_details.push({
                                 "title": data[0].config_details[i].label,
                                 "key": data[0].config_details[i].data,
                                 "type": "field",
                                 "editable": data[0].config_details[i].editable})
                         }
                     }
                 }
                data.shift();
                // console.log(this.keysName);
                // console.log(this.colTitle);
                this.dataGrid = data;
                this.originalData = this.dataGrid;
                return 'ok'
            })
            .catch(error => Observable.throw(error))
    }

    getActivatedGrids(master_name){

        let body = JSON.stringify({"master" : master_name});
        const headers = new Headers({'Content-Type': 'application/json'});
        var completeUrl = GlobalVariable.BASE_URL + 'get_grids';
        return this._http.post(completeUrl, body, {headers: headers})
            .toPromise().then(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    filterParNom(obj, arg){
        let key = this.key;
        let value = this.value;

        if (obj[key].toUpperCase().substr(0, value.length) == value.toUpperCase()) { return true }

        return false
    }

    filterData(value, key){
        this.dataGrid = this.originalData;
        if (value != ' ALL'){
            let result = this.dataGrid.filter(this.filterParNom, {"key":key, "value": value});
            if (result.length > 0) {
                this.dataGrid = result;
            }
        }
    }

    updateCheckbox(value,_id,master,app_name, field_name){
        // console.log('saveDemande');
        // console.log(form );

        //this._formService.arraySteps.push({"step_id": currentStep});
        let body = JSON.stringify({"value" : value, "_id": _id, "master": master, "appName": app_name, "field_name": field_name });
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
    changeCourse(course_type, user_id){
        console.log(course_type);
        console.log(user_id);

        let body = JSON.stringify({"course_type" : course_type, "_id": user_id});

        const headers = new Headers({'Content-Type': 'application/json'});
        var completeUrl = GlobalVariable.BASE_URL + 'update_course_type';
        return this._http.post(completeUrl, body, {headers: headers})
            .map(response => response)
            .catch(error => Observable.throw(error.json()));


    }
}