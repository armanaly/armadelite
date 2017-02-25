import {Component, Input, Output, EventEmitter} from '@angular/core'
import {StepService} from "../Engine/step.service";
import {Router, ActivatedRoute} from '@angular/router';
import {GridPanelService} from "../components/gridPanel.service";
import {GlobalVariable} from "../global";
@Component({
    selector: 'grid-panel',
    template: `
    <div class="row" align="center" *ngIf="ready == true">
        
            <div  *ngFor="let grid of grids" class="col-md-3">
                <!--<button class="btn btn-success" type="button" (click)="showGrid(grid.name)" value="{{grid.name}} ">{{grid.name}} -->
                <!--</button>-->
                <button type="button" class="btn btn-success">
                    
                    <a [routerLink]="['/grid']" [queryParams]="{'grid_name': grid.name}"> {{grid.name}} </a>
                </button>
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

    ngOnInit(){
console.log(window);

        this.appName = this.route.snapshot.queryParams["app"];
        console.log(this.appName);
             if (this._stepService.steps[0].master_type == 'form'){
                 this.router.navigate(['/step']);
             }else{
                 this._gridService.getActivatedGrids()
                     .then(
                         gridsList => {
                             console.log(gridsList)
                             this.grids = gridsList;
                                this.ready = true;
                     }), error => console.log(error)
             }
    }
}

    // showGrid(){
    // let navigationExtras: NavigationExtras = {
    //     queryParams: { 'current_id': item.step_id, '_id': item._id }
    //
    // };

// let navigationExtras: NavigationExtras = {
//     preserveQueryParams: true,
//     preserveFragment: true,
//     queryParams: {'grid_name': gridName},
//     fragment: 'anchor'
// };
// this.router.navigate(['grid'], navigationExtras);

// this._gridService.getDatas(gridsList)
//     .subscribe(data => {},
//         error => console.log(error)
//     )
// }, error => console.log(error)