import {Component, Input, Output, EventEmitter} from '@angular/core'
import {GridPanelService} from "./gridPanel.service";
import {Router, NavigationExtras, ActivatedRoute} from '@angular/router';
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
               <div class="page-header">
                 <h1>{{grid_name}}</h1>
               </div>
                <div class="table-responsive" *ngIf="display">
                    <table class="table table-hover table-condensed"  >
                        <tr>
                            <th *ngFor="let obj of _gridService.colTitle;let i = index">
                                <div>{{obj.title}}&nbsp; 
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
                                                     
                                <span *ngIf="!filterActivated && this._gridService.colTitle[i].type != 'checkbox' "> {{item[key]}}  </span>
                                
                                <span *ngIf="this._gridService.colTitle[i].type == 'checkbox' "> 
                                    <input *ngIf="item[key]" type="checkbox" value="{{item[key]}}" checked (change)=updateCheckBox($event,item) /> 
                                    <input *ngIf="item[key] == false" type="checkbox" value="{{item[key]}}" (change)=updateCheckBox($event,item) /> 
                                </span>
                                <!--<span *ngIf=""-->
                            </td>
                             <td *ngIf="item.details.activated"><button class="btn btn-success" type="button"><a [routerLink]="['/details', item._id] "> Détail </a> </button></td>
                            <!-- MODAL <td *ngIf="item.details.activated"><button class="btn btn-success" type="button" data-toggle="modal" data-target="#myModal">DETAIL </button></td>-->
                            <td *ngIf="this._stepService.steps[0].master_type == 'workflow'"> <button class="btn btn-success" type="button" (click)="goToCurrentStep(item)" value="{{item.step_id}} ">Current step </button></td>
                        
                            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  
                          <div *ngIf="item.details.activated" class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="myModalLabel"></h4>
                              </div>
                              <div class="modal-body">
                                BODY ICI {{item.detail[0].power}}
                                <br> {{key}} <br>{{_gridService.keysName_details[0]}}
                                <div *ngFor="let fields of _gridService.keysName_details">
                                    {{fields}}
                                    <!--l-->
                                    <!--{{fields[0].power}}-->
                                <!---->
                                </div>
                                
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                            </div>
                          </div>
                        </div>
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

    ngOnInit() {

        this.grid_name = this.route.snapshot.queryParams["grid_name"];

        this._gridService.getDatas(this.grid_name)
            .subscribe(data => {
                console.log(data)
                console.log(this._gridService)
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