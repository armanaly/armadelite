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
const Observable_1 = require("rxjs/Observable");
const fileUpload_service_1 = require("./fileUpload.service");
const global_1 = require("../global");
const form_service_1 = require("../../../myapper/assets/app/vehicule/form.service");
let FileUploadComponent = class FileUploadComponent {
    constructor(_fileUploadService, _http, _formService) {
        //  , this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any) => {
        //     //response is the cloudinary response
        //     //see http://cloudinary.com/documentation/upload_images#upload_response
        //     let res: any = JSON.parse(response);
        //     this.imageId = res.public_id;
        //     return { item, response, status, headers };
        // };
        this._fileUploadService = _fileUploadService;
        this._http = _http;
        this._formService = _formService;
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
        // GARDER FICHIER DANS LE CACHE
        let fileList = event.target.files;
        if (fileList.length > 0) {
            let file = fileList[0];
            let formData = new FormData();
            this.fileUploaded = file;
            formData.append('uploadFile', file, file.name);
            // this.url_uploaded_file = 'blabla';
            //
            var fileToUpload = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
            var pattern = /image-*/;
            var reader = new FileReader();
            if (!fileToUpload.type.match(pattern)) {
                alert('invalid format');
                return;
            }
            // this.loaded = false;
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsDataURL(fileToUpload);
            // FIN GARDER FICHIER DANS LE CACHE
            this._formService.arrayFiles.push({ "nom": keyName, "file": File });
            let headers = new http_1.Headers();
            headers.append('EncType', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            let options = new http_1.RequestOptions({ headers: headers });
            var completeUrl = global_1.GlobalVariable.BASE_URL + 'store_file';
            this._http.post(`${completeUrl}`, formData, { headers: headers })
                .map(res => res.json())
                .catch(error => Observable_1.Observable.throw(error))
                .subscribe(data => {
                console.log('success');
                this.url_uploaded_file = data.url;
                this.id_img = data.id_img;
            }, error => console.log(error));
        }
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
                    <!--<img src="{{imageSrc}}" width="480" height="320">-->
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
    __metadata('design:paramtypes', [fileUpload_service_1.FileUploadService, http_1.Http, form_service_1.FormService])
], FileUploadComponent);
exports.FileUploadComponent = FileUploadComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmlsZVVwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBQWUsQ0FBQyxDQUFBO0FBQ3JFLDBEQUEwRDtBQUMxRCx1QkFBNEMsZUFBZSxDQUFDLENBQUE7QUFDNUQsNkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MscUNBQWdDLHNCQUFzQixDQUFDLENBQUE7QUFDdkQseUJBQTZCLFdBQVcsQ0FBQyxDQUFBO0FBQ3pDLCtCQUEwQixtREFBbUQsQ0FBQyxDQUFBO0FBc0Q5RTtJQWtCSSxZQUFvQixrQkFBc0MsRUFBVSxLQUFXLEVBQzNELFlBQXlCO1FBQ3pDLG9HQUFvRztRQUNwRyw0Q0FBNEM7UUFDNUMsOEVBQThFO1FBQzlFLDJDQUEyQztRQUMzQyxvQ0FBb0M7UUFDcEMsa0RBQWtEO1FBQ2xELEtBQUs7UUFSVyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUMzRCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQWpCN0Msc0JBQWlCLEdBQVcsRUFBRSxDQUFDO1FBSS9CLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUdoQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBUU4sU0FBSSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDLENBQUMsZ0RBQWdEO0lBV3JGLENBQUM7SUFHRCxNQUFNO1FBQ0YsNkJBQTZCO0lBQ2pDLENBQUM7SUFDQSxRQUFRO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBQ0UsRUFBRTtJQUNOLEVBQUU7SUFDRixFQUFFO0lBQ0YsZ0VBQWdFO0lBQ2hFLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0Isd0NBQXdDO0lBQ3hDLG1FQUFtRTtJQUNuRSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLElBQUk7SUFDSixFQUFFO0lBRUYsVUFBVSxDQUFDLEtBQUs7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsK0JBQStCO1FBRXhCLElBQUksUUFBUSxHQUFhLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2hELEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLElBQUksR0FBUyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxRQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUV4QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRy9DLHFDQUFxQztZQUNyQyxFQUFFO1lBQ0YsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU1RixJQUFJLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDeEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUU5QixFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFFRCx1QkFBdUI7WUFFdkIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BELE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDNUMsbUNBQW1DO1lBRTFCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7WUFFbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztZQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1lBQ2pELE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDN0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxXQUFXLEdBQUcsdUJBQWMsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1lBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2lCQUMxRCxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDdEIsS0FBSyxDQUFDLEtBQUssSUFBSSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdkMsU0FBUyxDQUNOLElBQUk7Z0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM5QixDQUFDLEVBQ0QsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUE7UUFDVCxDQUFDO0lBQVEsQ0FBQztJQUVmLG1CQUFtQixDQUFDLENBQUM7UUFDakIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDMUIscUJBQXFCO0lBQ3pCLENBQUM7SUFLRyxRQUFRLENBQUMsS0FBa0I7UUFDdkIsSUFBSSxRQUFRLEdBQWdELEtBQUssQ0FBQztRQUNsRSxJQUFJLE1BQU0sR0FBd0MsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUNsRSxJQUFJLEtBQUssR0FBYSxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RDLFNBQVMsQ0FBQyxJQUFJO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNyQixDQUFDLEVBQ0QsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUE7SUFDVCxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ1gsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3hCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxZQUFZO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDWCxTQUFTLEVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQzdCLFlBQVksRUFBRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3BDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsT0FBTyxFQUFHLElBQUksQ0FBQyxPQUFPO1NBQ3pCLENBQUMsQ0FBQTtJQUNOLENBQUM7QUFTTCxDQUFDO0FBdklHO0lBQUMsWUFBSyxFQUFFOztvREFBQTtBQUNSO0lBRHNCLG1DQUFtQztJQUN4RCxZQUFLLEVBQUU7O29EQUFBO0FBQ1I7SUFEc0IsbUNBQW1DO0lBQ3hELGFBQU0sRUFBRTs7aURBQUE7QUEvRGI7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EwQ2IsRUFBQyxDQUFDOzt1QkFBQTtBQUVVLDJCQUFtQixzQkFzSi9CLENBQUEiLCJmaWxlIjoiYXNzZXRzL2FwcC9jb21wb25lbnRzL2ZpbGVVcGxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG4vLyBpbXBvcnQge0ZpbGVVcGxvYWRTZXJ2aWNlfSBmcm9tIFwiLi9maWxlVXBsb2FkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIdHRwLCBSZXF1ZXN0T3B0aW9ucywgSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQ2xvdWRpbmFyeU9wdGlvbnMsIENsb3VkaW5hcnlVcGxvYWRlciB9IGZyb20gJ25nMi1jbG91ZGluYXJ5JztcclxuaW1wb3J0IHtGaWxlVXBsb2FkU2VydmljZX0gZnJvbSBcIi4vZmlsZVVwbG9hZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7R2xvYmFsVmFyaWFibGV9IGZyb20gXCIuLi9nbG9iYWxcIjtcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL215YXBwZXIvYXNzZXRzL2FwcC92ZWhpY3VsZS9mb3JtLnNlcnZpY2VcIjtcclxuZGVjbGFyZSBjb25zdCBmaWxlc3RhY2s6IHtcclxuICAgIGluaXQoYXBpS2V5OiBzdHJpbmcpOiB7XHJcbiAgICAgICAgcGljayh7IG1heEZpbGVzIH06IHsgbWF4RmlsZXM6IG51bWJlciB9KTpcclxuICAgICAgICAgICAgUHJvbWlzZTx7IGZpbGVzVXBsb2FkZWQ6IHsgdXJsOiBzdHJpbmcgfVtdIH0+XHJcbiAgICB9XHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmlsZS11cGxvYWQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWx9fSA8L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgPCEtLTxpbnB1dCB0eXBlPVwiZmlsZXBpY2tlclwiIG5hbWU9XCJteU5hbWVcIiBvbmNoYW5nZT1cImFsZXJ0KGV2ZW50LmZwZmlsZS51cmwpXCIvPi0tPlxyXG4gICAgICAgIDwhLS08aW5wdXQgdHlwZT1cImZpbGVcIiBuZzJGaWxlU2VsZWN0IFt1cGxvYWRlcl09XCJ1cGxvYWRlclwiLz4tLT5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cImZpbGVDaGFuZ2UoJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwiVXBsb2FkIGZpbGVcIiBhY2NlcHQ9XCIuanBlZywuanBnLC5wbmcsLnBkZiwuZG9jLC5kb2N4XCI+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ7e29ialN0ZXAuY29uZmlndXJhdGlvbi5wYXRoX21vZGVsfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPiBcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cInRoaXMudXJsX3VwbG9hZGVkX2ZpbGUgIT0gJydcIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGltZyBzcmM9XCJ7e2ltYWdlU3JjfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08aW1nIHNyYz1cInt7dGhpcy51cmxfdXBsb2FkZWRfZmlsZX19XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj4gICAgLS0+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidGhpcy51cmxfdXBsb2FkZWRfZmlsZSA9PSAnJ1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGJ0bi1kZWZhdWx0IGJ0bi1sZyAoY2xpY2spPVwiZ29Ub1N0ZXAoKVwiPkpFIE5FIFNPVUhBSVRFIFBBUyBBSk9VVEVSIERFUyBQSE9UT1M8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInRoaXMudXJsX3VwbG9hZGVkX2ZpbGUgIT0gJydcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBidG4tZGVmYXVsdCBidG4tbGcgKGNsaWNrKT1cImdvVG9OZXh0U3RlcCgpXCI+U1VJVkFOVDwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgIDwhLS08aW5wdXQgbmFtZT1cImZpbGVcIiB0eXBlPVwiZmlsZVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiLz4tLT5cclxuICAgICAgICA8IS0tPGlucHV0IHR5cGU9XCJmaWxlcGlja2VyXCIgZGF0YS1mcC1hcGlrZXk9XCJBZ2FYeTd0V2dSTXV6cjExSGg2T0p6XCItLT5cclxuICAgICAgICAgICAgICAgPCEtLW9uY2hhbmdlPVwiY29uc29sZS5sb2coZXZlbnQuZnBmaWxlKVwiPi0tPlxyXG5cclxuICAgICAgPCEtLTxpbnB1dCB0eXBlPVwiZmlsZVwiIG5nMkZpbGVTZWxlY3QgW3VwbG9hZGVyXT1cInVwbG9hZGVyXCIgYWNjZXB0PVwiaW1hZ2UvKjtjYXB0dXJlPWNhbWVyYVwiPi0tPlxyXG5cclxuICAgIDwhLS08YnV0dG9uIChjbGljayk9XCJ1cGxvYWQoKVwiPlVwbG9hZDwvYnV0dG9uPi0tPlxyXG5cclxuPCEtLTxjbC1pbWFnZSBbcHVibGljLWlkXT1cImltYWdlSWRcIiBbY2xvdWQtbmFtZV09XCJ1cGxvYWRlci5jbG91ZE5hbWVcIj48L2NsLWltYWdlPi0tPlxyXG48IS0tPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlVwbG9hZFwiIG9uY2xpY2s9XCJzaG93UGlja2VyKClcIiAvPi0tPlxyXG48IS0tPGlucHV0IHR5cGU9XCJmaWxlcGlja2VyLWRyYWdkcm9wXCIgZGF0YS1mcC1hcGlrZXk9XCJBZ2FYeTd0V2dSTXV6cjExSGg2T0p6XCIgZGF0YS1mcC1taW1ldHlwZXM9XCIqLypcIiBkYXRhLWZwLWNvbnRhaW5lcj1cIm1vZGFsXCIgZGF0YS1mcC1tYXhzaXplPVwiMTAwMDAwMDBcIiBkYXRhLWZwLXN0b3JlLWxvY2F0aW9uPVwiUzNcIiBvbmNoYW5nZT1cImFsZXJ0KGV2ZW50LmZwZmlsZS51cmwpXCI+LS0+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbmB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRDb21wb25lbnQge1xyXG5cclxuICAgIHVybF91cGxvYWRlZF9maWxlOiBzdHJpbmcgPSAnJztcclxuICAgIGlkX2ltZzogc3RyaW5nO1xyXG5cclxuXHJcbiAgICB1cGxvYWRlZEZpbGVVcmxzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaW1hZ2VTcmM6IHN0cmluZztcclxuICAgIGNsb3VkaW5hcnlJbWFnZTogYW55O1xyXG4gICAgZGlzcGxheSA9IGZhbHNlO1xyXG4gICAgIC8vIHVwbG9hZGVyOiBDbG91ZGluYXJ5VXBsb2FkZXIgPSBuZXcgQ2xvdWRpbmFyeVVwbG9hZGVyKFxyXG4gICAgIC8vICAgICBuZXcgQ2xvdWRpbmFyeU9wdGlvbnMoeyBjbG91ZE5hbWU6ICdoYXZqY3FwcHYnLCB1cGxvYWRQcmVzZXQ6ICdvaTJ4NjFkYicgfSlcclxuICAgICAvLyApO1xyXG4gICAgZmlsZSA6IEZpbGU7XHJcbiAgICBmaWxlVXBsb2FkZWQgOiBGaWxlO1xyXG4gICAgQElucHV0KCkgb2JqU3RlcDsgICAgIC8vVmFsdWUgcmVjZWl2ZWQgZnJvbSBNYWluQ29tcG9uZW50XHJcbiAgICBASW5wdXQoKSBzdGVwSWR4OyAgICAgLy9WYWx1ZSByZWNlaXZlZCBmcm9tIE1haW5Db21wb25lbnRcclxuICAgIEBPdXRwdXQoKSBzZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBFbWl0dGVyIHRvIHNlbmQgYmFjayBkYXRhIHRvIHBhcmVudCBjb21wb25lbnRcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZpbGVVcGxvYWRTZXJ2aWNlIDogRmlsZVVwbG9hZFNlcnZpY2UsIHByaXZhdGUgX2h0dHA6IEh0dHAsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2UpIHtcclxuICAgICAgICAvLyAgLCB0aGlzLnVwbG9hZGVyLm9uU3VjY2Vzc0l0ZW0gPSAoaXRlbTogYW55LCByZXNwb25zZTogc3RyaW5nLCBzdGF0dXM6IG51bWJlciwgaGVhZGVyczogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vcmVzcG9uc2UgaXMgdGhlIGNsb3VkaW5hcnkgcmVzcG9uc2VcclxuICAgICAgICAvLyAgICAgLy9zZWUgaHR0cDovL2Nsb3VkaW5hcnkuY29tL2RvY3VtZW50YXRpb24vdXBsb2FkX2ltYWdlcyN1cGxvYWRfcmVzcG9uc2VcclxuICAgICAgICAvLyAgICAgbGV0IHJlczogYW55ID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaW1hZ2VJZCA9IHJlcy5wdWJsaWNfaWQ7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB7IGl0ZW0sIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMgfTtcclxuICAgICAgICAvLyB9O1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBsb2FkKCkge1xyXG4gICAgICAgIC8vIHRoaXMudXBsb2FkZXIudXBsb2FkQWxsKCk7XHJcbiAgICB9XHJcbiAgICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5wYXRoX21vZGVsKVxyXG4gICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgLy9cclxuICAgIC8vXHJcbiAgICAvLyAgICAgLy8gdmFyIGNsaWVudCA9IGZpbGVzdGFjay5pbml0KCdBZ2FYeTd0V2dSTXV6cjExSGg2T0p6Jyk7XHJcbiAgICAvLyAgICAgLy8gZnVuY3Rpb24gc2hvd1BpY2tlcigpIHtcclxuICAgIC8vICAgICAvLyAgICAgY2xpZW50LnBpY2soe1xyXG4gICAgLy8gICAgIC8vICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0LmZpbGVzVXBsb2FkZWQpKVxyXG4gICAgLy8gICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICAvLyB9XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG5cclxuICAgIGZpbGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XHJcbiAgLy8gR0FSREVSIEZJQ0hJRVIgREFOUyBMRSBDQUNIRVxyXG5cclxuICAgICAgICAgbGV0IGZpbGVMaXN0OiBGaWxlTGlzdCA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgICBpZihmaWxlTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgIGxldCBmaWxlOiBGaWxlID0gZmlsZUxpc3RbMF07XHJcbiAgICAgICAgIGxldCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgIHRoaXMuZmlsZVVwbG9hZGVkID0gZmlsZTtcclxuICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1cGxvYWRGaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcclxuXHJcblxyXG4gICAgICAgICAvLyB0aGlzLnVybF91cGxvYWRlZF9maWxlID0gJ2JsYWJsYSc7XHJcbiAgICAgICAgIC8vXHJcbiAgICAgICAgIHZhciBmaWxlVG9VcGxvYWQgPSBldmVudC5kYXRhVHJhbnNmZXIgPyBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXNbMF0gOiBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcblxyXG4gICAgICAgICB2YXIgcGF0dGVybiA9IC9pbWFnZS0qLztcclxuICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICBpZiAoIWZpbGVUb1VwbG9hZC50eXBlLm1hdGNoKHBhdHRlcm4pKSB7XHJcbiAgICAgICAgICAgICBhbGVydCgnaW52YWxpZCBmb3JtYXQnKTtcclxuICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gdGhpcy5sb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgIHJlYWRlci5vbmxvYWQgPSB0aGlzLl9oYW5kbGVSZWFkZXJMb2FkZWQuYmluZCh0aGlzKTtcclxuICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZVRvVXBsb2FkKTtcclxuLy8gRklOIEdBUkRFUiBGSUNISUVSIERBTlMgTEUgQ0FDSEVcclxuXHJcbiAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5RmlsZXMucHVzaCh7XCJub21cIjoga2V5TmFtZSwgXCJmaWxlXCI6IEZpbGV9KTtcclxuXHJcbiAgICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0VuY1R5cGUnLCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScpO1xyXG4gICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe2hlYWRlcnM6IGhlYWRlcnN9KTtcclxuICAgICAgICAgdmFyIGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwgKyAnc3RvcmVfZmlsZSc7XHJcbiAgICAgICAgIHRoaXMuX2h0dHAucG9zdChgJHtjb21wbGV0ZVVybH1gLCBmb3JtRGF0YSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSlcclxuICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJylcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy51cmxfdXBsb2FkZWRfZmlsZSA9IGRhdGEudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmlkX2ltZyA9IGRhdGEuaWRfaW1nO1xyXG4gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICApXHJcbiAgICAgfSAgICAgICAgfVxyXG5cclxuX2hhbmRsZVJlYWRlckxvYWRlZChlKSB7XHJcbiAgICB2YXIgcmVhZGVyID0gZS50YXJnZXQ7XHJcbiAgICB0aGlzLmltYWdlU3JjID0gcmVhZGVyLnJlc3VsdDtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuaW1hZ2VTcmMpXHJcbiAgICAvL3RoaXMubG9hZGVkID0gdHJ1ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuICAgIG9uQ2hhbmdlKGV2ZW50OiBFdmVudFRhcmdldCkge1xyXG4gICAgICAgIGxldCBldmVudE9iajogTVNJbnB1dE1ldGhvZENvbnRleHQgPSA8TVNJbnB1dE1ldGhvZENvbnRleHQ+IGV2ZW50O1xyXG4gICAgICAgIGxldCB0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD4gZXZlbnRPYmoudGFyZ2V0O1xyXG4gICAgICAgIGxldCBmaWxlczogRmlsZUxpc3QgPSB0YXJnZXQuZmlsZXM7XHJcbiAgICAgICAgdGhpcy5maWxlID0gZmlsZXNbMF07XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZmlsZVVwbG9hZFNlcnZpY2Uuc3RvcmVGaWxlKGZpbGVzWzBdKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBnb1RvU3RlcCgpe1xyXG4gICAgICAgIHRoaXMuc2VudC5lbWl0KHtcclxuICAgICAgICAgICAgc3RlcElkeDogdGhpcy5zdGVwSWR4XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnb1RvTmV4dFN0ZXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZW50LmVtaXQoe1xyXG4gICAgICAgICAgICB2YWx1ZU5hbWUgOiB0aGlzLm9ialN0ZXAubmFtZSxcclxuICAgICAgICAgICAgdXJsX3VwbG9hZGVkOiB0aGlzLnVybF91cGxvYWRlZF9maWxlLFxyXG4gICAgICAgICAgICBpZF9pbWc6IHRoaXMuaWRfaW1nLFxyXG4gICAgICAgICAgICBmaWxlVXBsb2FkZWQ6IHRoaXMuZmlsZVVwbG9hZGVkLFxyXG4gICAgICAgICAgICBzdGVwSWR4IDogdGhpcy5zdGVwSWR4XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gYXN5bmMgc2hvd1BpY2tlcigpIHtcclxuICAgIC8vICAgICBjb25zdCBjbGllbnQgPSBmaWxlc3RhY2suaW5pdCgnQWdhWHk3dFdnUk11enIxMUhoNk9KeicpO1xyXG4gICAgLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5waWNrKHsgbWF4RmlsZXM6IDEgfSk7XHJcbiAgICAvLyAgICAgY29uc3QgdXJsID0gcmVzdWx0LmZpbGVzVXBsb2FkZWRbMF0udXJsO1xyXG4gICAgLy8gICAgIHRoaXMudXBsb2FkZWRGaWxlVXJscy5wdXNoKHVybCk7XHJcbiAgICAvLyB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
