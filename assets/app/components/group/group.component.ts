import {Component, Input, Output, EventEmitter} from '@angular/core'
import {Router, NavigationExtras, ActivatedRoute} from '@angular/router';
// import {StepService} from "../Engine/step.service";
import {Http} from "@angular/http";
import {GroupService} from "./group.service";
import {forEach} from "../../../../public/js/vendor/@angular/router/src/utils/collection";
import {GridPanelService} from "../gridPanel.service";
@Component({
    selector: 'group',
    template: `
    
      <nav class="form-navArrow">
            <a [routerLink]="['/grid']" replaceUrl="True" [queryParams]="{'grid_name': grid.name, 'master_val': val_level2}">
            <button><i class="glyphicon glyphicon-triangle-left" (click)="this.router.navigate(['/'])" >BACK</i></button></a>
      </nav>
    <div class="page-header" align="center">
     <h1 *ngIf="stage != ''">{{stage}} - {{course_type}}</h1>
   </div>
    
    <div class="panel-body" *ngIf="display">
     
    
     <table class="table table-hover table-condensed"  >
                        
                        <tr >
                            <td></td>
                            <td>WEEK 1</td>
                            <td>WEEK 2</td>
                            <td>WEEK 3</td>
                        </tr>
                        <tr *ngFor="let item of this.values">
                            <!--<div ngIf="typeOf (item.group) != 'undefined'">-->
                                <td>{{item.group}}</td>
                                <td *ngFor="let peoples of item.lst"> 
                                   {{peoples.people}} 
                                </td>
                            <!--</div>-->
                        </tr>
        </table>
        <span>
            {{student.profile_nom}} {{student.profile_firstname}} - Number of weeks: {{student.duration}} 
        </span>
        <span *ngIf="currentGroup != ''"> Current group: {{this.currentGroup}}</span>
        <span>
            Set to group: 
            <select id="groups" (change)="updateGroup($event)"  >
                <option> --</option>
                <option *ngFor="let group of this.groups" value="{{group}}">{{group}}</option>
            </select>
        </span>
   </div>`
})

export class GroupComponent {

    // router = new Router;
    constructor(
                private router: Router, private _gridService : GridPanelService,
                 private _groupService: GroupService,
                private route: ActivatedRoute, private _http: Http){}


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
       console.log(this.obj_id)
       console.log(this._gridService.dataGrid);
       this.student = this._gridService.dataGrid[this._gridService.dataGrid.findIndex(x => x._id == this.obj_id)]
       console.log(this.course_type)
        this._groupService.getGroups(this.obj_id, this.course_type, this.stage)
            .subscribe(data => {
                    this.values = data;
                    // this.groups = this.values[this.values.length - 1].groups;
                    // this.values.pop();
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