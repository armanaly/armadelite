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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF3QixlQUN4QixDQUFDLENBRHNDO0FBRXZDLHdCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLCtCQUEwQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3JELHdHQUF3RztBQUN4RyxrQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRCx3REFBd0Q7QUFtQ3hEO0lBTUksWUFBb0IsR0FBZ0IsRUFBUyxZQUF5QixFQUFVLGVBQStCO1FBQTNGLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUUvRywwQkFBMEI7SUFDMUIsQ0FBQztJQU1ELFFBQVE7UUFDTCxpREFBaUQ7UUFDeEQsaUNBQWlDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDL0IsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQzNCLGtCQUFVLENBQUMsUUFBUSxDQUFBLEdBQUc7aUJBRXpCLENBQUMsQ0FBQztZQUNILEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUNuQyxDQUFDLENBQUE7UUFHRixpQ0FBaUM7UUFDakMsdUNBQXVDO1FBQ3ZDLDRDQUE0QztRQUM1Qyx1Q0FBdUM7UUFDdkMsaUNBQWlDO1FBQ2pDLHlCQUF5QjtRQUN6QixVQUFVO1FBQ1YsTUFBTTtJQUNWLENBQUM7SUFFRCxRQUFRO1FBQ0wsa0NBQWtDO1FBRWpDLEVBQUU7UUFDRiwyREFBMkQ7UUFDM0QsNkRBQTZEO1FBQzdELG1FQUFtRTtRQUNuRSxnRUFBZ0U7UUFDaEUsOENBQThDO1FBQ3RELHFDQUFxQztRQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQzdDLFNBQVMsQ0FDTixJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFDekIsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUE7UUFFTCwySUFBMkk7UUFDM0ksdUJBQXVCO0lBQzNCLENBQUM7QUFTTCxDQUFDO0FBbkdEO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTRCYjtLQUNBLENBQUM7O29CQUFBO0FBRVcsd0JBQWdCLG1CQWtFNUIsQ0FBQSIsImZpbGUiOiJwcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Rm9ybVByb2ZpbGV9IGZyb20gJy4uL3Byb2ZpbGUvZm9ybVByb2ZpbGUnXHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuLi92ZWhpY3VsZS9mb3JtLnNlcnZpY2VcIjtcclxuLy9pbXBvcnQge0NvbnRyb2xHcm91cH0gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvY29tbW9uL2VzbS9zcmMvZm9ybXMtZGVwcmVjYXRlZC9tb2RlbFwiO1xyXG5pbXBvcnQge1Byb2ZpbGVTZXJ2aWNlfSBmcm9tIFwiLi9wcm9maWxlLnNlcnZpY2VcIjtcclxuLy9pbXBvcnQge0NvbnRyb2xHcm91cCwgQ29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Byb2ZpbGUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiPlBST0ZJTEUgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInJlZ2lzdGVyRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+Tm9tPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwibGFzdE5hbWVcIiB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJyZWdpc3RlckZvcm0uY29udHJvbHMubGFzdE5hbWUuZXJyb3JzXCI+VGhpcyBmaWVsZCBpcyByZXF1aXJlZCE8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+TWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBvc3RfY29kZVwiPkNvZGUgcG9zdGFsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwicG9zdF9jb2RlXCIgdHlwZT1cIm51bWJlclwiIGlkPVwicG9zdF9jb2RlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGhvbmVcIj5OdW3DqXJvIGRlIHTDqWzDqXBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwicGhvbmVcIiB0eXBlPVwibnVtYmVyXCIgaWQ9XCJwaG9uZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cIiFyZWdpc3RlckZvcm0udmFsaWRcIj5WYWxpZGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCB7XHJcbiAgICAvL3B1YmxpYyBteUZvcm0gPSBuZXcgRm9ybVByb2ZpbGUoMCwnJywnJylcclxuICAvLyByZWdpc3RlckZvcm06IENvbnRyb2xHcm91cDtcclxuXHJcbiAgICByZWdpc3RlckZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLCBwcml2YXRlIF9wcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UpIHsgIC8vXHJcblxyXG4gICAgLy8gdGhpcy5mcy5tb2RlbGVTZWxlY3RlZDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5tb2RlbGVTZWxlY3RlZCk7XHJcbi8vY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgcG9zdF9jb2RlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZC8vLFxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pc0VtYWlsXHJcbiAgICAgICAgICAgIF0pXSxcclxuICAgICAgICAgICAgcGhvbmU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgICAgLy8gICAgIG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgLy8gICAgIHBvc3RfY29kZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAvLyAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAvLyAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQvLyxcclxuICAgICAgICAvLyAgICAgICAgLy8gdGhpcy5pc0VtYWlsXHJcbiAgICAgICAgLy8gICAgIF0pXVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgLy8gY29uc29sZS5sb2codGhpcy5teUZvcm0uZW1haWwpO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHRoaXMuX2Zvcm1TZXJ2aWNlLmVtYWlsID0gdGhpcy5yZWdpc3RlckZvcm0udmFsdWUuZW1haWw7XHJcbiAgICAgICAgLy8gdGhpcy5fZm9ybVNlcnZpY2UubmFtZSA9IHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLmxhc3ROYW1lO1xyXG4gICAgICAgIC8vIHRoaXMuX2Zvcm1TZXJ2aWNlLnBvc3RfY29kZSA9IHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLnBvc3RfY29kZTtcclxuICAgICAgICAvLyB0aGlzLl9mb3JtU2VydmljZS50ZWxlcGhvbmUgPSAgdGhpcy5yZWdpc3RlckZvcm0udmFsdWUucGhvbmU7XHJcbiAgICAgICAgLy8gdGhpcy5fZm9ybVNlcnZpY2UuZGF0ZURlbWFuZGUgPSBuZXcgRGF0ZSgpO1xyXG4vLyAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5fcHJvZmlsZVNlcnZpY2Uuc2F2ZURlbWFuZCh0aGlzLl9mb3JtU2VydmljZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAvL2NvbnN0IHByb2ZpbGUgPSBuZXcgRm9ybVByb2ZpbGUodGhpcy5yZWdpc3RlckZvcm0udmFsdWUubGFzdE5hbWU7LCB0dGhpcy5yZWdpc3RlckZvcm0udmFsdWUucG9zdF9jb2RlLCB0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS5sYXN0TmFtZTspXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwcm9maWxlKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIHByaXZhdGUgaXNFbWFpbChjb250cm9sOiBDb250cm9sKToge1tzOiBzdHJpbmddOiBib29sZWFufSB7XHJcbiAgICAvLyAgICAgaWYgKCFjb250cm9sLnZhbHVlLm1hdGNoKFwiW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XCIpKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiB7aW52YWxpZE1haWw6IHRydWV9O1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxufSJdfQ==
