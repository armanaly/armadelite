"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const step_service_1 = require("../Engine/step.service");
const router_1 = require("@angular/router");
const grid_service_1 = require("../admin/grid.service");
const auth_service_1 = require("../auth/auth.service");
let MenuComponent = class MenuComponent {
    constructor(_stepService, router, _gridService, route, _authService) {
        this._stepService = _stepService;
        this.router = router;
        this._gridService = _gridService;
        this.route = route;
        this._authService = _authService;
        this.grids = [];
        this.ready = false;
        this.appName = '';
        this.preMenu = 0;
        this.backBtn = false;
        this.preMenuLst = [];
        this.level2 = false;
        this.val_level2 = '';
        this.firstLoad = true;
        this.signedIn = false;
    }
    ngOnInit() {
        this.appName = this.route.snapshot.queryParams["app"];
        if (typeof this.route.snapshot.queryParams["firstLoad"] != 'undefined') {
            this.firstLoad = this.route.snapshot.queryParams["hasLoaded"];
        }
        if (typeof this.route.snapshot.queryParams["premenu"] != 'undefined') {
            this.preMenu = this.route.snapshot.queryParams["premenu"];
        }
        this.sub = this.route.params.subscribe(params => {
            if (typeof params['signed'] != 'undefined') {
                this.appName = params['app'];
                this.signedIn = params['signed'];
            }
        });
        if (this.isLoggedIn() && this._stepService.steps[0].master_type == 'admin' || this.preMenu == 1) {
            this._gridService.getActivatedGrids(this._stepService.steps[0].master_name)
                .then(gridsList => {
                this.grids = gridsList;
                for (let j = 0; j < this.grids.length; j++) {
                    if (typeof this.grids[j].listBtn != 'undefined') {
                        if (this.firstLoad == true) {
                            this.preMenu = 1;
                            for (let main of this.grids[j].listBtn) {
                                if (this.preMenuLst.indexOf(main.name) == -1)
                                    this.preMenuLst.push(main.name);
                            }
                        }
                    }
                }
                if (this.route.snapshot.queryParams["premenu"] == 1) {
                    let master = this.route.snapshot.queryParams["master"];
                    this.getGridsBtn('e', master);
                }
                this.ready = true;
            }), error => console.log(error);
        }
        else {
            if (this._stepService.steps[0].master_type == 'form' && this.firstLoad) {
                this.router.navigate(['/step']);
            }
            else {
                if (this.isLoggedIn() == false && this.firstLoad == true) {
                    this.router.navigate(['/signin', this.appName]);
                }
            }
        }
    }
    getGridsBtn($event, val) {
        this.val_level2 = val;
        console.log(val);
        console.log(this.grids);
        this.gridBtns = [];
        for (let j = 0; j < this.grids.length; j++) {
            if (typeof this.grids[j].listBtn != 'undefined') {
                {
                    for (let obj of this.grids[j].listBtn) {
                        if (obj.name == val) {
                            this.gridBtns.push({ "children": obj.children, "nbRecords": obj.nbRecords });
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
        console.log(this.preMenuLst);
        this.preMenu = 1;
        this.backBtn = false;
    }
    logout() {
        this._authService.logout();
    }
    isLoggedIn() {
        return this._authService.isLoggedIn();
    }
};
MenuComponent = __decorate([
    core_1.Component({
        selector: 'grid-panel',
        template: `
     <div class="{{_stepService.template.panel_heading}}" *ngIf="preMenu == 1"   >
         <!--<button (click)="logout()" class="btn btn-warning" ><i class="glyphicon glyphicon-log-out" ></i></button>-->
         <div align="right">
            <button (click)="logout()" class="btn btn-warning" ><img src="/images/icones/if_door_open.png"> </button>
        </div>
    </div>
    <div class="{{_stepService.template.panel_heading}}" *ngIf="preMenu == 2" >
        <!--PREMENU {{this.preMenu}}-->
        <div  class="row" align="left" >
            
            <div *ngIf="backBtn" class="col-md-2">
                
                <nav class="form-navArrow">
                    <button (click)="onClick()" class="btn btn-warning" >
                        <i class="glyphicon glyphicon-triangle-left" ></i>
                    </button>
                </nav>
            </div>
        
           <div class="col-md-9" align="center">
                <h2>{{val_level2}}</h2>
           </div>
           <div class="col-md-1" align="right">
                <!--<button (click)="logout()" class="btn btn-warning" ><i class="glyphicon glyphicon-log-out" ></i></button>-->
                <button (click)="logout()" class="btn btn-warning" ><img src="/images/icones/if_door_open.png"> </button>
           </div>
          
        </div>
    </div>

    <div class="panel-body" *ngIf="ready == true">
          
           <div  *ngIf="preMenu == 0"> 
                <!--PREMENU {{this.preMenu}}-->
                <div *ngFor="let grid of grids" class="col-md-3">
                 
                    <span *ngIf="grid.display">
                        
                            <a [routerLink]="['/grid']" [queryParams]="{'grid_name': grid.name, 'master': 0, 'app_name': appName}"> 
                                <button type="button" class="{{_stepService.template.list_btn}}" >{{grid.name}}</button>    
                            </a>
                    </span>
                </div>
            </div>
            
            <div *ngIf="preMenu == 1"> 
                <!--steps from admin_ballet-->
                    <!--step 1 { type : buttons } pass stage_name to step 2-->
                    <!--step 2 {type: grids} get all grids from stage_name-->
                <!--steps from grids-->
                 <!--{{this.preMenu}}-->
                 <div *ngFor="let btn of preMenuLst" align="center">
                    <button class="{{_stepService.template.list_btn}}"  type="button"  style="width: 500px"
                        (click)="getGridsBtn($event, btn)"
                        value="{{btn.children}}">{{btn}}
                    </button>
                    <br><br>
                </div>
            </div>          
          
            <!--<div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/step']"> Nouveau flow</a></button></div>-->
            <div *ngIf="preMenu == 2"> 
                <div *ngFor="let grid of gridBtns" align="center">
                    <!--{{this.preMenu}}-->
                    <!--<div *ngIf="grid.display">-->
                       
                        <a [routerLink]="['/grid']" [queryParams]="{'grid_name': grid.children, 'master': val_level2, 'app_name': appName}">
                            <button type="button" style="width: 500px" class="{{_stepService.template.list_btn}}" ><span  class="badge pull-left">{{grid.nbRecords}}</span><span> {{grid.children}}</span></button>
                            <!--<button type="button" style="width: 500px" class="btn btn-primary btn-lg" > {{grid}}</button> -->
                        </a>
                        <br><br>   
                    <!--</div>-->
                    
                </div>
            </div>
    </div>
`
    }),
    __metadata("design:paramtypes", [step_service_1.StepService, router_1.Router, grid_service_1.GridPanelService,
        router_1.ActivatedRoute, auth_service_1.AuthService])
], MenuComponent);
exports.MenuComponent = MenuComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUvbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBb0U7QUFDcEUseURBQW1EO0FBQ25ELDRDQUFpRTtBQUNqRSx3REFBdUQ7QUFDdkQsdURBQWlEO0FBbUZqRCxJQUFhLGFBQWEsR0FBMUI7SUFDSSxZQUFvQixZQUF5QixFQUFVLE1BQWMsRUFBVSxZQUE4QixFQUN6RixLQUFxQixFQUFVLFlBQXlCO1FBRHhELGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUN6RixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRzVFLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVqQixhQUFRLEdBQUUsS0FBSyxDQUFDO0lBWmhCLENBQUM7SUFjRCxRQUFRO1FBRUosSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEQsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRSxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU5RCxDQUFDO1FBRUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDNUMsRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLENBQUEsQ0FBQztnQkFFeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQ2hHLENBQUM7WUFFRyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztpQkFDdEUsSUFBSSxDQUNELFNBQVMsQ0FBQyxFQUFFO2dCQUVSLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO2dCQUV2QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBR3pDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDOUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzs0QkFDakIsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dDQUNyQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0NBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDeEMsQ0FBQzt3QkFDTCxDQUFDO29CQUNMLENBQUM7Z0JBRUwsQ0FBQztnQkFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFbEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBQyxNQUFNLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN0QixDQUFDLENBQ0osRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEMsQ0FBQztRQUNELElBQUksQ0FDSixDQUFDO1lBQ0csRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDckUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztJQUVMLENBQUM7SUFHRCxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUc7UUFFbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFHdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUV2QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFekMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO29CQUNHLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFFcEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQSxDQUFDOzRCQUVqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLFVBQVUsRUFBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxHQUFHLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQzt3QkFDOUUsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxPQUFPO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRS9CLENBQUM7SUFFRCxVQUFVO1FBRU4sTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDekMsQ0FBQztDQUNKLENBQUE7QUFqSVksYUFBYTtJQWxGekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E2RWI7S0FDQSxDQUFDO3FDQUdvQywwQkFBVyxFQUFrQixlQUFNLEVBQXdCLCtCQUFnQjtRQUNsRix1QkFBYyxFQUF3QiwwQkFBVztHQUZuRSxhQUFhLENBaUl6QjtBQWpJWSxzQ0FBYSIsImZpbGUiOiJtZW51L21lbnUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbU1hcH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi4vYWRtaW4vZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9hdXRoL2F1dGguc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ3JpZC1wYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgIDxkaXYgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIiAqbmdJZj1cInByZU1lbnUgPT0gMVwiICAgPlxyXG4gICAgICAgICA8IS0tPGJ1dHRvbiAoY2xpY2spPVwibG9nb3V0KClcIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiID48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbG9nLW91dFwiID48L2k+PC9idXR0b24+LS0+XHJcbiAgICAgICAgIDxkaXYgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJsb2dvdXQoKVwiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCIgPjxpbWcgc3JjPVwiL2ltYWdlcy9pY29uZXMvaWZfZG9vcl9vcGVuLnBuZ1wiPiA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiICpuZ0lmPVwicHJlTWVudSA9PSAyXCIgPlxyXG4gICAgICAgIDwhLS1QUkVNRU5VIHt7dGhpcy5wcmVNZW51fX0tLT5cclxuICAgICAgICA8ZGl2ICBjbGFzcz1cInJvd1wiIGFsaWduPVwibGVmdFwiID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJiYWNrQnRuXCIgY2xhc3M9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQ2xpY2soKVwiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC05XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMj57e3ZhbF9sZXZlbDJ9fTwvaDI+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xXCIgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxidXR0b24gKGNsaWNrKT1cImxvZ291dCgpXCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIiA+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1vdXRcIiA+PC9pPjwvYnV0dG9uPi0tPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwibG9nb3V0KClcIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiID48aW1nIHNyYz1cIi9pbWFnZXMvaWNvbmVzL2lmX2Rvb3Jfb3Blbi5wbmdcIj4gPC9idXR0b24+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgKm5nSWY9XCJyZWFkeSA9PSB0cnVlXCI+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICA8ZGl2ICAqbmdJZj1cInByZU1lbnUgPT0gMFwiPiBcclxuICAgICAgICAgICAgICAgIDwhLS1QUkVNRU5VIHt7dGhpcy5wcmVNZW51fX0tLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGdyaWQgb2YgZ3JpZHNcIiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJncmlkLmRpc3BsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9ncmlkJ11cIiBbcXVlcnlQYXJhbXNdPVwieydncmlkX25hbWUnOiBncmlkLm5hbWUsICdtYXN0ZXInOiAwLCAnYXBwX25hbWUnOiBhcHBOYW1lfVwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmxpc3RfYnRufX1cIiA+e3tncmlkLm5hbWV9fTwvYnV0dG9uPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwicHJlTWVudSA9PSAxXCI+IFxyXG4gICAgICAgICAgICAgICAgPCEtLXN0ZXBzIGZyb20gYWRtaW5fYmFsbGV0LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLXN0ZXAgMSB7IHR5cGUgOiBidXR0b25zIH0gcGFzcyBzdGFnZV9uYW1lIHRvIHN0ZXAgMi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS1zdGVwIDIge3R5cGU6IGdyaWRzfSBnZXQgYWxsIGdyaWRzIGZyb20gc3RhZ2VfbmFtZS0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLXN0ZXBzIGZyb20gZ3JpZHMtLT5cclxuICAgICAgICAgICAgICAgICA8IS0te3t0aGlzLnByZU1lbnV9fS0tPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGJ0biBvZiBwcmVNZW51THN0XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUubGlzdF9idG59fVwiICB0eXBlPVwiYnV0dG9uXCIgIHN0eWxlPVwid2lkdGg6IDUwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImdldEdyaWRzQnRuKCRldmVudCwgYnRuKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tidG4uY2hpbGRyZW59fVwiPnt7YnRufX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PGJyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48YSBbcm91dGVyTGlua109XCJbJy9zdGVwJ11cIj4gTm91dmVhdSBmbG93PC9hPjwvYnV0dG9uPjwvZGl2Pi0tPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwicHJlTWVudSA9PSAyXCI+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZ3JpZCBvZiBncmlkQnRuc1wiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLXt7dGhpcy5wcmVNZW51fX0tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiAqbmdJZj1cImdyaWQuZGlzcGxheVwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9ncmlkJ11cIiBbcXVlcnlQYXJhbXNdPVwieydncmlkX25hbWUnOiBncmlkLmNoaWxkcmVuLCAnbWFzdGVyJzogdmFsX2xldmVsMiwgJ2FwcF9uYW1lJzogYXBwTmFtZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwid2lkdGg6IDUwMHB4XCIgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5saXN0X2J0bn19XCIgPjxzcGFuICBjbGFzcz1cImJhZGdlIHB1bGwtbGVmdFwiPnt7Z3JpZC5uYlJlY29yZHN9fTwvc3Bhbj48c3Bhbj4ge3tncmlkLmNoaWxkcmVufX08L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJ3aWR0aDogNTAwcHhcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiA+IHt7Z3JpZH19PC9idXR0b24+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48YnI+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfZ3JpZFNlcnZpY2U6IEdyaWRQYW5lbFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ3JpZHMgPSBbXTtcclxuICAgIHJlYWR5ID0gZmFsc2U7XHJcbiAgICBhcHBOYW1lID0gJyc7XHJcbiAgICBwcmVNZW51ID0gMDtcclxuICAgIGJhY2tCdG4gPSBmYWxzZTtcclxuICAgIHByZU1lbnVMc3QgPSBbXTtcclxuICAgIGxldmVsMiA9IGZhbHNlO1xyXG4gICAgdmFsX2xldmVsMiA9ICcnO1xyXG4gICAgZmlyc3RMb2FkID0gdHJ1ZTtcclxuICAgIGdyaWRCdG5zO1xyXG4gICAgc2lnbmVkSW49IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmFwcE5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiYXBwXCJdO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXBwTmFtZSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiZmlyc3RMb2FkXCJdICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RMb2FkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcImhhc0xvYWRlZFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maXJzdExvYWQpXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wicHJlbWVudVwiXSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLnByZU1lbnUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wicHJlbWVudVwiXTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcmVNZW51KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbJ3NpZ25lZCddICE9ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpY2kgZGFucyBzaWduZWQgZXQgYXBwJylcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwTmFtZSA9IHBhcmFtc1snYXBwJ107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpZ25lZEluID0gcGFyYW1zWydzaWduZWQnXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0xvZ2dlZEluKCkgJiYgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubWFzdGVyX3R5cGUgPT0gJ2FkbWluJyB8fCB0aGlzLnByZU1lbnUgPT0gMSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9ncmlkU2VydmljZS5nZXRBY3RpdmF0ZWRHcmlkcyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfbmFtZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRzTGlzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGdyaWRzTGlzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkcyA9IGdyaWRzTGlzdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ncmlkcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ncmlkc1tqXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ3JpZHNbal0ubGlzdEJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ3JpZHNbal0ubGlzdEJ0biAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0TG9hZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlTWVudSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG1haW4gb2YgdGhpcy5ncmlkc1tqXS5saXN0QnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmVNZW51THN0LmluZGV4T2YobWFpbi5uYW1lKSA9PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZU1lbnVMc3QucHVzaChtYWluLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcInByZW1lbnVcIl0gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5fc3RlcFNlcnZpY2UubWVudV9sZXZlbCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFzdGVyID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcIm1hc3RlclwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0R3JpZHNCdG4oJ2UnLG1hc3Rlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICksIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubWFzdGVyX3R5cGUgPT0gJ2Zvcm0nICYmIHRoaXMuZmlyc3RMb2FkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zdGVwJ10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2dnZWRJbigpID09IGZhbHNlICYmIHRoaXMuZmlyc3RMb2FkID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zaWduaW4nLCB0aGlzLmFwcE5hbWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldEdyaWRzQnRuKCRldmVudCwgdmFsKSB7XHJcbiAgICAgICAgLy90aGlzLmdyaWRCdG5zID0gJGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnZhbF9sZXZlbDIgPSB2YWw7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmdyaWRCdG5zKTtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKGdyaWRMaXN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWwpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkcylcclxuICAgICAgICAvLyBUT1VTIExFUyBHUklEUyBkZSBsYSBjb2xsZWN0aW9uIGdyaWRzXHJcbiAgICAgICAgdGhpcy5ncmlkQnRucyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ncmlkcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAvL2NhcyBvw7kgdW4gcHLDqW1lbnUgZXhpc3QgYWxvcnMgb24gYSBkYW5zIGdyaWRzIHVuIFwidHlwZVwiOiBcImxpc3RCdG5cIlxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ3JpZHNbal0ubGlzdEJ0biAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG9iaiBvZiB0aGlzLmdyaWRzW2pdLmxpc3RCdG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqLm5hbWUgPT0gdmFsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmdyaWRCdG5zLmluZGV4T2Yoe1wiY2hpbGRyZW5cIjpvYmouY2hpbGRyZW4sIFwibmJSZWNvcmRzXCI6IG9iai5uYlJlY29yZHN9KSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRCdG5zLnB1c2goe1wiY2hpbGRyZW5cIjpvYmouY2hpbGRyZW4sIFwibmJSZWNvcmRzXCI6IG9iai5uYlJlY29yZHN9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByZU1lbnUgPSAyO1xyXG4gICAgICAgIHRoaXMuYmFja0J0biA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sZXZlbDIgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmVNZW51THN0KTtcclxuICAgICAgICB0aGlzLnByZU1lbnUgPSAxO1xyXG4gICAgICAgIHRoaXMuYmFja0J0biA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpe1xyXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ291dCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc0xvZ2dlZEluKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXBwTmFtZSlcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
