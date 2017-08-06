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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3Rvcy9waG90b3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsaUNBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0MseUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFHdkMsMkVBQTJFO0FBQzNFLHNGQUFzRjtBQXVGdEY7SUFZSSxZQUFvQixNQUFjLEVBQVMsYUFBNkI7UUFBcEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQVZ4RSxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUVsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxLQUFLLENBQUM7SUFLNUIsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBRTdDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksR0FBRyxDQUFDLENBQUEsQ0FBQztZQUNuQiw0QkFBNEI7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFFVCx1Q0FBdUM7UUFDdkMsaUJBQWlCO1FBQ2pCLE9BQU87UUFDUCwwQkFBMEI7UUFDMUIsdUNBQXVDO1FBQ3ZDLGFBQWE7UUFDYixxQkFBcUI7UUFDckIsd0RBQXdEO1FBQ3hELG1DQUFtQztRQUNuQyxRQUFRO0lBQ2IsQ0FBQztJQUVHLGtFQUFrRTtJQUNsRSx3Q0FBd0M7SUFDeEMsdURBQXVEO0lBRXZELGtHQUFrRztJQUNsRyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLDhDQUE4QztJQUM5QyxTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsT0FBTztJQUdYLGVBQWUsQ0FBQyxTQUFjO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekIsNERBQTREO1FBQ2hFLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ2QsK0NBQStDO1FBQy9DLHNEQUFzRDtJQUMxRCxDQUFDO0FBd0NMLENBQUM7QUF6TEQ7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyRWI7S0FNQSxDQUFDOzttQkFBQTtBQUVXLHVCQUFlLGtCQW9HM0IsQ0FBQSIsImZpbGUiOiJhc3NldHMvYXBwL3Bob3Rvcy9waG90b3MuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQaG90b3NTZXJ2aWNlfSBmcm9tIFwiLi9waG90b3Muc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuXHJcbi8vaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2pzL3ZlbmRvci9yeGpzL3NyYy9PYnNlcnZhYmxlXCI7XHJcbi8vaW1wb3J0IHtOZ1pvbmV9IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvanMvdmVuZG9yL0Bhbmd1bGFyL2NvcmUvZXNtL3NyYy96b25lL25nX3pvbmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1cGxvYWQtcGhvdG8nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgICAgIDxwcm9ncmVzcyBjbGFzcz1cInByb2dyZXNzIHByb2dyZXNzLWRhbmdlclwiIFthdHRyLnZhbHVlXT1cInByb2dyZXNzUGhvdG9cIiBtYXg9XCIxMDBcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZXhhbXBsZS1jYXB0aW9uLTFcIj48L3Byb2dyZXNzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiAqbmdJZj1cInNob3dQaG90bzFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMzAwXCIgd2lkdGg9XCIzNjBcIiBzcmM9XCIvaW1hZ2VzL21vZGVsZS9waG90bzEuanBnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIiAgKGNoYW5nZSk9XCJmaWxlQ2hhbmdlRXZlbnQoJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwiVXBsb2FkIGZpbGUuLi5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ1cGxvYWQoKTsgdGhpcy5zaG93UGhvdG8yID0gdHJ1ZTsgdGhpcy5zaG93UGhvdG8xID0gZmFsc2U7XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+VXBsb2FkPC9idXR0b24+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiICpuZ0lmPVwic2hvd1Bob3RvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIzMDBcIiB3aWR0aD1cIjM2MFwiIHNyYz1cIi9pbWFnZXMvbW9kZWxlL3Bob3RvMi5qcGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIChjaGFuZ2UpPVwiZmlsZUNoYW5nZUV2ZW50KCRldmVudClcIiBwbGFjZWhvbGRlcj1cIlVwbG9hZCBmaWxlLi4uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidXBsb2FkKCk7dGhpcy5zaG93UGhvdG8zID0gdHJ1ZTsgdGhpcy5zaG93UGhvdG8yID0gZmFsc2U7XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiICpuZ0lmPVwic2hvd1Bob3RvM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIzMDBcIiB3aWR0aD1cIjM2MFwiIHNyYz1cIi9pbWFnZXMvbW9kZWxlL3Bob3RvMy5qcGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIChjaGFuZ2UpPVwiZmlsZUNoYW5nZUV2ZW50KCRldmVudClcIiBwbGFjZWhvbGRlcj1cIlVwbG9hZCBmaWxlLi4uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidXBsb2FkKCk7dGhpcy5zaG93UGhvdG80ID0gdHJ1ZTsgdGhpcy5zaG93UGhvdG8zID0gZmFsc2U7XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiICpuZ0lmPVwic2hvd1Bob3RvNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBoZWlnaHQ9XCIzMDBcIiB3aWR0aD1cIjM2MFwiIHNyYz1cIi9pbWFnZXMvbW9kZWxlL3Bob3RvNC5qcGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIChjaGFuZ2UpPVwiZmlsZUNoYW5nZUV2ZW50KCRldmVudClcIiBwbGFjZWhvbGRlcj1cIlVwbG9hZCBmaWxlLi4uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidXBsb2FkKCk7dGhpcy5zaG93UGhvdG81ID0gdHJ1ZTsgdGhpcy5zaG93UGhvdG80ID0gZmFsc2U7XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiAqbmdJZj1cInNob3dQaG90bzVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMzAwXCIgd2lkdGg9XCIzNjBcIiBzcmM9XCIvaW1hZ2VzL21vZGVsZS9waG90bzUuanBnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cImZpbGVDaGFuZ2VFdmVudCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJVcGxvYWQgZmlsZS4uLlwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVwbG9hZCgpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwhLS08ZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08aW5wdXQgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cImZpbGVDaGFuZ2VFdmVudCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJVcGxvYWQgZmlsZS4uLlwiPi0tPlxyXG4gICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgIDwhLS0tLT5cclxuICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgIDwhLS08aW5wdXQgdHlwZT1cInN1Ym1pdFwiLz4tLT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPCEtLW5nRmlsZVNlbGVjdC0tPlxyXG4gICAgICAgPCEtLVtvcHRpb25zXT1cImJhc2ljT3B0aW9uc1wiLS0+XHJcbiAgICA8IS0tKG9uVXBsb2FkKT1cImhhbmRsZVVwbG9hZCgkZXZlbnQpXCI+LS0+XHJcbiA+PGJyPlxyXG48bmF2PlxyXG4gICAgPGRpdj48YSBbcm91dGVyTGlua109XCJbJy9wcm9maWxlJ11cIj4gU1VJVkFOVCA8L2E+PC9kaXY+XHJcbjwvbmF2PlxyXG5cclxuYFxyXG5cclxuICAgIC8vXHJcbiAgICAvLyA8ZGl2PlxyXG4gICAgLy8gICBSZXNwb25zZToge3sgcmVzcG9uc2UgfCBqc29uIH19XHJcbiAgICAvLyA8L2Rpdj5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGhvdG9zQ29tcG9uZW50ICB7XHJcblxyXG4gICAgcHJvZ3Jlc3NQaG90byA9IDA7XHJcblxyXG4gICAgc2hvd1Bob3RvMTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBzaG93UGhvdG8yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93UGhvdG8zOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93UGhvdG80OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93UGhvdG81OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgZGF0YTogYW55O1xyXG4gICAgZmlsZXNUb1VwbG9hZDogRmlsZTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBfcGhvdG9TZXJ2aWNlIDogUGhvdG9zU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZCgpIHtcclxuICAgICAgICB0aGlzLnByb2dyZXNzUGhvdG8gPSB0aGlzLnByb2dyZXNzUGhvdG8gKyAyMDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NQaG90byA9PSAxMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUk9PVCBWRVJTIExBIFBBR0UgU1VJVkFOVEVcclxuICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Byb2ZpbGUnXSk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gdGhpcy5fcGhvdG9TZXJ2aWNlLnVwbG9hZCh0aGlzLmRhdGEpXHJcbiAgICAgICAgIC8vICAgICAuc3Vic2NyaWJlXHJcbiAgICAgICAgIC8vICAgIChcclxuICAgICAgICAgLy8gICAgICAgICBsb2FkX2ltYWdlID0+IHtcclxuICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2cobG9hZF9pbWFnZSk7XHJcbiAgICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAgLy8gICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidW5lIGVycmV1ciBzJ2VzdCBwcm9kdWl0ZVwiKTtcclxuICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpIH1cclxuICAgICAgICAgLy8gICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cHM6Ly9teXNhdmVyLmhlcm9rdWFwcC5jb20vZGVtYW5kLycpXHJcbiAgICAgICAgLy8gICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5tYWtlRmlsZVJlcXVlc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvdXBsb2FkXCIsIFtdLCB0aGlzLmZpbGVzVG9VcGxvYWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NQaG90byA9PSAxMDApe1xyXG4gICAgICAgIC8vICAgICAgICAgLy9ST09UIFZFUlMgTEEgUEFHRSBTVUlWQU5URVxyXG4gICAgICAgIC8vICAgICAgICAgIC8vIFtyb3V0ZXJMaW5rXSA9ICBcIlsnL3Byb2ZpbGUnXVwiO1xyXG4gICAgICAgIC8vICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAvLyAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAvLyAgfSk7XHJcblxyXG5cclxuICAgIGZpbGVDaGFuZ2VFdmVudChmaWxlSW5wdXQ6IGFueSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ZpbGVDaGFuZ2VFdmVudCcpO1xyXG5jb25zb2xlLmxvZyhmaWxlSW5wdXQudGFyZ2V0LmZpbGVzKTtcclxuICAgICAgICB2YXIgb2JqZWN0VVJMID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZUlucHV0LnRhcmdldC5maWxlc1swXSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cob2JqZWN0VVJMKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYXByZXMnKTtcclxuICAgIC8vICAgIHRoaXMuZmlsZXNUb1VwbG9hZCA9IDxGaWxlPiBmaWxlSW5wdXQudGFyZ2V0LmZpbGVzWzBdO1xyXG50aGlzLmRhdGEgPSBvYmplY3RVUkw7XHJcbiAgICAgICAgLy9TaSBwbHVzaWV1cnMgZmljaGllciDDoCB1cGxvYWRlciBlbiBtZW1lIHRlbXBzXHJcbiAgICAgICAgLy8gdGhpcy5maWxlc1RvVXBsb2FkLnB1c2goZmlsZUlucHV0LnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWFrZUZpbGVSZXF1ZXN0KHVybDogc3RyaW5nLCBwYXJhbXM6IEFycmF5PHN0cmluZz4sIGZpbGVzOiBBcnJheTxGaWxlPikge1xyXG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHZhciBmb3JtRGF0YTogYW55ID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAvLyAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIC8vICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRzW11cIiwgZmlsZXNbaV0sIGZpbGVzW2ldLm5hbWUpO1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHhoci5yZXNwb25zZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgIC8vICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAvLyAgICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuICAgIC8vIHByaXZhdGUgem9uZTogTmdab25lO1xyXG4gICAgLy8gcHJpdmF0ZSBiYXNpY09wdGlvbnM6IE9iamVjdDtcclxuICAgIC8vIHByaXZhdGUgcHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcbiAgICAvLyBwcml2YXRlIHJlc3BvbnNlOiBhbnkgPSB7fTtcclxuICAgIC8vXHJcbiAgICAvLyBuZ09uSW5pdCgpIHtcclxuICAgIC8vIHRoaXMuem9uZSA9IG5ldyBOZ1pvbmUoeyBlbmFibGVMb25nU3RhY2tUcmFjZTogZmFsc2V9KTtcclxuICAgIC8vIHRoaXMuYmFzaWNPcHRpb25zID0geyB1cmw6ICdodHRwOi8vYXBpLm5nMi11cGxvYWRlci5jb206MTAwNTAvdXBsb2FkJ307XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gaGFuZGxlVXBsb2FkKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnJlc3BvbnNlID0gZGF0YTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
