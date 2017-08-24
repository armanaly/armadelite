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
    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, photos_service_1.PhotosService])
], PhotosComponent);
exports.PhotosComponent = PhotosComponent;
var _a;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3Rvcy9waG90b3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsaUNBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0MseUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUEyRnZDO0lBWUksWUFBb0IsTUFBYyxFQUFTLGFBQTZCO1FBQXBELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFWeEUsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFFbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixlQUFVLEdBQVksS0FBSyxDQUFDO0lBSzVCLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUU3QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLEdBQUcsQ0FBQyxDQUFBLENBQUM7WUFFcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFZZCxDQUFDO0lBaUJELGVBQWUsQ0FBQyxTQUFjO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFN0IsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7SUFHbEIsQ0FBQztBQXdDTCxDQUFDO0FBekxEO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMkViO0tBTUEsQ0FBQzs7bUJBQUE7QUFFVyx1QkFBZSxrQkFvRzNCLENBQUEiLCJmaWxlIjoicGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtQaG90b3NTZXJ2aWNlfSBmcm9tIFwiLi9waG90b3Muc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuXG4vL2ltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3Ivcnhqcy9zcmMvT2JzZXJ2YWJsZVwiO1xuLy9pbXBvcnQge05nWm9uZX0gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvY29yZS9lc20vc3JjL3pvbmUvbmdfem9uZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3VwbG9hZC1waG90bycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgICAgICA8cHJvZ3Jlc3MgY2xhc3M9XCJwcm9ncmVzcyBwcm9ncmVzcy1kYW5nZXJcIiBbYXR0ci52YWx1ZV09XCJwcm9ncmVzc1Bob3RvXCIgbWF4PVwiMTAwXCIgYXJpYS1kZXNjcmliZWRieT1cImV4YW1wbGUtY2FwdGlvbi0xXCI+PC9wcm9ncmVzcz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiICpuZ0lmPVwic2hvd1Bob3RvMVwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIzMDBcIiB3aWR0aD1cIjM2MFwiIHNyYz1cIi9pbWFnZXMvbW9kZWxlL3Bob3RvMS5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIiAgKGNoYW5nZSk9XCJmaWxlQ2hhbmdlRXZlbnQoJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwiVXBsb2FkIGZpbGUuLi5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidXBsb2FkKCk7IHRoaXMuc2hvd1Bob3RvMiA9IHRydWU7IHRoaXMuc2hvd1Bob3RvMSA9IGZhbHNlO1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlVwbG9hZDwvYnV0dG9uPiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgKm5nSWY9XCJzaG93UGhvdG8yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGhlaWdodD1cIjMwMFwiIHdpZHRoPVwiMzYwXCIgc3JjPVwiL2ltYWdlcy9tb2RlbGUvcGhvdG8yLmpwZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgKGNoYW5nZSk9XCJmaWxlQ2hhbmdlRXZlbnQoJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwiVXBsb2FkIGZpbGUuLi5cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidXBsb2FkKCk7dGhpcy5zaG93UGhvdG8zID0gdHJ1ZTsgdGhpcy5zaG93UGhvdG8yID0gZmFsc2U7XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+VXBsb2FkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiAqbmdJZj1cInNob3dQaG90bzNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMzAwXCIgd2lkdGg9XCIzNjBcIiBzcmM9XCIvaW1hZ2VzL21vZGVsZS9waG90bzMuanBnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cImZpbGVDaGFuZ2VFdmVudCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJVcGxvYWQgZmlsZS4uLlwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ1cGxvYWQoKTt0aGlzLnNob3dQaG90bzQgPSB0cnVlOyB0aGlzLnNob3dQaG90bzMgPSBmYWxzZTtcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5VcGxvYWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiICpuZ0lmPVwic2hvd1Bob3RvNFwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIzMDBcIiB3aWR0aD1cIjM2MFwiIHNyYz1cIi9pbWFnZXMvbW9kZWxlL3Bob3RvNC5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIChjaGFuZ2UpPVwiZmlsZUNoYW5nZUV2ZW50KCRldmVudClcIiBwbGFjZWhvbGRlcj1cIlVwbG9hZCBmaWxlLi4uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVwbG9hZCgpO3RoaXMuc2hvd1Bob3RvNSA9IHRydWU7IHRoaXMuc2hvd1Bob3RvNCA9IGZhbHNlO1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlVwbG9hZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiICpuZ0lmPVwic2hvd1Bob3RvNVwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIzMDBcIiB3aWR0aD1cIjM2MFwiIHNyYz1cIi9pbWFnZXMvbW9kZWxlL3Bob3RvNS5qcGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIChjaGFuZ2UpPVwiZmlsZUNoYW5nZUV2ZW50KCRldmVudClcIiBwbGFjZWhvbGRlcj1cIlVwbG9hZCBmaWxlLi4uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVwbG9hZCgpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+VXBsb2FkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8IS0tPGRpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCB0eXBlPVwiZmlsZVwiIChjaGFuZ2UpPVwiZmlsZUNoYW5nZUV2ZW50KCRldmVudClcIiBwbGFjZWhvbGRlcj1cIlVwbG9hZCBmaWxlLi4uXCI+LS0+XG4gICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG4gICAgICAgICAgICAgICA8IS0tLS0+XG4gICAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgIDwhLS08aW5wdXQgdHlwZT1cInN1Ym1pdFwiLz4tLT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgXG4gICAgICAgIDwhLS1uZ0ZpbGVTZWxlY3QtLT5cbiAgICAgICA8IS0tW29wdGlvbnNdPVwiYmFzaWNPcHRpb25zXCItLT5cbiAgICA8IS0tKG9uVXBsb2FkKT1cImhhbmRsZVVwbG9hZCgkZXZlbnQpXCI+LS0+XG4gPjxicj5cbjxuYXY+XG4gICAgPGRpdj48YSBbcm91dGVyTGlua109XCJbJy9wcm9maWxlJ11cIj4gU1VJVkFOVCA8L2E+PC9kaXY+XG48L25hdj5cblxuYFxuXG4gICAgLy9cbiAgICAvLyA8ZGl2PlxuICAgIC8vICAgUmVzcG9uc2U6IHt7IHJlc3BvbnNlIHwganNvbiB9fVxuICAgIC8vIDwvZGl2PmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBQaG90b3NDb21wb25lbnQgIHtcblxuICAgIHByb2dyZXNzUGhvdG8gPSAwO1xuXG4gICAgc2hvd1Bob3RvMTogYm9vbGVhbiA9IHRydWU7XG4gICAgc2hvd1Bob3RvMjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dQaG90bzM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93UGhvdG80OiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd1Bob3RvNTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgZGF0YTogYW55O1xuICAgIGZpbGVzVG9VcGxvYWQ6IEZpbGU7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHVibGljIF9waG90b1NlcnZpY2UgOiBQaG90b3NTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgdXBsb2FkKCkge1xuICAgICAgICB0aGlzLnByb2dyZXNzUGhvdG8gPSB0aGlzLnByb2dyZXNzUGhvdG8gKyAyMDtcblxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc1Bob3RvID09IDEwMCl7XG4gICAgICAgICAgICAgICAgICAgIC8vUk9PVCBWRVJTIExBIFBBR0UgU1VJVkFOVEVcbiAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wcm9maWxlJ10pO1xuICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgIC8vIHRoaXMuX3Bob3RvU2VydmljZS51cGxvYWQodGhpcy5kYXRhKVxuICAgICAgICAgLy8gICAgIC5zdWJzY3JpYmVcbiAgICAgICAgIC8vICAgIChcbiAgICAgICAgIC8vICAgICAgICAgbG9hZF9pbWFnZSA9PiB7XG4gICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2FkX2ltYWdlKTtcbiAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgIC8vICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1bmUgZXJyZXVyIHMnZXN0IHByb2R1aXRlXCIpO1xuICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpIH1cbiAgICAgICAgIC8vICAgICk7XG4gICAgfVxuXG4gICAgICAgIC8vIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHBzOi8vbXlzYXZlci5oZXJva3VhcHAuY29tL2RlbWFuZC8nKVxuICAgICAgICAvLyAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcblxuICAgICAgICAvLyB0aGlzLm1ha2VGaWxlUmVxdWVzdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91cGxvYWRcIiwgW10sIHRoaXMuZmlsZXNUb1VwbG9hZCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIC8vICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NQaG90byA9PSAxMDApe1xuICAgICAgICAvLyAgICAgICAgIC8vUk9PVCBWRVJTIExBIFBBR0UgU1VJVkFOVEVcbiAgICAgICAgLy8gICAgICAgICAgLy8gW3JvdXRlckxpbmtdID0gIFwiWycvcHJvZmlsZSddXCI7XG4gICAgICAgIC8vICAgICAgfVxuICAgICAgICAvLyAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIC8vICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgLy8gIH0pO1xuXG5cbiAgICBmaWxlQ2hhbmdlRXZlbnQoZmlsZUlucHV0OiBhbnkpe1xuICAgICAgICBjb25zb2xlLmxvZygnZmlsZUNoYW5nZUV2ZW50Jyk7XG5jb25zb2xlLmxvZyhmaWxlSW5wdXQudGFyZ2V0LmZpbGVzKTtcbiAgICAgICAgdmFyIG9iamVjdFVSTCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVJbnB1dC50YXJnZXQuZmlsZXNbMF0pO1xuICAgICAgICBjb25zb2xlLmxvZyhvYmplY3RVUkwpO1xuICAgICAgICBjb25zb2xlLmxvZygnYXByZXMnKTtcbiAgICAvLyAgICB0aGlzLmZpbGVzVG9VcGxvYWQgPSA8RmlsZT4gZmlsZUlucHV0LnRhcmdldC5maWxlc1swXTtcbnRoaXMuZGF0YSA9IG9iamVjdFVSTDtcbiAgICAgICAgLy9TaSBwbHVzaWV1cnMgZmljaGllciDDoCB1cGxvYWRlciBlbiBtZW1lIHRlbXBzXG4gICAgICAgIC8vIHRoaXMuZmlsZXNUb1VwbG9hZC5wdXNoKGZpbGVJbnB1dC50YXJnZXQuZmlsZXNbMF0pO1xuICAgIH1cblxuICAgIC8vIG1ha2VGaWxlUmVxdWVzdCh1cmw6IHN0cmluZywgcGFyYW1zOiBBcnJheTxzdHJpbmc+LCBmaWxlczogQXJyYXk8RmlsZT4pIHtcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyAgICAgICAgIHZhciBmb3JtRGF0YTogYW55ID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgLy8gICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy8gICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRzW11cIiwgZmlsZXNbaV0sIGZpbGVzW2ldLm5hbWUpO1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZWplY3QoeGhyLnJlc3BvbnNlKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcbiAgICAvLyAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xuICAgIC8vICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG4gICAgLy8gcHJpdmF0ZSB6b25lOiBOZ1pvbmU7XG4gICAgLy8gcHJpdmF0ZSBiYXNpY09wdGlvbnM6IE9iamVjdDtcbiAgICAvLyBwcml2YXRlIHByb2dyZXNzOiBudW1iZXIgPSAwO1xuICAgIC8vIHByaXZhdGUgcmVzcG9uc2U6IGFueSA9IHt9O1xuICAgIC8vXG4gICAgLy8gbmdPbkluaXQoKSB7XG4gICAgLy8gdGhpcy56b25lID0gbmV3IE5nWm9uZSh7IGVuYWJsZUxvbmdTdGFja1RyYWNlOiBmYWxzZX0pO1xuICAgIC8vIHRoaXMuYmFzaWNPcHRpb25zID0geyB1cmw6ICdodHRwOi8vYXBpLm5nMi11cGxvYWRlci5jb206MTAwNTAvdXBsb2FkJ307XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gaGFuZGxlVXBsb2FkKGRhdGE6IGFueSk6IHZvaWQge1xuICAgIC8vICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMucmVzcG9uc2UgPSBkYXRhO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
