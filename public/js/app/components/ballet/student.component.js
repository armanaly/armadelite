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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFsbGV0L3N0dWRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsNERBQXNEO0FBRXRELHdDQUFvRTtBQUNwRSw0Q0FBeUU7QUFDekUsd0NBQW1DO0FBQ25DLG1EQUE2QztBQUM3QyxrREFBaUQ7QUFDakQsbUVBQTZEO0FBRTdELHVDQUFrQztBQUNsQyx1REFBaUQ7QUE2WGpELElBQWEsZ0JBQWdCLEdBQTdCO0lBRUksWUFDWSxNQUFjLEVBQVUsWUFBK0IsRUFDdkQsYUFBMkIsRUFBVyxxQkFBMkMsRUFDakYsZUFBK0IsRUFBVSxZQUF5QixFQUNsRSxLQUFxQixFQUFVLEtBQVc7UUFIMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUN2RCxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUFXLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7UUFDakYsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDbEUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBTXRELGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFPYixjQUFTLEdBQUcsQ0FBQyxRQUFRLEVBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUUxRSxVQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUMsS0FBSyxFQUFFLEtBQUs7WUFDckIsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFakMsY0FBUyxHQUFHLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztRQWlDMUIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQXBEc0MsQ0FBQztJQXFCekQsUUFBUTtRQUdKLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUMzQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGlCQUFPLENBQ3BCLElBQUksQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsSUFBSSxFQUMzQixJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFDM0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFDOUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQzlDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ2pFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFDaEYsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM3QixDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO0lBQ1QsQ0FBQztJQUlELFFBQVE7UUFDSixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ3pDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUVWLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDakIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMvQixDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO1FBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDM0IsQ0FBQztDQWVKLENBQUE7QUF0RlksZ0JBQWdCO0lBNVg1QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0F1WEg7S0FDVixDQUFDO3FDQUtzQixlQUFNLEVBQXlCLCtCQUFnQjtRQUN4Qyw0QkFBWSxFQUFrQyw0Q0FBb0I7UUFDaEUsZ0NBQWMsRUFBd0IsMEJBQVc7UUFDM0QsdUJBQWMsRUFBaUIsV0FBSTtHQU43QyxnQkFBZ0IsQ0FzRjVCO0FBdEZZLDRDQUFnQiIsImZpbGUiOiJjb21wb25lbnRzL2JhbGxldC9zdHVkZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi8uLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmRlY2xhcmUgY29uc3QgJCA6IGFueTtcclxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7R3JvdXBTZXJ2aWNlfSBmcm9tIFwiLi9ncm91cC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4uL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQge0JhbGxldERldGFpbHNTZXJ2aWNlfSBmcm9tIFwiLi9iYWxsZXREZXRhaWxzLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7U3R1ZGVudH0gZnJvbSBcIi4vc3R1ZGVudFwiO1xyXG5pbXBvcnQge1N0dWRlbnRTZXJ2aWNlfSBmcm9tIFwiLi9zdHVkZW50LnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2VkaXRfc3R1ZGVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiAgKm5nSWY9XCJkaXNwbGF5X2VkaXRcIj4gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUucGFuZWxfaGVhZGluZ319XCI+XHJcbiAgICAgICAgICAgIDxkaXYgIGNsYXNzPVwicm93XCIgYWxpZ249XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiICpuZ0lmPVwiZGlzcGxheV9lZGl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2dyaWRfbmFtZSc6IGNvdXJzZV90eXBlLCAnbWFzdGVyJzogc3RhZ2UsICdhcHBfbmFtZSc6J2JhbGxldCd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiID48L2k+QkFDSzwvYnV0dG9uPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICAgPGJyPjxicj48YnI+PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic3R1ZGVudF9pbmZvLnJlZ2lzdHJlZFwiIGFsaWduPVwibGVmdFwiID4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlZ2lzdHJlZDxicj4gPGlucHV0IHR5cGU9XCJpbWFnZVwiIHNyYz1cIi9pbWFnZXMvY2hlY2tlZC5qcGdcIiBkaXNhYmxlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEwXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGgyPjxiIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e3N0dWRlbnRfaW5mby5wcm9maWxlWzFdLm5vbX19PC9iPiB7e3N0dWRlbnRfaW5mby5wcm9maWxlWzBdLmZpcnN0bmFtZX19IDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxoND48YiBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+e3tzdHVkZW50X2luZm8uc3RhZ2V9fTwvYj48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICA8aDQ+PGIgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPnt7c3R1ZGVudF9pbmZvLmNvdXJzZV90eXBlfX08L2I+PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7c3R1ZGVudF9pbmZvLmdyb3VwfX08L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8IS0tPGgyPnt7c3R1ZGVudF9pbmZvLmFnZX19IHllYXJzIG9sZDwvaDI+LS0+XHJcbiAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiICNzdHVkZW50Rm9ybT1cIm5nRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCIgID5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRhdGEtdGFyZ2V0PVwiI215TW9kYWxcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmdyaWRfYnRufX1cIiBbZGlzYWJsZWRdPVwiIXN0dWRlbnRGb3JtLmZvcm0udmFsaWRcIj5TQVZFIENIQU5HRVM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cclxuICAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtc20tOFwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxoND48YiBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+e3tzdHVkZW50X2luZm8uc3RhZ2V9fS0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxicj57e3N0dWRlbnRfaW5mby5jb3Vyc2VfdHlwZX19LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGJyPnt7c3R1ZGVudF9pbmZvLmdyb3VwfX0tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L2I+PC9oND4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08aDQ+PGIgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPjxsYWJlbCBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+e3tzdHVkZW50X2luZm8uc3RhZ2V9fTwvbGFiZWw+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGxhYmVsIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID57e3N0dWRlbnRfaW5mby5jb3Vyc2VfdHlwZX19PC9sYWJlbD4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08bGFiZWwgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPnt7c3R1ZGVudF9pbmZvLmdyb3VwfX08L2xhYmVsPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvYj48L2g0Pi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxsYWJlbCBmb3I9XCJyZWdpc3RyZWRcIiBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+UmVnaXN0cmVkPC9sYWJlbD4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCB0eXBlPVwiaW1hZ2VcIiBzcmM9XCIvaW1hZ2VzL2NoZWNrZWQuanBnXCIgZGlzYWJsZWQvPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTwvZGl2PiAgLS0+XHJcbiAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7KGNoYW5nZSk9dXBkYXRlQ2hlY2tCb3goJGV2ZW50LGl0ZW0pJm5kYXNoOyZndDstLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08aW5wdXQgKm5nSWY9XCJzdHVkZW50X2luZm8ucmVnaXN0cmVkXCIgbmFtZT1cInJlZ2lzdHJlZFwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwie3tzdHVkZW50X2luZm8ucmVnaXN0cmVkfX1cIiBjaGVja2VkICAvPiAgIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCAqbmdJZj1cInN0dWRlbnRfaW5mby5yZWdpc3RyZWQgPT0gZmFsc2VcIiBuYW1lPVwicmVnaXN0cmVkXCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5yZWdpc3RyZWR9fVwiICAvPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwhLS08bGFiZWwgZm9yPVwiY291cnNlX3R5cGVcIiBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+Q291cnNlPC9sYWJlbD4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0te3tzdHVkZW50X2luZm8uY291cnNlX3R5cGV9fS0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7PHNlbGVjdCAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNvdXJzZVwiIChjaGFuZ2UpPVwiY2hhbmdlQ291cnNlKCRldmVudCwgaXRlbS5faWQpXCIgICA+Jm5kYXNoOyZndDstLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoOzxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCJzdHVkZW50X2luZm8uY291cnNlX3R5cGVcIj57e3N0dWRlbnRfaW5mby5jb3Vyc2VfdHlwZX19PC9vcHRpb24+Jm5kYXNoOyZndDstLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoOzxvcHRpb24gKm5nRm9yPVwibGV0IGNvdXJzZSBvZiBfZ3JpZFNlcnZpY2UuZGF0YUdyaWRbMF0uY291cnNlX2xpc3RcIj4mbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoOyZsdDshJm5kYXNoOzxiIHNlbGVjdGVkICpuZ0lmPVwiY291cnNlID09IGl0ZW1ba2V5XVwiPnt7Y291cnNlfX08L2I+Jm5kYXNoOyZndDsmbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoOzxiICpuZ0lmPVwiY291cnNlICE9IHN0dWRlbnRfaW5mby5jb3Vyc2VfdHlwZVwiPnt7Y291cnNlfX08L2I+PC9vcHRpb24+Jm5kYXNoOyZndDstLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoOzwvc2VsZWN0PiZuZGFzaDsmZ3Q7LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGxhYmVsIGZvcj1cImdyb3VwXCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPkdyb3VwPC9sYWJlbD4tLT5cclxuICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0te3tzdHVkZW50X2luZm8uZ3JvdXB9fS0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoOzxpbnB1dCAmbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoO215QXV0b2ZvY3VzJm5kYXNoOyZndDstLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0mbHQ7ISZuZGFzaDtjbGFzcz1cImZvcm0tY29udHJvbFwiJm5kYXNoOyZndDstLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0mbHQ7ISZuZGFzaDt0eXBlPVwidGV4dFwiJm5kYXNoOyZndDstLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0mbHQ7ISZuZGFzaDtpZD1cImdyb3VwXCImbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoO25hbWU9XCJncm91cFwiJm5kYXNoOyZndDstLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0mbHQ7ISZuZGFzaDt2YWx1ZT1cInt7c3R1ZGVudF9pbmZvLmdyb3VwfX1cIiZuZGFzaDsmZ3Q7LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0mbHQ7ISZuZGFzaDtbKG5nTW9kZWwpXT1cIm1vZGVsLmdyb3VwXCIgbmFtZT1cImdyb3VwXCImbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0mbHQ7ISZuZGFzaDsjZ3JvdXA9XCJuZ01vZGVsXCI+Jm5kYXNoOyZndDstLT5cclxuICAgICAgICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiRE5JXCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPkROSTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlBdXRvZm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiRE5JXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJETklcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5ETkl9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuRE5JXCIgbmFtZT1cIkROSVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI0ROST1cIm5nTW9kZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkJFQ0FcIiBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+QkVDQTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIkJFQ0FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5CRUNBXCIgbmFtZT1cIkJFQ0FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI0JFQ0E9XCJuZ01vZGVsXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgYmVjYSBvZiBiZWNhc1wiIFt2YWx1ZV09XCJiZWNhXCI+e3tiZWNhfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJBVURJVElPTlwiIGNsYXNzPVwiY29sLXNtLTQgY29udHJvbC1sYWJlbFwiID5BdWRpdGlvbiBwbGFjZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJhdWRpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuYXVkaXRpb25cIiBuYW1lPVwiYXVkaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjYXVkaXRpb249XCJuZ01vZGVsXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgYXVkaXRpb24gb2YgYXVkaXRpb25zXCIgW3ZhbHVlXT1cImF1ZGl0aW9uXCI+e3thdWRpdGlvbn19PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkRVUkFUSU9OXCIgY2xhc3M9XCJjb2wtc20tNCBjb250cm9sLWxhYmVsXCIgPkR1cmF0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImR1cmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5kdXJhdGlvblwiIG5hbWU9XCJkdXJhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNkdXJhdGlvbj1cIm5nTW9kZWxcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBkdXJhdGlvbiBvZiBkdXJhdGlvbnNcIiBbdmFsdWVdPVwiZHVyYXRpb25cIj57e2R1cmF0aW9ufX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlc2lkZW5jZVwiIGNsYXNzPVwiY29sLXNtLTMgY29udHJvbC1sYWJlbFwiID5SZXNpZGVuY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWlubGluZVwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInJlc2lkZW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5yZXNpZGVuY2VcIiBuYW1lPVwicmVzaWRlbmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjcmVzaWRlbmNlPVwibmdNb2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCByZXNpZGVuY2Ugb2YgWydZRVMnLCdOTyddXCIgW3ZhbHVlXT1cInJlc2lkZW5jZVwiPnt7cmVzaWRlbmNlfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08b3B0aW9uIFt2YWx1ZV09XCJZRVNcIj5ZRVM8L29wdGlvbj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08b3B0aW9uIFt2YWx1ZV09XCJOT1wiPk5PPC9vcHRpb24+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGlucHV0ICAqbmdJZj1cInN0dWRlbnRfaW5mby5yZXNpZGVuY2UgPT0gJ1lFUydcIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tdHlwZT1cImNoZWNrYm94XCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWNoZWNrZWQtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0taWQ9XCJyZXNpZGVuY2VcIiBuYW1lPVwicmVzaWRlbmNlXCIgIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1bKG5nTW9kZWwpXT1cIm1vZGVsLnJlc2lkZW5jZVwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSNyZXNpZGVuY2U9XCJuZ01vZGVsXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGlucHV0ICAqbmdJZj1cInN0dWRlbnRfaW5mby5yZXNpZGVuY2UgPT0gJ05PJ1wiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS10eXBlPVwiY2hlY2tib3hcIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0taWQ9XCJyZXNpZGVuY2VcIiBuYW1lPVwicmVzaWRlbmNlXCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVsobmdNb2RlbCldPVwibW9kZWwucmVzaWRlbmNlXCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSNyZXNpZGVuY2U9XCJuZ01vZGVsXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC9sYWJlbD4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08aW5wdXQgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWNsYXNzPVwiZm9ybS1jb250cm9sXCItLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tdHlwZT1cInRleHRcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1pZD1cInJlc2lkZW5jZVwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLW5hbWU9XCJyZXNpZGVuY2VcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS12YWx1ZT1cInt7c3R1ZGVudF9pbmZvLnJlc2lkZW5jZX19XCItLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tWyhuZ01vZGVsKV09XCJtb2RlbC5yZXNpZGVuY2VcIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tbmFtZT1cInJlc2lkZW5jZVwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSNyZXNpZGVuY2U9XCJuZ01vZGVsXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUdFIFhQIEJJUlRIREFZICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZ2VcIiBjbGFzcz1cImNvbC1zbS00IGNvbnRyb2wtbGFiZWxcIiA+QWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tzdHVkZW50X2luZm8uYWdlfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5hZ2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNhZ2U9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ5ZWFyc19vZl9leHBlcmllbmNlXCIgY2xhc3M9XCJjb2wtc20tNCBjb250cm9sLWxhYmVsXCIgPkV4cGVyaWVuY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ5ZWFyc19vZl9leHBlcmllbmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInllYXJzX29mX2V4cGVyaWVuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7c3R1ZGVudF9pbmZvLnhwfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLnllYXJzX29mX2V4cGVyaWVuY2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3llYXJzX29mX2V4cGVyaWVuY2U9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmlydGhkYXlcIiBjbGFzcz1cImNvbC1zbS00IGNvbnRyb2wtbGFiZWxcIiA+QmlydGhkYXk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiaXJ0aGRheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiaXJ0aGRheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tzdHVkZW50X2luZm8uYmlydGhkYXl9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuYmlydGhkYXlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2JpcnRoZGF5PVwibmdNb2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQSE9ORSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLS0+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGhvbmVcIiBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+UGhvbmUgMTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tzdHVkZW50X2luZm8ucGhvbmV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLnBob25lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjcGhvbmU9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBob25lMlwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5QaG9uZSAyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwaG9uZTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7c3R1ZGVudF9pbmZvLnBob25lMn19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwucGhvbmUyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjcGhvbmUyPVwibmdNb2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIiBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+RW1haWwgMTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWwxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5lbWFpbH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNlbWFpbD1cIm5nTW9kZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWwyXCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPkVtYWlsIDI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWwyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tzdHVkZW50X2luZm8uZW1haWwyfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5lbWFpbDJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNlbWFpbDI9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY291bnRyeVwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5Db3VudHJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb3VudHJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb3VudHJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tzdHVkZW50X2luZm8uY291bnRyeX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuY291bnRyeVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NvdW50cnk9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tzdHVkZW50X2luZm8uY2l0eX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuY2l0eVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI2NpdHk9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkZhdGhlclwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5GYXRoZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZhdGhlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmF0aGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tzdHVkZW50X2luZm8uZmF0aGVyfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5mYXRoZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNmYXRoZXI9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiSW50b2xlcmFuY2VcIiBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+SW50b2xlcmFuY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImludG9sZXJlbmNpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW50b2xlcmVuY2lhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tzdHVkZW50X2luZm8uaW50b2xlcmVuY2lhfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5pbnRvbGVyZW5jaWFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNpbnRvbGVyZW5jaWE9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJub3Rlc1wiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5Ob3RlczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz1cIjQ1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vdGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vdGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5ub3Rlc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjbm90ZXM9XCJuZ01vZGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c3R1ZGVudF9pbmZvLm5vdGVzIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08aW5wdXQgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tY2xhc3M9XCJmb3JtLWNvbnRyb2xcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLXR5cGU9XCJ0ZXh0XCItLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1pZD1cIm5vdGVzXCItLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1uYW1lPVwibm90ZXNcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLXZhbHVlPVwie3tzdHVkZW50X2luZm8ubm90ZXN9fVwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tWyhuZ01vZGVsKV09XCJtb2RlbC5ub3Rlc1wiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLW5hbWU9XCJub3Rlc1wiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tI25vdGVzPVwibmdNb2RlbFwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdHVkaWVkX3BsYWNlc1wiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5TY2hvb2xzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9XCI0NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0dWRpZWRfcGxhY2VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdHVkaWVkX3BsYWNlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLnN0dWRpZWRfcGxhY2VzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjc3R1ZGllZF9wbGFjZXM9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3N0dWRlbnRfaW5mby5zdHVkaWVkX3BsYWNlc319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkYXRhLXRhcmdldD1cIiNteU1vZGFsXCIgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5ncmlkX2J0bn19XCIgW2Rpc2FibGVkXT1cIiFzdHVkZW50Rm9ybS5mb3JtLnZhbGlkXCI+U0FWRSBDSEFOR0VTPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPiAgICBcclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgPGRpdiAgaWQ9XCJteU1vZGFsXCIgY2xhc3M9XCJtb2RhbCBmYWRlXCIgcm9sZT1cImRpYWxvZ1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tIE1vZGFsIGNvbnRlbnQtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPkRvbmU8L2g0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5TdHVkZW50IHVwZGF0ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+ICA8L2Rpdj5cclxuICAgIDwvZGl2PmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHVkZW50Q29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9ncmlkU2VydmljZSA6IEdyaWRQYW5lbFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfZ3JvdXBTZXJ2aWNlOiBHcm91cFNlcnZpY2UsICBwcml2YXRlIF9iYWxsZXREZXRhaWxzU2VydmljZTogQmFsbGV0RGV0YWlsc1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlLCBwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2h0dHA6IEh0dHApe31cclxuXHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG5cclxuICAgIG9ial9pZDtcclxuICAgIHZhbHVlcztcclxuICAgIGRpc3BsYXlfZWRpdCA9IGZhbHNlO1xyXG4gICAgc3R1ZGVudCA9IHt9O1xyXG4gICAgc3R1ZGVudF9pbmZvO1xyXG4gICAgc3R1ZGVudEdyb3VwO1xyXG4gICAgbW9kZWw7XHJcbiAgICBjb3Vyc2VfdHlwZTtcclxuICAgIHN0YWdlO1xyXG5cclxuICAgIGF1ZGl0aW9ucyA9IFsnTUFEUklEJywnQkFSQ0VMT05BJywgJ0FMSUNBTlRFJywgJ05PVkVMREEnLCdWSURFTyBBVURJVElPTiddXHJcblxyXG4gICAgYmVjYXMgPSBbJzAnLCcxNSUnLCAnMjAlJyxcclxuICAgICAgICAnMjUlJywgJzUwJScsICc3NSUnLCAnMTAwJSddO1xyXG5cclxuICAgIGR1cmF0aW9ucyA9IFtcIjFcIixcIjJcIixcIjNcIl07XHJcblxyXG4gICAgbmdPbkluaXQoKVxyXG4gICAge1xyXG5cclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9ial9pZCA9IHBhcmFtc1sncmVjb3JkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxyXG4gICAgICAgICAgICB0aGlzLmNvdXJzZV90eXBlID0gcGFyYW1zWydjb3Vyc2VfdHlwZSddXHJcbiAgICAgICAgICAgIHRoaXMuc3RhZ2UgPSBwYXJhbXNbJ3N0YWdlJ11cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ial9pZClcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZCk7XHJcbiAgICAgICAgdGhpcy5fYmFsbGV0RGV0YWlsc1NlcnZpY2UuZ2V0RGF0YXModGhpcy5vYmpfaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRfaW5mbyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBTdHVkZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLl9pZCxkYXRhLkROSSxkYXRhLkJFQ0EsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZmF0aGVyLCBkYXRhLmludG9sZXJlbmNpYSwgZGF0YS5lbWFpbDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucGhvbmUyLCBkYXRhLm5vdGVzLCB0b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jb3Vyc2VfdHlwZSwgZGF0YS5hdWRpdGlvbiwgZGF0YS5kdXJhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hZ2UsIGRhdGEucHJvZmlsZVs0XS5iaXJ0aGRhdGUsIGRhdGEuZ3JvdXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHJvZmlsZVsyXS5waG9uZSxkYXRhLnByb2ZpbGVbM10uZW1haWwsIGRhdGEucHJvZmlsZVs2XS5jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnByb2ZpbGVbNV0uY291bnRyeSwgZGF0YS5wcm9maWxlWzddLnN0dWRpZWRfcGxhY2VzLGRhdGEueWVhcnNfb2ZfZXhwZXJpZW5jZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5yZXNpZGVuY2UsIGRhdGEuc3RhZ2UsIGRhdGEucmVnaXN0cmVkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vZGVsKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlfZWRpdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZS51cGRhdGVTdHVkZW50KHRoaXMubW9kZWwpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNteU1vZGFsXCIpLm1vZGFsKCdzaG93JylcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vZGVsKVxyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIC8vIHVwZGF0ZUNoZWNrQm94KCRldmVudCwgaXRlbSl7XHJcbiAgICAvLyAgICAgLy8gbGV0IHZhbHVlID0gJGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbiAgICAvLyAgICAgbGV0IHZhbHVlID0kZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coaXRlbSlcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZygkZXZlbnQudGFyZ2V0KVxyXG4gICAgLy8gICAgIGxldCBmaWVsZE5hbWUgPSAkZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5tYXN0ZXIpXHJcbiAgICAvLyAgICAgdGhpcy5fZ3JpZFNlcnZpY2UudXBkYXRlQ2hlY2tib3godmFsdWUsaXRlbS5faWQsIFwiYmFsbGV0XCIsIFwiYmFsbGV0XCIsIGZpZWxkTmFtZSlcclxuICAgIC8vICAgICAgICAgLnN1YnNjcmliZShcclxuICAgIC8vICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAgICAvLyAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIC8vICAgICAgICAgKVxyXG4gICAgLy8gfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
