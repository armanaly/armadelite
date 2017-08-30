import {Component, Input, Output, EventEmitter} from '@angular/core'
import {Router, NavigationExtras, ActivatedRoute} from '@angular/router';
// import {StepService} from "../Engine/step.service";
import {Http} from "@angular/http";
import {GroupService} from "./group.service";
import {forEach} from "../../../../public/js/vendor/@angular/router/src/utils/collection";
import {GridPanelService} from "../gridPanel.service";
import {BalletDetailsService} from "./balletDetails.service";
import {FormControl, FormGroup} from "../../../../public/js/vendor/@angular/forms/src/model";
import {Validators} from "../../../../public/js/vendor/@angular/forms/src/validators";
import {Student} from "./student";
import {StudentService} from "./student.service";
@Component({
    selector: 'group',
    template: `
    

       <nav class="form-navArrow" *ngIf="display_edit">
            <a [routerLink]="['/grid']" [queryParams]="{'grid_name': student_info.course_type, 'master_val': student_info.stage}">
            <button class="btn btn-warning"><i class="glyphicon glyphicon-triangle-left" ></i>BACK</button></a>
       </nav>
    
    <div  *ngIf="display_edit"> 
          
          <div class="panel-heading panel-heading-custom">
                <h2>{{student_info.profile[1].firstname}}  {{student_info.profile[0].nom}}</h2>
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
                            id="intolerancia"
                            name="intolerancia"
                            value="{{student_info.intolerancia}}"
                            [(ngModel)]="model.intolerancia" 
                            name="intolerancia"
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
                    <label for="email2" class="col-sm-2 control-label" >email 2</label>
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
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-primary " [disabled]="!studentForm.form.valid">Submit</button>
                    </div>
                </div>
            </form>    
        </div>    
    </div>`
})

export class StudentComponent {

    constructor(
        private router: Router, private _gridService : GridPanelService,
        private _groupService: GroupService,  private _balletDetailsService: BalletDetailsService,
        private _studentService: StudentService,
        private route: ActivatedRoute, private _http: Http){}

    private sub: any;

    obj_id;
    values;
    display_edit = false;
    student = {};
    student_info;
    studentGroup;
    model;

    becas = ['15%', '20%',
        '25%', '50%'];

    ngOnInit()
    {

        this.sub = this.route.params.subscribe(params => {
            this.obj_id = params['record']; // (+) converts string 'id' to a number
        });
        console.log(this.obj_id)
        console.log(this._gridService.dataGrid);
        this._balletDetailsService.getDatas(this.obj_id)
            .subscribe(data => {
                    console.log(data)
                    this.student_info = data;
                    this.model = new Student(data._id,data.DNI,data.BECA, data.father, data.intolerancia, data.email2, data.phone2);
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

                },
                error => console.log(error)
            )
        this.submitted = true;
        console.log(this.model)
    }
}