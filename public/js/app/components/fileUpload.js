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
const http_1 = require("@angular/http");
const fileUpload_service_1 = require("./fileUpload.service");
const form_service_1 = require("./form.service");
const step_service_1 = require("../Engine/step.service");
let FileUploadComponent = class FileUploadComponent {
    constructor(_fileUploadService, _http, _formService, _stepService) {
        this._fileUploadService = _fileUploadService;
        this._http = _http;
        this._formService = _formService;
        this._stepService = _stepService;
        this.isUploaded = false;
        this.uploadedFileUrls = [];
        this.display = false;
        this.sent = new core_1.EventEmitter();
    }
    ngOnInit() {
        console.log(this.objStep);
        console.log(this.objStep.configuration.path_model);
    }
    fileChange(event) {
        let fileList = event.target.files;
        if (fileList.length > 0) {
            let file = fileList[0];
            let formData = new FormData();
            console.log(this._formService.arrayFiles);
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
    __metadata("design:type", Object)
], FileUploadComponent.prototype, "objStep", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FileUploadComponent.prototype, "stepIdx", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FileUploadComponent.prototype, "sent", void 0);
FileUploadComponent = __decorate([
    core_1.Component({
        selector: 'file-upload',
        template: `
<div>
   <div *ngIf="_stepService.language == 'en'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel}}</p> </div>
   <div *ngIf="_stepService.language == 'es'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel_es}}</p> </div>
   <div *ngIf="_stepService.language == 'fr'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel_fr}}</p> </div>
   
   <div class="panel-body">
        <table align="center">
            <tr>
                <td align="center">
                    <!--<div class="fileinput fileinput-new" data-provides="fileinput" (change)="fileChange($event)" accept=".jpeg,.jpg,.png">-->
                        <!--<span class="btn btn-default btn-file"><span>Choose file</span><input type="file" /></span>-->
                        <!--<span class="fileinput-filename"></span><span class="fileinput-new">No file chosen</span>-->
                    <!--</div>-->
                    <!---->
                    <div>
                        <!--<label class="btn btn-primary">-->
                            <!--Browse&hellip; <input type="file" style="display: none;">-->
                        <!--</label>-->
                        <span class="btn btn-default btn-file">
                              <span *ngIf="_stepService.language == 'fr' && isUploaded == false">Ajouter photo</span>
                              <span *ngIf="_stepService.language == 'es' && isUploaded == false">Espagnol</span>    
                              <span *ngIf="_stepService.language == 'en' && isUploaded == false">Add picture</span>
                              <span *ngIf="_stepService.language == 'fr' && isUploaded">Changer photo</span>
                              <span *ngIf="_stepService.language == 'es' && isUploaded">Espagnol</span>    
                              <span *ngIf="_stepService.language == 'en' && isUploaded">Change picture</span>       
                            <input type="file" (change)="fileChange($event)" accept=".jpeg,.jpg,.png">
                        </span>
                    </div>
                    <!--<input class="{{_stepService.template.list_btn}}" type="file" (change)="fileChange($event)" placeholder="Upload file" accept=".jpeg,.jpg,.png,.pdf,.doc,.docx">-->
                </td>
                <td>
                    <div *ngIf="this.isUploaded">
                        <button type="button" class="{{_stepService.template.list_btn}}"  (click)="goToNextStep()">SUIVANT</button>
                    </div>
                </td>
            <tr>
            <tr *ngIf="this.isUploaded">
                <td >
                    <img src="{{imageSrc}}" width="480" height="320">
                </td>
            </tr>
            <tr>
                <td> 
                    <img src="{{objStep.configuration.path_model}}" width="480" height="320"> 
                </td>
            </tr>
         
        </table>
   </div>
</div>
`
    }),
    __metadata("design:paramtypes", [fileUpload_service_1.FileUploadService, http_1.Http,
        form_service_1.FormService, step_service_1.StepService])
], FileUploadComponent);
exports.FileUploadComponent = FileUploadComponent;

//# sourceMappingURL=data:application/json;base64,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USxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FtRFQ7S0FBQyxDQUFDO3FDQWtCMEMsc0NBQWlCLEVBQWlCLFdBQUk7UUFDN0MsMEJBQVcsRUFBd0IsMEJBQVc7R0FqQnZFLG1CQUFtQixDQXVHL0I7QUF2R1ksa0RBQW1CIiwiZmlsZSI6ImNvbXBvbmVudHMvZmlsZVVwbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7RmlsZVVwbG9hZFNlcnZpY2V9IGZyb20gXCIuL2ZpbGVVcGxvYWQuc2VydmljZVwiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5zZWxlY3RvcjogJ2ZpbGUtdXBsb2FkJyxcclxudGVtcGxhdGU6IGBcclxuPGRpdj5cclxuICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZW4nXCIgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIj48cCBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+e3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ubGFiZWxQYW5lbH19PC9wPiA8L2Rpdj5cclxuICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnXCIgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIj48cCBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+e3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ubGFiZWxQYW5lbF9lc319PC9wPiA8L2Rpdj5cclxuICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZnInXCIgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIj48cCBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+e3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ubGFiZWxQYW5lbF9mcn19PC9wPiA8L2Rpdj5cclxuICAgXHJcbiAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgPHRhYmxlIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiZmlsZWlucHV0IGZpbGVpbnB1dC1uZXdcIiBkYXRhLXByb3ZpZGVzPVwiZmlsZWlucHV0XCIgKGNoYW5nZSk9XCJmaWxlQ2hhbmdlKCRldmVudClcIiBhY2NlcHQ9XCIuanBlZywuanBnLC5wbmdcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxzcGFuIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1maWxlXCI+PHNwYW4+Q2hvb3NlIGZpbGU8L3NwYW4+PGlucHV0IHR5cGU9XCJmaWxlXCIgLz48L3NwYW4+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cImZpbGVpbnB1dC1maWxlbmFtZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cImZpbGVpbnB1dC1uZXdcIj5ObyBmaWxlIGNob3Nlbjwvc3Bhbj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08bGFiZWwgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1Ccm93c2UmaGVsbGlwOyA8aW5wdXQgdHlwZT1cImZpbGVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L2xhYmVsPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZnInICYmIGlzVXBsb2FkZWQgPT0gZmFsc2VcIj5Bam91dGVyIHBob3RvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnICYmIGlzVXBsb2FkZWQgPT0gZmFsc2VcIj5Fc3BhZ25vbDwvc3Bhbj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlbicgJiYgaXNVcGxvYWRlZCA9PSBmYWxzZVwiPkFkZCBwaWN0dXJlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZnInICYmIGlzVXBsb2FkZWRcIj5DaGFuZ2VyIHBob3RvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnICYmIGlzVXBsb2FkZWRcIj5Fc3BhZ25vbDwvc3Bhbj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlbicgJiYgaXNVcGxvYWRlZFwiPkNoYW5nZSBwaWN0dXJlPC9zcGFuPiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIChjaGFuZ2UpPVwiZmlsZUNoYW5nZSgkZXZlbnQpXCIgYWNjZXB0PVwiLmpwZWcsLmpwZywucG5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGlucHV0IGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUubGlzdF9idG59fVwiIHR5cGU9XCJmaWxlXCIgKGNoYW5nZSk9XCJmaWxlQ2hhbmdlKCRldmVudClcIiBwbGFjZWhvbGRlcj1cIlVwbG9hZCBmaWxlXCIgYWNjZXB0PVwiLmpwZWcsLmpwZywucG5nLC5wZGYsLmRvYywuZG9jeFwiPi0tPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidGhpcy5pc1VwbG9hZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUubGlzdF9idG59fVwiICAoY2xpY2spPVwiZ29Ub05leHRTdGVwKClcIj5TVUlWQU5UPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ciAqbmdJZj1cInRoaXMuaXNVcGxvYWRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInt7aW1hZ2VTcmN9fVwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzIwXCI+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwie3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ucGF0aF9tb2RlbH19XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj4gXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICBcclxuICAgICAgICA8L3RhYmxlPlxyXG4gICA8L2Rpdj5cclxuPC9kaXY+XHJcbmB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRDb21wb25lbnQge1xyXG5cclxuICAgIGlzVXBsb2FkZWQgPSBmYWxzZTtcclxuICAgIGlkX2ltZzogc3RyaW5nO1xyXG4gICAgdXJsX3VwbG9hZGVkX2ZpbGU7XHJcblxyXG4gICAgdXBsb2FkZWRGaWxlVXJsczogc3RyaW5nW10gPSBbXTtcclxuICAgIGltYWdlU3JjOiBzdHJpbmc7XHJcbiAgICBjbG91ZGluYXJ5SW1hZ2U6IGFueTtcclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuXHJcbiAgICBmaWxlIDogRmlsZTtcclxuICAgIGZpbGVVcGxvYWRlZCA6IEZpbGU7XHJcbiAgICBASW5wdXQoKSBvYmpTdGVwOyAgICAgLy9WYWx1ZSByZWNlaXZlZCBmcm9tIE1haW5Db21wb25lbnRcclxuICAgIEBJbnB1dCgpIHN0ZXBJZHg7ICAgICAvL1ZhbHVlIHJlY2VpdmVkIGZyb20gTWFpbkNvbXBvbmVudFxyXG4gICAgQE91dHB1dCgpIHNlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIEVtaXR0ZXIgdG8gc2VuZCBiYWNrIGRhdGEgdG8gcGFyZW50IGNvbXBvbmVudFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmlsZVVwbG9hZFNlcnZpY2UgOiBGaWxlVXBsb2FkU2VydmljZSwgcHJpdmF0ZSBfaHR0cDogSHR0cCxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSwgcHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gbmdPbkluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXApO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24ucGF0aF9tb2RlbClcclxuIH1cclxuXHJcbmZpbGVDaGFuZ2UoZXZlbnQpIHtcclxuXHJcbiAgLy8gR0FSREVSIEZJQ0hJRVIgREFOUyBMRSBDQUNIRVxyXG4gbGV0IGZpbGVMaXN0OiBGaWxlTGlzdCA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuXHJcbiAvLyBpZiAodGhpcy5pc1VwbG9hZGVkKXtcclxuIC8vICAgICB0aGlzLl9mb3JtU2VydmljZS5hcnJheUZpbGVzLmFwcGVuZCgpO1xyXG4gLy8gfVxyXG5cclxuIGlmKGZpbGVMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICBsZXQgZmlsZTogRmlsZSA9IGZpbGVMaXN0WzBdO1xyXG4gICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheUZpbGVzKVxyXG4gICAgIC8vIGlmICh0aGlzLmlzVXBsb2FkZWQpe1xyXG4gICAgIC8vICAgICB0aGlzLl9mb3JtU2VydmljZS5hcnJheUZpbGVzLnNwbGljZSgxLC0xKTtcclxuICAgICAvLyB9XHJcbiAgICAgLy8gY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlGaWxlcylcclxuICAgICB0aGlzLmZpbGVVcGxvYWRlZCA9IGZpbGU7XHJcbiAgICAgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlGaWxlcy5hcHBlbmQoJ3VwbG9hZEZpbGUnLCBmaWxlLCB0aGlzLm9ialN0ZXAubmFtZSk7XHJcblxyXG4gICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5RmlsZXMuZ2V0KCd1cGxvYWRGaWxlJykpO1xyXG5cclxuICAgICB0aGlzLnVybF91cGxvYWRlZF9maWxlID0gJ2JsYWJsYSc7XHJcbiAgICAgLy9cclxuICAgICB2YXIgZmlsZVRvVXBsb2FkID0gZXZlbnQuZGF0YVRyYW5zZmVyID8gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzWzBdIDogZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG5cclxuICAgICB2YXIgcGF0dGVybiA9IC9pbWFnZS0qLztcclxuICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgaWYgKCFmaWxlVG9VcGxvYWQudHlwZS5tYXRjaChwYXR0ZXJuKSkge1xyXG4gICAgICAgICBhbGVydCgnaW52YWxpZCBmb3JtYXQnKTtcclxuICAgICAgICAgcmV0dXJuO1xyXG4gICAgIH1cclxuXHJcbiAgICAgcmVhZGVyLm9ubG9hZCA9IHRoaXMuX2hhbmRsZVJlYWRlckxvYWRlZC5iaW5kKHRoaXMpO1xyXG4gICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVUb1VwbG9hZCk7XHJcblxyXG4gICAgIHRoaXMuaXNVcGxvYWRlZCA9IHRydWU7XHJcbiB9XHJcbn1cclxuXHJcbl9oYW5kbGVSZWFkZXJMb2FkZWQoZSkge1xyXG4gICAgdmFyIHJlYWRlciA9IGUudGFyZ2V0O1xyXG4gICAgdGhpcy5pbWFnZVNyYyA9IHJlYWRlci5yZXN1bHQ7XHJcblxyXG59XHJcblxyXG5vbkNoYW5nZShldmVudDogRXZlbnRUYXJnZXQpIHtcclxuICAgIGxldCBldmVudE9iajogTVNJbnB1dE1ldGhvZENvbnRleHQgPSA8TVNJbnB1dE1ldGhvZENvbnRleHQ+IGV2ZW50O1xyXG4gICAgbGV0IHRhcmdldDogSFRNTElucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PiBldmVudE9iai50YXJnZXQ7XHJcbiAgICBsZXQgZmlsZXM6IEZpbGVMaXN0ID0gdGFyZ2V0LmZpbGVzO1xyXG4gICAgdGhpcy5maWxlID0gZmlsZXNbMF07XHJcblxyXG4gICAgdGhpcy5fZmlsZVVwbG9hZFNlcnZpY2Uuc3RvcmVGaWxlKGZpbGVzWzBdKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICApXHJcbn1cclxuXHJcbmdvVG9TdGVwKCl7XHJcbiAgICB0aGlzLnNlbnQuZW1pdCh7XHJcbiAgICAgICAgc3RlcElkeDogdGhpcy5zdGVwSWR4XHJcbiAgICB9KVxyXG59XHJcblxyXG5nb1RvTmV4dFN0ZXAoKSB7XHJcbiAgICB0aGlzLnNlbnQuZW1pdCh7XHJcbiAgICAgICAgdmFsdWVOYW1lIDogdGhpcy5vYmpTdGVwLm5hbWUsXHJcbiAgICAgICAgdXJsX3VwbG9hZGVkOiB0aGlzLnVybF91cGxvYWRlZF9maWxlLFxyXG4gICAgICAgIGlkX2ltZzogdGhpcy5pZF9pbWcsXHJcbiAgICAgICAgZmlsZVVwbG9hZGVkOiB0aGlzLmZpbGVVcGxvYWRlZCxcclxuICAgICAgICBzdGVwSWR4IDogdGhpcy5zdGVwSWR4XHJcbiAgICB9KVxyXG59XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
