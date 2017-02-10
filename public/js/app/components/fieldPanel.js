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
const forms_1 = require("@angular/forms");
const form_service_1 = require("./form.service");
let FieldPanelComponent = class FieldPanelComponent {
    constructor(_fb, _formService) {
        this._fb = _fb;
        this._formService = _formService;
        this.sent = new core_1.EventEmitter(); // Emitter to send back data to parent component
        // registerForm = FormGroup;
        this.myGroup = new forms_1.FormGroup({});
    }
    ngOnInit() {
        // for (let index = 0; index < this.objStep.configuration.form_values.length; index++){
        //     eval(this.objStep.configuration.form_values[index].name) : new FormControl()
        //
        // }
        for (let index = 0; index < this.objStep.configuration.form_values.length; index++) {
            this.myGroup.controls[this.objStep.configuration.form_values[index].name] = new forms_1.FormControl();
        }
        // console.log(x);
        //        this.myGroup = new FormGroup({
        //            //eval(this.objStep.configuration.form_values[1].name) :  new FormControl();
        //            adresse: new FormControl(),
        //            nom: new FormControl(),
        //            c: new FormControl(),
        //                email: new FormControl()
        //
        //        });
        console.log(this.myGroup);
        console.log(this.objStep);
        // console.log(this._formService);
        // for (let index = 0; index < this.objStep.configuration.form_values.length; index++) {
        //     window['val'+index] = this.objStep.configuration.form_values[index].name;
        //     console.log(index);
        // }
        // console.log(this.objStep);
        // console.log(val0);
        //  this.registerForm = this._fb.group({
        // //     eval(this.objStep.configuration.form_values[0].name): ['', Validators.required]
        //     eval(val1) : ['', Validators.required]
        //  })
    }
    log(x) {
        console.log(x);
    }
    onClick() {
        console.log('form');
        console.log(this.objStep.name);
        console.log(eval(this.objStep.name));
        console.log(this.objStep.configuration.form_values[0].name);
        console.log(eval(this.objStep.name)[this.objStep.configuration.form_values[0].name].value);
        console.log(eval(this.objStep.name)[this.objStep.configuration.form_values[1].name].value);
        var valuesName = [];
        var valuesSelected = [];
        for (let index = 0; index < this.objStep.configuration.form_values.length; index++) {
            valuesName.push(this.objStep.configuration.form_values[index].name);
            valuesSelected.push(eval(this.objStep.name)[this.objStep.configuration.form_values[index].name].value);
        }
        console.log(valuesSelected);
        this.sent.emit({
            valueName: valuesName,
            valueSelected: valuesSelected,
            stepIdx: this.stepIdx,
            name: this.objStep.name
        });
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], FieldPanelComponent.prototype, "objStep", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], FieldPanelComponent.prototype, "stepIdx", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], FieldPanelComponent.prototype, "sent", void 0);
FieldPanelComponent = __decorate([
    core_1.Component({
        selector: 'field-panel',
        template: `
 
        <div class="panel-heading panel-heading-custom">{{objStep.configuration.labelPanel}} </div>
         <div class="panel-body">
            <form name="{{objStep.name}}"  >
<div [formGroup]="myGroup">                  

               <!--/* FORMAT Configuration.form_values-->
                    <!--[{  name,     :id -->
                        <!--type,     :string, number-->
                    <!--}]-->
               <!--*/ -->
                <div *ngFor="let field of objStep.configuration.form_values">
                     <label >{{field.label}}</label>
                     <input 
                            class="form-control" 
                            type="{{field.type}}" 
                            id="{{field.name}}"
                            name="{{field.name}}"
                            required="{{field.required}}"
                            minlength="{{field.minlength}}"
                            maxlength="{{field.maxlength}}"
                            formControlName="{{field.name}}"
                            >
                      <div class="alert alert-danger" role="alert" *ngIf="!myGroup.controls[field.name].valid">*</div>         
                </div>
                
                <button type="button" (click)="onClick()" class="btn btn-primary">Valider</button>
            </div>   
            </form>
        </div>
        <!--<!--id="{{objStep.configuration.form_values[0].name}}"-->
  
`
    }), 
    __metadata('design:paramtypes', [forms_1.FormBuilder, form_service_1.FormService])
], FieldPanelComponent);
exports.FieldPanelComponent = FieldPanelComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFDcEUsd0JBQThELGdCQUFnQixDQUFDLENBQUE7QUFDL0UsK0JBQTBCLGdCQUFnQixDQUFDLENBQUE7QUF3QzNDO0lBS0ksWUFBb0IsR0FBZ0IsRUFBUyxZQUF5QjtRQUFsRCxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFGNUQsU0FBSSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDLENBQUMsZ0RBQWdEO1FBSWxGLDRCQUE0QjtRQUMvQixZQUFPLEdBQUcsSUFBSSxpQkFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRjVCLENBQUM7SUFHRCxRQUFRO1FBQ0osdUZBQXVGO1FBQ3ZGLG1GQUFtRjtRQUNuRixFQUFFO1FBQ0YsSUFBSTtRQUdKLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ2pGLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLG1CQUFXLEVBQUUsQ0FBQztRQUNsRyxDQUFDO1FBR1Isa0JBQWtCO1FBQ2xCLHdDQUF3QztRQUN4QywwRkFBMEY7UUFDMUYseUNBQXlDO1FBQ3pDLHFDQUFxQztRQUNyQyxtQ0FBbUM7UUFDbkMsMENBQTBDO1FBQzFDLEVBQUU7UUFDRixhQUFhO1FBRU4sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUIsa0NBQWtDO1FBQ2xDLHdGQUF3RjtRQUN4RixnRkFBZ0Y7UUFDaEYsMEJBQTBCO1FBQzFCLElBQUk7UUFDSiw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLHdDQUF3QztRQUN4Qyx5RkFBeUY7UUFDekYsNkNBQTZDO1FBQzdDLE1BQU07SUFDVixDQUFDO0lBRUQsR0FBRyxDQUFDLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxPQUFPO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNGLElBQUksVUFBVSxHQUFFLEVBQUUsQ0FBQztRQUNuQixJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDeEIsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDL0UsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbkUsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0csQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ1Y7WUFDQSxTQUFTLEVBQUcsVUFBVTtZQUN0QixhQUFhLEVBQUcsY0FBYztZQUM5QixPQUFPLEVBQUcsSUFBSSxDQUFDLE9BQU87WUFDdEIsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtTQUN0QixDQUFDLENBQUE7SUFDVixDQUFDO0FBRUwsQ0FBQztBQTVFRztJQUFDLFlBQUssRUFBRTs7b0RBQUE7QUFDUjtJQUFDLFlBQUssRUFBRTs7b0RBQUE7QUFDUjtJQUFDLGFBQU0sRUFBRTs7aURBQUE7QUExQ2I7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpQ2I7S0FFQSxDQUFDOzt1QkFBQTtBQUVXLDJCQUFtQixzQkE2RS9CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9maWVsZFBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwLCBGb3JtQ29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2Zvcm0uc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmllbGQtcGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCI+e3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ubGFiZWxQYW5lbH19IDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBuYW1lPVwie3tvYmpTdGVwLm5hbWV9fVwiICA+XHJcbjxkaXYgW2Zvcm1Hcm91cF09XCJteUdyb3VwXCI+ICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICA8IS0tLyogRk9STUFUIENvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXMtLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tW3sgIG5hbWUsICAgICA6aWQgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS10eXBlLCAgICAgOnN0cmluZywgbnVtYmVyLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLX1dLS0+XHJcbiAgICAgICAgICAgICAgIDwhLS0qLyAtLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8bGFiZWwgPnt7ZmllbGQubGFiZWx9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tmaWVsZC50eXBlfX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwie3tmaWVsZC5yZXF1aXJlZH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmxlbmd0aD1cInt7ZmllbGQubWlubGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwie3tmaWVsZC5tYXhsZW5ndGh9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgKm5nSWY9XCIhbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWxpZFwiPio8L2Rpdj4gICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25DbGljaygpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5WYWxpZGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLTwhLS1pZD1cInt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzWzBdLm5hbWV9fVwiLS0+XHJcbiAgXHJcbmBcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGRQYW5lbENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBvYmpTdGVwO1xyXG4gICAgQElucHV0KCkgc3RlcElkeDtcclxuICAgIEBPdXRwdXQoKSBzZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBFbWl0dGVyIHRvIHNlbmQgYmFjayBkYXRhIHRvIHBhcmVudCBjb21wb25lbnRcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlICkgeyAgLy9wcml2YXRlIF9wcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2VcclxuICAgIH1cclxuICAgICAgIC8vIHJlZ2lzdGVyRm9ybSA9IEZvcm1Hcm91cDtcclxuICAgIG15R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlcy5sZW5ndGg7IGluZGV4Kyspe1xyXG4gICAgICAgIC8vICAgICBldmFsKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5uYW1lKSA6IG5ldyBGb3JtQ29udHJvbCgpXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXlHcm91cC5jb250cm9sc1t0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1tpbmRleF0ubmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuIC8vIGNvbnNvbGUubG9nKHgpO1xyXG4gLy8gICAgICAgIHRoaXMubXlHcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG4gLy8gICAgICAgICAgICAvL2V2YWwodGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbMV0ubmFtZSkgOiAgbmV3IEZvcm1Db250cm9sKCk7XHJcbiAvLyAgICAgICAgICAgIGFkcmVzc2U6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG4gLy8gICAgICAgICAgICBub206IG5ldyBGb3JtQ29udHJvbCgpLFxyXG4gLy8gICAgICAgICAgICBjOiBuZXcgRm9ybUNvbnRyb2woKSxcclxuIC8vICAgICAgICAgICAgICAgIGVtYWlsOiBuZXcgRm9ybUNvbnRyb2woKVxyXG4gLy9cclxuIC8vICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5teUdyb3VwKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwKTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAvLyAgICAgd2luZG93Wyd2YWwnK2luZGV4XSA9IHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5uYW1lO1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsMCk7XHJcbiAgICAgICAgLy8gIHRoaXMucmVnaXN0ZXJGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgIC8vIC8vICAgICBldmFsKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzWzBdLm5hbWUpOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgLy8gICAgIGV2YWwodmFsMSkgOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgLy8gIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbG9nKHgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Zvcm0nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXAubmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZhbCh0aGlzLm9ialN0ZXAubmFtZSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzWzBdLm5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2YWwodGhpcy5vYmpTdGVwLm5hbWUpW3RoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzWzBdLm5hbWVdLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmFsKHRoaXMub2JqU3RlcC5uYW1lKVt0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1sxXS5uYW1lXS52YWx1ZSk7XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZXNOYW1lPSBbXTtcclxuICAgICAgICB2YXIgdmFsdWVzU2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleD0wOyBpbmRleCA8IHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB2YWx1ZXNOYW1lLnB1c2godGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWUpXHJcbiAgICAgICAgICAgIHZhbHVlc1NlbGVjdGVkLnB1c2goZXZhbCh0aGlzLm9ialN0ZXAubmFtZSlbdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWVdLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzU2VsZWN0ZWQpO1xyXG5cclxuICAgICAgICB0aGlzLnNlbnQuZW1pdChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZU5hbWUgOiB2YWx1ZXNOYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZVNlbGVjdGVkIDogdmFsdWVzU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgIHN0ZXBJZHggOiB0aGlzLnN0ZXBJZHgsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMub2JqU3RlcC5uYW1lXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59Il19
