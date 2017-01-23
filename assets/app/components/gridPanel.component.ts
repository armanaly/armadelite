import {Component, Input, Output, EventEmitter} from '@angular/core'
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {FormService} from "../vehicule/form.service";
import {GridPanelService} from "./gridPanel.service";
import {Router, NavigationExtras} from '@angular/router';
import {isObject} from "rxjs/util/isObject";
@Component({
    selector: 'grid-panel',
    template: `
            <div class="row" align="center">
                
            <div  class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/grid']"> Data grid </a></button></div>
            <div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/step']"> Nouveau flow</a></button></div>
            <div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/']"> Contacts </a></button></div>
            <div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/']"> Documents </a></button></div>
            </div>
            
            <div class="panel-body">
                <div class="table-responsive">
                    <table class="table table-hover table-condensed " *ngIf="display">
                        <tr *ngFor="let item of myListData">
                            <td *ngFor="let key of keysName">
                                <!--{{item["profile"]["nom"]}}-->
                               <!--{{item[eval(key)]}}-->
                                 {{item[key]}}
                            </td>
                            <td  *ngIf="this._stepService.step[0].master_type == 'workflow'"> <button class="btn btn-success" type="button" (click)="goToCurrentStep(item)" value="{{item.step_id}} ">Current step </button></td>
                        </tr>
                    </table>
                </div>
            </div>
    `

})

 export class GridPanelComponent {

   // router = new Router;
    constructor(private _gridService: GridPanelService, private router: Router){}
    display = false;
    myListData = [];
    keysName = [];


    ngOnInit() {

        this._gridService.getDatas()
        .subscribe(data => {
                console.log("data From gridServiceGetDatas");
                console.log(data);
            for (var i in data[0].colNames){
                // if (key != '_id' && key != 'step_id'){
                    console.log(data[0].colNames[i]);
                    // console.log(key.valueOf())
                    if(typeof data[0].colNames[i] === "object"){
                        var result = "";

                        for (var p in data[0].colNames[i]) {
                            if( data[0].colNames[i].hasOwnProperty(p) ) {
                                var j = 0;
                                for (var q in data[0].colNames[i][p]){
                                    console.log(p)
                                    console.log(q);
                                    result += p + " , " + data[0].colNames[i][p] + "\n";
                                    console.log(p+"_"+data[0].colNames[i][p][j])
                                    this.keysName.push(p+"_"+data[0].colNames[i][p][j]);
                                    // console.log(data[0].colNames[i][p])
                                    j++;
                                }
                            }

                        }
                    }
                    else{
                        this.keysName.push(data[0].colNames[i]);
                    }
            }

            console.log(this.keysName);
            this.myListData = data;
            this.display = true;

        },
            error => console.log(error)
        )


}
    goToCurrentStep(item){
        console.log(item);
        let navigationExtras: NavigationExtras = {
            queryParams: { 'current_id': item.step_id, '_id': item._id }

        };

        this.router.navigate(['/step'], navigationExtras);
    }

    isObject(item) {
        return (typeof item === "object" && !Array.isArray(item) && item !== null);
    }


}