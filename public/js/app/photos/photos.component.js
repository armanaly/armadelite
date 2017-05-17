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
//import {Observable} from "../../../public/js/vendor/rxjs/src/Observable";
//import {NgZone} from "../../../public/js/vendor/@angular/core/esm/src/zone/ng_zone";
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
            //ROOT VERS LA PAGE SUIVANTE
            this.router.navigate(['/profile']);
        }
        // this._photoService.upload(this.data)
        //     .subscribe
        //    (
        //         load_image => {
        //             console.log(load_image);
        //         },
        //         error => {
        //             console.log("une erreur s'est produite");
        //             console.log(error) }
        //    );
    }
    // return this._http.post('https://mysaver.herokuapp.com/demand/')
    //     .map(response => response.json())
    //     .catch(error => Observable.throw(error.json()));
    // this.makeFileRequest("http://localhost:3000/upload", [], this.filesToUpload).then((result) => {
    //      if (this.progressPhoto == 100){
    //         //ROOT VERS LA PAGE SUIVANTE
    //          // [routerLink] =  "['/profile']";
    //      }
    //      console.log(result);
    //  }, (error) => {
    //      console.error(error);
    //  });
    fileChangeEvent(fileInput) {
        console.log('fileChangeEvent');
        console.log(fileInput.target.files);
        var objectURL = window.URL.createObjectURL(fileInput.target.files[0]);
        console.log(objectURL);
        console.log('apres');
        //    this.filesToUpload = <File> fileInput.target.files[0];
        this.data = objectURL;
        //Si plusieurs fichier à uploader en meme temps
        // this.filesToUpload.push(fileInput.target.files[0]);
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
    __metadata('design:paramtypes', [router_1.Router, photos_service_1.PhotosService])
], PhotosComponent);
exports.PhotosComponent = PhotosComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3Rvcy9waG90b3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsaUNBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0MseUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFHdkMsMkVBQTJFO0FBQzNFLHNGQUFzRjtBQXVGdEY7SUFZSSxZQUFvQixNQUFjLEVBQVMsYUFBNkI7UUFBcEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQVZ4RSxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUVsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxLQUFLLENBQUM7SUFLNUIsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBRTdDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksR0FBRyxDQUFDLENBQUEsQ0FBQztZQUNuQiw0QkFBNEI7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFFVCx1Q0FBdUM7UUFDdkMsaUJBQWlCO1FBQ2pCLE9BQU87UUFDUCwwQkFBMEI7UUFDMUIsdUNBQXVDO1FBQ3ZDLGFBQWE7UUFDYixxQkFBcUI7UUFDckIsd0RBQXdEO1FBQ3hELG1DQUFtQztRQUNuQyxRQUFRO0lBQ2IsQ0FBQztJQUVHLGtFQUFrRTtJQUNsRSx3Q0FBd0M7SUFDeEMsdURBQXVEO0lBRXZELGtHQUFrRztJQUNsRyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLDhDQUE4QztJQUM5QyxTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsT0FBTztJQUdYLGVBQWUsQ0FBQyxTQUFjO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekIsNERBQTREO1FBQ2hFLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2QsK0NBQStDO1FBQy9DLHNEQUFzRDtJQUMxRCxDQUFDO0FBd0NMLENBQUM7QUF6TEQ7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyRWI7S0FNQSxDQUFDOzttQkFBQTtBQUVXLHVCQUFlLGtCQW9HM0IsQ0FBQSIsImZpbGUiOiJwaG90b3MvcGhvdG9zLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGhvdG9zU2VydmljZX0gZnJvbSBcIi4vcGhvdG9zLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG4vL2ltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3Ivcnhqcy9zcmMvT2JzZXJ2YWJsZVwiO1xyXG4vL2ltcG9ydCB7Tmdab25lfSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2pzL3ZlbmRvci9AYW5ndWxhci9jb3JlL2VzbS9zcmMvem9uZS9uZ196b25lXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXBsb2FkLXBob3RvJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgICAgICA8cHJvZ3Jlc3MgY2xhc3M9XCJwcm9ncmVzcyBwcm9ncmVzcy1kYW5nZXJcIiBbYXR0ci52YWx1ZV09XCJwcm9ncmVzc1Bob3RvXCIgbWF4PVwiMTAwXCIgYXJpYS1kZXNjcmliZWRieT1cImV4YW1wbGUtY2FwdGlvbi0xXCI+PC9wcm9ncmVzcz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgKm5nSWY9XCJzaG93UGhvdG8xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGhlaWdodD1cIjMwMFwiIHdpZHRoPVwiMzYwXCIgc3JjPVwiL2ltYWdlcy9tb2RlbGUvcGhvdG8xLmpwZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCIgIChjaGFuZ2UpPVwiZmlsZUNoYW5nZUV2ZW50KCRldmVudClcIiBwbGFjZWhvbGRlcj1cIlVwbG9hZCBmaWxlLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidXBsb2FkKCk7IHRoaXMuc2hvd1Bob3RvMiA9IHRydWU7IHRoaXMuc2hvd1Bob3RvMSA9IGZhbHNlO1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlVwbG9hZDwvYnV0dG9uPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiAqbmdJZj1cInNob3dQaG90bzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMzAwXCIgd2lkdGg9XCIzNjBcIiBzcmM9XCIvaW1hZ2VzL21vZGVsZS9waG90bzIuanBnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cImZpbGVDaGFuZ2VFdmVudCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJVcGxvYWQgZmlsZS4uLlwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVwbG9hZCgpO3RoaXMuc2hvd1Bob3RvMyA9IHRydWU7IHRoaXMuc2hvd1Bob3RvMiA9IGZhbHNlO1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlVwbG9hZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiAqbmdJZj1cInNob3dQaG90bzNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMzAwXCIgd2lkdGg9XCIzNjBcIiBzcmM9XCIvaW1hZ2VzL21vZGVsZS9waG90bzMuanBnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cImZpbGVDaGFuZ2VFdmVudCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJVcGxvYWQgZmlsZS4uLlwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVwbG9hZCgpO3RoaXMuc2hvd1Bob3RvNCA9IHRydWU7IHRoaXMuc2hvd1Bob3RvMyA9IGZhbHNlO1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlVwbG9hZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiAqbmdJZj1cInNob3dQaG90bzRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMzAwXCIgd2lkdGg9XCIzNjBcIiBzcmM9XCIvaW1hZ2VzL21vZGVsZS9waG90bzQuanBnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cImZpbGVDaGFuZ2VFdmVudCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJVcGxvYWQgZmlsZS4uLlwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVwbG9hZCgpO3RoaXMuc2hvd1Bob3RvNSA9IHRydWU7IHRoaXMuc2hvd1Bob3RvNCA9IGZhbHNlO1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlVwbG9hZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgKm5nSWY9XCJzaG93UGhvdG81XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGhlaWdodD1cIjMwMFwiIHdpZHRoPVwiMzYwXCIgc3JjPVwiL2ltYWdlcy9tb2RlbGUvcGhvdG81LmpwZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgKGNoYW5nZSk9XCJmaWxlQ2hhbmdlRXZlbnQoJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwiVXBsb2FkIGZpbGUuLi5cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ1cGxvYWQoKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlVwbG9hZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8IS0tPGRpdj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGlucHV0IHR5cGU9XCJmaWxlXCIgKGNoYW5nZSk9XCJmaWxlQ2hhbmdlRXZlbnQoJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwiVXBsb2FkIGZpbGUuLi5cIj4tLT5cclxuICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICA8IS0tLS0+XHJcbiAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICA8IS0tPGlucHV0IHR5cGU9XCJzdWJtaXRcIi8+LS0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwhLS1uZ0ZpbGVTZWxlY3QtLT5cclxuICAgICAgIDwhLS1bb3B0aW9uc109XCJiYXNpY09wdGlvbnNcIi0tPlxyXG4gICAgPCEtLShvblVwbG9hZCk9XCJoYW5kbGVVcGxvYWQoJGV2ZW50KVwiPi0tPlxyXG4gPjxicj5cclxuPG5hdj5cclxuICAgIDxkaXY+PGEgW3JvdXRlckxpbmtdPVwiWycvcHJvZmlsZSddXCI+IFNVSVZBTlQgPC9hPjwvZGl2PlxyXG48L25hdj5cclxuXHJcbmBcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gPGRpdj5cclxuICAgIC8vICAgUmVzcG9uc2U6IHt7IHJlc3BvbnNlIHwganNvbiB9fVxyXG4gICAgLy8gPC9kaXY+YFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBob3Rvc0NvbXBvbmVudCAge1xyXG5cclxuICAgIHByb2dyZXNzUGhvdG8gPSAwO1xyXG5cclxuICAgIHNob3dQaG90bzE6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc2hvd1Bob3RvMjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd1Bob3RvMzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd1Bob3RvNDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd1Bob3RvNTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGRhdGE6IGFueTtcclxuICAgIGZpbGVzVG9VcGxvYWQ6IEZpbGU7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgX3Bob3RvU2VydmljZSA6IFBob3Rvc1NlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc1Bob3RvID0gdGhpcy5wcm9ncmVzc1Bob3RvICsgMjA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzUGhvdG8gPT0gMTAwKXtcclxuICAgICAgICAgICAgICAgICAgICAvL1JPT1QgVkVSUyBMQSBQQUdFIFNVSVZBTlRFXHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wcm9maWxlJ10pO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIHRoaXMuX3Bob3RvU2VydmljZS51cGxvYWQodGhpcy5kYXRhKVxyXG4gICAgICAgICAvLyAgICAgLnN1YnNjcmliZVxyXG4gICAgICAgICAvLyAgICAoXHJcbiAgICAgICAgIC8vICAgICAgICAgbG9hZF9pbWFnZSA9PiB7XHJcbiAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvYWRfaW1hZ2UpO1xyXG4gICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgIC8vICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVuZSBlcnJldXIgcydlc3QgcHJvZHVpdGVcIik7XHJcbiAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKSB9XHJcbiAgICAgICAgIC8vICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHBzOi8vbXlzYXZlci5oZXJva3VhcHAuY29tL2RlbWFuZC8nKVxyXG4gICAgICAgIC8vICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubWFrZUZpbGVSZXF1ZXN0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3VwbG9hZFwiLCBbXSwgdGhpcy5maWxlc1RvVXBsb2FkKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAvLyAgICAgIGlmICh0aGlzLnByb2dyZXNzUGhvdG8gPT0gMTAwKXtcclxuICAgICAgICAvLyAgICAgICAgIC8vUk9PVCBWRVJTIExBIFBBR0UgU1VJVkFOVEVcclxuICAgICAgICAvLyAgICAgICAgICAvLyBbcm91dGVyTGlua10gPSAgXCJbJy9wcm9maWxlJ11cIjtcclxuICAgICAgICAvLyAgICAgIH1cclxuICAgICAgICAvLyAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgLy8gIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgLy8gIH0pO1xyXG5cclxuXHJcbiAgICBmaWxlQ2hhbmdlRXZlbnQoZmlsZUlucHV0OiBhbnkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmaWxlQ2hhbmdlRXZlbnQnKTtcclxuY29uc29sZS5sb2coZmlsZUlucHV0LnRhcmdldC5maWxlcyk7XHJcbiAgICAgICAgdmFyIG9iamVjdFVSTCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVJbnB1dC50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9iamVjdFVSTCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FwcmVzJyk7XHJcbiAgICAvLyAgICB0aGlzLmZpbGVzVG9VcGxvYWQgPSA8RmlsZT4gZmlsZUlucHV0LnRhcmdldC5maWxlc1swXTtcclxudGhpcy5kYXRhID0gb2JqZWN0VVJMO1xyXG4gICAgICAgIC8vU2kgcGx1c2lldXJzIGZpY2hpZXIgw6AgdXBsb2FkZXIgZW4gbWVtZSB0ZW1wc1xyXG4gICAgICAgIC8vIHRoaXMuZmlsZXNUb1VwbG9hZC5wdXNoKGZpbGVJbnB1dC50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1ha2VGaWxlUmVxdWVzdCh1cmw6IHN0cmluZywgcGFyYW1zOiBBcnJheTxzdHJpbmc+LCBmaWxlczogQXJyYXk8RmlsZT4pIHtcclxuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB2YXIgZm9ybURhdGE6IGFueSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgLy8gICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAvLyAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2Fkc1tdXCIsIGZpbGVzW2ldLCBmaWxlc1tpXS5uYW1lKTtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHhoci5yZXNwb25zZSkpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh4aHIucmVzcG9uc2UpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAvLyAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgLy8gICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBwcml2YXRlIHpvbmU6IE5nWm9uZTtcclxuICAgIC8vIHByaXZhdGUgYmFzaWNPcHRpb25zOiBPYmplY3Q7XHJcbiAgICAvLyBwcml2YXRlIHByb2dyZXNzOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHJpdmF0ZSByZXNwb25zZTogYW55ID0ge307XHJcbiAgICAvL1xyXG4gICAgLy8gbmdPbkluaXQoKSB7XHJcbiAgICAvLyB0aGlzLnpvbmUgPSBuZXcgTmdab25lKHsgZW5hYmxlTG9uZ1N0YWNrVHJhY2U6IGZhbHNlfSk7XHJcbiAgICAvLyB0aGlzLmJhc2ljT3B0aW9ucyA9IHsgdXJsOiAnaHR0cDovL2FwaS5uZzItdXBsb2FkZXIuY29tOjEwMDUwL3VwbG9hZCd9O1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGhhbmRsZVVwbG9hZChkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIC8vICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy5yZXNwb25zZSA9IGRhdGE7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
