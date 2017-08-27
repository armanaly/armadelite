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
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const http_1 = require("@angular/http");
const group_service_1 = require("../group/group.service");
const gridPanel_service_1 = require("../gridPanel.service");
const balletDetails_service_1 = require("../balletDetails.service");
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
    
      <!--<nav class="form-navArrow" *ngIf="display">
            <a [routerLink]="['/grid']" [queryParams]="{'grid_name': course_type, 'master_val': stage}">
                <button><i class="glyphicon glyphicon-triangle-left" ></i>BACK</button>
            </a>
      </nav>

    
    <div  *ngIf="display"> 
OK
   </div>!-->`
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, gridPanel_service_1.GridPanelService, group_service_1.GroupService, balletDetails_service_1.BalletDetailsService, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _c) || Object])
], EditStudentComponent);
exports.EditStudentComponent = EditStudentComponent;
var _a, _b, _c;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3R1ZGVudC9lZGl0U3R1ZGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLHlCQUF1RCxpQkFBaUIsQ0FBQyxDQUFBO0FBRXpFLHVCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUNuQyxnQ0FBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQUVwRCxvQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUN0RCx3Q0FBbUMsMEJBQTBCLENBQUMsQ0FBQTtBQWlCOUQ7SUFHSSxZQUNvQixNQUFjLEVBQVUsWUFBK0IsRUFDdEQsYUFBMkIsRUFBVyxxQkFBMkMsRUFDbEYsS0FBcUIsRUFBVSxLQUFXO1FBRjFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDdEQsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFBVywwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCO1FBQ2xGLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQU85RCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWIsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFYOEMsQ0FBQztJQWFqRSxRQUFRO1FBRUosSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDM0MsU0FBUyxDQUFDLElBQUk7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBRXpCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBR3hCLENBQUMsRUFDRCxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtJQUNULENBQUM7QUFHTCxDQUFDO0FBekREO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Y0FXQTtLQUNiLENBQUM7O3dCQUFBO0FBRVcsNEJBQW9CLHVCQXlDaEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3N0dWRlbnQvZWRpdFN0dWRlbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge0dyb3VwU2VydmljZX0gZnJvbSBcIi4uL2dyb3VwL2dyb3VwLnNlcnZpY2VcIjtcbmltcG9ydCB7Zm9yRWFjaH0gZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uXCI7XG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuLi9ncmlkUGFuZWwuc2VydmljZVwiO1xuaW1wb3J0IHtCYWxsZXREZXRhaWxzU2VydmljZX0gZnJvbSBcIi4uL2JhbGxldERldGFpbHMuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdncm91cCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcbiAgICAgIDwhLS08bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiICpuZ0lmPVwiZGlzcGxheVwiPlxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZ3JpZCddXCIgW3F1ZXJ5UGFyYW1zXT1cInsnZ3JpZF9uYW1lJzogY291cnNlX3R5cGUsICdtYXN0ZXJfdmFsJzogc3RhZ2V9XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiID48L2k+QkFDSzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgPC9uYXY+XG5cbiAgICBcbiAgICA8ZGl2ICAqbmdJZj1cImRpc3BsYXlcIj4gXG5PS1xuICAgPC9kaXY+IS0tPmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBFZGl0U3R1ZGVudENvbXBvbmVudCB7XG5cbiAgICAvLyByb3V0ZXIgPSBuZXcgUm91dGVyO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2dyaWRTZXJ2aWNlIDogR3JpZFBhbmVsU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfZ3JvdXBTZXJ2aWNlOiBHcm91cFNlcnZpY2UsICBwcml2YXRlIF9iYWxsZXREZXRhaWxzU2VydmljZTogQmFsbGV0RGV0YWlsc1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2h0dHA6IEh0dHApe31cblxuXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcblxuICAgIG9ial9pZDtcbiAgICB2YWx1ZXM7XG4gICAgZGlzcGxheSA9IGZhbHNlO1xuICAgIGdyb3VwcyA9IFtdO1xuICAgIHN0dWRlbnQgPSB7fTtcbiAgICBzdHVkZW50X2luZm87XG4gICAgY3VycmVudEdyb3VwID0gJyc7XG5cbiAgICBuZ09uSW5pdCgpXG4gICAge1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5vYmpfaWQgPSBwYXJhbXNbJ3JlY29yZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcbiAgICAgICAgfSk7XG4gICAgICAgY29uc29sZS5sb2codGhpcy5vYmpfaWQpXG4gICAgICAgY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQpO1xuICAgICAgIC8vdGhpcy5zdHVkZW50ID0gdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWRbdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQuZmluZEluZGV4KHggPT4geC5faWQgPT0gdGhpcy5vYmpfaWQpXTtcbiAgICAgICAgdGhpcy5fYmFsbGV0RGV0YWlsc1NlcnZpY2UuZ2V0RGF0YXModGhpcy5vYmpfaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRfaW5mbyA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcblxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIClcbiAgICB9XG5cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
