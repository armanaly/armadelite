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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF3QixlQUN4QixDQUFDLENBRHNDO0FBRXZDLHdCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLCtCQUEwQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRXZELGtDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBb0NqRDtJQU1JLFlBQW9CLEdBQWdCLEVBQVMsWUFBeUIsRUFBVSxlQUErQjtRQUEzRixRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFHL0csQ0FBQztJQU1ELFFBQVE7UUFHSixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQy9CLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsT0FBTyxDQUFDO29CQUMzQixrQkFBVSxDQUFDLFFBQVE7aUJBRXRCLENBQUMsQ0FBQztZQUNILEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUNuQyxDQUFDLENBQUE7SUFXTixDQUFDO0lBRUQsUUFBUTtRQVVKLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDN0MsU0FBUyxDQUNOLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUN6QixLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtJQUlULENBQUM7QUFTTCxDQUFDO0FBbkdEO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTRCYjtLQUNBLENBQUM7O29CQUFBO0FBRVcsd0JBQWdCLG1CQWtFNUIsQ0FBQSIsImZpbGUiOiJwcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Rm9ybVByb2ZpbGV9IGZyb20gJy4uL3Byb2ZpbGUvZm9ybVByb2ZpbGUnXHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0uc2VydmljZVwiO1xyXG4vL2ltcG9ydCB7Q29udHJvbEdyb3VwfSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2pzL3ZlbmRvci9AYW5ndWxhci9jb21tb24vZXNtL3NyYy9mb3Jtcy1kZXByZWNhdGVkL21vZGVsXCI7XHJcbmltcG9ydCB7UHJvZmlsZVNlcnZpY2V9IGZyb20gXCIuL3Byb2ZpbGUuc2VydmljZVwiO1xyXG4vL2ltcG9ydCB7Q29udHJvbEdyb3VwLCBDb250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHJvZmlsZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG48ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCI+UFJPRklMRSA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwicmVnaXN0ZXJGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5Ob208L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJsYXN0TmFtZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cInJlZ2lzdGVyRm9ybS5jb250cm9scy5sYXN0TmFtZS5lcnJvcnNcIj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkITwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5NYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicG9zdF9jb2RlXCI+Q29kZSBwb3N0YWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJwb3N0X2NvZGVcIiB0eXBlPVwibnVtYmVyXCIgaWQ9XCJwb3N0X2NvZGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwaG9uZVwiPk51bcOpcm8gZGUgdMOpbMOpcGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJwaG9uZVwiIHR5cGU9XCJudW1iZXJcIiBpZD1cInBob25lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIXJlZ2lzdGVyRm9ybS52YWxpZFwiPlZhbGlkZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IHtcclxuICAgIC8vcHVibGljIG15Rm9ybSA9IG5ldyBGb3JtUHJvZmlsZSgwLCcnLCcnKVxyXG4gIC8vIHJlZ2lzdGVyRm9ybTogQ29udHJvbEdyb3VwO1xyXG5cclxuICAgIHJlZ2lzdGVyRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlciwgcHVibGljIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2UsIHByaXZhdGUgX3Byb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSkgeyAgLy9cclxuXHJcbiAgICAvLyB0aGlzLmZzLm1vZGVsZVNlbGVjdGVkO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLm1vZGVsZVNlbGVjdGVkKTtcclxuLy9jb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBwb3N0X2NvZGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLy8sXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmlzRW1haWxcclxuICAgICAgICAgICAgXSldLFxyXG4gICAgICAgICAgICBwaG9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcclxuICAgICAgICAvLyAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAvLyAgICAgcG9zdF9jb2RlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgIC8vICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgIC8vICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZC8vLFxyXG4gICAgICAgIC8vICAgICAgICAvLyB0aGlzLmlzRW1haWxcclxuICAgICAgICAvLyAgICAgXSldXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm15Rm9ybS5lbWFpbCk7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdGhpcy5fZm9ybVNlcnZpY2UuZW1haWwgPSB0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS5lbWFpbDtcclxuICAgICAgICAvLyB0aGlzLl9mb3JtU2VydmljZS5uYW1lID0gdGhpcy5yZWdpc3RlckZvcm0udmFsdWUubGFzdE5hbWU7XHJcbiAgICAgICAgLy8gdGhpcy5fZm9ybVNlcnZpY2UucG9zdF9jb2RlID0gdGhpcy5yZWdpc3RlckZvcm0udmFsdWUucG9zdF9jb2RlO1xyXG4gICAgICAgIC8vIHRoaXMuX2Zvcm1TZXJ2aWNlLnRlbGVwaG9uZSA9ICB0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS5waG9uZTtcclxuICAgICAgICAvLyB0aGlzLl9mb3JtU2VydmljZS5kYXRlRGVtYW5kZSA9IG5ldyBEYXRlKCk7XHJcbi8vICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLl9wcm9maWxlU2VydmljZS5zYXZlRGVtYW5kKHRoaXMuX2Zvcm1TZXJ2aWNlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgIC8vY29uc3QgcHJvZmlsZSA9IG5ldyBGb3JtUHJvZmlsZSh0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS5sYXN0TmFtZTssIHR0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS5wb3N0X2NvZGUsIHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLmxhc3ROYW1lOylcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHByb2ZpbGUpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gcHJpdmF0ZSBpc0VtYWlsKGNvbnRyb2w6IENvbnRyb2wpOiB7W3M6IHN0cmluZ106IGJvb2xlYW59IHtcclxuICAgIC8vICAgICBpZiAoIWNvbnRyb2wudmFsdWUubWF0Y2goXCJbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cIikpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHtpbnZhbGlkTWFpbDogdHJ1ZX07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
