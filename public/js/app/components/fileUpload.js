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
// import {FileUploadService} from "./fileUpload.service";
const http_1 = require("@angular/http");
const fileUpload_service_1 = require("./fileUpload.service");
let FileUploadComponent = class FileUploadComponent {
    constructor(_fileUploadService, _http) {
        //  , this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any) => {
        //     //response is the cloudinary response
        //     //see http://cloudinary.com/documentation/upload_images#upload_response
        //     let res: any = JSON.parse(response);
        //     this.imageId = res.public_id;
        //     return { item, response, status, headers };
        // };
        this._fileUploadService = _fileUploadService;
        this._http = _http;
        this.url_uploaded_file = '';
        this.uploadedFileUrls = [];
        this.display = false;
        this.sent = new core_1.EventEmitter(); // Emitter to send back data to parent component
    }
    upload() {
        // this.uploader.uploadAll();
    }
    ngOnInit() {
        console.log(this.objStep);
        console.log(this.objStep.configuration.path_model);
    }
    //
    //
    //
    //     // var client = filestack.init('AgaXy7tWgRMuzr11Hh6OJz');
    //     // function showPicker() {
    //     //     client.pick({
    //     //     }).then(function(result) {
    //     //         console.log(JSON.stringify(result.filesUploaded))
    //     //     });
    //     // }
    // }
    //
    fileChange(event) {
        console.log(event.target);
        //     let fileList: FileList = event.target.files;
        // if(fileList.length > 0) {
        // let file: File = fileList[0];
        // let formData:FormData = new FormData();
        // this.fileUploaded = file;
        // formData.append('uploadFile', file, file.name);
        this.url_uploaded_file = 'blabla';
        var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        // this.loaded = false;
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
        // let headers = new Headers();
        // headers.append('EncType', 'multipart/form-data');
        // headers.append('Accept', 'application/json');
        // let options = new RequestOptions({ headers: headers });
        //     var completeUrl = GlobalVariable.BASE_URL + 'store_file';
        // this._http.post(`${completeUrl}`, formData, {headers: headers})
        //     .map(res => res.json())
        //     .catch(error => Observable.throw(error))
        //     .subscribe(
        //         data => {
        //             console.log('success')
        //             this.url_uploaded_file = data.url;
        //             this.id_img = data.id_img;
        //         },
        //         error => console.log(error)
        // )
    }
    _handleReaderLoaded(e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        console.log(this.imageSrc);
        //this.loaded = true;
    }
    onChange(event) {
        let eventObj = event;
        let target = eventObj.target;
        let files = target.files;
        this.file = files[0];
        console.log(this.file);
        this._fileUploadService.storeFile(files[0])
            .subscribe(data => {
            console.log(data);
        }, error => console.log(error));
    }
    goToStep() {
        this.sent.emit({
            stepIdx: this.stepIdx
        });
    }
    goToNextStep() {
        this.sent.emit({
            valueName: this.objStep.name,
            url_uploaded: this.url_uploaded_file,
            id_img: this.id_img,
            fileUploaded: this.fileUploaded,
            stepIdx: this.stepIdx
        });
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], FileUploadComponent.prototype, "objStep", void 0);
__decorate([
    //Value received from MainComponent
    core_1.Input(), 
    __metadata('design:type', Object)
], FileUploadComponent.prototype, "stepIdx", void 0);
__decorate([
    //Value received from MainComponent
    core_1.Output(), 
    __metadata('design:type', Object)
], FileUploadComponent.prototype, "sent", void 0);
FileUploadComponent = __decorate([
    core_1.Component({
        selector: 'file-upload',
        template: `
    <div>
       <div class="panel-heading panel-heading-custom">{{objStep.configuration.labelPanel}} </div>
       <div class="panel-body">
        <!--<input type="filepicker" name="myName" onchange="alert(event.fpfile.url)"/>-->
        <!--<input type="file" ng2FileSelect [uploader]="uploader"/>-->
        <table>
            <tr>
                <td>
                    <input type="file" (change)="fileChange($event)" placeholder="Upload file" accept=".jpeg,.jpg,.png,.pdf,.doc,.docx">
                </td>
            <tr>
            <tr>
                <td> 
                    <img src="{{objStep.configuration.path_model}}" width="480" height="320"> 
                </td>
            </tr>
            <tr>
                <td *ngIf="this.url_uploaded_file != ''">
                    <img src="{{imageSrc}}" width="480" height="320">
                    <!--<img src="{{this.url_uploaded_file}}" width="480" height="320">    -->
                </td>
            </tr>
            
        
        </table>
               <div *ngIf="this.url_uploaded_file == ''"><button type="button" btn-default btn-lg (click)="goToStep()">JE NE SOUHAITE PAS AJOUTER DES PHOTOS</button></div>
               <div *ngIf="this.url_uploaded_file != ''"><button type="button" btn-default btn-lg (click)="goToNextStep()">SUIVANT</button></div>
        <!--<input name="file" type="file" (change)="onChange($event)"/>-->
        <!--<input type="filepicker" data-fp-apikey="AgaXy7tWgRMuzr11Hh6OJz"-->
               <!--onchange="console.log(event.fpfile)">-->

      <!--<input type="file" ng2FileSelect [uploader]="uploader" accept="image/*;capture=camera">-->

    <!--<button (click)="upload()">Upload</button>-->

<!--<cl-image [public-id]="imageId" [cloud-name]="uploader.cloudName"></cl-image>-->
<!--<input type="button" value="Upload" onclick="showPicker()" />-->
<!--<input type="filepicker-dragdrop" data-fp-apikey="AgaXy7tWgRMuzr11Hh6OJz" data-fp-mimetypes="*/*" data-fp-container="modal" data-fp-maxsize="10000000" data-fp-store-location="S3" onchange="alert(event.fpfile.url)">-->
       </div>
    
    </div>
` }), 
    __metadata('design:paramtypes', [fileUpload_service_1.FileUploadService, http_1.Http])
], FileUploadComponent);
exports.FileUploadComponent = FileUploadComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmlsZVVwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBQWUsQ0FBQyxDQUFBO0FBQ3JFLDBEQUEwRDtBQUMxRCx1QkFBNEMsZUFBZSxDQUFDLENBQUE7QUFHNUQscUNBQWdDLHNCQUFzQixDQUFDLENBQUE7QUF1RHZEO0lBaUJJLFlBQW9CLGtCQUFzQyxFQUFVLEtBQVc7UUFDM0Usb0dBQW9HO1FBQ3BHLDRDQUE0QztRQUM1Qyw4RUFBOEU7UUFDOUUsMkNBQTJDO1FBQzNDLG9DQUFvQztRQUNwQyxrREFBa0Q7UUFDbEQsS0FBSztRQVBXLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBZi9FLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUkvQixxQkFBZ0IsR0FBYSxFQUFFLENBQUM7UUFHaEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQU9OLFNBQUksR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQyxDQUFDLGdEQUFnRDtJQVVyRixDQUFDO0lBR0QsTUFBTTtRQUNGLDZCQUE2QjtJQUNqQyxDQUFDO0lBQ0EsUUFBUTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUNFLEVBQUU7SUFDTixFQUFFO0lBQ0YsRUFBRTtJQUNGLGdFQUFnRTtJQUNoRSxpQ0FBaUM7SUFDakMsMkJBQTJCO0lBQzNCLHdDQUF3QztJQUN4QyxtRUFBbUU7SUFDbkUsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxJQUFJO0lBQ0osRUFBRTtJQUVGLFVBQVUsQ0FBQyxLQUFLO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLG1EQUFt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QW1DO0lBQ3hELFlBQUssRUFBRTs7b0RBQUE7QUFDUjtJQURzQixtQ0FBbUM7SUFDeEQsYUFBTSxFQUFFOztpREFBQTtBQTlEYjtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTBDYixFQUFDLENBQUM7O3VCQUFBO0FBRVUsMkJBQW1CLHNCQThJL0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2ZpbGVVcGxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG4vLyBpbXBvcnQge0ZpbGVVcGxvYWRTZXJ2aWNlfSBmcm9tIFwiLi9maWxlVXBsb2FkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIdHRwLCBSZXF1ZXN0T3B0aW9ucywgSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQ2xvdWRpbmFyeU9wdGlvbnMsIENsb3VkaW5hcnlVcGxvYWRlciB9IGZyb20gJ25nMi1jbG91ZGluYXJ5JztcclxuaW1wb3J0IHtGaWxlVXBsb2FkU2VydmljZX0gZnJvbSBcIi4vZmlsZVVwbG9hZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7R2xvYmFsVmFyaWFibGV9IGZyb20gXCIuLi9nbG9iYWxcIjtcclxuZGVjbGFyZSBjb25zdCBmaWxlc3RhY2s6IHtcclxuICAgIGluaXQoYXBpS2V5OiBzdHJpbmcpOiB7XHJcbiAgICAgICAgcGljayh7IG1heEZpbGVzIH06IHsgbWF4RmlsZXM6IG51bWJlciB9KTpcclxuICAgICAgICAgICAgUHJvbWlzZTx7IGZpbGVzVXBsb2FkZWQ6IHsgdXJsOiBzdHJpbmcgfVtdIH0+XHJcbiAgICB9XHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmlsZS11cGxvYWQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWx9fSA8L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgPCEtLTxpbnB1dCB0eXBlPVwiZmlsZXBpY2tlclwiIG5hbWU9XCJteU5hbWVcIiBvbmNoYW5nZT1cImFsZXJ0KGV2ZW50LmZwZmlsZS51cmwpXCIvPi0tPlxyXG4gICAgICAgIDwhLS08aW5wdXQgdHlwZT1cImZpbGVcIiBuZzJGaWxlU2VsZWN0IFt1cGxvYWRlcl09XCJ1cGxvYWRlclwiLz4tLT5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cImZpbGVDaGFuZ2UoJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwiVXBsb2FkIGZpbGVcIiBhY2NlcHQ9XCIuanBlZywuanBnLC5wbmcsLnBkZiwuZG9jLC5kb2N4XCI+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ7e29ialN0ZXAuY29uZmlndXJhdGlvbi5wYXRoX21vZGVsfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPiBcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cInRoaXMudXJsX3VwbG9hZGVkX2ZpbGUgIT0gJydcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInt7aW1hZ2VTcmN9fVwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxpbWcgc3JjPVwie3t0aGlzLnVybF91cGxvYWRlZF9maWxlfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPiAgICAtLT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0aGlzLnVybF91cGxvYWRlZF9maWxlID09ICcnXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYnRuLWRlZmF1bHQgYnRuLWxnIChjbGljayk9XCJnb1RvU3RlcCgpXCI+SkUgTkUgU09VSEFJVEUgUEFTIEFKT1VURVIgREVTIFBIT1RPUzwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidGhpcy51cmxfdXBsb2FkZWRfZmlsZSAhPSAnJ1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGJ0bi1kZWZhdWx0IGJ0bi1sZyAoY2xpY2spPVwiZ29Ub05leHRTdGVwKClcIj5TVUlWQU5UPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgPCEtLTxpbnB1dCBuYW1lPVwiZmlsZVwiIHR5cGU9XCJmaWxlXCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIvPi0tPlxyXG4gICAgICAgIDwhLS08aW5wdXQgdHlwZT1cImZpbGVwaWNrZXJcIiBkYXRhLWZwLWFwaWtleT1cIkFnYVh5N3RXZ1JNdXpyMTFIaDZPSnpcIi0tPlxyXG4gICAgICAgICAgICAgICA8IS0tb25jaGFuZ2U9XCJjb25zb2xlLmxvZyhldmVudC5mcGZpbGUpXCI+LS0+XHJcblxyXG4gICAgICA8IS0tPGlucHV0IHR5cGU9XCJmaWxlXCIgbmcyRmlsZVNlbGVjdCBbdXBsb2FkZXJdPVwidXBsb2FkZXJcIiBhY2NlcHQ9XCJpbWFnZS8qO2NhcHR1cmU9Y2FtZXJhXCI+LS0+XHJcblxyXG4gICAgPCEtLTxidXR0b24gKGNsaWNrKT1cInVwbG9hZCgpXCI+VXBsb2FkPC9idXR0b24+LS0+XHJcblxyXG48IS0tPGNsLWltYWdlIFtwdWJsaWMtaWRdPVwiaW1hZ2VJZFwiIFtjbG91ZC1uYW1lXT1cInVwbG9hZGVyLmNsb3VkTmFtZVwiPjwvY2wtaW1hZ2U+LS0+XHJcbjwhLS08aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiVXBsb2FkXCIgb25jbGljaz1cInNob3dQaWNrZXIoKVwiIC8+LS0+XHJcbjwhLS08aW5wdXQgdHlwZT1cImZpbGVwaWNrZXItZHJhZ2Ryb3BcIiBkYXRhLWZwLWFwaWtleT1cIkFnYVh5N3RXZ1JNdXpyMTFIaDZPSnpcIiBkYXRhLWZwLW1pbWV0eXBlcz1cIiovKlwiIGRhdGEtZnAtY29udGFpbmVyPVwibW9kYWxcIiBkYXRhLWZwLW1heHNpemU9XCIxMDAwMDAwMFwiIGRhdGEtZnAtc3RvcmUtbG9jYXRpb249XCJTM1wiIG9uY2hhbmdlPVwiYWxlcnQoZXZlbnQuZnBmaWxlLnVybClcIj4tLT5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuYH0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZENvbXBvbmVudCB7XHJcblxyXG4gICAgdXJsX3VwbG9hZGVkX2ZpbGU6IHN0cmluZyA9ICcnO1xyXG4gICAgaWRfaW1nOiBzdHJpbmc7XHJcblxyXG5cclxuICAgIHVwbG9hZGVkRmlsZVVybHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBpbWFnZVNyYzogc3RyaW5nO1xyXG4gICAgY2xvdWRpbmFyeUltYWdlOiBhbnk7XHJcbiAgICBkaXNwbGF5ID0gZmFsc2U7XHJcbiAgICAgLy8gdXBsb2FkZXI6IENsb3VkaW5hcnlVcGxvYWRlciA9IG5ldyBDbG91ZGluYXJ5VXBsb2FkZXIoXHJcbiAgICAgLy8gICAgIG5ldyBDbG91ZGluYXJ5T3B0aW9ucyh7IGNsb3VkTmFtZTogJ2hhdmpjcXBwdicsIHVwbG9hZFByZXNldDogJ29pMng2MWRiJyB9KVxyXG4gICAgIC8vICk7XHJcbiAgICBmaWxlVXBsb2FkZWQgOiBGaWxlO1xyXG4gICAgQElucHV0KCkgb2JqU3RlcDsgICAgIC8vVmFsdWUgcmVjZWl2ZWQgZnJvbSBNYWluQ29tcG9uZW50XHJcbiAgICBASW5wdXQoKSBzdGVwSWR4OyAgICAgLy9WYWx1ZSByZWNlaXZlZCBmcm9tIE1haW5Db21wb25lbnRcclxuICAgIEBPdXRwdXQoKSBzZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBFbWl0dGVyIHRvIHNlbmQgYmFjayBkYXRhIHRvIHBhcmVudCBjb21wb25lbnRcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZpbGVVcGxvYWRTZXJ2aWNlIDogRmlsZVVwbG9hZFNlcnZpY2UsIHByaXZhdGUgX2h0dHA6IEh0dHApIHtcclxuICAgICAgICAvLyAgLCB0aGlzLnVwbG9hZGVyLm9uU3VjY2Vzc0l0ZW0gPSAoaXRlbTogYW55LCByZXNwb25zZTogc3RyaW5nLCBzdGF0dXM6IG51bWJlciwgaGVhZGVyczogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vcmVzcG9uc2UgaXMgdGhlIGNsb3VkaW5hcnkgcmVzcG9uc2VcclxuICAgICAgICAvLyAgICAgLy9zZWUgaHR0cDovL2Nsb3VkaW5hcnkuY29tL2RvY3VtZW50YXRpb24vdXBsb2FkX2ltYWdlcyN1cGxvYWRfcmVzcG9uc2VcclxuICAgICAgICAvLyAgICAgbGV0IHJlczogYW55ID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaW1hZ2VJZCA9IHJlcy5wdWJsaWNfaWQ7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB7IGl0ZW0sIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMgfTtcclxuICAgICAgICAvLyB9O1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBsb2FkKCkge1xyXG4gICAgICAgIC8vIHRoaXMudXBsb2FkZXIudXBsb2FkQWxsKCk7XHJcbiAgICB9XHJcbiAgICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5wYXRoX21vZGVsKVxyXG4gICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgLy9cclxuICAgIC8vXHJcbiAgICAvLyAgICAgLy8gdmFyIGNsaWVudCA9IGZpbGVzdGFjay5pbml0KCdBZ2FYeTd0V2dSTXV6cjExSGg2T0p6Jyk7XHJcbiAgICAvLyAgICAgLy8gZnVuY3Rpb24gc2hvd1BpY2tlcigpIHtcclxuICAgIC8vICAgICAvLyAgICAgY2xpZW50LnBpY2soe1xyXG4gICAgLy8gICAgIC8vICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0LmZpbGVzVXBsb2FkZWQpKVxyXG4gICAgLy8gICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICAvLyB9XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG5cclxuICAgIGZpbGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XHJcbiAgICAvLyAgICAgbGV0IGZpbGVMaXN0OiBGaWxlTGlzdCA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgIC8vIGlmKGZpbGVMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgIC8vIGxldCBmaWxlOiBGaWxlID0gZmlsZUxpc3RbMF07XHJcbiAgICAvLyBsZXQgZm9ybURhdGE6Rm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIC8vIHRoaXMuZmlsZVVwbG9hZGVkID0gZmlsZTtcclxuICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgndXBsb2FkRmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XHJcbiAgICAgICAgdGhpcy51cmxfdXBsb2FkZWRfZmlsZSA9ICdibGFibGEnO1xyXG5cclxuICAgICAgICB2YXIgZmlsZSA9IGV2ZW50LmRhdGFUcmFuc2ZlciA/IGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlc1swXSA6IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuXHJcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAvaW1hZ2UtKi87XHJcbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgIGlmICghZmlsZS50eXBlLm1hdGNoKHBhdHRlcm4pKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdpbnZhbGlkIGZvcm1hdCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLmxvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZWFkZXIub25sb2FkID0gdGhpcy5faGFuZGxlUmVhZGVyTG9hZGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcblxyXG5cclxuICAgIC8vIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIC8vIGhlYWRlcnMuYXBwZW5kKCdFbmNUeXBlJywgJ211bHRpcGFydC9mb3JtLWRhdGEnKTtcclxuICAgIC8vIGhlYWRlcnMuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgLy8gbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgLy8gICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMICsgJ3N0b3JlX2ZpbGUnO1xyXG4gICAgLy8gdGhpcy5faHR0cC5wb3N0KGAke2NvbXBsZXRlVXJsfWAsIGZvcm1EYXRhLCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAvLyAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXHJcbiAgICAvLyAgICAgLnN1YnNjcmliZShcclxuICAgIC8vICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpXHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnVybF91cGxvYWRlZF9maWxlID0gZGF0YS51cmw7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlkX2ltZyA9IGRhdGEuaWRfaW1nO1xyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIC8vIClcclxuICAgICAgICB9XHJcblxyXG5faGFuZGxlUmVhZGVyTG9hZGVkKGUpIHtcclxuICAgIHZhciByZWFkZXIgPSBlLnRhcmdldDtcclxuICAgIHRoaXMuaW1hZ2VTcmMgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgY29uc29sZS5sb2codGhpcy5pbWFnZVNyYylcclxuICAgIC8vdGhpcy5sb2FkZWQgPSB0cnVlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4gICAgb25DaGFuZ2UoZXZlbnQ6IEV2ZW50VGFyZ2V0KSB7XHJcbiAgICAgICAgbGV0IGV2ZW50T2JqOiBNU0lucHV0TWV0aG9kQ29udGV4dCA9IDxNU0lucHV0TWV0aG9kQ29udGV4dD4gZXZlbnQ7XHJcbiAgICAgICAgbGV0IHRhcmdldDogSFRNTElucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PiBldmVudE9iai50YXJnZXQ7XHJcbiAgICAgICAgbGV0IGZpbGVzOiBGaWxlTGlzdCA9IHRhcmdldC5maWxlcztcclxuICAgICAgICB0aGlzLmZpbGUgPSBmaWxlc1swXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGUpO1xyXG5cclxuICAgICAgICB0aGlzLl9maWxlVXBsb2FkU2VydmljZS5zdG9yZUZpbGUoZmlsZXNbMF0pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnb1RvU3RlcCgpe1xyXG4gICAgICAgIHRoaXMuc2VudC5lbWl0KHtcclxuICAgICAgICAgICAgc3RlcElkeDogdGhpcy5zdGVwSWR4XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnb1RvTmV4dFN0ZXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZW50LmVtaXQoe1xyXG4gICAgICAgICAgICB2YWx1ZU5hbWUgOiB0aGlzLm9ialN0ZXAubmFtZSxcclxuICAgICAgICAgICAgdXJsX3VwbG9hZGVkOiB0aGlzLnVybF91cGxvYWRlZF9maWxlLFxyXG4gICAgICAgICAgICBpZF9pbWc6IHRoaXMuaWRfaW1nLFxyXG4gICAgICAgICAgICBmaWxlVXBsb2FkZWQ6IHRoaXMuZmlsZVVwbG9hZGVkLFxyXG4gICAgICAgICAgICBzdGVwSWR4IDogdGhpcy5zdGVwSWR4XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gYXN5bmMgc2hvd1BpY2tlcigpIHtcclxuICAgIC8vICAgICBjb25zdCBjbGllbnQgPSBmaWxlc3RhY2suaW5pdCgnQWdhWHk3dFdnUk11enIxMUhoNk9KeicpO1xyXG4gICAgLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5waWNrKHsgbWF4RmlsZXM6IDEgfSk7XHJcbiAgICAvLyAgICAgY29uc3QgdXJsID0gcmVzdWx0LmZpbGVzVXBsb2FkZWRbMF0udXJsO1xyXG4gICAgLy8gICAgIHRoaXMudXBsb2FkZWRGaWxlVXJscy5wdXNoKHVybCk7XHJcbiAgICAvLyB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
