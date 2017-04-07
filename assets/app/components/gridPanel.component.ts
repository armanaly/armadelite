import {Component, Input, Output, EventEmitter} from '@angular/core'
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {FormService} from "./form.service";
import {GridPanelService} from "./gridPanel.service";
import {Router, NavigationExtras, ActivatedRoute} from '@angular/router';
import {isObject} from "rxjs/util/isObject";
import {StepService} from "../Engine/step.service";
import {Http} from "@angular/http";
@Component({
    selector: 'grid-panel',
    template: `
            <!--<div align="left">-->
                <!--<nav>-->
                <!---->
                    <!--<div class="col-md-3">-->
                        <!--<button type="button" class="btn btn-success glyphicon glyphicon-plus" (click)="this.router.navigate(['/step'])" >Add new line</button>-->
                    <!--</div>-->
                <!--</nav>-->
                <!---->
            <!--</div>-->
          
              
              <nav class="form-navArrow">
                        <button><i class="glyphicon glyphicon-triangle-left" (click)="this.router.navigate(['/'])" ></i></button>
              </nav>
                <div class="panel-body">
               <div class="page-header"><table><tr><td>
                             <nav class="form-navArrow">
                        <button><i class="glyphicon glyphicon-triangle-left" (click)="this.router.navigate(['/'])" ></i></button>
              </nav>
                </td>
                 <h1>{{grid_name}}</h1>
                </tr></table></div>
                <div class="table-responsive" *ngIf="display">
                    <table class="table table-hover table-condensed"  >
                        <tr>
                            <th *ngFor="let obj of _gridService.colTitle;let i = index">
                                <div>{{obj.title}}&nbsp; <button  class="glyphicon glyphicon-filter" 
                                                        type="button" 
                                                        (click)="showFilterInput(i)">
                                                </button><br>
                                                 <input   
                                        *ngIf="showInput[i] == true"
                                        type="text" 
                                        id="{{obj.key}}"
                                        name="{{obj.key}}"
                                        (keyup)="filter($event)"
                                     >
                                     <br>
                                     
                                                 </div>
                                <!--<table><tr><td> </td>-->
                                        <!--<td>   <button  class="glyphicon glyphicon-filter" -->
                                                        <!--type="button" -->
                                                        <!--(click)="showFilterInput(i)">-->
                                                <!--</button> -->
                                        <!--</td></tr>-->
                                    <!--<tr><td>-->
                                    <!--<input   -->
                                        <!--*ngIf="showInput[i] == true"-->
                                        <!--type="text" -->
                                        <!--id="{{obj.key}}"-->
                                        <!--name="{{obj.key}}"-->
                                        <!--(keyup)="filter($event)"-->
                                     <!--&gt;</td>-->
                                     <!--</tr>-->
                                 <!--</table>-->
                            </th>
                            
                        </tr>
                        <tr *ngFor="let item of _gridService.dataGrid">
                            <td *ngFor="let key of _gridService.keysName;let i = index" align="center">
                                 <!--{{item}}-->
                                                     
                                <span *ngIf="!filterActivated && this._gridService.colTitle[i].type != 'checkbox' "> {{item[key]}}  </span>
                                
                                <span *ngIf="this._gridService.colTitle[i].type == 'checkbox' "> 
                                    <input *ngIf="item[key]" type="checkbox" value="{{item[key]}}" checked (change)=updateCheckBox($event,item) /> 
                                    <input *ngIf="item[key] == false" type="checkbox" value="{{item[key]}}" (change)=updateCheckBox($event,item) /> 
                                </span>
                                <!--<span *ngIf=""-->
                            </td>
                            
                            <td  *ngIf="this._stepService.steps[0].master_type == 'workflow'"> <button class="btn btn-success" type="button" (click)="goToCurrentStep(item)" value="{{item.step_id}} ">Current step </button></td>
                        </tr>
                    </table>
                </div>
               
            </div>
            
    `
})

 export class GridPanelComponent {

   // router = new Router;
    constructor(private _stepService: StepService, private _gridService: GridPanelService, private router: Router,
                private route: ActivatedRoute, private _http: Http){}
    display = false;
    // myListData2 = [{"age": 15,"duration":"5"}];
    // keysName2 = ["age"];
    myListData = [];// =  this._gridService.dataGrid;
    grid_name;
    //keysName = this._gridService.keysName;
keysName = [];
    showInput = [];
filterActivated = false;
    ngOnInit() {

        // var myArray = [0, 9, 8, 3, 3, 3, 5, 9, 5, 0];
        // var newArray = [];
        // myArray.sort();
        // newArray.push(myArray[0]);
        //
        // var myArray = [0, 9, 8, 3, 3, 3, 5, 9, 5, 0];
        // var newArray = [];
        //
        // newArray.push(myArray[0]);
        //
        // for (let i = 1; i < myArray.length; i++) {
        //     if (newArray.includes(myArray[i]) == false )
        //     {
        //         newArray.push(myArray[i]);
        //     }
        // }
        //
        // newArray.sort();

        // console.log(myArray);
        // console.log(newArray);

        this.grid_name = this.route.snapshot.queryParams["grid_name"];

        this._gridService.getDatas(this.grid_name)
            .subscribe(data => {
                console.log(data)
                },
        error => console.log(error)
    )


        for (let i = 0; i < this._gridService.colTitle.length; i++) {
            this.showInput.push(false);
        }

        this.myListData = this._gridService.dataGrid;
        this.keysName = this._gridService.keysName;

        console.log(this._gridService.keysName);
        console.log(this._gridService);
        this.display = true;

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

    showFilterInput(idx){
        if (this.showInput[idx] == true)
        {
            this.showInput[idx] = false;
        }else{
            this.showInput[idx] = true;
        }
    }

    checkUndefined(value){
        console.log(value);
        console.log(typeof value === 'undefined')
        return (typeof value === 'undefined');
    }

    updateCheckBox($event, item){
       // let value = $event.target.getAttribute('value');
        let value =$event.target.checked;
console.log(item)
        this._gridService.updateCheckbox(value,item._id)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            )
      // console.log(value);
      //  console.log(val2);

    }

    filter(event: any){
        console.log(event.target);
        //if (event.target.value ==''){
        console.log("passe par grid cmp");
            //}else {
        console.log(event);
        console.log(this. _gridService.dataGrid);
        this._gridService.filterData(event.target.value, event.srcElement.id);}
        //  this.filterActivated = true;
    //}

}