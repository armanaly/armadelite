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
const step_service_1 = require("../../Engine/step.service");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const http_1 = require("@angular/http");
const group_service_1 = require("./group.service");
const grid_service_1 = require("../grid.service");
const balletDetails_service_1 = require("./balletDetails.service");
const student_1 = require("./student");
const student_service_1 = require("./student.service");
let StudentComponent = class StudentComponent {
    constructor(router, _gridService, _groupService, _balletDetailsService, _studentService, _stepService, route, _http) {
        this.router = router;
        this._gridService = _gridService;
        this._groupService = _groupService;
        this._balletDetailsService = _balletDetailsService;
        this._studentService = _studentService;
        this._stepService = _stepService;
        this.route = route;
        this._http = _http;
        this.display_edit = false;
        this.student = {};
        this.auditions = ['MADRID', 'BARCELONA', 'ALICANTE', 'NOVELDA', 'VIDEO AUDITION'];
        this.becas = ['0', '15%', '20%',
            '25%', '50%', '75%', '100%'];
        this.durations = ["1", "2", "3"];
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
            this.model = new student_1.Student(data._id, data.DNI, data.BECA, data.father, data.intolerencia, data.email2, data.phone2, data.notes, token, data.course_type, data.audition, data.duration, data.age, data.profile[4].birthdate, data.group, data.profile[2].phone, data.profile[3].email, data.profile[6].city, data.profile[5].country, data.profile[7].studied_places, data.years_of_experience, data.residence, data.stage, data.registred);
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
        selector: 'edit_student',
        template: `
    <div  *ngIf="display_edit"> 
          
          <div  class="{{_stepService.template.panel_heading}}">
            <div  class="row" align="left">
                <div class="col-md-2">
                    <nav class="form-navArrow" *ngIf="display_edit">
                        <a [routerLink]="['/grid']" [queryParams]="{'grid_name': course_type, 'master': stage, 'app_name':'ballet'}">
                        <button class="btn btn-warning"><i class="glyphicon glyphicon-triangle-left" ></i>BACK</button></a>
                    </nav>
                     <br><br><br><br>
                     <div *ngIf="student_info.registred" align="left" > 
                        Registred<br> <input type="image" src="/images/checked.jpg" disabled/>
                    </div> 
                </div>
                <div class="col-md-10" align="center">
                     <h2><b class="text-uppercase">{{student_info.profile[1].nom}}</b> {{student_info.profile[0].firstname}} </h2>
                     <h4><b class="text-uppercase">{{student_info.stage}}</b></h4>
                     <h4><b class="text-uppercase">{{student_info.course_type}}</b></h4>
                     <h4>{{student_info.group}}</h4>
                </div>
              
            </div>
              
          </div>
          <!--<h2>{{student_info.age}} years old</h2>-->
    
        <div class="panel-body">
            <form class="form-horizontal" #studentForm="ngForm" (ngSubmit)="onSubmit()"  >
           
            <div align="center">
                    <button type="submit" data-target="#myModal" class="{{_stepService.template.grid_btn}}" [disabled]="!studentForm.form.valid">SAVE CHANGES</button>
                    
            </div>
            <br>
                <!--<div class="form-group">-->
                    <!---->
                     <!--<div class="col-sm-8">-->
                         <!--<h4><b class="text-uppercase">{{student_info.stage}}-->
                         <!--<br>{{student_info.course_type}}-->
                         <!--<br>{{student_info.group}}-->
                         <!--</b></h4>-->
                         <!--<h4><b class="text-uppercase"><label class="col-sm-2 control-label" >{{student_info.stage}}</label>-->
                         <!--<label class="col-sm-2 control-label" >{{student_info.course_type}}</label>-->
                         <!--<label class="col-sm-2 control-label" >{{student_info.group}}</label>-->
                         <!--</b></h4>-->
                     <!--</div>-->
                    <!--<label for="registred" class="col-sm-2 control-label" >Registred</label>-->
                        <!--<input type="image" src="/images/checked.jpg" disabled/>-->
                      <!--</div>  -->
                   <!--<div class="col-sm-4">-->
                         <!--&lt;!&ndash;(change)=updateCheckBox($event,item)&ndash;&gt;-->
                            <!---->
                            <!--<input *ngIf="student_info.registred" name="registred" type="checkbox" value="{{student_info.registred}}" checked  />   -->
                            <!--<input *ngIf="student_info.registred == false" name="registred" type="checkbox" value="{{student_info.registred}}"  /> -->
                     <!--</div>-->
                <!--</div>-->
                <!--<div class="form-group">-->
                     <!--<label for="course_type" class="col-sm-2 control-label" >Course</label>-->
                     <!--<div class="col-sm-4">-->
                        <!--{{student_info.course_type}}-->
                        <!--&lt;!&ndash;<select  class="form-control" id="course" (change)="changeCourse($event, item._id)"   >&ndash;&gt;-->
                                    <!--&lt;!&ndash;<option selected value="student_info.course_type">{{student_info.course_type}}</option>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<option *ngFor="let course of _gridService.dataGrid[0].course_list">&ndash;&gt;-->
                                        <!--&lt;!&ndash;&lt;!&ndash;<b selected *ngIf="course == item[key]">{{course}}</b>&ndash;&gt;&ndash;&gt;-->
                                        <!--&lt;!&ndash;<b *ngIf="course != student_info.course_type">{{course}}</b></option>&ndash;&gt;-->
                        <!--&lt;!&ndash;</select>&ndash;&gt;-->
                     <!--</div>-->
                    <!--<label for="group" class="col-sm-2 control-label" >Group</label>-->
                   <!--<div class="col-sm-4">-->
                    <!--{{student_info.group}}-->
                         <!--&lt;!&ndash;<input &ndash;&gt;-->
                            <!--&lt;!&ndash;myAutofocus&ndash;&gt;-->
                            <!--&lt;!&ndash;class="form-control"&ndash;&gt;-->
                            <!--&lt;!&ndash;type="text"&ndash;&gt;-->
                            <!--&lt;!&ndash;id="group"&ndash;&gt;-->
                            <!--&lt;!&ndash;name="group"&ndash;&gt;-->
                            <!--&lt;!&ndash;value="{{student_info.group}}"&ndash;&gt;-->
                              <!--&lt;!&ndash;[(ngModel)]="model.group" name="group"&ndash;&gt;-->
                                <!--&lt;!&ndash;#group="ngModel">&ndash;&gt;-->
                     <!--</div>-->
                <!--</div>-->
                
                <div class="form-group">
                     <label for="DNI" class="col-sm-2 control-label" >DNI</label>
                     <div class="col-sm-4">
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
                    <label for="BECA" class="col-sm-2 control-label" >BECA</label>
                    <div class="col-sm-2">
                        <select class="form-control" id="BECA"
                            [(ngModel)]="model.BECA" name="BECA"
                            #BECA="ngModel" >
                            <option *ngFor="let beca of becas" [value]="beca">{{beca}}</option>
                        </select>
                    </div>
                </div>

                 <div class="form-group">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="AUDITION" class="col-sm-4 control-label" >Audition place</label>
                            <div class="col-sm-8">
                                <select class="form-control" id="audition"
                                    [(ngModel)]="model.audition" name="audition"
                                    #audition="ngModel" >
                                     <option *ngFor="let audition of auditions" [value]="audition">{{audition}}</option>
                                </select>
                            </div>
                        </div>
                       </div>
                       <div class="col-sm-6">
                            <div class="form-group">
                            <label for="DURATION" class="col-sm-4 control-label" >Duration</label>
                            <div class="col-sm-2">
                                <select class="form-control" id="duration"
                                    [(ngModel)]="model.duration" name="duration"
                                    #duration="ngModel" >
                                     <option *ngFor="let duration of durations" [value]="duration">{{duration}}</option>
                                </select>
                            </div>
                            <label for="residence" class="col-sm-3 control-label" >Residence</label>
                            <div class="col-sm-3">
                                
                                <!--<label class="checkbox-inline">-->
                                <select class="form-control" id="residence"
                                [(ngModel)]="model.residence" name="residence"
                                #residence="ngModel">
                                 <option *ngFor="let residence of ['YES','NO']" [value]="residence">{{residence}}</option>
                                     <!--<option [value]="YES">YES</option>-->
                                     <!--<option [value]="NO">NO</option>-->
                                </select>
                               <!--<input  *ngIf="student_info.residence == 'YES'" -->
                                            <!--type="checkbox" -->
                                            <!--checked-->
                                            <!--id="residence" name="residence"  -->
                                            <!--[(ngModel)]="model.residence"-->
                                            <!--#residence="ngModel">-->
                                        <!--<input  *ngIf="student_info.residence == 'NO'" -->
                                            <!--type="checkbox" -->
                                            <!--id="residence" name="residence" -->
                                            <!--[(ngModel)]="model.residence" -->
                                            <!--#residence="ngModel">-->
                                            </div>
                            <!--</label>-->
                            <!--<input -->
                                <!--class="form-control"-->
                                <!--type="text"-->
                                <!--id="residence"-->
                                <!--name="residence"-->
                                <!--value="{{student_info.residence}}"-->
                                <!--[(ngModel)]="model.residence" -->
                                <!--name="residence"-->
                                <!--#residence="ngModel">-->
                        <!--</div>-->
                    </div>
                </div> 
               </div>
               
               <!--                                             AGE XP BIRTHDAY                                    -->
                <div class="form-group">
                     <div class="col-sm-6">
                        <div class="form-group">
                            <label for="age" class="col-sm-4 control-label" >Age</label>
                            <div class="col-sm-2">
                                    <input 
                                        class="form-control"
                                        type="text"
                                        id="age"
                                        name="age"
                                        value="{{student_info.age}}"
                                        [(ngModel)]="model.age" 
                                        #age="ngModel">
                            </div>
                            <label for="years_of_experience" class="col-sm-4 control-label" >Experience</label>
                            <div class="col-sm-2">
                                <input 
                                    class="form-control"
                                    type="text"
                                    id="years_of_experience"
                                    name="years_of_experience"
                                    value="{{student_info.xp}}"
                                    [(ngModel)]="model.years_of_experience" 
                                    #years_of_experience="ngModel">
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="birthday" class="col-sm-4 control-label" >Birthday</label>
                            <div class="col-sm-6">
                                <input 
                                    class="form-control"
                                    type="text"
                                    id="birthday"
                                    name="birthday"
                                    value="{{student_info.birthday}}"
                                    [(ngModel)]="model.birthday" 
                                    #birthday="ngModel">
                            </div>
                        </div>
                    </div>
                </div>
                 
                 <!--                                              PHONE                                   -->
                 <div class="form-group">
                    <label for="phone" class="col-sm-2 control-label" >Phone 1</label>
                    <div class="col-sm-4">
                        <input 
                            class="form-control"
                            type="text"
                            id="phone"
                            name="phone"
                            value="{{student_info.phone}}"
                            [(ngModel)]="model.phone" 
                            #phone="ngModel">
                    </div>
                    <label for="phone2" class="col-sm-2 control-label" >Phone 2</label>
                    <div class="col-sm-4">
                        <input 
                            class="form-control"
                            type="text"
                            id="phone2"
                            name="phone2"
                            value="{{student_info.phone2}}"
                            [(ngModel)]="model.phone2" 
                            #phone2="ngModel">
                    </div>
                </div>
                <div class="form-group">
                     <label for="email" class="col-sm-2 control-label" >Email 1</label>
                    <div class="col-sm-4">
                        <input 
                            class="form-control"
                            type="text"
                            id="email1"
                            name="email1"
                            value="{{student_info.email}}"
                            [(ngModel)]="model.email" 
                            #email="ngModel">
                    </div>
                    <label for="email2" class="col-sm-2 control-label" >Email 2</label>
                    <div class="col-sm-4">
                        <input 
                            class="form-control"
                            type="text"
                            id="email2"
                            name="email2"
                            value="{{student_info.email2}}"
                            [(ngModel)]="model.email2" 
                            #email2="ngModel">
                    </div>
                </div>
                  <div class="form-group">
                    <label for="country" class="col-sm-2 control-label" >Country</label>
                    <div class="col-sm-4">
                        <input 
                            class="form-control"
                            type="text"
                            id="country"
                            name="country"
                            value="{{student_info.country}}"
                            [(ngModel)]="model.country" 
                            #country="ngModel">
                    </div>
                
                    <label for="city" class="col-sm-2 control-label" >City</label>
                    <div class="col-sm-4">
                        <input 
                            class="form-control"
                            type="text"
                            id="city"
                            name="city"
                            value="{{student_info.city}}"
                            [(ngModel)]="model.city" 
                            #city="ngModel">
                    </div>
                 </div>
                      <div class="form-group">
                 </div>
                 <div class="form-group">
                    <label for="Father" class="col-sm-2 control-label" >Father</label>
                    <div class="col-sm-4">
                        <input 
                            class="form-control"
                            type="text"
                            id="father"
                            name="father"
                            value="{{student_info.father}}"
                            [(ngModel)]="model.father" 
                            #father="ngModel">
                    </div>
                
                    <label for="Intolerance" class="col-sm-2 control-label" >Intolerance</label>
                    <div class="col-sm-4">
                        <input 
                            class="form-control"
                            type="text"
                            id="intolerencia"
                            name="intolerencia"
                            value="{{student_info.intolerencia}}"
                            [(ngModel)]="model.intolerencia" 
                            #intolerencia="ngModel">
                    </div></div>
                <div class="form-group">
                    <label for="notes" class="col-sm-2 control-label" >Notes</label>
                    <div class="col-sm-4">
                        
                          <textarea 
                                    rows="5" 
                                    cols="45"
                                    class="form-control"
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
                       <label for="studied_places" class="col-sm-2 control-label" >Schools</label>
                    <div class="col-sm-4">
                        <textarea 
                            rows="5" 
                            cols="45"
                            class="form-control"
                            id="studied_places"
                            name="studied_places"
                            [(ngModel)]="model.studied_places" 
                            #studied_places="ngModel">
                            {{student_info.studied_places}}
                            </textarea>
                    </div>
                   
                </div>
                <div align="center">
                        <br>
                        <button type="submit" data-target="#myModal" class="{{_stepService.template.grid_btn}}" [disabled]="!studentForm.form.valid">SAVE CHANGES</button>
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
        student_service_1.StudentService, step_service_1.StepService,
        router_1.ActivatedRoute, http_1.Http])
], StudentComponent);
exports.StudentComponent = StudentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2JhbGxldC9zdHVkZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDREQUFzRDtBQUV0RCx3Q0FBb0U7QUFDcEUsNENBQXlFO0FBQ3pFLHdDQUFtQztBQUNuQyxtREFBNkM7QUFDN0Msa0RBQWlEO0FBQ2pELG1FQUE2RDtBQUU3RCx1Q0FBa0M7QUFDbEMsdURBQWlEO0FBNlhqRCxJQUFhLGdCQUFnQixHQUE3QjtJQUVJLFlBQ1ksTUFBYyxFQUFVLFlBQStCLEVBQ3ZELGFBQTJCLEVBQVcscUJBQTJDLEVBQ2pGLGVBQStCLEVBQVUsWUFBeUIsRUFDbEUsS0FBcUIsRUFBVSxLQUFXO1FBSDFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDdkQsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFBVywwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCO1FBQ2pGLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ2xFLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQU10RCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBT2IsY0FBUyxHQUFHLENBQUMsUUFBUSxFQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLGdCQUFnQixDQUFDLENBQUE7UUFFMUUsVUFBSyxHQUFHLENBQUMsR0FBRyxFQUFDLEtBQUssRUFBRSxLQUFLO1lBQ3JCLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWpDLGNBQVMsR0FBRyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFpQzFCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFwRHNDLENBQUM7SUFxQnpELFFBQVE7UUFHSixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDM0MsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQkFBTyxDQUNwQixJQUFJLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLElBQUksRUFDM0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQzNDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQzlCLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUM5QyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUNqRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBQyxJQUFJLENBQUMsbUJBQW1CLEVBQ2hGLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtJQUNULENBQUM7SUFJRCxRQUFRO1FBQ0osSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUN6QyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFFVixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDL0IsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtRQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNCLENBQUM7Q0FlSixDQUFBO0FBdEZZLGdCQUFnQjtJQTVYNUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBdVhIO0tBQ1YsQ0FBQztxQ0FLc0IsZUFBTSxFQUF5QiwrQkFBZ0I7UUFDeEMsNEJBQVksRUFBa0MsNENBQW9CO1FBQ2hFLGdDQUFjLEVBQXdCLDBCQUFXO1FBQzNELHVCQUFjLEVBQWlCLFdBQUk7R0FON0MsZ0JBQWdCLENBc0Y1QjtBQXRGWSw0Q0FBZ0IiLCJmaWxlIjoiYWRtaW4vYmFsbGV0L3N0dWRlbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uLy4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuZGVjbGFyZSBjb25zdCAkIDogYW55O1xyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtHcm91cFNlcnZpY2V9IGZyb20gXCIuL2dyb3VwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi4vZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QmFsbGV0RGV0YWlsc1NlcnZpY2V9IGZyb20gXCIuL2JhbGxldERldGFpbHMuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHtTdHVkZW50fSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcbmltcG9ydCB7U3R1ZGVudFNlcnZpY2V9IGZyb20gXCIuL3N0dWRlbnQuc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZWRpdF9zdHVkZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2ICAqbmdJZj1cImRpc3BsYXlfZWRpdFwiPiBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiAgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIj5cclxuICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJyb3dcIiBhbGlnbj1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCIgKm5nSWY9XCJkaXNwbGF5X2VkaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZ3JpZCddXCIgW3F1ZXJ5UGFyYW1zXT1cInsnZ3JpZF9uYW1lJzogY291cnNlX3R5cGUsICdtYXN0ZXInOiBzdGFnZSwgJ2FwcF9uYW1lJzonYmFsbGV0J31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCIgPjwvaT5CQUNLPC9idXR0b24+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8YnI+PGJyPjxicj48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzdHVkZW50X2luZm8ucmVnaXN0cmVkXCIgYWxpZ249XCJsZWZ0XCIgPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVnaXN0cmVkPGJyPiA8aW5wdXQgdHlwZT1cImltYWdlXCIgc3JjPVwiL2ltYWdlcy9jaGVja2VkLmpwZ1wiIGRpc2FibGVkLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTBcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aDI+PGIgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPnt7c3R1ZGVudF9pbmZvLnByb2ZpbGVbMV0ubm9tfX08L2I+IHt7c3R1ZGVudF9pbmZvLnByb2ZpbGVbMF0uZmlyc3RuYW1lfX0gPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgPGg0PjxiIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e3N0dWRlbnRfaW5mby5zdGFnZX19PC9iPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxoND48YiBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+e3tzdHVkZW50X2luZm8uY291cnNlX3R5cGV9fTwvYj48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICA8aDQ+e3tzdHVkZW50X2luZm8uZ3JvdXB9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS08aDI+e3tzdHVkZW50X2luZm8uYWdlfX0geWVhcnMgb2xkPC9oMj4tLT5cclxuICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCIgI3N0dWRlbnRGb3JtPVwibmdGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiAgPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGF0YS10YXJnZXQ9XCIjbXlNb2RhbFwiIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUuZ3JpZF9idG59fVwiIFtkaXNhYmxlZF09XCIhc3R1ZGVudEZvcm0uZm9ybS52YWxpZFwiPlNBVkUgQ0hBTkdFUzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxyXG4gICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1zbS04XCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGg0PjxiIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e3N0dWRlbnRfaW5mby5zdGFnZX19LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGJyPnt7c3R1ZGVudF9pbmZvLmNvdXJzZV90eXBlfX0tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08YnI+e3tzdHVkZW50X2luZm8uZ3JvdXB9fS0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvYj48L2g0Pi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxoND48YiBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+PGxhYmVsIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID57e3N0dWRlbnRfaW5mby5zdGFnZX19PC9sYWJlbD4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08bGFiZWwgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPnt7c3R1ZGVudF9pbmZvLmNvdXJzZV90eXBlfX08L2xhYmVsPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxsYWJlbCBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+e3tzdHVkZW50X2luZm8uZ3JvdXB9fTwvbGFiZWw+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC9iPjwvaDQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGxhYmVsIGZvcj1cInJlZ2lzdHJlZFwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5SZWdpc3RyZWQ8L2xhYmVsPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGlucHV0IHR5cGU9XCJpbWFnZVwiIHNyYz1cIi9pbWFnZXMvY2hlY2tlZC5qcGdcIiBkaXNhYmxlZC8+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+ICAtLT5cclxuICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0mbHQ7ISZuZGFzaDsoY2hhbmdlKT11cGRhdGVDaGVja0JveCgkZXZlbnQsaXRlbSkmbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCAqbmdJZj1cInN0dWRlbnRfaW5mby5yZWdpc3RyZWRcIiBuYW1lPVwicmVnaXN0cmVkXCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5yZWdpc3RyZWR9fVwiIGNoZWNrZWQgIC8+ICAgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGlucHV0ICpuZ0lmPVwic3R1ZGVudF9pbmZvLnJlZ2lzdHJlZCA9PSBmYWxzZVwiIG5hbWU9XCJyZWdpc3RyZWRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInt7c3R1ZGVudF9pbmZvLnJlZ2lzdHJlZH19XCIgIC8+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgPCEtLTxsYWJlbCBmb3I9XCJjb3Vyc2VfdHlwZVwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5Db3Vyc2U8L2xhYmVsPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS17e3N0dWRlbnRfaW5mby5jb3Vyc2VfdHlwZX19LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0mbHQ7ISZuZGFzaDs8c2VsZWN0ICBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY291cnNlXCIgKGNoYW5nZSk9XCJjaGFuZ2VDb3Vyc2UoJGV2ZW50LCBpdGVtLl9pZClcIiAgID4mbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7PG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cInN0dWRlbnRfaW5mby5jb3Vyc2VfdHlwZVwiPnt7c3R1ZGVudF9pbmZvLmNvdXJzZV90eXBlfX08L29wdGlvbj4mbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7PG9wdGlvbiAqbmdGb3I9XCJsZXQgY291cnNlIG9mIF9ncmlkU2VydmljZS5kYXRhR3JpZFswXS5jb3Vyc2VfbGlzdFwiPiZuZGFzaDsmZ3Q7LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7Jmx0OyEmbmRhc2g7PGIgc2VsZWN0ZWQgKm5nSWY9XCJjb3Vyc2UgPT0gaXRlbVtrZXldXCI+e3tjb3Vyc2V9fTwvYj4mbmRhc2g7Jmd0OyZuZGFzaDsmZ3Q7LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7PGIgKm5nSWY9XCJjb3Vyc2UgIT0gc3R1ZGVudF9pbmZvLmNvdXJzZV90eXBlXCI+e3tjb3Vyc2V9fTwvYj48L29wdGlvbj4mbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7PC9zZWxlY3Q+Jm5kYXNoOyZndDstLT5cclxuICAgICAgICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08bGFiZWwgZm9yPVwiZ3JvdXBcIiBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+R3JvdXA8L2xhYmVsPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS17e3N0dWRlbnRfaW5mby5ncm91cH19LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7PGlucHV0ICZuZGFzaDsmZ3Q7LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7bXlBdXRvZm9jdXMmbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoO2NsYXNzPVwiZm9ybS1jb250cm9sXCImbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoO3R5cGU9XCJ0ZXh0XCImbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoO2lkPVwiZ3JvdXBcIiZuZGFzaDsmZ3Q7LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7bmFtZT1cImdyb3VwXCImbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoO3ZhbHVlPVwie3tzdHVkZW50X2luZm8uZ3JvdXB9fVwiJm5kYXNoOyZndDstLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoO1sobmdNb2RlbCldPVwibW9kZWwuZ3JvdXBcIiBuYW1lPVwiZ3JvdXBcIiZuZGFzaDsmZ3Q7LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoOyNncm91cD1cIm5nTW9kZWxcIj4mbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJETklcIiBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+RE5JPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteUF1dG9mb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJETklcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkROSVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7c3R1ZGVudF9pbmZvLkROSX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5ETklcIiBuYW1lPVwiRE5JXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjRE5JPVwibmdNb2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiQkVDQVwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5CRUNBPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiQkVDQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLkJFQ0FcIiBuYW1lPVwiQkVDQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjQkVDQT1cIm5nTW9kZWxcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBiZWNhIG9mIGJlY2FzXCIgW3ZhbHVlXT1cImJlY2FcIj57e2JlY2F9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkFVRElUSU9OXCIgY2xhc3M9XCJjb2wtc20tNCBjb250cm9sLWxhYmVsXCIgPkF1ZGl0aW9uIHBsYWNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImF1ZGl0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5hdWRpdGlvblwiIG5hbWU9XCJhdWRpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNhdWRpdGlvbj1cIm5nTW9kZWxcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBhdWRpdGlvbiBvZiBhdWRpdGlvbnNcIiBbdmFsdWVdPVwiYXVkaXRpb25cIj57e2F1ZGl0aW9ufX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiRFVSQVRJT05cIiBjbGFzcz1cImNvbC1zbS00IGNvbnRyb2wtbGFiZWxcIiA+RHVyYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiZHVyYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLmR1cmF0aW9uXCIgbmFtZT1cImR1cmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2R1cmF0aW9uPVwibmdNb2RlbFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGR1cmF0aW9uIG9mIGR1cmF0aW9uc1wiIFt2YWx1ZV09XCJkdXJhdGlvblwiPnt7ZHVyYXRpb259fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVzaWRlbmNlXCIgY2xhc3M9XCJjb2wtc20tMyBjb250cm9sLWxhYmVsXCIgPlJlc2lkZW5jZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtaW5saW5lXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwicmVzaWRlbmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLnJlc2lkZW5jZVwiIG5hbWU9XCJyZXNpZGVuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNyZXNpZGVuY2U9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHJlc2lkZW5jZSBvZiBbJ1lFUycsJ05PJ11cIiBbdmFsdWVdPVwicmVzaWRlbmNlXCI+e3tyZXNpZGVuY2V9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxvcHRpb24gW3ZhbHVlXT1cIllFU1wiPllFUzwvb3B0aW9uPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxvcHRpb24gW3ZhbHVlXT1cIk5PXCI+Tk88L29wdGlvbj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08aW5wdXQgICpuZ0lmPVwic3R1ZGVudF9pbmZvLnJlc2lkZW5jZSA9PSAnWUVTJ1wiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS10eXBlPVwiY2hlY2tib3hcIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tY2hlY2tlZC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1pZD1cInJlc2lkZW5jZVwiIG5hbWU9XCJyZXNpZGVuY2VcIiAgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVsobmdNb2RlbCldPVwibW9kZWwucmVzaWRlbmNlXCItLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tI3Jlc2lkZW5jZT1cIm5nTW9kZWxcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08aW5wdXQgICpuZ0lmPVwic3R1ZGVudF9pbmZvLnJlc2lkZW5jZSA9PSAnTk8nXCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLXR5cGU9XCJjaGVja2JveFwiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1pZD1cInJlc2lkZW5jZVwiIG5hbWU9XCJyZXNpZGVuY2VcIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tWyhuZ01vZGVsKV09XCJtb2RlbC5yZXNpZGVuY2VcIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tI3Jlc2lkZW5jZT1cIm5nTW9kZWxcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L2xhYmVsPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tY2xhc3M9XCJmb3JtLWNvbnRyb2xcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS10eXBlPVwidGV4dFwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWlkPVwicmVzaWRlbmNlXCItLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tbmFtZT1cInJlc2lkZW5jZVwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLXZhbHVlPVwie3tzdHVkZW50X2luZm8ucmVzaWRlbmNlfX1cIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1bKG5nTW9kZWwpXT1cIm1vZGVsLnJlc2lkZW5jZVwiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1uYW1lPVwicmVzaWRlbmNlXCItLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tI3Jlc2lkZW5jZT1cIm5nTW9kZWxcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBR0UgWFAgQklSVEhEQVkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFnZVwiIGNsYXNzPVwiY29sLXNtLTQgY29udHJvbC1sYWJlbFwiID5BZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5hZ2V9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLmFnZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2FnZT1cIm5nTW9kZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInllYXJzX29mX2V4cGVyaWVuY2VcIiBjbGFzcz1cImNvbC1zbS00IGNvbnRyb2wtbGFiZWxcIiA+RXhwZXJpZW5jZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInllYXJzX29mX2V4cGVyaWVuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwieWVhcnNfb2ZfZXhwZXJpZW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tzdHVkZW50X2luZm8ueHB9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwueWVhcnNfb2ZfZXhwZXJpZW5jZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjeWVhcnNfb2ZfZXhwZXJpZW5jZT1cIm5nTW9kZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJiaXJ0aGRheVwiIGNsYXNzPVwiY29sLXNtLTQgY29udHJvbC1sYWJlbFwiID5CaXJ0aGRheTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJpcnRoZGF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJpcnRoZGF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5iaXJ0aGRheX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5iaXJ0aGRheVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjYmlydGhkYXk9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBIT05FICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLT5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwaG9uZVwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5QaG9uZSAxPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5waG9uZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwucGhvbmVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNwaG9uZT1cIm5nTW9kZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGhvbmUyXCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPlBob25lIDI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBob25lMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tzdHVkZW50X2luZm8ucGhvbmUyfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5waG9uZTJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNwaG9uZTI9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5FbWFpbCAxPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7c3R1ZGVudF9pbmZvLmVtYWlsfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5lbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2VtYWlsPVwibmdNb2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbDJcIiBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+RW1haWwgMjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWwyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5lbWFpbDJ9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLmVtYWlsMlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2VtYWlsMj1cIm5nTW9kZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb3VudHJ5XCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPkNvdW50cnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvdW50cnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvdW50cnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5jb3VudHJ5fX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5jb3VudHJ5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY291bnRyeT1cIm5nTW9kZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPkNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5jaXR5fX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5jaXR5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjY2l0eT1cIm5nTW9kZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiRmF0aGVyXCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPkZhdGhlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmF0aGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmYXRoZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5mYXRoZXJ9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLmZhdGhlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ZhdGhlcj1cIm5nTW9kZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJJbnRvbGVyYW5jZVwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5JbnRvbGVyYW5jZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW50b2xlcmVuY2lhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbnRvbGVyZW5jaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5pbnRvbGVyZW5jaWF9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLmludG9sZXJlbmNpYVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ludG9sZXJlbmNpYT1cIm5nTW9kZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5vdGVzXCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPk5vdGVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiNVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPVwiNDVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibm90ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm90ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLm5vdGVzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNub3Rlcz1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzdHVkZW50X2luZm8ubm90ZXMgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1jbGFzcz1cImZvcm0tY29udHJvbFwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tdHlwZT1cInRleHRcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWlkPVwibm90ZXNcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLW5hbWU9XCJub3Rlc1wiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5ub3Rlc319XCItLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1bKG5nTW9kZWwpXT1cIm1vZGVsLm5vdGVzXCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tbmFtZT1cIm5vdGVzXCItLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0jbm90ZXM9XCJuZ01vZGVsXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN0dWRpZWRfcGxhY2VzXCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPlNjaG9vbHM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiNVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz1cIjQ1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3R1ZGllZF9wbGFjZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0dWRpZWRfcGxhY2VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuc3R1ZGllZF9wbGFjZXNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNzdHVkaWVkX3BsYWNlcz1cIm5nTW9kZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c3R1ZGVudF9pbmZvLnN0dWRpZWRfcGxhY2VzfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRhdGEtdGFyZ2V0PVwiI215TW9kYWxcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmdyaWRfYnRufX1cIiBbZGlzYWJsZWRdPVwiIXN0dWRlbnRGb3JtLmZvcm0udmFsaWRcIj5TQVZFIENIQU5HRVM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+ICAgIFxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICA8ZGl2ICBpZD1cIm15TW9kYWxcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIiByb2xlPVwiZGlhbG9nXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDwhLS0gTW9kYWwgY29udGVudC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+RG9uZTwvaDQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwPlN0dWRlbnQgdXBkYXRlZDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4gIDwvZGl2PlxyXG4gICAgPC9kaXY+YFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0dWRlbnRDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2dyaWRTZXJ2aWNlIDogR3JpZFBhbmVsU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9ncm91cFNlcnZpY2U6IEdyb3VwU2VydmljZSwgIHByaXZhdGUgX2JhbGxldERldGFpbHNTZXJ2aWNlOiBCYWxsZXREZXRhaWxzU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9zdHVkZW50U2VydmljZTogU3R1ZGVudFNlcnZpY2UsIHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfaHR0cDogSHR0cCl7fVxyXG5cclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcblxyXG4gICAgb2JqX2lkO1xyXG4gICAgdmFsdWVzO1xyXG4gICAgZGlzcGxheV9lZGl0ID0gZmFsc2U7XHJcbiAgICBzdHVkZW50ID0ge307XHJcbiAgICBzdHVkZW50X2luZm87XHJcbiAgICBzdHVkZW50R3JvdXA7XHJcbiAgICBtb2RlbDtcclxuICAgIGNvdXJzZV90eXBlO1xyXG4gICAgc3RhZ2U7XHJcblxyXG4gICAgYXVkaXRpb25zID0gWydNQURSSUQnLCdCQVJDRUxPTkEnLCAnQUxJQ0FOVEUnLCAnTk9WRUxEQScsJ1ZJREVPIEFVRElUSU9OJ11cclxuXHJcbiAgICBiZWNhcyA9IFsnMCcsJzE1JScsICcyMCUnLFxyXG4gICAgICAgICcyNSUnLCAnNTAlJywgJzc1JScsICcxMDAlJ107XHJcblxyXG4gICAgZHVyYXRpb25zID0gW1wiMVwiLFwiMlwiLFwiM1wiXTtcclxuXHJcbiAgICBuZ09uSW5pdCgpXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqX2lkID0gcGFyYW1zWydyZWNvcmQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXHJcbiAgICAgICAgICAgIHRoaXMuY291cnNlX3R5cGUgPSBwYXJhbXNbJ2NvdXJzZV90eXBlJ11cclxuICAgICAgICAgICAgdGhpcy5zdGFnZSA9IHBhcmFtc1snc3RhZ2UnXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqX2lkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkKTtcclxuICAgICAgICB0aGlzLl9iYWxsZXREZXRhaWxzU2VydmljZS5nZXREYXRhcyh0aGlzLm9ial9pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudF9pbmZvID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gbmV3IFN0dWRlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuX2lkLGRhdGEuRE5JLGRhdGEuQkVDQSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5mYXRoZXIsIGRhdGEuaW50b2xlcmVuY2lhLCBkYXRhLmVtYWlsMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5waG9uZTIsIGRhdGEubm90ZXMsIHRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNvdXJzZV90eXBlLCBkYXRhLmF1ZGl0aW9uLCBkYXRhLmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFnZSwgZGF0YS5wcm9maWxlWzRdLmJpcnRoZGF0ZSwgZGF0YS5ncm91cCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wcm9maWxlWzJdLnBob25lLGRhdGEucHJvZmlsZVszXS5lbWFpbCwgZGF0YS5wcm9maWxlWzZdLmNpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHJvZmlsZVs1XS5jb3VudHJ5LCBkYXRhLnByb2ZpbGVbN10uc3R1ZGllZF9wbGFjZXMsZGF0YS55ZWFyc19vZl9leHBlcmllbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnJlc2lkZW5jZSwgZGF0YS5zdGFnZSwgZGF0YS5yZWdpc3RyZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheV9lZGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdHRlZCA9IGZhbHNlO1xyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMuX3N0dWRlbnRTZXJ2aWNlLnVwZGF0ZVN0dWRlbnQodGhpcy5tb2RlbClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI215TW9kYWxcIikubW9kYWwoJ3Nob3cnKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubW9kZWwpXHJcbiAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gdXBkYXRlQ2hlY2tCb3goJGV2ZW50LCBpdGVtKXtcclxuICAgIC8vICAgICAvLyBsZXQgdmFsdWUgPSAkZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuICAgIC8vICAgICBsZXQgdmFsdWUgPSRldmVudC50YXJnZXQuY2hlY2tlZDtcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKVxyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKCRldmVudC50YXJnZXQpXHJcbiAgICAvLyAgICAgbGV0IGZpZWxkTmFtZSA9ICRldmVudC50YXJnZXQubmFtZTtcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1hc3RlcilcclxuICAgIC8vICAgICB0aGlzLl9ncmlkU2VydmljZS51cGRhdGVDaGVja2JveCh2YWx1ZSxpdGVtLl9pZCwgXCJiYWxsZXRcIiwgXCJiYWxsZXRcIiwgZmllbGROYW1lKVxyXG4gICAgLy8gICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgLy8gICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcclxuICAgIC8vICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgLy8gICAgICAgICApXHJcbiAgICAvLyB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
