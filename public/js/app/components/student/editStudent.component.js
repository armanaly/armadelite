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
const router_1 = require("@angular/router");
const http_1 = require("@angular/http");
const grid_service_1 = require("../grid.service");
const balletDetails_service_1 = require("../ballet/balletDetails.service");
const group_service_1 = require("../ballet/group.service");
let EditStudentComponent = class EditStudentComponent {
    constructor(router, _gridService, _groupService, _balletDetailsService, route, _http) {
        this.router = router;
        this._gridService = _gridService;
        this._groupService = _groupService;
        this._balletDetailsService = _balletDetailsService;
        this.route = route;
        this._http = _http;
        this.display = false;
        this.groups = [];
        this.student = {};
        this.currentGroup = '';
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.obj_id = params['record'];
        });
        console.log(this.obj_id);
        console.log(this._gridService.dataGrid);
        this._balletDetailsService.getDatas(this.obj_id)
            .subscribe(data => {
            console.log(data);
            this.student_info = data;
            this.display = true;
        }, error => console.log(error));
    }
};
EditStudentComponent = __decorate([
    core_1.Component({
        selector: 'group',
        template: `
     <div class="panel-body">
            <form name="student"  >
                <div [formGroup]="myGroup">   
                    <label >{{field.label}} </label>
                                 <input *ngIf="i == 0"     
                                        myAutofocus
                                        class="form-control" 
                                        type="{{field.type}}" 
                                        id="{{field.name}}"
                                        name="{{field.name}}"
                                        required="{{field.required}}"
                                        minlength="{{field.minlength}}"
                                        maxlength="{{field.maxlength}}"
                                        formControlName="{{field.name}}"
                                        [formControl]="myGroup.controls[field.name]"
                                       
                                        >
                <button type="button"  data-target="#myModal" (click)="onClick()" class="btn btn-primary">Valider</button>
                </div>
            
         </form>
      </div>
      <!--<nav class="form-navArrow" *ngIf="display">
            <a [routerLink]="['/grid']" [queryParams]="{'grid_name': course_type, 'master_val': stage}">
                <button><i class="glyphicon glyphicon-triangle-left" ></i>BACK</button>
            </a>
      </nav>

    
    <div  *ngIf="display"> 
OK
   </div>!-->`
    }),
    __metadata("design:paramtypes", [router_1.Router, grid_service_1.GridPanelService,
        group_service_1.GroupService, balletDetails_service_1.BalletDetailsService,
        router_1.ActivatedRoute, http_1.Http])
], EditStudentComponent);
exports.EditStudentComponent = EditStudentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3R1ZGVudC9lZGl0U3R1ZGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBb0U7QUFDcEUsNENBQXlFO0FBRXpFLHdDQUFtQztBQUduQyxrREFBaUQ7QUFDakQsMkVBQXFFO0FBQ3JFLDJEQUFxRDtBQXVDckQsSUFBYSxvQkFBb0IsR0FBakM7SUFHSSxZQUNvQixNQUFjLEVBQVUsWUFBK0IsRUFDdEQsYUFBMkIsRUFBVyxxQkFBMkMsRUFDbEYsS0FBcUIsRUFBVSxLQUFXO1FBRjFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDdEQsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFBVywwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCO1FBQ2xGLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQU85RCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWIsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFYOEMsQ0FBQztJQWFqRSxRQUFRO1FBRUosSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQzNDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFFekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFHeEIsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtJQUNULENBQUM7Q0FHSixDQUFBO0FBekNZLG9CQUFvQjtJQXJDaEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0FnQ0E7S0FDYixDQUFDO3FDQU04QixlQUFNLEVBQXlCLCtCQUFnQjtRQUN2Qyw0QkFBWSxFQUFrQyw0Q0FBb0I7UUFDM0UsdUJBQWMsRUFBaUIsV0FBSTtHQU5yRCxvQkFBb0IsQ0F5Q2hDO0FBekNZLG9EQUFvQiIsImZpbGUiOiJjb21wb25lbnRzL3N0dWRlbnQvZWRpdFN0dWRlbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG4vLyBpbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbi8vIGltcG9ydCB7R3JvdXBTZXJ2aWNlfSBmcm9tIFwiZ3JvdXAuc2VydmljZVwiO1xyXG5pbXBvcnQge2ZvckVhY2h9IGZyb20gXCIuLi8uLi8uLi8uLi9wdWJsaWMvanMvdmVuZG9yL0Bhbmd1bGFyL3JvdXRlci9zcmMvdXRpbHMvY29sbGVjdGlvblwiO1xyXG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuLi9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtCYWxsZXREZXRhaWxzU2VydmljZX0gZnJvbSBcIi4uL2JhbGxldC9iYWxsZXREZXRhaWxzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtHcm91cFNlcnZpY2V9IGZyb20gXCIuLi9iYWxsZXQvZ3JvdXAuc2VydmljZVwiO1xyXG4vLyBpbXBvcnQge0JhbGxldERldGFpbHNTZXJ2aWNlfSBmcm9tIFwiYmFsbGV0RGV0YWlscy5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncm91cCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxmb3JtIG5hbWU9XCJzdHVkZW50XCIgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJteUdyb3VwXCI+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsID57e2ZpZWxkLmxhYmVsfX0gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiaSA9PSAwXCIgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlBdXRvZm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tmaWVsZC50eXBlfX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwie3tmaWVsZC5yZXF1aXJlZH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmxlbmd0aD1cInt7ZmllbGQubWlubGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwie3tmaWVsZC5tYXhsZW5ndGh9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwibXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgIGRhdGEtdGFyZ2V0PVwiI215TW9kYWxcIiAoY2xpY2spPVwib25DbGljaygpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5WYWxpZGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwhLS08bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiICpuZ0lmPVwiZGlzcGxheVwiPlxyXG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9ncmlkJ11cIiBbcXVlcnlQYXJhbXNdPVwieydncmlkX25hbWUnOiBjb3Vyc2VfdHlwZSwgJ21hc3Rlcl92YWwnOiBzdGFnZX1cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiA+PC9pPkJBQ0s8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICA8L25hdj5cclxuXHJcbiAgICBcclxuICAgIDxkaXYgICpuZ0lmPVwiZGlzcGxheVwiPiBcclxuT0tcclxuICAgPC9kaXY+IS0tPmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0U3R1ZGVudENvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gcm91dGVyID0gbmV3IFJvdXRlcjtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfZ3JpZFNlcnZpY2UgOiBHcmlkUGFuZWxTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX2dyb3VwU2VydmljZTogR3JvdXBTZXJ2aWNlLCAgcHJpdmF0ZSBfYmFsbGV0RGV0YWlsc1NlcnZpY2U6IEJhbGxldERldGFpbHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2h0dHA6IEh0dHApe31cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuXHJcbiAgICBvYmpfaWQ7XHJcbiAgICB2YWx1ZXM7XHJcbiAgICBkaXNwbGF5ID0gZmFsc2U7XHJcbiAgICBncm91cHMgPSBbXTtcclxuICAgIHN0dWRlbnQgPSB7fTtcclxuICAgIHN0dWRlbnRfaW5mbztcclxuICAgIGN1cnJlbnRHcm91cCA9ICcnO1xyXG5cclxuICAgIG5nT25Jbml0KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9ial9pZCA9IHBhcmFtc1sncmVjb3JkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgY29uc29sZS5sb2codGhpcy5vYmpfaWQpXHJcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZCk7XHJcbiAgICAgICAvL3RoaXMuc3R1ZGVudCA9IHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkW3RoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkLmZpbmRJbmRleCh4ID0+IHguX2lkID09IHRoaXMub2JqX2lkKV07XHJcbiAgICAgICAgdGhpcy5fYmFsbGV0RGV0YWlsc1NlcnZpY2UuZ2V0RGF0YXModGhpcy5vYmpfaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRfaW5mbyA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
