import {Component, Input, Output, EventEmitter} from '@angular/core'
import {Router, NavigationExtras, ActivatedRoute} from '@angular/router';
// import {StepService} from "../Engine/step.service";
import {Http} from "@angular/http";
import {GroupService} from "./group.service";
import {forEach} from "../../../../public/js/vendor/@angular/router/src/utils/collection";
import {GridPanelService} from "../grid.service";
import {StepService} from "../../Engine/step.service";
@Component({
    selector: 'group',
    template: `
    <div  class="{{_stepService.template.panel_heading}}" *ngIf="display">
        <div  class="row" align="left">
            <div class="col-md-2">
                 <nav class="form-navArrow">
                    <a [routerLink]="['/grid']" [queryParams]="{'grid_name': course_type, 'master': stage}">
                    <button class="btn btn-warning"><i class="glyphicon glyphicon-triangle-left" ></i>BACK</button></a>
                 </nav>
            </div>
        
          <div class="col-md-10" align="center">
            <h1 *ngIf="stage != ''">{{stage}} - {{course_type}}</h1>
            <h4>Number of students per week and per group</h4>
          </div>
          </div>
    </div>

    <div class="panel-body"  *ngIf="display"> 
        <div align="center">
            <h3>{{student.profile_nom}} {{student.profile_firstname}} </h3>
            <h4>Number of weeks: {{student.duration}}  -  Current group: {{this.currentGroup}}</h4>
            <h4>Set to group:</h4> 
            <select id="groups" (change)="updateGroup($event)"  >
                <option> --</option>
                <option *ngFor="let group of this.groups" value="{{group}}">{{group}}</option>
            </select>
        </div>

        
        <br>        
        
        <table class="table table-hover table-condensed" *ngIf="stage != 'Alicante Winter Intensive 2017'" >
            <tr >
                <td></td>
                <td>WEEK 1</td>
                <td>WEEK 2</td>
                <td>WEEK 3</td>
            </tr>
            <tr *ngFor="let item of this.values">
                <td>{{item.group}}</td>
                <td *ngFor="let peoples of item.lst"> 
                   {{peoples.people}} 
                </td>
            </tr>
        </table>
        
        <table class="table table-hover table-condensed" *ngIf="stage == 'Alicante Winter Intensive 2017'" >
            <tr >
                <td></td>
                <td>Nb of students</td>
            </tr>
            <tr *ngFor="let item of this.values">
                <td>{{item.group}}</td>
                <td *ngFor="let peoples of item.lst"> 
                   {{peoples.people}} 
                </td>
            </tr>
        </table>
        
   </div>`
})

export class GroupComponent {

    constructor(
                private router: Router, private _gridService : GridPanelService,
                 private _groupService: GroupService,
                private route: ActivatedRoute, private _http: Http,private _stepService: StepService){}


    private sub: any;
    course_type;
    stage;
    obj_id;
    values;
    display = false;
    groups = [];
    student = {};
    currentGroup = ''
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.obj_id = params['record']; // (+) converts string 'id' to a number
            this.course_type = params['course_type']
            this.stage = params['stage']
        });
       console.log(this.obj_id);
       console.log(this.stage);
       console.log(this._gridService.dataGrid);
       this.student = this._gridService.dataGrid[this._gridService.dataGrid.findIndex(x => x._id == this.obj_id)];
        console.log(this.student)
       console.log(this.course_type)
        this._groupService.getGroups(this.obj_id, this.course_type, this.stage)
            .subscribe(data => {
                    this.values = data;
                    this.groups = this.values[this.values.length - 1].groups;
                    this.values.pop();
                console.log(this.values)
                    this.currentGroup = this.student['group'];
                    console.log(this.groups);
                    this.display = true;


                },
                error => console.log(error)
            )
    }

    /*
     CHANGE GROUP OF USER
      */
    updateGroup($event)
    {
        let group = $event.target.value
        this._groupService.changeGroup(group,this.obj_id)
            .subscribe(
                data => {
                    console.log(data)
                    this.currentGroup = group;
                    this._groupService.getGroups(this.obj_id, this.course_type, this.stage)
                        .subscribe(data => {
                                this.values = data;
                                this.currentGroup = group;
                                console.log(this.groups);


                            },
                            error => console.log(error)
                        )



                },
                        error => console.log(error)

            )
    }

}