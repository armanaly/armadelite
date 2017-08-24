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
const profile_service_1 = require("./profile.service");
let ProfileComponent = class ProfileComponent {
    constructor(_fb, _formService, _profileService) {
        this._fb = _fb;
        this._formService = _formService;
        this._profileService = _profileService;
    }
    ngOnInit() {
        this.registerForm = this._fb.group({
            lastName: ['', forms_1.Validators.required],
            post_code: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            phone: ['', forms_1.Validators.required]
        });
    }
    onSubmit() {
        this._profileService.saveDemand(this._formService)
            .subscribe(data => console.log(data), error => console.log(error));
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
    __metadata('design:paramtypes', [(typeof (_a = typeof forms_1.FormBuilder !== 'undefined' && forms_1.FormBuilder) === 'function' && _a) || Object, form_service_1.FormService, profile_service_1.ProfileService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
var _a;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF3QixlQUN4QixDQUFDLENBRHNDO0FBRXZDLHdCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLCtCQUEwQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRXZELGtDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBb0NqRDtJQU1JLFlBQW9CLEdBQWdCLEVBQVMsWUFBeUIsRUFBVSxlQUErQjtRQUEzRixRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFHL0csQ0FBQztJQU1ELFFBQVE7UUFHSixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQy9CLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsT0FBTyxDQUFDO29CQUMzQixrQkFBVSxDQUFDLFFBQVE7aUJBRXRCLENBQUMsQ0FBQztZQUNILEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUNuQyxDQUFDLENBQUE7SUFXTixDQUFDO0lBRUQsUUFBUTtRQVVKLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDN0MsU0FBUyxDQUNOLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUN6QixLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtJQUlULENBQUM7QUFTTCxDQUFDO0FBbkdEO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTRCYjtLQUNBLENBQUM7O29CQUFBO0FBRVcsd0JBQWdCLG1CQWtFNUIsQ0FBQSIsImZpbGUiOiJwcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge0Zvcm1Qcm9maWxlfSBmcm9tICcuLi9wcm9maWxlL2Zvcm1Qcm9maWxlJ1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0uc2VydmljZVwiO1xuLy9pbXBvcnQge0NvbnRyb2xHcm91cH0gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvY29tbW9uL2VzbS9zcmMvZm9ybXMtZGVwcmVjYXRlZC9tb2RlbFwiO1xuaW1wb3J0IHtQcm9maWxlU2VydmljZX0gZnJvbSBcIi4vcHJvZmlsZS5zZXJ2aWNlXCI7XG4vL2ltcG9ydCB7Q29udHJvbEdyb3VwLCBDb250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncHJvZmlsZScsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCI+UFJPRklMRSA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwicmVnaXN0ZXJGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5vbTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJsYXN0TmFtZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJyZWdpc3RlckZvcm0uY29udHJvbHMubGFzdE5hbWUuZXJyb3JzXCI+VGhpcyBmaWVsZCBpcyByZXF1aXJlZCE8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+TWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwb3N0X2NvZGVcIj5Db2RlIHBvc3RhbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJwb3N0X2NvZGVcIiB0eXBlPVwibnVtYmVyXCIgaWQ9XCJwb3N0X2NvZGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwaG9uZVwiPk51bcOpcm8gZGUgdMOpbMOpcGhvbmU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwicGhvbmVcIiB0eXBlPVwibnVtYmVyXCIgaWQ9XCJwaG9uZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIXJlZ2lzdGVyRm9ybS52YWxpZFwiPlZhbGlkZXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbjwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQge1xuICAgIC8vcHVibGljIG15Rm9ybSA9IG5ldyBGb3JtUHJvZmlsZSgwLCcnLCcnKVxuICAvLyByZWdpc3RlckZvcm06IENvbnRyb2xHcm91cDtcblxuICAgIHJlZ2lzdGVyRm9ybTogRm9ybUdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSwgcHJpdmF0ZSBfcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlKSB7ICAvL1xuXG4gICAgLy8gdGhpcy5mcy5tb2RlbGVTZWxlY3RlZDtcbiAgICB9XG5cblxuXG5cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLm1vZGVsZVNlbGVjdGVkKTtcbi8vY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgICAgICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgcG9zdF9jb2RlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLy8sXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pc0VtYWlsXG4gICAgICAgICAgICBdKV0sXG4gICAgICAgICAgICBwaG9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgLy8gdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgIC8vICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAvLyAgICAgcG9zdF9jb2RlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAvLyAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgLy8gICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLy8sXG4gICAgICAgIC8vICAgICAgICAvLyB0aGlzLmlzRW1haWxcbiAgICAgICAgLy8gICAgIF0pXVxuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm15Rm9ybS5lbWFpbCk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gdGhpcy5fZm9ybVNlcnZpY2UuZW1haWwgPSB0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS5lbWFpbDtcbiAgICAgICAgLy8gdGhpcy5fZm9ybVNlcnZpY2UubmFtZSA9IHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLmxhc3ROYW1lO1xuICAgICAgICAvLyB0aGlzLl9mb3JtU2VydmljZS5wb3N0X2NvZGUgPSB0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS5wb3N0X2NvZGU7XG4gICAgICAgIC8vIHRoaXMuX2Zvcm1TZXJ2aWNlLnRlbGVwaG9uZSA9ICB0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS5waG9uZTtcbiAgICAgICAgLy8gdGhpcy5fZm9ybVNlcnZpY2UuZGF0ZURlbWFuZGUgPSBuZXcgRGF0ZSgpO1xuLy8gICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xuICAgICAgICB0aGlzLl9wcm9maWxlU2VydmljZS5zYXZlRGVtYW5kKHRoaXMuX2Zvcm1TZXJ2aWNlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKVxuXG4gICAgICAgIC8vY29uc3QgcHJvZmlsZSA9IG5ldyBGb3JtUHJvZmlsZSh0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS5sYXN0TmFtZTssIHR0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS5wb3N0X2NvZGUsIHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLmxhc3ROYW1lOylcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwcm9maWxlKTtcbiAgICB9XG5cblxuXG4gICAgLy8gcHJpdmF0ZSBpc0VtYWlsKGNvbnRyb2w6IENvbnRyb2wpOiB7W3M6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICAvLyAgICAgaWYgKCFjb250cm9sLnZhbHVlLm1hdGNoKFwiW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XCIpKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4ge2ludmFsaWRNYWlsOiB0cnVlfTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
