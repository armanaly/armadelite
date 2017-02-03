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
const form_service_1 = require("../vehicule/form.service");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFDcEUsd0JBQThELGdCQUFnQixDQUFDLENBQUE7QUFDL0UsK0JBQTBCLDBCQUEwQixDQUFDLENBQUE7QUF3Q3JEO0lBS0ksWUFBb0IsR0FBZ0IsRUFBUyxZQUF5QjtRQUFsRCxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFGNUQsU0FBSSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDLENBQUMsZ0RBQWdEO1FBSWxGLDRCQUE0QjtRQUMvQixZQUFPLEdBQUcsSUFBSSxpQkFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRjVCLENBQUM7SUFHRCxRQUFRO1FBQ0osdUZBQXVGO1FBQ3ZGLG1GQUFtRjtRQUNuRixFQUFFO1FBQ0YsSUFBSTtRQUdKLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ2pGLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLG1CQUFXLEVBQUUsQ0FBQztRQUNsRyxDQUFDO1FBR1Isa0JBQWtCO1FBQ2xCLHdDQUF3QztRQUN4QywwRkFBMEY7UUFDMUYseUNBQXlDO1FBQ3pDLHFDQUFxQztRQUNyQyxtQ0FBbUM7UUFDbkMsMENBQTBDO1FBQzFDLEVBQUU7UUFDRixhQUFhO1FBRU4sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUIsa0NBQWtDO1FBQ2xDLHdGQUF3RjtRQUN4RixnRkFBZ0Y7UUFDaEYsMEJBQTBCO1FBQzFCLElBQUk7UUFDSiw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLHdDQUF3QztRQUN4Qyx5RkFBeUY7UUFDekYsNkNBQTZDO1FBQzdDLE1BQU07SUFDVixDQUFDO0lBRUQsR0FBRyxDQUFDLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxPQUFPO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNGLElBQUksVUFBVSxHQUFFLEVBQUUsQ0FBQztRQUNuQixJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDeEIsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDL0UsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbkUsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0csQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ1Y7WUFDQSxTQUFTLEVBQUcsVUFBVTtZQUN0QixhQUFhLEVBQUcsY0FBYztZQUM5QixPQUFPLEVBQUcsSUFBSSxDQUFDLE9BQU87WUFDdEIsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtTQUN0QixDQUFDLENBQUE7SUFDVixDQUFDO0FBRUwsQ0FBQztBQTVFRztJQUFDLFlBQUssRUFBRTs7b0RBQUE7QUFDUjtJQUFDLFlBQUssRUFBRTs7b0RBQUE7QUFDUjtJQUFDLGFBQU0sRUFBRTs7aURBQUE7QUExQ2I7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpQ2I7S0FFQSxDQUFDOzt1QkFBQTtBQUVXLDJCQUFtQixzQkE2RS9CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9maWVsZFBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwLCBGb3JtQ29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuLi92ZWhpY3VsZS9mb3JtLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZpZWxkLXBhbmVsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWx9fSA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgPGZvcm0gbmFtZT1cInt7b2JqU3RlcC5uYW1lfX1cIiAgPlxyXG48ZGl2IFtmb3JtR3JvdXBdPVwibXlHcm91cFwiPiAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgPCEtLS8qIEZPUk1BVCBDb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLVt7ICBuYW1lLCAgICAgOmlkIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tdHlwZSwgICAgIDpzdHJpbmcsIG51bWJlci0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS19XS0tPlxyXG4gICAgICAgICAgICAgICA8IS0tKi8gLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGxhYmVsID57e2ZpZWxkLmxhYmVsfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZmllbGQudHlwZX19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInt7ZmllbGQucmVxdWlyZWR9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5sZW5ndGg9XCJ7e2ZpZWxkLm1pbmxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cInt7ZmllbGQubWF4bGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiICpuZ0lmPVwiIW15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsaWRcIj4qPC9kaXY+ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+VmFsaWRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS08IS0taWQ9XCJ7e29ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1swXS5uYW1lfX1cIi0tPlxyXG4gIFxyXG5gXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpZWxkUGFuZWxDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgb2JqU3RlcDtcclxuICAgIEBJbnB1dCgpIHN0ZXBJZHg7XHJcbiAgICBAT3V0cHV0KCkgc2VudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gRW1pdHRlciB0byBzZW5kIGJhY2sgZGF0YSB0byBwYXJlbnQgY29tcG9uZW50XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSApIHsgIC8vcHJpdmF0ZSBfcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlXHJcbiAgICB9XHJcbiAgICAgICAvLyByZWdpc3RlckZvcm0gPSBGb3JtR3JvdXA7XHJcbiAgICBteUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvLyBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXMubGVuZ3RoOyBpbmRleCsrKXtcclxuICAgICAgICAvLyAgICAgZXZhbCh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1tpbmRleF0ubmFtZSkgOiBuZXcgRm9ybUNvbnRyb2woKVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0aGlzLm15R3JvdXAuY29udHJvbHNbdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWVdID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAvLyBjb25zb2xlLmxvZyh4KTtcclxuIC8vICAgICAgICB0aGlzLm15R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuIC8vICAgICAgICAgICAgLy9ldmFsKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzWzFdLm5hbWUpIDogIG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gLy8gICAgICAgICAgICBhZHJlc3NlOiBuZXcgRm9ybUNvbnRyb2woKSxcclxuIC8vICAgICAgICAgICAgbm9tOiBuZXcgRm9ybUNvbnRyb2woKSxcclxuIC8vICAgICAgICAgICAgYzogbmV3IEZvcm1Db250cm9sKCksXHJcbiAvLyAgICAgICAgICAgICAgICBlbWFpbDogbmV3IEZvcm1Db250cm9sKClcclxuIC8vXHJcbiAvLyAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlHcm91cCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgLy8gICAgIHdpbmRvd1sndmFsJytpbmRleF0gPSB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1tpbmRleF0ubmFtZTtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbDApO1xyXG4gICAgICAgIC8vICB0aGlzLnJlZ2lzdGVyRm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcclxuICAgICAgICAvLyAvLyAgICAgZXZhbCh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1swXS5uYW1lKTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgIC8vICAgICBldmFsKHZhbDEpIDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgIC8vICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGxvZyh4KXtcclxuICAgICAgICBjb25zb2xlLmxvZyh4KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmb3JtJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwLm5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2YWwodGhpcy5vYmpTdGVwLm5hbWUpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1swXS5uYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmFsKHRoaXMub2JqU3RlcC5uYW1lKVt0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1swXS5uYW1lXS52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZhbCh0aGlzLm9ialN0ZXAubmFtZSlbdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbMV0ubmFtZV0udmFsdWUpO1xyXG5cclxuICAgICAgICB2YXIgdmFsdWVzTmFtZT0gW107XHJcbiAgICAgICAgdmFyIHZhbHVlc1NlbGVjdGVkID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXg9MDsgaW5kZXggPCB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdmFsdWVzTmFtZS5wdXNoKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5uYW1lKVxyXG4gICAgICAgICAgICB2YWx1ZXNTZWxlY3RlZC5wdXNoKGV2YWwodGhpcy5vYmpTdGVwLm5hbWUpW3RoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5uYW1lXS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlc1NlbGVjdGVkKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZW50LmVtaXQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWVOYW1lIDogdmFsdWVzTmFtZSxcclxuICAgICAgICAgICAgdmFsdWVTZWxlY3RlZCA6IHZhbHVlc1NlbGVjdGVkLFxyXG4gICAgICAgICAgICBzdGVwSWR4IDogdGhpcy5zdGVwSWR4LFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm9ialN0ZXAubmFtZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufSJdfQ==
