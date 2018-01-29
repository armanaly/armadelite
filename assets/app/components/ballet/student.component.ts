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
                </div>
                <div class="col-md-10" align="center">
                     <h2><b class="text-uppercase">{{student_info.profile[1].nom}}</b> {{student_info.profile[0].firstname}} </h2>
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
                    <label for="DURATION" class="col-sm-2 control-label" >Duration</label>
                    <div class="col-sm-10">
                        <select class="form-control" id="duration"
                            [(ngModel)]="model.duration" name="duration"
                            #duration="ngModel" >
                             <option *ngFor="let duration of durations" [value]="duration">{{duration}}</option>
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
                    this.model = new Student(data._id,data.DNI,data.BECA, data.father, data.intolerencia, data.email2, data.phone2, data.notes, token, data.course_type, data.audition, data.duration);
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
}