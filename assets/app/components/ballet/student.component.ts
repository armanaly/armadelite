import {StepService} from "../../Engine/step.service";
declare const $ : any;
import {Component, Input, Output, EventEmitter} from '@angular/core'
import {Router, NavigationExtras, ActivatedRoute} from '@angular/router';
import {Http} from "@angular/http";
import {GroupService} from "./group.service";
import {GridPanelService} from "../grid.service";
import {BalletDetailsService} from "./balletDetails.service";

import {Student} from "./student";
import {StudentService} from "./student.service";
@Component({
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
})

export class StudentComponent {

    constructor(
        private router: Router, private _gridService : GridPanelService,
        private _groupService: GroupService,  private _balletDetailsService: BalletDetailsService,
        private _studentService: StudentService, private _stepService: StepService,
        private route: ActivatedRoute, private _http: Http){}

    private sub: any;

    obj_id;
    values;
    display_edit = false;
    student = {};
    student_info;
    studentGroup;
    model;
    course_type;
    stage;

    auditions = ['MADRID','BARCELONA', 'ALICANTE', 'NOVELDA','VIDEO AUDITION']

    becas = ['0','15%', '20%',
        '25%', '50%', '75%', '100%'];

    durations = ["1","2","3"];

    ngOnInit()
    {

        this.sub = this.route.params.subscribe(params => {
            this.obj_id = params['record']; // (+) converts string 'id' to a number
            this.course_type = params['course_type']
            this.stage = params['stage']
        });
        console.log(this.obj_id)
        console.log(this._gridService.dataGrid);
        this._balletDetailsService.getDatas(this.obj_id)
            .subscribe(data => {
                    console.log(data)
                    this.student_info = data;
                    let token = localStorage.getItem('token');
                    this.model = new Student(
                        data._id,data.DNI,data.BECA,
                        data.father, data.intolerencia, data.email2,
                        data.phone2, data.notes, token,
                        data.course_type, data.audition, data.duration,
                        data.age, data.profile[4].birthdate, data.group,
                        data.profile[2].phone,data.profile[3].email, data.profile[6].city,
                        data.profile[5].country, data.profile[7].studied_places,data.years_of_experience,
                        data.residence, data.stage, data.registred);
                    console.log(this.model);
                    this.display_edit = true;
                },
                error => console.log(error)
            )
    }

    submitted = false;

    onSubmit() {
        this._studentService.updateStudent(this.model)
            .subscribe(data => {

                    console.log(data)
                    $("#myModal").modal('show')
                },
                error => console.log(error)
            )
        this.submitted = true;
        console.log(this.model)
    }
    //
    // updateCheckBox($event, item){
    //     // let value = $event.target.getAttribute('value');
    //     let value =$event.target.checked;
    //     // console.log(item)
    //     // console.log($event.target)
    //     let fieldName = $event.target.name;
    //     // console.log(this.master)
    //     this._gridService.updateCheckbox(value,item._id, "ballet", "ballet", fieldName)
    //         .subscribe(
    //             data => console.log(data),
    //             error => console.log(error)
    //         )
    // }
}
