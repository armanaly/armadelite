import {Component, Input, Output, EventEmitter} from '@angular/core'
import {StepService} from "../Engine/step.service";
import {Router, ActivatedRoute} from '@angular/router';
import {GridPanelService} from "../components/gridPanel.service";
import {GlobalVariable} from "../global";
@Component({
    selector: 'grid-panel',
    template: `
    <div *ngIf="backBtn" align="left">
        <nav class="form-navArrow">
            <button (click)="onClick()" class="btn btn-warning" ><i class="glyphicon glyphicon-triangle-left" > STAGES</i></button>
        </nav>
    </div>

<<<<<<< HEAD
          
    <div class="panel-heading panel-heading-custom" *ngIf="preMenu == 2">
            <h2>{{val_level2}}</h2>
    </div>

    <div class="panel-body" *ngIf="ready == true">
=======
    
        <div *ngIf="backBtn" align="left">
            <nav class="form-navArrow">
                
                
                <button (click)="onClick()" class="tg-bn4o" ><i class="glyphicon glyphicon-triangle-left" > BACK </i></button>
            </nav>
        </div>

    <div class="panel-body" *ngIf="ready == true">

        
>>>>>>> d1fa1eedbea399ac5399c1fa03a123a371822cea
            <div *ngIf="preMenu == 1"> 
                <!--steps from admin_ballet-->
                    <!--step 1 { type : buttons } pass stage_name to step 2-->
                    <!--step 2 {type: grids} get all grids from stage_name-->
                <!--steps from grids-->
                
                 <div *ngFor="let btn of preMenuLst">
                    <button class="btn btn-primary btn-lg" type="button" 
                        (click)="getGridsBtn($event, btn.value)"
                        value="{{btn.children}}">{{btn.value}}
                    </button>
                    <br><br>
                </div>
            
            
            </div>
            
            <div *ngIf="preMenu == 2"> 
<<<<<<< HEAD

                <div *ngFor="let grid of grids" >
                    <div *ngIf="grid.display">
                        <a [routerLink]="['/grid']" replaceUrl="True" [queryParams]="{'grid_name': grid.name, 'master_val': val_level2}">
                            <button type="button" class="btn btn-primary btn-lg" > {{grid.name}}</button> 
                        </a>
                        <br><br>    
                    </div>
                    
=======
                
                 <div><h1>{{val_level2}}</h1></div>
                <div *ngFor="let grid of grids" >
                   
                    <!--<button class="btn btn-success" type="button" (click)="showGrid(grid.name)" value="{{grid.name}} ">{{grid.name}} -->
                    <!--</button>-->
                    <div *ngIf="grid.display">
                        
                            <a [routerLink]="['/grid']" replaceUrl="True" [queryParams]="{'grid_name': grid.name, 'master_val': val_level2}">
                                <button type="button" class="btn btn-primary btn-lg" > {{grid.name}}</button> 
                            </a>
                                
                    </div>
                    <br><br>
>>>>>>> d1fa1eedbea399ac5399c1fa03a123a371822cea
                </div>
            </div>
            
            
           <div  *ngIf="preMenu == 0"> 
                <div *ngFor="let grid of grids" class="col-md-3">
                    <!--<button class="btn btn-success" type="button" (click)="showGrid(grid.name)" value="{{grid.name}} ">{{grid.name}} -->
                    <!--</button>-->
                    <span *ngIf="grid.display">
                        <button type="button" class="btn btn-primary btn-lg" >
                            <a [routerLink]="['/grid']" [queryParams]="{'grid_name': grid.name}">{{grid.name}} </a>
                        </button>
                    </span>
                </div>
            </div>
            <!--<div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/step']"> Nouveau flow</a></button></div>-->

    </div>
` })

export class MenuComponent{
    constructor(
         private _stepService: StepService, private router: Router, private _gridService: GridPanelService,
         private route: ActivatedRoute
        )
    {}
    grids = [];
    ready = false;
    appName = '';
    preMenu = 0;
    backBtn = false;
    preMenuLst = [];
    level2 = false;
    val_level2 = '';
    firstLoad = true;
    ngOnInit(){
        this.appName = this.route.snapshot.queryParams["app"];
<<<<<<< HEAD

        if (typeof this.route.snapshot.queryParams["firstLoad"] != 'undefined') {
            this.firstLoad = this.route.snapshot.queryParams["hasLoaded"];
        }
        console.log(this.firstLoad);
        console.log(this.grids)


            if (this._stepService.steps[0].master_type == 'form' && this.firstLoad) {
                this.router.navigate(['/step']);
            }
            else {
                this._gridService.getActivatedGrids()
                    .then(
                        gridsList => {
                            console.log(gridsList)
                            this.grids = gridsList;
                            for (let j = 0; j < this.grids.length; j++) {
                                console.log(this.grids[j].name);
                                console.log(this.grids[j].listBtn);
                                if (typeof this.grids[j].listBtn != 'undefined') {
                                    if (this.firstLoad == true) {
                                        this.preMenu = 1;
                                        this.preMenuLst = this.grids[j].listBtn;
                                        console.log(this.grids[j].listBtn);
                                    }
                                }

                            }
                            // if (this.firstLoad == false){
                            //     this.getGridsBtn()
                            //     this.preMenu = 2;
                            //     console.log('2')
                            // }
                            this.ready = true;
                        }), error => console.log(error)
            }

=======
        if (this._stepService.steps[0].master_type == 'form' ){
                 this.router.navigate(['/step']);
             }
        else {
             this._gridService.getActivatedGrids()
                 .then(
                     gridsList => {
                         console.log(gridsList)
                         this.grids = gridsList;
                         for (let j = 0; j < this.grids.length; j++) {
                             console.log(this.grids[j].name);
                             console.log(this.grids[j].listBtn);
                              if (typeof this.grids[j].listBtn != 'undefined'){
                                  this.preMenu = 1;
                                  this.preMenuLst = this.grids[j].listBtn;
                                 console.log(this.grids[j].listBtn);
                             }
                         }
                             this.ready = true;
                 }), error => console.log(error)
         }
>>>>>>> d1fa1eedbea399ac5399c1fa03a123a371822cea
    }


    getGridsBtn($event, val){
        var gridList = $event.target.value;
        this.val_level2 = val;
        console.log(gridList);
        console.log(val)
        // TOUS LES GRIDS de la collection grids
        for (let idxGrid in this.grids){
            //cas où un prémenu exist alors on a dans grids un "type": "listBtn"

            if (typeof this.grids[idxGrid].listBtn != 'undefined'){
            {
                for (let i in this.grids[idxGrid].listBtn){
                    if (this.grids[idxGrid].listBtn[i].value == val){
                        console.log(this.grids[idxGrid].listBtn[i]);
                        console.log(this.grids[idxGrid].listBtn[i].value);
                        console.log(this.grids[idxGrid].listBtn[i].children);
                        for (let j in this.grids) {
                            console.log(this.grids[j].name)
                            console.log(this.grids[idxGrid].listBtn[i].children);
                            console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
                            if (this.grids[idxGrid].listBtn[i].children.indexOf(this.grids[j].name) > -1 )
                            {
                                this.grids[j].display = true;
                            }
                            else{
                                this.grids[j].display = false;
                            }
                        }
                        console.log(this.grids)
                        //this.grids = this.grids[idxGrid].listBtn[i].children;
                        // je dois uniquement garder les btn de this.grids qui sont dans la liste children

                    }

                }

            }
            }
        }
        this.preMenu = 2;
        this.backBtn = true;
        this.level2 = true;
    }

    onClick() {
        this.preMenu = 1;
        this.backBtn = false;
    }

}

