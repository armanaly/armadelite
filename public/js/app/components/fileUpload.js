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
const http_1 = require("@angular/http");
const fileUpload_service_1 = require("./fileUpload.service");
const form_service_1 = require("./form.service");
let FileUploadComponent = class FileUploadComponent {
    constructor(_fileUploadService, _http, _formService) {
        this._fileUploadService = _fileUploadService;
        this._http = _http;
        this._formService = _formService;
        this.isUploaded = false;
        this.uploadedFileUrls = [];
        this.display = false;
        this.sent = new core_1.EventEmitter();
    }
    upload() {
    }
    ngOnInit() {
        console.log(this.objStep);
        console.log(this.objStep.configuration.path_model);
    }
    fileChange(event) {
        console.log(event.target);
        let fileList = event.target.files;
        if (fileList.length > 0) {
            let file = fileList[0];
            let formData = new FormData();
            this.fileUploaded = file;
            this._formService.arrayFiles.append('uploadFile', file, this.objStep.name);
            console.log(this._formService.arrayFiles.get('uploadFile'));
            this.url_uploaded_file = 'blabla';
            var fileToUpload = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
            var pattern = /image-*/;
            var reader = new FileReader();
            if (!fileToUpload.type.match(pattern)) {
                alert('invalid format');
                return;
            }
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsDataURL(fileToUpload);
            this.isUploaded = true;
        }
    }
    _handleReaderLoaded(e) {
        var reader = e.target;
        this.imageSrc = reader.result;
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
    core_1.Input(), 
    __metadata('design:type', Object)
], FileUploadComponent.prototype, "stepIdx", void 0);
__decorate([
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
                <td *ngIf="this.isUploaded">
                    <img src="{{imageSrc}}" width="480" height="320">
                    <!--<img src="{{this.url_uploaded_file}}" width="480" height="320">    -->
                </td>
            </tr>
            
        
        </table>
               <div *ngIf="this.isUploaded == false"><button type="button" btn-default btn-lg (click)="goToStep()">JE NE SOUHAITE PAS AJOUTER DES PHOTOS</button></div>
               <div *ngIf="this.isUploaded"><button type="button" btn-default btn-lg (click)="goToNextStep()">SUIVANT</button></div>
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
    __metadata('design:paramtypes', [fileUpload_service_1.FileUploadService, (typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, form_service_1.FormService])
], FileUploadComponent);
exports.FileUploadComponent = FileUploadComponent;
var _a;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmlsZVVwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBQWUsQ0FBQyxDQUFBO0FBRXJFLHVCQUE0QyxlQUFlLENBQUMsQ0FBQTtBQUc1RCxxQ0FBZ0Msc0JBQXNCLENBQUMsQ0FBQTtBQUV2RCwrQkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQXNEM0M7SUFrQkksWUFBb0Isa0JBQXNDLEVBQVUsS0FBVyxFQUMzRCxZQUF5QjtRQUR6Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUMzRCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQWpCN0MsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUluQixxQkFBZ0IsR0FBYSxFQUFFLENBQUM7UUFHaEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQVFOLFNBQUksR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQVdwQyxDQUFDO0lBR0QsTUFBTTtJQUVOLENBQUM7SUFDQSxRQUFRO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBY0YsVUFBVSxDQUFDLEtBQUs7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFHckIsSUFBSSxRQUFRLEdBQWEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDaEQsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksSUFBSSxHQUFTLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBRTlCLElB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UUFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EwQ2IsRUFBQyxDQUFDOzt1QkFBQTtBQUVVLDJCQUFtQixzQkF1Si9CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9maWxlVXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuLy8gaW1wb3J0IHtGaWxlVXBsb2FkU2VydmljZX0gZnJvbSBcIi4vZmlsZVVwbG9hZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SHR0cCwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IENsb3VkaW5hcnlPcHRpb25zLCBDbG91ZGluYXJ5VXBsb2FkZXIgfSBmcm9tICduZzItY2xvdWRpbmFyeSc7XHJcbmltcG9ydCB7RmlsZVVwbG9hZFNlcnZpY2V9IGZyb20gXCIuL2ZpbGVVcGxvYWQuc2VydmljZVwiO1xyXG5pbXBvcnQge0dsb2JhbFZhcmlhYmxlfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2Zvcm0uc2VydmljZVwiO1xyXG5kZWNsYXJlIGNvbnN0IGZpbGVzdGFjazoge1xyXG4gICAgaW5pdChhcGlLZXk6IHN0cmluZyk6IHtcclxuICAgICAgICBwaWNrKHsgbWF4RmlsZXMgfTogeyBtYXhGaWxlczogbnVtYmVyIH0pOlxyXG4gICAgICAgICAgICBQcm9taXNlPHsgZmlsZXNVcGxvYWRlZDogeyB1cmw6IHN0cmluZyB9W10gfT5cclxuICAgIH1cclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmaWxlLXVwbG9hZCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdj5cclxuICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCI+e3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ubGFiZWxQYW5lbH19IDwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICA8IS0tPGlucHV0IHR5cGU9XCJmaWxlcGlja2VyXCIgbmFtZT1cIm15TmFtZVwiIG9uY2hhbmdlPVwiYWxlcnQoZXZlbnQuZnBmaWxlLnVybClcIi8+LS0+XHJcbiAgICAgICAgPCEtLTxpbnB1dCB0eXBlPVwiZmlsZVwiIG5nMkZpbGVTZWxlY3QgW3VwbG9hZGVyXT1cInVwbG9hZGVyXCIvPi0tPlxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIChjaGFuZ2UpPVwiZmlsZUNoYW5nZSgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJVcGxvYWQgZmlsZVwiIGFjY2VwdD1cIi5qcGVnLC5qcGcsLnBuZywucGRmLC5kb2MsLmRvY3hcIj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPiBcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInt7b2JqU3RlcC5jb25maWd1cmF0aW9uLnBhdGhfbW9kZWx9fVwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzIwXCI+IFxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwidGhpcy5pc1VwbG9hZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ7e2ltYWdlU3JjfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08aW1nIHNyYz1cInt7dGhpcy51cmxfdXBsb2FkZWRfZmlsZX19XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj4gICAgLS0+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidGhpcy5pc1VwbG9hZGVkID09IGZhbHNlXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYnRuLWRlZmF1bHQgYnRuLWxnIChjbGljayk9XCJnb1RvU3RlcCgpXCI+SkUgTkUgU09VSEFJVEUgUEFTIEFKT1VURVIgREVTIFBIT1RPUzwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidGhpcy5pc1VwbG9hZGVkXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYnRuLWRlZmF1bHQgYnRuLWxnIChjbGljayk9XCJnb1RvTmV4dFN0ZXAoKVwiPlNVSVZBTlQ8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICA8IS0tPGlucHV0IG5hbWU9XCJmaWxlXCIgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIi8+LS0+XHJcbiAgICAgICAgPCEtLTxpbnB1dCB0eXBlPVwiZmlsZXBpY2tlclwiIGRhdGEtZnAtYXBpa2V5PVwiQWdhWHk3dFdnUk11enIxMUhoNk9KelwiLS0+XHJcbiAgICAgICAgICAgICAgIDwhLS1vbmNoYW5nZT1cImNvbnNvbGUubG9nKGV2ZW50LmZwZmlsZSlcIj4tLT5cclxuXHJcbiAgICAgIDwhLS08aW5wdXQgdHlwZT1cImZpbGVcIiBuZzJGaWxlU2VsZWN0IFt1cGxvYWRlcl09XCJ1cGxvYWRlclwiIGFjY2VwdD1cImltYWdlLyo7Y2FwdHVyZT1jYW1lcmFcIj4tLT5cclxuXHJcbiAgICA8IS0tPGJ1dHRvbiAoY2xpY2spPVwidXBsb2FkKClcIj5VcGxvYWQ8L2J1dHRvbj4tLT5cclxuXHJcbjwhLS08Y2wtaW1hZ2UgW3B1YmxpYy1pZF09XCJpbWFnZUlkXCIgW2Nsb3VkLW5hbWVdPVwidXBsb2FkZXIuY2xvdWROYW1lXCI+PC9jbC1pbWFnZT4tLT5cclxuPCEtLTxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJVcGxvYWRcIiBvbmNsaWNrPVwic2hvd1BpY2tlcigpXCIgLz4tLT5cclxuPCEtLTxpbnB1dCB0eXBlPVwiZmlsZXBpY2tlci1kcmFnZHJvcFwiIGRhdGEtZnAtYXBpa2V5PVwiQWdhWHk3dFdnUk11enIxMUhoNk9KelwiIGRhdGEtZnAtbWltZXR5cGVzPVwiKi8qXCIgZGF0YS1mcC1jb250YWluZXI9XCJtb2RhbFwiIGRhdGEtZnAtbWF4c2l6ZT1cIjEwMDAwMDAwXCIgZGF0YS1mcC1zdG9yZS1sb2NhdGlvbj1cIlMzXCIgb25jaGFuZ2U9XCJhbGVydChldmVudC5mcGZpbGUudXJsKVwiPi0tPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG5gfSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkQ29tcG9uZW50IHtcclxuXHJcbiAgICBpc1VwbG9hZGVkID0gZmFsc2U7XHJcbiAgICBpZF9pbWc6IHN0cmluZztcclxuICAgIHVybF91cGxvYWRlZF9maWxlO1xyXG5cclxuICAgIHVwbG9hZGVkRmlsZVVybHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBpbWFnZVNyYzogc3RyaW5nO1xyXG4gICAgY2xvdWRpbmFyeUltYWdlOiBhbnk7XHJcbiAgICBkaXNwbGF5ID0gZmFsc2U7XHJcbiAgICAgLy8gdXBsb2FkZXI6IENsb3VkaW5hcnlVcGxvYWRlciA9IG5ldyBDbG91ZGluYXJ5VXBsb2FkZXIoXHJcbiAgICAgLy8gICAgIG5ldyBDbG91ZGluYXJ5T3B0aW9ucyh7IGNsb3VkTmFtZTogJ2hhdmpjcXBwdicsIHVwbG9hZFByZXNldDogJ29pMng2MWRiJyB9KVxyXG4gICAgIC8vICk7XHJcbiAgICBmaWxlIDogRmlsZTtcclxuICAgIGZpbGVVcGxvYWRlZCA6IEZpbGU7XHJcbiAgICBASW5wdXQoKSBvYmpTdGVwOyAgICAgLy9WYWx1ZSByZWNlaXZlZCBmcm9tIE1haW5Db21wb25lbnRcclxuICAgIEBJbnB1dCgpIHN0ZXBJZHg7ICAgICAvL1ZhbHVlIHJlY2VpdmVkIGZyb20gTWFpbkNvbXBvbmVudFxyXG4gICAgQE91dHB1dCgpIHNlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIEVtaXR0ZXIgdG8gc2VuZCBiYWNrIGRhdGEgdG8gcGFyZW50IGNvbXBvbmVudFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmlsZVVwbG9hZFNlcnZpY2UgOiBGaWxlVXBsb2FkU2VydmljZSwgcHJpdmF0ZSBfaHR0cDogSHR0cCxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSkge1xyXG4gICAgICAgIC8vICAsIHRoaXMudXBsb2FkZXIub25TdWNjZXNzSXRlbSA9IChpdGVtOiBhbnksIHJlc3BvbnNlOiBzdHJpbmcsIHN0YXR1czogbnVtYmVyLCBoZWFkZXJzOiBhbnkpID0+IHtcclxuICAgICAgICAvLyAgICAgLy9yZXNwb25zZSBpcyB0aGUgY2xvdWRpbmFyeSByZXNwb25zZVxyXG4gICAgICAgIC8vICAgICAvL3NlZSBodHRwOi8vY2xvdWRpbmFyeS5jb20vZG9jdW1lbnRhdGlvbi91cGxvYWRfaW1hZ2VzI3VwbG9hZF9yZXNwb25zZVxyXG4gICAgICAgIC8vICAgICBsZXQgcmVzOiBhbnkgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5pbWFnZUlkID0gcmVzLnB1YmxpY19pZDtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHsgaXRlbSwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVycyB9O1xyXG4gICAgICAgIC8vIH07XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGxvYWQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy51cGxvYWRlci51cGxvYWRBbGwoKTtcclxuICAgIH1cclxuICAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLnBhdGhfbW9kZWwpXHJcbiAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAvL1xyXG4gICAgLy9cclxuICAgIC8vICAgICAvLyB2YXIgY2xpZW50ID0gZmlsZXN0YWNrLmluaXQoJ0FnYVh5N3RXZ1JNdXpyMTFIaDZPSnonKTtcclxuICAgIC8vICAgICAvLyBmdW5jdGlvbiBzaG93UGlja2VyKCkge1xyXG4gICAgLy8gICAgIC8vICAgICBjbGllbnQucGljayh7XHJcbiAgICAvLyAgICAgLy8gICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQuZmlsZXNVcGxvYWRlZCkpXHJcbiAgICAvLyAgICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIC8vIH1cclxuICAgIC8vIH1cclxuICAgIC8vXHJcblxyXG4gICAgZmlsZUNoYW5nZShldmVudCkge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcclxuICAvLyBHQVJERVIgRklDSElFUiBEQU5TIExFIENBQ0hFXHJcblxyXG4gICAgICAgICBsZXQgZmlsZUxpc3Q6IEZpbGVMaXN0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgIGlmKGZpbGVMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgbGV0IGZpbGU6IEZpbGUgPSBmaWxlTGlzdFswXTtcclxuICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgICB0aGlzLmZpbGVVcGxvYWRlZCA9IGZpbGU7XHJcbiAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5RmlsZXMuYXBwZW5kKCd1cGxvYWRGaWxlJywgZmlsZSwgdGhpcy5vYmpTdGVwLm5hbWUpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheUZpbGVzLmdldCgndXBsb2FkRmlsZScpKTtcclxuXHJcbiAgICAgICAgIHRoaXMudXJsX3VwbG9hZGVkX2ZpbGUgPSAnYmxhYmxhJztcclxuICAgICAgICAgLy9cclxuICAgICAgICAgdmFyIGZpbGVUb1VwbG9hZCA9IGV2ZW50LmRhdGFUcmFuc2ZlciA/IGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlc1swXSA6IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuXHJcbiAgICAgICAgIHZhciBwYXR0ZXJuID0gL2ltYWdlLSovO1xyXG4gICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgIGlmICghZmlsZVRvVXBsb2FkLnR5cGUubWF0Y2gocGF0dGVybikpIHtcclxuICAgICAgICAgICAgIGFsZXJ0KCdpbnZhbGlkIGZvcm1hdCcpO1xyXG4gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyB0aGlzLmxvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IHRoaXMuX2hhbmRsZVJlYWRlckxvYWRlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlVG9VcGxvYWQpO1xyXG4vLyBGSU4gR0FSREVSIEZJQ0hJRVIgREFOUyBMRSBDQUNIRVxyXG5cclxuICAgICAgICAgLy8gdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5wdXNoKHtcIm5vbVwiOiB0aGlzLm9ialN0ZXAubmFtZSwgXCJmaWxlXCI6IEZpbGV9KTtcclxuICAgICAgICAgLy90aGlzLl9mb3JtU2VydmljZS5hcnJheUZpbGVzLnB1c2goZm9ybURhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgIHRoaXMuaXNVcGxvYWRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAvLyBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgIC8vIGhlYWRlcnMuYXBwZW5kKCdFbmNUeXBlJywgJ211bHRpcGFydC9mb3JtLWRhdGEnKTtcclxuICAgICAgICAgLy8gaGVhZGVycy5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgIC8vIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtoZWFkZXJzOiBoZWFkZXJzfSk7XHJcbiAgICAgICAgIC8vIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMICsgJ3N0b3JlX2ZpbGUnO1xyXG4gICAgICAgICAvLyB0aGlzLl9odHRwLnBvc3QoYCR7Y29tcGxldGVVcmx9YCwgZm9ybURhdGEsIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgICAgLy8gICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXHJcbiAgICAgICAgIC8vICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAvLyAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpXHJcbiAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMudXJsX3VwbG9hZGVkX2ZpbGUgPSBkYXRhLnVybDtcclxuICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5pZF9pbWcgPSBkYXRhLmlkX2ltZztcclxuICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAvLyAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAvLyAgICAgKVxyXG4gICAgIH0gICAgICAgIH1cclxuXHJcbl9oYW5kbGVSZWFkZXJMb2FkZWQoZSkge1xyXG4gICAgdmFyIHJlYWRlciA9IGUudGFyZ2V0O1xyXG4gICAgdGhpcy5pbWFnZVNyYyA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaW1hZ2VTcmMpXHJcbiAgICAvL3RoaXMubG9hZGVkID0gdHJ1ZTtcclxufVxyXG5cclxuICAgIG9uQ2hhbmdlKGV2ZW50OiBFdmVudFRhcmdldCkge1xyXG4gICAgICAgIGxldCBldmVudE9iajogTVNJbnB1dE1ldGhvZENvbnRleHQgPSA8TVNJbnB1dE1ldGhvZENvbnRleHQ+IGV2ZW50O1xyXG4gICAgICAgIGxldCB0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD4gZXZlbnRPYmoudGFyZ2V0O1xyXG4gICAgICAgIGxldCBmaWxlczogRmlsZUxpc3QgPSB0YXJnZXQuZmlsZXM7XHJcbiAgICAgICAgdGhpcy5maWxlID0gZmlsZXNbMF07XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZmlsZVVwbG9hZFNlcnZpY2Uuc3RvcmVGaWxlKGZpbGVzWzBdKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBnb1RvU3RlcCgpe1xyXG4gICAgICAgIHRoaXMuc2VudC5lbWl0KHtcclxuICAgICAgICAgICAgc3RlcElkeDogdGhpcy5zdGVwSWR4XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnb1RvTmV4dFN0ZXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZW50LmVtaXQoe1xyXG4gICAgICAgICAgICB2YWx1ZU5hbWUgOiB0aGlzLm9ialN0ZXAubmFtZSxcclxuICAgICAgICAgICAgdXJsX3VwbG9hZGVkOiB0aGlzLnVybF91cGxvYWRlZF9maWxlLFxyXG4gICAgICAgICAgICBpZF9pbWc6IHRoaXMuaWRfaW1nLFxyXG4gICAgICAgICAgICBmaWxlVXBsb2FkZWQ6IHRoaXMuZmlsZVVwbG9hZGVkLFxyXG4gICAgICAgICAgICBzdGVwSWR4IDogdGhpcy5zdGVwSWR4XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gYXN5bmMgc2hvd1BpY2tlcigpIHtcclxuICAgIC8vICAgICBjb25zdCBjbGllbnQgPSBmaWxlc3RhY2suaW5pdCgnQWdhWHk3dFdnUk11enIxMUhoNk9KeicpO1xyXG4gICAgLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5waWNrKHsgbWF4RmlsZXM6IDEgfSk7XHJcbiAgICAvLyAgICAgY29uc3QgdXJsID0gcmVzdWx0LmZpbGVzVXBsb2FkZWRbMF0udXJsO1xyXG4gICAgLy8gICAgIHRoaXMudXBsb2FkZWRGaWxlVXJscy5wdXNoKHVybCk7XHJcbiAgICAvLyB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
