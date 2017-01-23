import {Component, OnInit} from "@angular/core";
import {PhotosService} from "./photos.service";
import {Router} from "@angular/router";


//import {Observable} from "../../../public/js/vendor/rxjs/src/Observable";
//import {NgZone} from "../../../public/js/vendor/@angular/core/esm/src/zone/ng_zone";

@Component({
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

    //
    // <div>
    //   Response: {{ response | json }}
    // </div>`
})

export class PhotosComponent  {

    progressPhoto = 0;

    showPhoto1: boolean = true;
    showPhoto2: boolean = false;
    showPhoto3: boolean = false;
    showPhoto4: boolean = false;
    showPhoto5: boolean = false;

    data: any;
    filesToUpload: File;
    constructor(private router: Router, public _photoService : PhotosService) {
    }

    upload() {
        this.progressPhoto = this.progressPhoto + 20;

        if (this.progressPhoto == 100){
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


    fileChangeEvent(fileInput: any){
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

    // makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    //     return new Promise((resolve, reject) => {
    //         var formData: any = new FormData();
    //         var xhr = new XMLHttpRequest();
    //         for(var i = 0; i < files.length; i++) {
    //             formData.append("uploads[]", files[i], files[i].name);
    //             console.log(formData);
    //         }
    //         xhr.onreadystatechange = function () {
    //             if (xhr.readyState == 4) {
    //                 if (xhr.status == 200) {
    //                     resolve(JSON.parse(xhr.response));
    //                 } else {
    //                     reject(xhr.response);
    //                 }
    //             }
    //         }
    //         console.log(formData);
    //         xhr.open("POST", url, true);
    //         xhr.send(formData);
    //     });
    // }
    // private zone: NgZone;
    // private basicOptions: Object;
    // private progress: number = 0;
    // private response: any = {};
    //
    // ngOnInit() {
    // this.zone = new NgZone({ enableLongStackTrace: false});
    // this.basicOptions = { url: 'http://api.ng2-uploader.com:10050/upload'};
    // }
    //
    // handleUpload(data: any): void {
    //     this.zone.run(() => {
    //         this.response = data;
    //     });
    // }

}