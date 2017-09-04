import {Component, Input, Output, EventEmitter} from '@angular/core'
import {GridPanelService} from "./grid.service";
import {Router, NavigationExtras, ActivatedRoute} from '@angular/router';
import {StepService} from "../Engine/step.service";
import {Http} from "@angular/http";
@Component({
    selector: 'grid-panel',
    template: `
             
               
               
               <div class="panel-heading panel-heading-custom" align="center">
                 <div  class="row" align="left">
                  <div class="col-md-2">
                    <nav class="form-navArrow">
                       <!--<a [routerLink]="['/menu']" [queryParams]="{'firstLoad': false}">-->
                       <a [routerLink]="['/']" >
                           <button class="btn btn-warning"><i class="glyphicon glyphicon-triangle-left" ></i>BACK</button></a>
                    </nav>
                  </div>
                 <div class="col-md-10" align="center">
                     <h2 *ngIf="valeur != ''">{{valeur}}</h2>
                     <h3>{{grid_name}}</h3>
                 </div>
               </div>
               </div>
                <div class="panel-body">
               <div class="table-responsive" *ngIf="display">
                    <table class="table table-hover table-condensed"  >
                        <tr>
                            <th *ngFor="let obj of _gridService.colTitle;let i = index">
                                <div *ngIf="obj.filterable">{{obj.title}}&nbsp; 
                                    <button  
                                        class="glyphicon glyphicon-filter" 
                                        type="button" 
                                        (click)="showFilterInput(i)">
                                    </button>
                                    <br>
                                    <input   
                                        *ngIf="showInput[i] == true"
                                        myAutofocus="true"
                                        type="text" 
                                        id="{{obj.key}}"
                                        name="{{obj.key}}"
                                        (keyup)="filter($event)"
                                     >
                                     <br>
                                     
                                </div>

                            </th>
                            
                        </tr>
                        <tr *ngFor="let item of _gridService.dataGrid;let j = index">
                            <td *ngFor="let key of _gridService.keysName;let i = index" align="center">
                                                     
                                <span *ngIf="!filterActivated && _gridService.colTitle[i].type != 'checkbox' "> {{item[key]}}  </span>
                                
                                <span *ngIf="this._gridService.colTitle[i].type == 'checkbox' "> 
                                    <input *ngIf="item[key]" type="checkbox" value="{{item[key]}}" checked (change)=updateCheckBox($event,item) /> 
                                    <input *ngIf="item[key] == false" type="checkbox" value="{{item[key]}}" (change)=updateCheckBox($event,item) /> 
                                </span>
                            </td>
                            
                            <td *ngIf="master && master == 'ballet'">
                                <a [routerLink]="['/editStudent', item._id] "> 
                                    <button class="btn btn-primary" type="button" > 
                                        <i class="glyphicon glyphicon-edit"> </i>
                                    </button>
                                </a> 
                            </td>

                            
                            <!--*ngIf="item.group_mgt"-->
                            <td *ngIf="master && master == 'ballet'" >
                                <a [routerLink]="['/groupManagement', item._id, grid_name, valeur] ">
                                    <button class="btn btn-primary" type="button">{{item.stage}} Group </button>
                                </a> 
                            </td>
                            <!-- IF DETAILS IS ACTIVATED IN GRID CONFIG COLLECTION -->
                            <td *ngIf="item.details.activated">
                                <a [routerLink]="['/details', item._id] ">
                                    <button class="btn btn-primary" type="button"> Detail </button>
                                </a> 
                            </td>
                            <!-- MODAL <td *ngIf="item.details.activated"><button class="btn btn-success" type="button" data-toggle="modal" data-target="#myModal">DETAIL </button></td>-->
                            
                            <!--IF WORKFLOW TYPE BTN TO GO BACK TO CURRENT STEP -->
                            <td *ngIf="this._stepService.steps[0].master_type == 'workflow'"> <button class="btn btn-success" type="button" (click)="goToCurrentStep(item)" value="{{item.step_id}} ">Current step </button></td>
                        
                            <!--<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">-->
  <!---->
                          <!--<div *ngIf="item.details.activated" class="modal-dialog" role="document">-->
                            <!--<div class="modal-content">-->
                              <!--<div class="modal-header">-->
                                <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>-->
                                <!--<h4 class="modal-title" id="myModalLabel"></h4>-->
                              <!--</div>-->
                              <!--<div class="modal-body">-->
                                <!--BODY ICI {{item.detail[0].power}}-->
                                <!--<br> {{key}} <br>{{_gridService.keysName_details[0]}}-->
                                <!--<div *ngFor="let fields of _gridService.keysName_details">-->
                                    <!--{{fields}}-->
                                    <!--&lt;!&ndash;l&ndash;&gt;-->
                                    <!--&lt;!&ndash;{{fields[0].power}}&ndash;&gt;-->
                                <!--&lt;!&ndash;&ndash;&gt;-->
                                <!--</div>-->
                                <!---->
                              <!--</div>-->
                              <!--<div class="modal-footer">-->
                                <!--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>-->
                                <!--<button type="button" class="btn btn-primary">Save changes</button>-->
                              <!--</div>-->
                            <!--</div>-->
                          <!--</div>-->
                        <!--</div>-->
                        </tr>
                        
                    </table>
                </div>
               
            </div>
            <!-- Modal -->

    `
})

 export class GridPanelComponent {

   // router = new Router;
    constructor(private _stepService: StepService, private _gridService: GridPanelService, private router: Router,
                private route: ActivatedRoute, private _http: Http){}

    display = false;
    myListData = [];// =  this._gridService.dataGrid;
    grid_name;
    keysName = [];
    showInput = [];
    filterActivated = false;
    master = "";

    ngOnInit() {

        this.grid_name = this.route.snapshot.queryParams["grid_name"];
        this.master = this.route.snapshot.queryParams["master"];
        console.log(this.master)
        if(this.master != ''){
            this._gridService.getDatas(this.grid_name, this.master)
                .subscribe(data => {
                        console.log(data)
                        console.log(this._gridService)
                    },
                    error => console.log(error)
                )
        }
        else {
            this._gridService.getDatas(this.grid_name, '')
                .subscribe(data => {
                    console.log(data)
                    console.log(this._gridService)
                    },
            error => console.log(error)
        )
        }

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
        console.log(this.master)
        this._gridService.updateCheckbox(value,item._id,this.master)
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