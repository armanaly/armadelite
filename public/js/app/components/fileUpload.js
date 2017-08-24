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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmlsZVVwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBQWUsQ0FBQyxDQUFBO0FBRXJFLHVCQUE0QyxlQUFlLENBQUMsQ0FBQTtBQUc1RCxxQ0FBZ0Msc0JBQXNCLENBQUMsQ0FBQTtBQUV2RCwrQkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQXNEM0M7SUFrQkksWUFBb0Isa0JBQXNDLEVBQVUsS0FBVyxFQUMzRCxZQUF5QjtRQUR6Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUMzRCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQWpCN0MsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUluQixxQkFBZ0IsR0FBYSxFQUFFLENBQUM7UUFHaEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQVFOLFNBQUksR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQVdwQyxDQUFDO0lBR0QsTUFBTTtJQUVOLENBQUM7SUFDQSxRQUFRO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBY0YsVUFBVSxDQUFDLEtBQUs7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFHckIsSUFBSSxRQUFRLEdBQWEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDaEQsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksSUFBSSxHQUFTLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBRTlCLElB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UUFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EwQ2IsRUFBQyxDQUFDOzt1QkFBQTtBQUVVLDJCQUFtQixzQkF1Si9CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9maWxlVXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbi8vIGltcG9ydCB7RmlsZVVwbG9hZFNlcnZpY2V9IGZyb20gXCIuL2ZpbGVVcGxvYWQuc2VydmljZVwiO1xuaW1wb3J0IHtIdHRwLCBSZXF1ZXN0T3B0aW9ucywgSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBDbG91ZGluYXJ5T3B0aW9ucywgQ2xvdWRpbmFyeVVwbG9hZGVyIH0gZnJvbSAnbmcyLWNsb3VkaW5hcnknO1xuaW1wb3J0IHtGaWxlVXBsb2FkU2VydmljZX0gZnJvbSBcIi4vZmlsZVVwbG9hZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0dsb2JhbFZhcmlhYmxlfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9mb3JtLnNlcnZpY2VcIjtcbmRlY2xhcmUgY29uc3QgZmlsZXN0YWNrOiB7XG4gICAgaW5pdChhcGlLZXk6IHN0cmluZyk6IHtcbiAgICAgICAgcGljayh7IG1heEZpbGVzIH06IHsgbWF4RmlsZXM6IG51bWJlciB9KTpcbiAgICAgICAgICAgIFByb21pc2U8eyBmaWxlc1VwbG9hZGVkOiB7IHVybDogc3RyaW5nIH1bXSB9PlxuICAgIH1cbn07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZmlsZS11cGxvYWQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdj5cbiAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWx9fSA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICA8IS0tPGlucHV0IHR5cGU9XCJmaWxlcGlja2VyXCIgbmFtZT1cIm15TmFtZVwiIG9uY2hhbmdlPVwiYWxlcnQoZXZlbnQuZnBmaWxlLnVybClcIi8+LS0+XG4gICAgICAgIDwhLS08aW5wdXQgdHlwZT1cImZpbGVcIiBuZzJGaWxlU2VsZWN0IFt1cGxvYWRlcl09XCJ1cGxvYWRlclwiLz4tLT5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgKGNoYW5nZSk9XCJmaWxlQ2hhbmdlKCRldmVudClcIiBwbGFjZWhvbGRlcj1cIlVwbG9hZCBmaWxlXCIgYWNjZXB0PVwiLmpwZWcsLmpwZywucG5nLC5wZGYsLmRvYywuZG9jeFwiPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPiBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ7e29ialN0ZXAuY29uZmlndXJhdGlvbi5wYXRoX21vZGVsfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPiBcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJ0aGlzLmlzVXBsb2FkZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ7e2ltYWdlU3JjfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGltZyBzcmM9XCJ7e3RoaXMudXJsX3VwbG9hZGVkX2ZpbGV9fVwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzIwXCI+ICAgIC0tPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInRoaXMuaXNVcGxvYWRlZCA9PSBmYWxzZVwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGJ0bi1kZWZhdWx0IGJ0bi1sZyAoY2xpY2spPVwiZ29Ub1N0ZXAoKVwiPkpFIE5FIFNPVUhBSVRFIFBBUyBBSk9VVEVSIERFUyBQSE9UT1M8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0aGlzLmlzVXBsb2FkZWRcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBidG4tZGVmYXVsdCBidG4tbGcgKGNsaWNrKT1cImdvVG9OZXh0U3RlcCgpXCI+U1VJVkFOVDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICA8IS0tPGlucHV0IG5hbWU9XCJmaWxlXCIgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIi8+LS0+XG4gICAgICAgIDwhLS08aW5wdXQgdHlwZT1cImZpbGVwaWNrZXJcIiBkYXRhLWZwLWFwaWtleT1cIkFnYVh5N3RXZ1JNdXpyMTFIaDZPSnpcIi0tPlxuICAgICAgICAgICAgICAgPCEtLW9uY2hhbmdlPVwiY29uc29sZS5sb2coZXZlbnQuZnBmaWxlKVwiPi0tPlxuXG4gICAgICA8IS0tPGlucHV0IHR5cGU9XCJmaWxlXCIgbmcyRmlsZVNlbGVjdCBbdXBsb2FkZXJdPVwidXBsb2FkZXJcIiBhY2NlcHQ9XCJpbWFnZS8qO2NhcHR1cmU9Y2FtZXJhXCI+LS0+XG5cbiAgICA8IS0tPGJ1dHRvbiAoY2xpY2spPVwidXBsb2FkKClcIj5VcGxvYWQ8L2J1dHRvbj4tLT5cblxuPCEtLTxjbC1pbWFnZSBbcHVibGljLWlkXT1cImltYWdlSWRcIiBbY2xvdWQtbmFtZV09XCJ1cGxvYWRlci5jbG91ZE5hbWVcIj48L2NsLWltYWdlPi0tPlxuPCEtLTxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJVcGxvYWRcIiBvbmNsaWNrPVwic2hvd1BpY2tlcigpXCIgLz4tLT5cbjwhLS08aW5wdXQgdHlwZT1cImZpbGVwaWNrZXItZHJhZ2Ryb3BcIiBkYXRhLWZwLWFwaWtleT1cIkFnYVh5N3RXZ1JNdXpyMTFIaDZPSnpcIiBkYXRhLWZwLW1pbWV0eXBlcz1cIiovKlwiIGRhdGEtZnAtY29udGFpbmVyPVwibW9kYWxcIiBkYXRhLWZwLW1heHNpemU9XCIxMDAwMDAwMFwiIGRhdGEtZnAtc3RvcmUtbG9jYXRpb249XCJTM1wiIG9uY2hhbmdlPVwiYWxlcnQoZXZlbnQuZnBmaWxlLnVybClcIj4tLT5cbiAgICAgICA8L2Rpdj5cbiAgICBcbiAgICA8L2Rpdj5cbmB9KVxuXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZENvbXBvbmVudCB7XG5cbiAgICBpc1VwbG9hZGVkID0gZmFsc2U7XG4gICAgaWRfaW1nOiBzdHJpbmc7XG4gICAgdXJsX3VwbG9hZGVkX2ZpbGU7XG5cbiAgICB1cGxvYWRlZEZpbGVVcmxzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGltYWdlU3JjOiBzdHJpbmc7XG4gICAgY2xvdWRpbmFyeUltYWdlOiBhbnk7XG4gICAgZGlzcGxheSA9IGZhbHNlO1xuICAgICAvLyB1cGxvYWRlcjogQ2xvdWRpbmFyeVVwbG9hZGVyID0gbmV3IENsb3VkaW5hcnlVcGxvYWRlcihcbiAgICAgLy8gICAgIG5ldyBDbG91ZGluYXJ5T3B0aW9ucyh7IGNsb3VkTmFtZTogJ2hhdmpjcXBwdicsIHVwbG9hZFByZXNldDogJ29pMng2MWRiJyB9KVxuICAgICAvLyApO1xuICAgIGZpbGUgOiBGaWxlO1xuICAgIGZpbGVVcGxvYWRlZCA6IEZpbGU7XG4gICAgQElucHV0KCkgb2JqU3RlcDsgICAgIC8vVmFsdWUgcmVjZWl2ZWQgZnJvbSBNYWluQ29tcG9uZW50XG4gICAgQElucHV0KCkgc3RlcElkeDsgICAgIC8vVmFsdWUgcmVjZWl2ZWQgZnJvbSBNYWluQ29tcG9uZW50XG4gICAgQE91dHB1dCgpIHNlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIEVtaXR0ZXIgdG8gc2VuZCBiYWNrIGRhdGEgdG8gcGFyZW50IGNvbXBvbmVudFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZpbGVVcGxvYWRTZXJ2aWNlIDogRmlsZVVwbG9hZFNlcnZpY2UsIHByaXZhdGUgX2h0dHA6IEh0dHAsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7XG4gICAgICAgIC8vICAsIHRoaXMudXBsb2FkZXIub25TdWNjZXNzSXRlbSA9IChpdGVtOiBhbnksIHJlc3BvbnNlOiBzdHJpbmcsIHN0YXR1czogbnVtYmVyLCBoZWFkZXJzOiBhbnkpID0+IHtcbiAgICAgICAgLy8gICAgIC8vcmVzcG9uc2UgaXMgdGhlIGNsb3VkaW5hcnkgcmVzcG9uc2VcbiAgICAgICAgLy8gICAgIC8vc2VlIGh0dHA6Ly9jbG91ZGluYXJ5LmNvbS9kb2N1bWVudGF0aW9uL3VwbG9hZF9pbWFnZXMjdXBsb2FkX3Jlc3BvbnNlXG4gICAgICAgIC8vICAgICBsZXQgcmVzOiBhbnkgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcbiAgICAgICAgLy8gICAgIHRoaXMuaW1hZ2VJZCA9IHJlcy5wdWJsaWNfaWQ7XG4gICAgICAgIC8vICAgICByZXR1cm4geyBpdGVtLCByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzIH07XG4gICAgICAgIC8vIH07XG5cbiAgICB9XG5cblxuICAgIHVwbG9hZCgpIHtcbiAgICAgICAgLy8gdGhpcy51cGxvYWRlci51cGxvYWRBbGwoKTtcbiAgICB9XG4gICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXApO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5wYXRoX21vZGVsKVxuICAgICB9XG4gICAgICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vICAgICAvLyB2YXIgY2xpZW50ID0gZmlsZXN0YWNrLmluaXQoJ0FnYVh5N3RXZ1JNdXpyMTFIaDZPSnonKTtcbiAgICAvLyAgICAgLy8gZnVuY3Rpb24gc2hvd1BpY2tlcigpIHtcbiAgICAvLyAgICAgLy8gICAgIGNsaWVudC5waWNrKHtcbiAgICAvLyAgICAgLy8gICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgLy8gICAgIC8vICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0LmZpbGVzVXBsb2FkZWQpKVxuICAgIC8vICAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIC8vIH1cbiAgICAvLyB9XG4gICAgLy9cblxuICAgIGZpbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuICAvLyBHQVJERVIgRklDSElFUiBEQU5TIExFIENBQ0hFXG5cbiAgICAgICAgIGxldCBmaWxlTGlzdDogRmlsZUxpc3QgPSBldmVudC50YXJnZXQuZmlsZXM7XG4gICAgIGlmKGZpbGVMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgIGxldCBmaWxlOiBGaWxlID0gZmlsZUxpc3RbMF07XG4gICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgdGhpcy5maWxlVXBsb2FkZWQgPSBmaWxlO1xuICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlGaWxlcy5hcHBlbmQoJ3VwbG9hZEZpbGUnLCBmaWxlLCB0aGlzLm9ialN0ZXAubmFtZSk7XG4gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheUZpbGVzLmdldCgndXBsb2FkRmlsZScpKTtcblxuICAgICAgICAgdGhpcy51cmxfdXBsb2FkZWRfZmlsZSA9ICdibGFibGEnO1xuICAgICAgICAgLy9cbiAgICAgICAgIHZhciBmaWxlVG9VcGxvYWQgPSBldmVudC5kYXRhVHJhbnNmZXIgPyBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXNbMF0gOiBldmVudC50YXJnZXQuZmlsZXNbMF07XG5cbiAgICAgICAgIHZhciBwYXR0ZXJuID0gL2ltYWdlLSovO1xuICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgIGlmICghZmlsZVRvVXBsb2FkLnR5cGUubWF0Y2gocGF0dGVybikpIHtcbiAgICAgICAgICAgICBhbGVydCgnaW52YWxpZCBmb3JtYXQnKTtcbiAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICB9XG5cbiAgICAgICAgIC8vIHRoaXMubG9hZGVkID0gZmFsc2U7XG5cbiAgICAgICAgIHJlYWRlci5vbmxvYWQgPSB0aGlzLl9oYW5kbGVSZWFkZXJMb2FkZWQuYmluZCh0aGlzKTtcbiAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVUb1VwbG9hZCk7XG4vLyBGSU4gR0FSREVSIEZJQ0hJRVIgREFOUyBMRSBDQUNIRVxuXG4gICAgICAgICAvLyB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLnB1c2goe1wibm9tXCI6IHRoaXMub2JqU3RlcC5uYW1lLCBcImZpbGVcIjogRmlsZX0pO1xuICAgICAgICAgLy90aGlzLl9mb3JtU2VydmljZS5hcnJheUZpbGVzLnB1c2goZm9ybURhdGEpO1xuXG5cbiAgICAgICAgIHRoaXMuaXNVcGxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgIC8vIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgIC8vIGhlYWRlcnMuYXBwZW5kKCdFbmNUeXBlJywgJ211bHRpcGFydC9mb3JtLWRhdGEnKTtcbiAgICAgICAgIC8vIGhlYWRlcnMuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgLy8gbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe2hlYWRlcnM6IGhlYWRlcnN9KTtcbiAgICAgICAgIC8vIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMICsgJ3N0b3JlX2ZpbGUnO1xuICAgICAgICAgLy8gdGhpcy5faHR0cC5wb3N0KGAke2NvbXBsZXRlVXJsfWAsIGZvcm1EYXRhLCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAvLyAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXG4gICAgICAgICAvLyAgICAgLnN1YnNjcmliZShcbiAgICAgICAgIC8vICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpXG4gICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnVybF91cGxvYWRlZF9maWxlID0gZGF0YS51cmw7XG4gICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmlkX2ltZyA9IGRhdGEuaWRfaW1nO1xuICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgLy8gICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgIC8vICAgICApXG4gICAgIH0gICAgICAgIH1cblxuX2hhbmRsZVJlYWRlckxvYWRlZChlKSB7XG4gICAgdmFyIHJlYWRlciA9IGUudGFyZ2V0O1xuICAgIHRoaXMuaW1hZ2VTcmMgPSByZWFkZXIucmVzdWx0O1xuICAgLy8gY29uc29sZS5sb2codGhpcy5pbWFnZVNyYylcbiAgICAvL3RoaXMubG9hZGVkID0gdHJ1ZTtcbn1cblxuICAgIG9uQ2hhbmdlKGV2ZW50OiBFdmVudFRhcmdldCkge1xuICAgICAgICBsZXQgZXZlbnRPYmo6IE1TSW5wdXRNZXRob2RDb250ZXh0ID0gPE1TSW5wdXRNZXRob2RDb250ZXh0PiBldmVudDtcbiAgICAgICAgbGV0IHRhcmdldDogSFRNTElucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PiBldmVudE9iai50YXJnZXQ7XG4gICAgICAgIGxldCBmaWxlczogRmlsZUxpc3QgPSB0YXJnZXQuZmlsZXM7XG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGVzWzBdO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGUpO1xuXG4gICAgICAgIHRoaXMuX2ZpbGVVcGxvYWRTZXJ2aWNlLnN0b3JlRmlsZShmaWxlc1swXSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBnb1RvU3RlcCgpe1xuICAgICAgICB0aGlzLnNlbnQuZW1pdCh7XG4gICAgICAgICAgICBzdGVwSWR4OiB0aGlzLnN0ZXBJZHhcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnb1RvTmV4dFN0ZXAoKSB7XG4gICAgICAgIHRoaXMuc2VudC5lbWl0KHtcbiAgICAgICAgICAgIHZhbHVlTmFtZSA6IHRoaXMub2JqU3RlcC5uYW1lLFxuICAgICAgICAgICAgdXJsX3VwbG9hZGVkOiB0aGlzLnVybF91cGxvYWRlZF9maWxlLFxuICAgICAgICAgICAgaWRfaW1nOiB0aGlzLmlkX2ltZyxcbiAgICAgICAgICAgIGZpbGVVcGxvYWRlZDogdGhpcy5maWxlVXBsb2FkZWQsXG4gICAgICAgICAgICBzdGVwSWR4IDogdGhpcy5zdGVwSWR4XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBhc3luYyBzaG93UGlja2VyKCkge1xuICAgIC8vICAgICBjb25zdCBjbGllbnQgPSBmaWxlc3RhY2suaW5pdCgnQWdhWHk3dFdnUk11enIxMUhoNk9KeicpO1xuICAgIC8vICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQucGljayh7IG1heEZpbGVzOiAxIH0pO1xuICAgIC8vICAgICBjb25zdCB1cmwgPSByZXN1bHQuZmlsZXNVcGxvYWRlZFswXS51cmw7XG4gICAgLy8gICAgIHRoaXMudXBsb2FkZWRGaWxlVXJscy5wdXNoKHVybCk7XG4gICAgLy8gfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
