import {Component, Input, Output, EventEmitter} from '@angular/core'
import {StepService} from "../Engine/step.service";
import {Router, ActivatedRoute} from '@angular/router';
import {GridPanelService} from "../components/grid.service";
import {GlobalVariable} from "../global";
@Component({
    selector: 'grid-panel',
    template: `


          
    <div class="panel-heading panel-heading-custom" *ngIf="preMenu == 2">
        <div  class="row" align="left">
            <div *ngIf="backBtn" class="col-md-2">
                <nav class="form-navArrow">
                    <button (click)="onClick()" class="btn btn-warning" ><i class="glyphicon glyphicon-triangle-left" > STAGES</i></button>
                </nav>
            </div>
        
           <div class="col-md-10" align="center">
                <h2>{{val_level2}}</h2>
           </div>
        </div>
    </div>

    <div class="panel-body" *ngIf="ready == true">
           <div  *ngIf="preMenu == 0"> 
                <div *ngFor="let grid of grids" class="col-md-3">
                    <!--<button class="btn btn-success" type="button" (click)="showGrid(grid.name)" value="{{grid.name}} ">{{grid.name}} -->
                    <!--</button>-->
                    <span *ngIf="grid.display">
                        <button type="button" class="btn btn-primary btn-lg" >
                            <a [routerLink]="['/grid']" [queryParams]="{'grid_name': grid.name, 'master':_stepService.steps[0].master_name}">{{grid.name}} </a>
                        </button>
                    </span>
                </div>
            </div>
            
            <div *ngIf="preMenu == 1"> 
                <!--steps from admin_ballet-->
                    <!--step 1 { type : buttons } pass stage_name to step 2-->
                    <!--step 2 {type: grids} get all grids from stage_name-->
                <!--steps from grids-->
                
                 <div *ngFor="let btn of preMenuLst" align="center">
                    <button class="btn btn-primary btn-lg"  type="button"  style="width: 500px"
                        (click)="getGridsBtn($event, btn.value)"
                        value="{{btn.children}}">{{btn.value}}
                    </button>
                    <br><br>
                </div>
            
            
            </div>          
          
          
            <!--<div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/step']"> Nouveau flow</a></button></div>-->
            <div *ngIf="preMenu == 2"> 

                <div *ngFor="let grid of gridBtns" align="center">
                    <!--<div *ngIf="grid.display">-->
                        <a [routerLink]="['/grid']" [queryParams]="{'grid_name': grid, 'master': val_level2}">
                            <button type="button" style="width: 500px" class="btn btn-primary btn-lg" > {{grid}}</button> 
                        </a>
                        <br><br>   
                    <!--</div>-->
                    
                </div>
            </div>
    </div>
`
})

export class MenuComponent {
    constructor(private _stepService: StepService, private router: Router, private _gridService: GridPanelService,
                private route: ActivatedRoute) {
    }

    grids = [];
    ready = false;
    appName = '';
    preMenu = 0;
    backBtn = false;
    preMenuLst = [];
    level2 = false;
    val_level2 = '';
    firstLoad = true;
    gridBtns;
    ngOnInit() {
        this.appName = this.route.snapshot.queryParams["app"];
        if (typeof this.route.snapshot.queryParams["firstLoad"] != 'undefined') {
            this.firstLoad = this.route.snapshot.queryParams["hasLoaded"];
        }
        console.log(this.firstLoad);
        console.log(this.grids)

        console.log(this._stepService.steps[0].master_name)
        if (this._stepService.steps[0].master_type == 'form' && this.firstLoad) {
            this.router.navigate(['/step']);
        }
        else {
            this._gridService.getActivatedGrids(this._stepService.steps[0].master_name)
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

    }


    getGridsBtn($event, val) {
        //this.gridBtns = $event.target.value;
        this.val_level2 = val;
        //console.log(this.gridBtns);
       // console.log(gridList);
        console.log(val)
        // TOUS LES GRIDS de la collection grids
        for (let idxGrid in this.grids) {
            //cas où un prémenu exist alors on a dans grids un "type": "listBtn"

            if (typeof this.grids[idxGrid].listBtn != 'undefined') {
                {
                    //for (let i in this.grids[idxGrid].listBtn) {
                     let obj = this.grids[idxGrid].listBtn.find(o => o.value == val);
                    this.gridBtns = obj.children;
                     // console.log(obj);
                    // console.log(obj.children);
                    // console.log(this.grids),
         //               console.log(gridList);

                    // if (this.grids[idxGrid].listBtn.indexOf.value == val) {
                    //         console.log(this.grids[idxGrid].listBtn[i]);
                    //         console.log(this.grids[idxGrid].listBtn[i].value);
                    //         console.log(this.grids[idxGrid].listBtn[i].children);
                    //         for (let j in this.grids) {
                    //             console.log(this.grids[j])
                    //             console.log(this.grids[j].name)
                    //             console.log(this.grids[idxGrid].listBtn[i].children);
                    //             this.gridBtns = this.grids[idxGrid].listBtn[i].children;
                    //             console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
                    //             if (this.grids[idxGrid].listBtn[i].children.indexOf(this.grids[j].name) > -1) {
                    //                 this.grids[j].display = true;
                    //             }
                    //             else {
                    //                 this.grids[j].display = true;
                    //                 // this.grids[j].display = false;
                    //             }
                    //         }
                    //         console.log(this.gridBtns)
                    //         //this.grids = this.grids[idxGrid].listBtn[i].children;
                    //         // je dois uniquement garder les btn de this.grids qui sont dans la liste children
                    //
                    //     }
                    //
                    // }

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

