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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const photos_service_1 = require("./photos.service");
const router_1 = require("@angular/router");
let PhotosComponent = class PhotosComponent {
    constructor(router, _photoService) {
        this.router = router;
        this._photoService = _photoService;
        this.progressPhoto = 0;
        this.showPhoto1 = true;
        this.showPhoto2 = false;
        this.showPhoto3 = false;
        this.showPhoto4 = false;
        this.showPhoto5 = false;
    }
    upload() {
        this.progressPhoto = this.progressPhoto + 20;
        if (this.progressPhoto == 100) {
            this.router.navigate(['/profile']);
        }
    }
    fileChangeEvent(fileInput) {
        console.log('fileChangeEvent');
        console.log(fileInput.target.files);
        var objectURL = window.URL.createObjectURL(fileInput.target.files[0]);
        console.log(objectURL);
        console.log('apres');
        this.data = objectURL;
    }
};
PhotosComponent = __decorate([
    core_1.Component({
        selector: 'upload-photo',
        template: `
                <progress class="progress progress-danger" [attr.value]="progressPhoto" max="100" aria-describedby="example-caption-1"></progress>
                <div class="panel panel-default" *ngIf="showPhoto1">
                    <form method="post" enctype="multipart/form-data">
                        <div>
                            <img height="300" width="360" src="/images/modele/photo1.jpg">
                        </div>
                        <div>
                            
                            <input type="file" class="btn btn-primary btn-primary-custom"  (change)="fileChangeEvent($event)" placeholder="Upload file...">
                            <button type="button" (click)="upload(); this.showPhoto2 = true; this.showPhoto1 = false;" class="btn btn-primary btn-primary-custom">Upload</button>    
                       </div>
                   </form>
                </div>
                <div class="panel panel-default" *ngIf="showPhoto2">
                    <form method="post" enctype="multipart/form-data">
                        <div>
                            <img height="300" width="360" src="/images/modele/photo2.jpg">
                        </div>
                       <div>
                            <input type="file" (change)="fileChangeEvent($event)" placeholder="Upload file..." class="btn btn-primary btn-primary-custom">
                            <button type="button" (click)="upload();this.showPhoto3 = true; this.showPhoto2 = false;" class="btn btn-primary btn-primary-custom">Upload</button>
                       </div>
                       </form>
                </div>
                <div class="panel panel-default" *ngIf="showPhoto3">
                    <form method="post" enctype="multipart/form-data">
                        <div>
                            <img height="300" width="360" src="/images/modele/photo3.jpg">
                        </div>
                       <div>
                            <input type="file" (change)="fileChangeEvent($event)" placeholder="Upload file..." class="btn btn-primary btn-primary-custom">
                            <button type="button" (click)="upload();this.showPhoto4 = true; this.showPhoto3 = false;" class="btn btn-primary btn-primary-custom">Upload</button>
                       </div>
                       </form>
                </div>
                <div class="panel panel-default" *ngIf="showPhoto4">
                    <form method="post" enctype="multipart/form-data">
                        <div>
                            <img height="300" width="360" src="/images/modele/photo4.jpg">
                        </div>
                       <div>
                            <input type="file" (change)="fileChangeEvent($event)" placeholder="Upload file..." class="btn btn-primary btn-primary-custom">
                            <button type="button" (click)="upload();this.showPhoto5 = true; this.showPhoto4 = false;" class="btn btn-primary btn-primary-custom">Upload</button>
                       </div>
                       </form>
                </div>
                                <div class="panel panel-default" *ngIf="showPhoto5">
                    <form method="post" enctype="multipart/form-data">
                        <div>
                            <img height="300" width="360" src="/images/modele/photo5.jpg">
                        </div>
                       <div>
                            <input type="file" (change)="fileChangeEvent($event)" placeholder="Upload file..." class="btn btn-primary btn-primary-custom">
                            <button type="button" (click)="upload()" class="btn btn-primary btn-primary-custom">Upload</button>
                       </div>
                       </form>
                </div>
               <!--<div>-->
                    <!--<input type="file" (change)="fileChangeEvent($event)" placeholder="Upload file...">-->
               <!--</div>-->
               <!---->
               <div >
               <!--<input type="submit"/>-->
                
               </div>
               
        <!--ngFileSelect-->
       <!--[options]="basicOptions"-->
    <!--(onUpload)="handleUpload($event)">-->
 ><br>
<nav>
    <div><a [routerLink]="['/profile']"> SUIVANT </a></div>
</nav>

`
    }),
    __metadata("design:paramtypes", [router_1.Router, photos_service_1.PhotosService])
], PhotosComponent);
exports.PhotosComponent = PhotosComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3Rvcy9waG90b3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQWdEO0FBQ2hELHFEQUErQztBQUMvQyw0Q0FBdUM7QUEyRnZDLElBQWEsZUFBZSxHQUE1QjtJQVlJLFlBQW9CLE1BQWMsRUFBUyxhQUE2QjtRQUFwRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBVnhFLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZUFBVSxHQUFZLEtBQUssQ0FBQztJQUs1QixDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFFN0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxHQUFHLENBQUMsQ0FBQSxDQUFDO1lBRXBCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBWWQsQ0FBQztJQWlCRCxlQUFlLENBQUMsU0FBYztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBR2xCLENBQUM7Q0F3Q0osQ0FBQTtBQXBHWSxlQUFlO0lBckYzQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyRWI7S0FNQSxDQUFDO3FDQWM4QixlQUFNLEVBQXlCLDhCQUFhO0dBWi9ELGVBQWUsQ0FvRzNCO0FBcEdZLDBDQUFlIiwiZmlsZSI6InBob3Rvcy9waG90b3MuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UGhvdG9zU2VydmljZX0gZnJvbSBcIi4vcGhvdG9zLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cblxuLy9pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvanMvdmVuZG9yL3J4anMvc3JjL09ic2VydmFibGVcIjtcbi8vaW1wb3J0IHtOZ1pvbmV9IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvanMvdmVuZG9yL0Bhbmd1bGFyL2NvcmUvZXNtL3NyYy96b25lL25nX3pvbmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd1cGxvYWQtcGhvdG8nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgICAgICAgPHByb2dyZXNzIGNsYXNzPVwicHJvZ3Jlc3MgcHJvZ3Jlc3MtZGFuZ2VyXCIgW2F0dHIudmFsdWVdPVwicHJvZ3Jlc3NQaG90b1wiIG1heD1cIjEwMFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJleGFtcGxlLWNhcHRpb24tMVwiPjwvcHJvZ3Jlc3M+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiAqbmdJZj1cInNob3dQaG90bzFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMzAwXCIgd2lkdGg9XCIzNjBcIiBzcmM9XCIvaW1hZ2VzL21vZGVsZS9waG90bzEuanBnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCIgIChjaGFuZ2UpPVwiZmlsZUNoYW5nZUV2ZW50KCRldmVudClcIiBwbGFjZWhvbGRlcj1cIlVwbG9hZCBmaWxlLi4uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVwbG9hZCgpOyB0aGlzLnNob3dQaG90bzIgPSB0cnVlOyB0aGlzLnNob3dQaG90bzEgPSBmYWxzZTtcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5VcGxvYWQ8L2J1dHRvbj4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiICpuZ0lmPVwic2hvd1Bob3RvMlwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIzMDBcIiB3aWR0aD1cIjM2MFwiIHNyYz1cIi9pbWFnZXMvbW9kZWxlL3Bob3RvMi5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIChjaGFuZ2UpPVwiZmlsZUNoYW5nZUV2ZW50KCRldmVudClcIiBwbGFjZWhvbGRlcj1cIlVwbG9hZCBmaWxlLi4uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVwbG9hZCgpO3RoaXMuc2hvd1Bob3RvMyA9IHRydWU7IHRoaXMuc2hvd1Bob3RvMiA9IGZhbHNlO1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlVwbG9hZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgKm5nSWY9XCJzaG93UGhvdG8zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGhlaWdodD1cIjMwMFwiIHdpZHRoPVwiMzYwXCIgc3JjPVwiL2ltYWdlcy9tb2RlbGUvcGhvdG8zLmpwZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgKGNoYW5nZSk9XCJmaWxlQ2hhbmdlRXZlbnQoJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwiVXBsb2FkIGZpbGUuLi5cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidXBsb2FkKCk7dGhpcy5zaG93UGhvdG80ID0gdHJ1ZTsgdGhpcy5zaG93UGhvdG8zID0gZmFsc2U7XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+VXBsb2FkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiAqbmdJZj1cInNob3dQaG90bzRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMzAwXCIgd2lkdGg9XCIzNjBcIiBzcmM9XCIvaW1hZ2VzL21vZGVsZS9waG90bzQuanBnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cImZpbGVDaGFuZ2VFdmVudCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJVcGxvYWQgZmlsZS4uLlwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ1cGxvYWQoKTt0aGlzLnNob3dQaG90bzUgPSB0cnVlOyB0aGlzLnNob3dQaG90bzQgPSBmYWxzZTtcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5VcGxvYWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiAqbmdJZj1cInNob3dQaG90bzVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMzAwXCIgd2lkdGg9XCIzNjBcIiBzcmM9XCIvaW1hZ2VzL21vZGVsZS9waG90bzUuanBnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cImZpbGVDaGFuZ2VFdmVudCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJVcGxvYWQgZmlsZS4uLlwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ1cGxvYWQoKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlVwbG9hZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPCEtLTxkaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08aW5wdXQgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cImZpbGVDaGFuZ2VFdmVudCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJVcGxvYWQgZmlsZS4uLlwiPi0tPlxuICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICA8IS0tPGlucHV0IHR5cGU9XCJzdWJtaXRcIi8+LS0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICA8IS0tbmdGaWxlU2VsZWN0LS0+XG4gICAgICAgPCEtLVtvcHRpb25zXT1cImJhc2ljT3B0aW9uc1wiLS0+XG4gICAgPCEtLShvblVwbG9hZCk9XCJoYW5kbGVVcGxvYWQoJGV2ZW50KVwiPi0tPlxuID48YnI+XG48bmF2PlxuICAgIDxkaXY+PGEgW3JvdXRlckxpbmtdPVwiWycvcHJvZmlsZSddXCI+IFNVSVZBTlQgPC9hPjwvZGl2PlxuPC9uYXY+XG5cbmBcblxuICAgIC8vXG4gICAgLy8gPGRpdj5cbiAgICAvLyAgIFJlc3BvbnNlOiB7eyByZXNwb25zZSB8IGpzb24gfX1cbiAgICAvLyA8L2Rpdj5gXG59KVxuXG5leHBvcnQgY2xhc3MgUGhvdG9zQ29tcG9uZW50ICB7XG5cbiAgICBwcm9ncmVzc1Bob3RvID0gMDtcblxuICAgIHNob3dQaG90bzE6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHNob3dQaG90bzI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93UGhvdG8zOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd1Bob3RvNDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dQaG90bzU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGRhdGE6IGFueTtcbiAgICBmaWxlc1RvVXBsb2FkOiBGaWxlO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBfcGhvdG9TZXJ2aWNlIDogUGhvdG9zU2VydmljZSkge1xuICAgIH1cblxuICAgIHVwbG9hZCgpIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzc1Bob3RvID0gdGhpcy5wcm9ncmVzc1Bob3RvICsgMjA7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NQaG90byA9PSAxMDApe1xuICAgICAgICAgICAgICAgICAgICAvL1JPT1QgVkVSUyBMQSBQQUdFIFNVSVZBTlRFXG4gICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcHJvZmlsZSddKTtcbiAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAvLyB0aGlzLl9waG90b1NlcnZpY2UudXBsb2FkKHRoaXMuZGF0YSlcbiAgICAgICAgIC8vICAgICAuc3Vic2NyaWJlXG4gICAgICAgICAvLyAgICAoXG4gICAgICAgICAvLyAgICAgICAgIGxvYWRfaW1hZ2UgPT4ge1xuICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2cobG9hZF9pbWFnZSk7XG4gICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAvLyAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidW5lIGVycmV1ciBzJ2VzdCBwcm9kdWl0ZVwiKTtcbiAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKSB9XG4gICAgICAgICAvLyAgICApO1xuICAgIH1cblxuICAgICAgICAvLyByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwczovL215c2F2ZXIuaGVyb2t1YXBwLmNvbS9kZW1hbmQvJylcbiAgICAgICAgLy8gICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG5cbiAgICAgICAgLy8gdGhpcy5tYWtlRmlsZVJlcXVlc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvdXBsb2FkXCIsIFtdLCB0aGlzLmZpbGVzVG9VcGxvYWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAvLyAgICAgIGlmICh0aGlzLnByb2dyZXNzUGhvdG8gPT0gMTAwKXtcbiAgICAgICAgLy8gICAgICAgICAvL1JPT1QgVkVSUyBMQSBQQUdFIFNVSVZBTlRFXG4gICAgICAgIC8vICAgICAgICAgIC8vIFtyb3V0ZXJMaW5rXSA9ICBcIlsnL3Byb2ZpbGUnXVwiO1xuICAgICAgICAvLyAgICAgIH1cbiAgICAgICAgLy8gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAvLyAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIC8vICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIC8vICB9KTtcblxuXG4gICAgZmlsZUNoYW5nZUV2ZW50KGZpbGVJbnB1dDogYW55KXtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZpbGVDaGFuZ2VFdmVudCcpO1xuY29uc29sZS5sb2coZmlsZUlucHV0LnRhcmdldC5maWxlcyk7XG4gICAgICAgIHZhciBvYmplY3RVUkwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlSW5wdXQudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgICAgY29uc29sZS5sb2cob2JqZWN0VVJMKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2FwcmVzJyk7XG4gICAgLy8gICAgdGhpcy5maWxlc1RvVXBsb2FkID0gPEZpbGU+IGZpbGVJbnB1dC50YXJnZXQuZmlsZXNbMF07XG50aGlzLmRhdGEgPSBvYmplY3RVUkw7XG4gICAgICAgIC8vU2kgcGx1c2lldXJzIGZpY2hpZXIgw6AgdXBsb2FkZXIgZW4gbWVtZSB0ZW1wc1xuICAgICAgICAvLyB0aGlzLmZpbGVzVG9VcGxvYWQucHVzaChmaWxlSW5wdXQudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICB9XG5cbiAgICAvLyBtYWtlRmlsZVJlcXVlc3QodXJsOiBzdHJpbmcsIHBhcmFtczogQXJyYXk8c3RyaW5nPiwgZmlsZXM6IEFycmF5PEZpbGU+KSB7XG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gICAgICAgICB2YXIgZm9ybURhdGE6IGFueSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIC8vICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8vICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2Fkc1tdXCIsIGZpbGVzW2ldLCBmaWxlc1tpXS5uYW1lKTtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHhoci5yZXNwb25zZSkpO1xuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHhoci5yZXNwb25zZSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4gICAgLy8gICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcbiAgICAvLyAgICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuICAgIC8vIHByaXZhdGUgem9uZTogTmdab25lO1xuICAgIC8vIHByaXZhdGUgYmFzaWNPcHRpb25zOiBPYmplY3Q7XG4gICAgLy8gcHJpdmF0ZSBwcm9ncmVzczogbnVtYmVyID0gMDtcbiAgICAvLyBwcml2YXRlIHJlc3BvbnNlOiBhbnkgPSB7fTtcbiAgICAvL1xuICAgIC8vIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMuem9uZSA9IG5ldyBOZ1pvbmUoeyBlbmFibGVMb25nU3RhY2tUcmFjZTogZmFsc2V9KTtcbiAgICAvLyB0aGlzLmJhc2ljT3B0aW9ucyA9IHsgdXJsOiAnaHR0cDovL2FwaS5uZzItdXBsb2FkZXIuY29tOjEwMDUwL3VwbG9hZCd9O1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGhhbmRsZVVwbG9hZChkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICAvLyAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgLy8gICAgICAgICB0aGlzLnJlc3BvbnNlID0gZGF0YTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
