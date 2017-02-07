import {Injectable} from "@angular/core";
import {StepModel} from "../Engine/stepModel";
import { GlobalVariable } from "../global";
import {Http} from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class GridPanelService {

    constructor (private _http: Http) {}
    dataGrid = [];
    keysName = [];
    colTitle = [];

    getDatas(){
        var completeUrl = GlobalVariable.BASE_URL+'data_grid';
        return this._http.get(completeUrl)
            .map(response =>
            {
                console.log(response);
                let data = response.json();
                console.log(data);
                for (var i in data[0].config){
                    // if (key != '_id' && key != 'step_id'){
                    console.log(data[0].config[i]);
                    // console.log(key.valueOf())
                  //  if(typeof data[0].config[i] === "object"){
                    var result = "";

                    // for (var p in data[0].config[i]) {
                            if(typeof data[0].config[i].field_panel_name != 'undefined' ) {
                                //var j = 0;
                                for (var q in data[0].config[i].field_panel_values){
                                    // console.log(p)
                                    // console.log(q);
                                    // result += p + " , " + data[0].colNames[i][p] + "\n";
                                    // console.log(p+"_"+data[0].colNames[i][p][j])
                                    // this.keysName.push(p+"_"+data[0].colNames[i][p][j]);
                                    this.keysName.push(data[0].config[i].field_panel_name + '_' + data[0].config[i].field_panel_values[q].data);
                                    this.colTitle.push(data[0].config[i].field_panel_values[q].title)
                                    // console.log(data[0].colNames[i][p])
                                    //j++;
                                }
                            }

                        //}

                    else{
                        this.keysName.push(data[0].config[i].data);
                        this.colTitle.push(data[0].config[i].title)
                    }
                }
                data.shift();
                console.log(this.keysName);
                this.dataGrid = data;
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

}