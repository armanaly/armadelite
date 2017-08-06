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
const form_service_1 = require("../components/form.service");
//import {ControlGroup} from "../../../public/js/vendor/@angular/common/esm/src/forms-deprecated/model";
const profile_service_1 = require("./profile.service");
//import {ControlGroup, Control} from "@angular/common";
let ProfileComponent = class ProfileComponent {
    constructor(_fb, _formService, _profileService) {
        this._fb = _fb;
        this._formService = _formService;
        this._profileService = _profileService;
        // this.fs.modeleSelected;
    }
    ngOnInit() {
        // console.log(this._formService.modeleSelected);
        //console.log(this._formService);
        this.registerForm = this._fb.group({
            lastName: ['', forms_1.Validators.required],
            post_code: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.compose([
                    forms_1.Validators.required //,
                ])],
            phone: ['', forms_1.Validators.required]
        });
        // this.myForm = this._fb.group({
        //     name: ['', Validators.required],
        //     post_code: ['', Validators.required],
        //     email: ['', Validators.compose([
        //         Validators.required//,
        //        // this.isEmail
        //     ])]
        // });
    }
    onSubmit() {
        // console.log(this.myForm.email);
        //
        // this._formService.email = this.registerForm.value.email;
        // this._formService.name = this.registerForm.value.lastName;
        // this._formService.post_code = this.registerForm.value.post_code;
        // this._formService.telephone =  this.registerForm.value.phone;
        // this._formService.dateDemande = new Date();
        //    console.log(this._formService);
        this._profileService.saveDemand(this._formService)
            .subscribe(data => console.log(data), error => console.log(error));
        //const profile = new FormProfile(this.registerForm.value.lastName;, tthis.registerForm.value.post_code, this.registerForm.value.lastName;)
        //console.log(profile);
    }
};
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        template: `
<div class="panel panel-default">
        <div class="panel-heading panel-heading-custom">PROFILE </div>
        <div class="panel-body">
        <section class="col-md-8 col-md-offset-2">
            <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="name">Nom</label>
                    <input formControlName="lastName" type="text" id="name" class="form-control">
                    <p *ngIf="registerForm.controls.lastName.errors">This field is required!</p>
                </div>
                <div class="form-group">
                    <label for="email">Mail</label>
                    <input formControlName="email" type="email" id="email" class="form-control">
                </div>
                <div class="form-group">
                    <label for="post_code">Code postal</label>
                    <input formControlName="post_code" type="number" id="post_code" class="form-control">
                </div>
                <div class="form-group">
                    <label for="phone">Numéro de téléphone</label>
                    <input formControlName="phone" type="number" id="phone" class="form-control">
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="!registerForm.valid">Valider</button>
            </form>
        </section>
        </div>
</div>
`
    }), 
    __metadata('design:paramtypes', [forms_1.FormBuilder, form_service_1.FormService, profile_service_1.ProfileService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF3QixlQUN4QixDQUFDLENBRHNDO0FBRXZDLHdCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLCtCQUEwQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3ZELHdHQUF3RztBQUN4RyxrQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRCx3REFBd0Q7QUFtQ3hEO0lBTUksWUFBb0IsR0FBZ0IsRUFBUyxZQUF5QixFQUFVLGVBQStCO1FBQTNGLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUUvRywwQkFBMEI7SUFDMUIsQ0FBQztJQU1ELFFBQVE7UUFDTCxpREFBaUQ7UUFDeEQsaUNBQWlDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDL0IsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQzNCLGtCQUFVLENBQUMsUUFBUSxDQUFBLEdBQUc7aUJBRXpCLENBQUMsQ0FBQztZQUNILEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUNuQyxDQUFDLENBQUE7UUFHRixpQ0FBaUM7UUFDakMsdUNBQXVDO1FBQ3ZDLDRDQUE0QztRQUM1Qyx1Q0FBdUM7UUFDdkMsaUNBQWlDO1FBQ2pDLHlCQUF5QjtRQUN6QixVQUFVO1FBQ1YsTUFBTTtJQUNWLENBQUM7SUFFRCxRQUFRO1FBQ0wsa0NBQWtDO1FBRWpDLEVBQUU7UUFDRiwyREFBMkQ7UUFDM0QsNkRBQTZEO1FBQzdELG1FQUFtRTtRQUNuRSxnRUFBZ0U7UUFDaEUsOENBQThDO1FBQ3RELHFDQUFxQztRQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQzdDLFNBQVMsQ0FDTixJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFDekIsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUE7UUFFTCwySUFBMkk7UUFDM0ksdUJBQXVCO0lBQzNCLENBQUM7QUFTTCxDQUFDO0FBbkdEO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTRCYjtLQUNBLENBQUM7O29CQUFBO0FBRVcsd0JBQWdCLG1CQWtFNUIsQ0FBQSIsImZpbGUiOiJhc3NldHMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtGb3JtUHJvZmlsZX0gZnJvbSAnLi4vcHJvZmlsZS9mb3JtUHJvZmlsZSdcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS5zZXJ2aWNlXCI7XHJcbi8vaW1wb3J0IHtDb250cm9sR3JvdXB9IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvanMvdmVuZG9yL0Bhbmd1bGFyL2NvbW1vbi9lc20vc3JjL2Zvcm1zLWRlcHJlY2F0ZWQvbW9kZWxcIjtcclxuaW1wb3J0IHtQcm9maWxlU2VydmljZX0gZnJvbSBcIi4vcHJvZmlsZS5zZXJ2aWNlXCI7XHJcbi8vaW1wb3J0IHtDb250cm9sR3JvdXAsIENvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwcm9maWxlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbjxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgcGFuZWwtaGVhZGluZy1jdXN0b21cIj5QUk9GSUxFIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cclxuICAgICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJyZWdpc3RlckZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5vbTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cImxhc3ROYW1lXCIgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwicmVnaXN0ZXJGb3JtLmNvbnRyb2xzLmxhc3ROYW1lLmVycm9yc1wiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQhPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPk1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwb3N0X2NvZGVcIj5Db2RlIHBvc3RhbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInBvc3RfY29kZVwiIHR5cGU9XCJudW1iZXJcIiBpZD1cInBvc3RfY29kZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBob25lXCI+TnVtw6lybyBkZSB0w6lsw6lwaG9uZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInBob25lXCIgdHlwZT1cIm51bWJlclwiIGlkPVwicGhvbmVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIFtkaXNhYmxlZF09XCIhcmVnaXN0ZXJGb3JtLnZhbGlkXCI+VmFsaWRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQge1xyXG4gICAgLy9wdWJsaWMgbXlGb3JtID0gbmV3IEZvcm1Qcm9maWxlKDAsJycsJycpXHJcbiAgLy8gcmVnaXN0ZXJGb3JtOiBDb250cm9sR3JvdXA7XHJcblxyXG4gICAgcmVnaXN0ZXJGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSwgcHJpdmF0ZSBfcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlKSB7ICAvL1xyXG5cclxuICAgIC8vIHRoaXMuZnMubW9kZWxlU2VsZWN0ZWQ7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UubW9kZWxlU2VsZWN0ZWQpO1xyXG4vL2NvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcclxuICAgICAgICAgICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIHBvc3RfY29kZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQvLyxcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaXNFbWFpbFxyXG4gICAgICAgICAgICBdKV0sXHJcbiAgICAgICAgICAgIHBob25lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgIC8vICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgIC8vICAgICBwb3N0X2NvZGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgLy8gICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgLy8gICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLy8sXHJcbiAgICAgICAgLy8gICAgICAgIC8vIHRoaXMuaXNFbWFpbFxyXG4gICAgICAgIC8vICAgICBdKV1cclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtLmVtYWlsKTtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB0aGlzLl9mb3JtU2VydmljZS5lbWFpbCA9IHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLmVtYWlsO1xyXG4gICAgICAgIC8vIHRoaXMuX2Zvcm1TZXJ2aWNlLm5hbWUgPSB0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS5sYXN0TmFtZTtcclxuICAgICAgICAvLyB0aGlzLl9mb3JtU2VydmljZS5wb3N0X2NvZGUgPSB0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS5wb3N0X2NvZGU7XHJcbiAgICAgICAgLy8gdGhpcy5fZm9ybVNlcnZpY2UudGVsZXBob25lID0gIHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLnBob25lO1xyXG4gICAgICAgIC8vIHRoaXMuX2Zvcm1TZXJ2aWNlLmRhdGVEZW1hbmRlID0gbmV3IERhdGUoKTtcclxuLy8gICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuX3Byb2ZpbGVTZXJ2aWNlLnNhdmVEZW1hbmQodGhpcy5fZm9ybVNlcnZpY2UpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgLy9jb25zdCBwcm9maWxlID0gbmV3IEZvcm1Qcm9maWxlKHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLmxhc3ROYW1lOywgdHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLnBvc3RfY29kZSwgdGhpcy5yZWdpc3RlckZvcm0udmFsdWUubGFzdE5hbWU7KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2cocHJvZmlsZSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBwcml2YXRlIGlzRW1haWwoY29udHJvbDogQ29udHJvbCk6IHtbczogc3RyaW5nXTogYm9vbGVhbn0ge1xyXG4gICAgLy8gICAgIGlmICghY29udHJvbC52YWx1ZS5tYXRjaChcIlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1wiKSkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4ge2ludmFsaWRNYWlsOiB0cnVlfTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
