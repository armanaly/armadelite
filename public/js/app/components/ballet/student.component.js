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
const group_service_1 = require("./group.service");
const grid_service_1 = require("../grid.service");
const balletDetails_service_1 = require("./balletDetails.service");
const student_1 = require("./student");
const student_service_1 = require("./student.service");
let StudentComponent = class StudentComponent {
    constructor(router, _gridService, _groupService, _balletDetailsService, _studentService, route, _http) {
        this.router = router;
        this._gridService = _gridService;
        this._groupService = _groupService;
        this._balletDetailsService = _balletDetailsService;
        this._studentService = _studentService;
        this.route = route;
        this._http = _http;
        this.display_edit = false;
        this.student = {};
        this.becas = ['15%', '20%',
            '25%', '50%', '75%', '100%'];
        this.submitted = false;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.obj_id = params['record'];
            this.course_type = params['course_type'];
            this.stage = params['stage'];
        });
        console.log(this.obj_id);
        console.log(this._gridService.dataGrid);
        this._balletDetailsService.getDatas(this.obj_id)
            .subscribe(data => {
            console.log(data);
            this.student_info = data;
            let token = localStorage.getItem('token');
            this.model = new student_1.Student(data._id, data.DNI, data.BECA, data.father, data.intolerencia, data.email2, data.phone2, data.notes, token, data.course_type, data.audition);
            console.log(this.model);
            this.display_edit = true;
        }, error => console.log(error));
    }
    onSubmit() {
        this._studentService.updateStudent(this.model)
            .subscribe(data => {
            console.log(data);
            $("#myModal").modal('show');
        }, error => console.log(error));
        this.submitted = true;
        console.log(this.model);
    }
};
StudentComponent = __decorate([
    core_1.Component({
        selector: 'group',
        template: `
    <div  *ngIf="display_edit"> 
          
          <div class="panel-heading panel-heading-custom">
            <div  class="row" align="left">
                <div class="col-md-2">
                    <nav class="form-navArrow" *ngIf="display_edit">
                        <a [routerLink]="['/grid']" [queryParams]="{'grid_name': course_type, 'master': stage, 'app_name':'ballet'}">
                        <button class="btn btn-warning"><i class="glyphicon glyphicon-triangle-left" ></i>BACK</button></a>
                    </nav>
                </div>
                <div class="col-md-10" align="center">
                    <h2>{{student_info.profile[1].firstname}}  {{student_info.profile[0].nom}}</h2>
                </div>
            </div>
           </div>
          <!--<h2>{{student_info.age}} years old</h2>-->
    
        <div class="panel-body">
            <form class="form-horizontal" #studentForm="ngForm" (ngSubmit)="onSubmit()"  >
                <div class="form-group">
                     <label for="DNI" class="col-sm-2 control-label" >DNI</label>
                     <div class="col-sm-10">
                         <input 
                            myAutofocus
                            class="form-control"
                            type="text"
                            id="DNI"
                            name="DNI"
                            value="{{student_info.DNI}}"
                              [(ngModel)]="model.DNI" name="DNI"
                                #DNI="ngModel">
                     </div>
                </div>
                
                <div class="form-group">
                    <label for="BECA" class="col-sm-2 control-label" >BECA</label>
                    <div class="col-sm-10">
                        <select class="form-control" id="BECA"
                            [(ngModel)]="model.BECA" name="BECA"
                            #BECA="ngModel" >
                            <option *ngFor="let beca of becas" [value]="beca">{{beca}}</option>
                        </select>
                    </div>
                </div>
                 <div class="form-group">
                    <label for="AUDITION" class="col-sm-2 control-label" >AUDITION</label>
                    <div class="col-sm-10">
                        <select class="form-control" id="audition"
                            [(ngModel)]="model.audition" name="audition"
                            #audition="ngModel" >
                             <option *ngFor="let audition of auditions" [value]="audition">{{audition}}</option>
                        </select>
                    </div>
                </div>               
                <div class="form-group">
                    <label for="Father" class="col-sm-2 control-label" >Father</label>
                    <div class="col-sm-10">
                        <input 
                            class="form-control"
                            type="text"
                            id="father"
                            name="father"
                            value="{{student_info.father}}"
                            [(ngModel)]="model.father" 
                            name="father"
                            #father="ngModel">
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="Intolerance" class="col-sm-2 control-label" >Intolerance</label>
                    <div class="col-sm-10">
                        <input 
                            class="form-control"
                            type="text"
                            id="intolerencia"
                            name="intolerencia"
                            value="{{student_info.intolerencia}}"
                            [(ngModel)]="model.intolerencia" 
                            name="intolerencia"
                            #intolerencia="ngModel">
                    </div>
                </div>
                 <div class="form-group">
                    <label for="phone2" class="col-sm-2 control-label" >Phone 2</label>
                    <div class="col-sm-10">
                        <input 
                            class="form-control"
                            type="text"
                            id="phone2"
                            name="phone2"
                            value="{{student_info.phone2}}"
                            [(ngModel)]="model.phone2" 
                            name="phone2"
                            #phone2="ngModel">
                    </div>
                </div>
                <div class="form-group">
                    <label for="email2" class="col-sm-2 control-label" >Email 2</label>
                    <div class="col-sm-10">
                        <input 
                            class="form-control"
                            type="text"
                            id="email2"
                            name="email2"
                            value="{{student_info.email2}}"
                            [(ngModel)]="model.email2" 
                            name="email2"
                            #email2="ngModel">
                    </div>
                </div>
                <div class="form-group">
                    <label for="notes" class="col-sm-2 control-label" >Notes</label>
                    <div class="col-sm-10">
                        
                          <textarea 
                                    rows="15" 
                                    cols="100"
                                    id="notes"
                                    name="notes"
                                    [(ngModel)]="model.notes" 
                                    #notes="ngModel"
                                    >
                                {{student_info.notes }}
                            </textarea>        
                        <!--<input -->
                            <!--class="form-control"-->
                            <!--type="text"-->
                            <!--id="notes"-->
                            <!--name="notes"-->
                            <!--value="{{student_info.notes}}"-->
                            <!--[(ngModel)]="model.notes" -->
                            <!--name="notes"-->
                            <!--#notes="ngModel">-->
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" data-target="#myModal" class="btn btn-primary" [disabled]="!studentForm.form.valid">SAVE CHANGES</button>
                    </div>
                </div>
            </form>    
        </div>  
          <div  id="myModal" class="modal fade" role="dialog">
          <div class="modal-dialog">
        
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Done</h4>
              </div>
              <div class="modal-body">
                <p>Student updated</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>  </div>
    </div>`
    }),
    __metadata("design:paramtypes", [router_1.Router, grid_service_1.GridPanelService,
        group_service_1.GroupService, balletDetails_service_1.BalletDetailsService,
        student_service_1.StudentService,
        router_1.ActivatedRoute, http_1.Http])
], StudentComponent);
exports.StudentComponent = StudentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFsbGV0L3N0dWRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0Esd0NBQW9FO0FBQ3BFLDRDQUF5RTtBQUV6RSx3Q0FBbUM7QUFDbkMsbURBQTZDO0FBRTdDLGtEQUFpRDtBQUNqRCxtRUFBNkQ7QUFHN0QsdUNBQWtDO0FBQ2xDLHVEQUFpRDtBQXVLakQsSUFBYSxnQkFBZ0IsR0FBN0I7SUFFSSxZQUNZLE1BQWMsRUFBVSxZQUErQixFQUN2RCxhQUEyQixFQUFXLHFCQUEyQyxFQUNqRixlQUErQixFQUMvQixLQUFxQixFQUFVLEtBQVc7UUFIMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUN2RCxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUFXLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7UUFDakYsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQU10RCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBT2IsVUFBSyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUs7WUFDakIsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUF5QmpDLGNBQVMsR0FBRyxLQUFLLENBQUM7SUF4Q3NDLENBQUM7SUFpQnpELFFBQVE7UUFHSixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDM0MsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEssT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtJQUNULENBQUM7SUFJRCxRQUFRO1FBQ0osSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUN6QyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFFVixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDL0IsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtRQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNCLENBQUM7Q0FDSixDQUFBO0FBNURZLGdCQUFnQjtJQXRLNUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FpS0g7S0FDVixDQUFDO3FDQUtzQixlQUFNLEVBQXlCLCtCQUFnQjtRQUN4Qyw0QkFBWSxFQUFrQyw0Q0FBb0I7UUFDaEUsZ0NBQWM7UUFDeEIsdUJBQWMsRUFBaUIsV0FBSTtHQU43QyxnQkFBZ0IsQ0E0RDVCO0FBNURZLDRDQUFnQiIsImZpbGUiOiJjb21wb25lbnRzL2JhbGxldC9zdHVkZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgY29uc3QgJCA6IGFueTtcclxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG4vLyBpbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7R3JvdXBTZXJ2aWNlfSBmcm9tIFwiLi9ncm91cC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Zm9yRWFjaH0gZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uXCI7XHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4uL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQge0JhbGxldERldGFpbHNTZXJ2aWNlfSBmcm9tIFwiLi9iYWxsZXREZXRhaWxzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybUdyb3VwfSBmcm9tIFwiLi4vLi4vLi4vLi4vcHVibGljL2pzL3ZlbmRvci9AYW5ndWxhci9mb3Jtcy9zcmMvbW9kZWxcIjtcclxuaW1wb3J0IHtWYWxpZGF0b3JzfSBmcm9tIFwiLi4vLi4vLi4vLi4vcHVibGljL2pzL3ZlbmRvci9AYW5ndWxhci9mb3Jtcy9zcmMvdmFsaWRhdG9yc1wiO1xyXG5pbXBvcnQge1N0dWRlbnR9IGZyb20gXCIuL3N0dWRlbnRcIjtcclxuaW1wb3J0IHtTdHVkZW50U2VydmljZX0gZnJvbSBcIi4vc3R1ZGVudC5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncm91cCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiAgKm5nSWY9XCJkaXNwbGF5X2VkaXRcIj4gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCI+XHJcbiAgICAgICAgICAgIDxkaXYgIGNsYXNzPVwicm93XCIgYWxpZ249XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiICpuZ0lmPVwiZGlzcGxheV9lZGl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2dyaWRfbmFtZSc6IGNvdXJzZV90eXBlLCAnbWFzdGVyJzogc3RhZ2UsICdhcHBfbmFtZSc6J2JhbGxldCd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiID48L2k+QkFDSzwvYnV0dG9uPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPnt7c3R1ZGVudF9pbmZvLnByb2ZpbGVbMV0uZmlyc3RuYW1lfX0gIHt7c3R1ZGVudF9pbmZvLnByb2ZpbGVbMF0ubm9tfX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPCEtLTxoMj57e3N0dWRlbnRfaW5mby5hZ2V9fSB5ZWFycyBvbGQ8L2gyPi0tPlxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIiAjc3R1ZGVudEZvcm09XCJuZ0Zvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiRE5JXCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPkROSTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15QXV0b2ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkROSVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiRE5JXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tzdHVkZW50X2luZm8uRE5JfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLkROSVwiIG5hbWU9XCJETklcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNETkk9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkJFQ0FcIiBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+QkVDQTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJCRUNBXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuQkVDQVwiIG5hbWU9XCJCRUNBXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNCRUNBPVwibmdNb2RlbFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGJlY2Egb2YgYmVjYXNcIiBbdmFsdWVdPVwiYmVjYVwiPnt7YmVjYX19PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiQVVESVRJT05cIiBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+QVVESVRJT048L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYXVkaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5hdWRpdGlvblwiIG5hbWU9XCJhdWRpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjYXVkaXRpb249XCJuZ01vZGVsXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGF1ZGl0aW9uIG9mIGF1ZGl0aW9uc1wiIFt2YWx1ZV09XCJhdWRpdGlvblwiPnt7YXVkaXRpb259fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiRmF0aGVyXCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPkZhdGhlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZhdGhlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmF0aGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tzdHVkZW50X2luZm8uZmF0aGVyfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5mYXRoZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmYXRoZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ZhdGhlcj1cIm5nTW9kZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJJbnRvbGVyYW5jZVwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5JbnRvbGVyYW5jZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImludG9sZXJlbmNpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW50b2xlcmVuY2lhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tzdHVkZW50X2luZm8uaW50b2xlcmVuY2lhfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5pbnRvbGVyZW5jaWFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbnRvbGVyZW5jaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ludG9sZXJlbmNpYT1cIm5nTW9kZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBob25lMlwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5QaG9uZSAyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGhvbmUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5waG9uZTJ9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLnBob25lMlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjcGhvbmUyPVwibmdNb2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbDJcIiBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+RW1haWwgMjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWwyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tzdHVkZW50X2luZm8uZW1haWwyfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5lbWFpbDJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2VtYWlsMj1cIm5nTW9kZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibm90ZXNcIiBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+Tm90ZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiMTVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibm90ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm90ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLm5vdGVzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNub3Rlcz1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzdHVkZW50X2luZm8ubm90ZXMgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1jbGFzcz1cImZvcm0tY29udHJvbFwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tdHlwZT1cInRleHRcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWlkPVwibm90ZXNcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLW5hbWU9XCJub3Rlc1wiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5ub3Rlc319XCItLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1bKG5nTW9kZWwpXT1cIm1vZGVsLm5vdGVzXCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tbmFtZT1cIm5vdGVzXCItLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0jbm90ZXM9XCJuZ01vZGVsXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS1vZmZzZXQtMiBjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGF0YS10YXJnZXQ9XCIjbXlNb2RhbFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cIiFzdHVkZW50Rm9ybS5mb3JtLnZhbGlkXCI+U0FWRSBDSEFOR0VTPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPiAgICBcclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgPGRpdiAgaWQ9XCJteU1vZGFsXCIgY2xhc3M9XCJtb2RhbCBmYWRlXCIgcm9sZT1cImRpYWxvZ1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tIE1vZGFsIGNvbnRlbnQtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPkRvbmU8L2g0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5TdHVkZW50IHVwZGF0ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+ICA8L2Rpdj5cclxuICAgIDwvZGl2PmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHVkZW50Q29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9ncmlkU2VydmljZSA6IEdyaWRQYW5lbFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfZ3JvdXBTZXJ2aWNlOiBHcm91cFNlcnZpY2UsICBwcml2YXRlIF9iYWxsZXREZXRhaWxzU2VydmljZTogQmFsbGV0RGV0YWlsc1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9odHRwOiBIdHRwKXt9XHJcblxyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuXHJcbiAgICBvYmpfaWQ7XHJcbiAgICB2YWx1ZXM7XHJcbiAgICBkaXNwbGF5X2VkaXQgPSBmYWxzZTtcclxuICAgIHN0dWRlbnQgPSB7fTtcclxuICAgIHN0dWRlbnRfaW5mbztcclxuICAgIHN0dWRlbnRHcm91cDtcclxuICAgIG1vZGVsO1xyXG4gICAgY291cnNlX3R5cGU7XHJcbiAgICBzdGFnZTtcclxuXHJcbiAgICBiZWNhcyA9IFsnMTUlJywgJzIwJScsXHJcbiAgICAgICAgJzI1JScsICc1MCUnLCAnNzUlJywgJzEwMCUnXTtcclxuXHJcbiAgICBuZ09uSW5pdCgpXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqX2lkID0gcGFyYW1zWydyZWNvcmQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXHJcbiAgICAgICAgICAgIHRoaXMuY291cnNlX3R5cGUgPSBwYXJhbXNbJ2NvdXJzZV90eXBlJ11cclxuICAgICAgICAgICAgdGhpcy5zdGFnZSA9IHBhcmFtc1snc3RhZ2UnXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqX2lkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkKTtcclxuICAgICAgICB0aGlzLl9iYWxsZXREZXRhaWxzU2VydmljZS5nZXREYXRhcyh0aGlzLm9ial9pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudF9pbmZvID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gbmV3IFN0dWRlbnQoZGF0YS5faWQsZGF0YS5ETkksZGF0YS5CRUNBLCBkYXRhLmZhdGhlciwgZGF0YS5pbnRvbGVyZW5jaWEsIGRhdGEuZW1haWwyLCBkYXRhLnBob25lMiwgZGF0YS5ub3RlcywgdG9rZW4sIGRhdGEuY291cnNlX3R5cGUsIGRhdGEuYXVkaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheV9lZGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdHRlZCA9IGZhbHNlO1xyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLnVwZGF0ZVN0dWRlbnQodGhpcy5tb2RlbClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI215TW9kYWxcIikubW9kYWwoJ3Nob3cnKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW9kZWwpXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
