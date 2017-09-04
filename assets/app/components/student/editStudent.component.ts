import {Component, Input, Output, EventEmitter} from '@angular/core'
import {Router, NavigationExtras, ActivatedRoute} from '@angular/router';
// import {StepService} from "../Engine/step.service";
import {Http} from "@angular/http";
import {GroupService} from "../group/group.service";
import {forEach} from "../../../../public/js/vendor/@angular/router/src/utils/collection";
import {GridPanelService} from "../grid.service";
import {BalletDetailsService} from "../balletDetails.service";
@Component({
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
})

export class EditStudentComponent {

    // router = new Router;
    constructor(
                private router: Router, private _gridService : GridPanelService,
                 private _groupService: GroupService,  private _balletDetailsService: BalletDetailsService,
                private route: ActivatedRoute, private _http: Http){}


    private sub: any;

    obj_id;
    values;
    display = false;
    groups = [];
    student = {};
    student_info;
    currentGroup = '';

    ngOnInit()
    {
        this.sub = this.route.params.subscribe(params => {
            this.obj_id = params['record']; // (+) converts string 'id' to a number
        });
       console.log(this.obj_id)
       console.log(this._gridService.dataGrid);
       //this.student = this._gridService.dataGrid[this._gridService.dataGrid.findIndex(x => x._id == this.obj_id)];
        this._balletDetailsService.getDatas(this.obj_id)
            .subscribe(data => {
                    console.log(data)
                    this.student_info = data;

                    this.display = true;


                },
                error => console.log(error)
            )
    }


}