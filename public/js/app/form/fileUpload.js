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
const form_service_1 = require("../Engine/form.service");
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

//# sourceMappingURL=data:application/json;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FtRFQ7S0FBQyxDQUFDO3FDQWtCMEMsc0NBQWlCLEVBQWlCLFdBQUk7UUFDN0MsMEJBQVcsRUFBd0IsMEJBQVc7R0FqQnZFLG1CQUFtQixDQXVHL0I7QUF2R1ksa0RBQW1CIiwiZmlsZSI6ImZvcm0vZmlsZVVwbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7RmlsZVVwbG9hZFNlcnZpY2V9IGZyb20gXCIuL2ZpbGVVcGxvYWQuc2VydmljZVwiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbnNlbGVjdG9yOiAnZmlsZS11cGxvYWQnLFxyXG50ZW1wbGF0ZTogYFxyXG48ZGl2PlxyXG4gICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlbidcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiPjxwIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsfX08L3A+IDwvZGl2PlxyXG4gICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlcydcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiPjxwIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsX2VzfX08L3A+IDwvZGl2PlxyXG4gICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcidcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiPjxwIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsX2ZyfX08L3A+IDwvZGl2PlxyXG4gICBcclxuICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICA8dGFibGUgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJmaWxlaW5wdXQgZmlsZWlucHV0LW5ld1wiIGRhdGEtcHJvdmlkZXM9XCJmaWxlaW5wdXRcIiAoY2hhbmdlKT1cImZpbGVDaGFuZ2UoJGV2ZW50KVwiIGFjY2VwdD1cIi5qcGVnLC5qcGcsLnBuZ1wiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHNwYW4gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWZpbGVcIj48c3Bhbj5DaG9vc2UgZmlsZTwvc3Bhbj48aW5wdXQgdHlwZT1cImZpbGVcIiAvPjwvc3Bhbj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxzcGFuIGNsYXNzPVwiZmlsZWlucHV0LWZpbGVuYW1lXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwiZmlsZWlucHV0LW5ld1wiPk5vIGZpbGUgY2hvc2VuPC9zcGFuPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxsYWJlbCBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLUJyb3dzZSZoZWxsaXA7IDxpbnB1dCB0eXBlPVwiZmlsZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvbGFiZWw+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcicgJiYgaXNVcGxvYWRlZCA9PSBmYWxzZVwiPkFqb3V0ZXIgcGhvdG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlcycgJiYgaXNVcGxvYWRlZCA9PSBmYWxzZVwiPkVzcGFnbm9sPC9zcGFuPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VuJyAmJiBpc1VwbG9hZGVkID09IGZhbHNlXCI+QWRkIHBpY3R1cmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcicgJiYgaXNVcGxvYWRlZFwiPkNoYW5nZXIgcGhvdG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlcycgJiYgaXNVcGxvYWRlZFwiPkVzcGFnbm9sPC9zcGFuPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VuJyAmJiBpc1VwbG9hZGVkXCI+Q2hhbmdlIHBpY3R1cmU8L3NwYW4+ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgKGNoYW5nZSk9XCJmaWxlQ2hhbmdlKCRldmVudClcIiBhY2NlcHQ9XCIuanBlZywuanBnLC5wbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08aW5wdXQgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5saXN0X2J0bn19XCIgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cImZpbGVDaGFuZ2UoJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwiVXBsb2FkIGZpbGVcIiBhY2NlcHQ9XCIuanBlZywuanBnLC5wbmcsLnBkZiwuZG9jLC5kb2N4XCI+LS0+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0aGlzLmlzVXBsb2FkZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5saXN0X2J0bn19XCIgIChjbGljayk9XCJnb1RvTmV4dFN0ZXAoKVwiPlNVSVZBTlQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRyICpuZ0lmPVwidGhpcy5pc1VwbG9hZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwie3tpbWFnZVNyY319XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJ7e29ialN0ZXAuY29uZmlndXJhdGlvbi5wYXRoX21vZGVsfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPiBcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYH0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZENvbXBvbmVudCB7XHJcblxyXG4gICAgaXNVcGxvYWRlZCA9IGZhbHNlO1xyXG4gICAgaWRfaW1nOiBzdHJpbmc7XHJcbiAgICB1cmxfdXBsb2FkZWRfZmlsZTtcclxuXHJcbiAgICB1cGxvYWRlZEZpbGVVcmxzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaW1hZ2VTcmM6IHN0cmluZztcclxuICAgIGNsb3VkaW5hcnlJbWFnZTogYW55O1xyXG4gICAgZGlzcGxheSA9IGZhbHNlO1xyXG5cclxuICAgIGZpbGUgOiBGaWxlO1xyXG4gICAgZmlsZVVwbG9hZGVkIDogRmlsZTtcclxuICAgIEBJbnB1dCgpIG9ialN0ZXA7ICAgICAvL1ZhbHVlIHJlY2VpdmVkIGZyb20gTWFpbkNvbXBvbmVudFxyXG4gICAgQElucHV0KCkgc3RlcElkeDsgICAgIC8vVmFsdWUgcmVjZWl2ZWQgZnJvbSBNYWluQ29tcG9uZW50XHJcbiAgICBAT3V0cHV0KCkgc2VudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gRW1pdHRlciB0byBzZW5kIGJhY2sgZGF0YSB0byBwYXJlbnQgY29tcG9uZW50XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9maWxlVXBsb2FkU2VydmljZSA6IEZpbGVVcGxvYWRTZXJ2aWNlLCBwcml2YXRlIF9odHRwOiBIdHRwLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLCBwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5wYXRoX21vZGVsKVxyXG4gfVxyXG5cclxuZmlsZUNoYW5nZShldmVudCkge1xyXG5cclxuICAvLyBHQVJERVIgRklDSElFUiBEQU5TIExFIENBQ0hFXHJcbiBsZXQgZmlsZUxpc3Q6IEZpbGVMaXN0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xyXG5cclxuIC8vIGlmICh0aGlzLmlzVXBsb2FkZWQpe1xyXG4gLy8gICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5RmlsZXMuYXBwZW5kKCk7XHJcbiAvLyB9XHJcblxyXG4gaWYoZmlsZUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgIGxldCBmaWxlOiBGaWxlID0gZmlsZUxpc3RbMF07XHJcbiAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5RmlsZXMpXHJcbiAgICAgLy8gaWYgKHRoaXMuaXNVcGxvYWRlZCl7XHJcbiAgICAgLy8gICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5RmlsZXMuc3BsaWNlKDEsLTEpO1xyXG4gICAgIC8vIH1cclxuICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheUZpbGVzKVxyXG4gICAgIHRoaXMuZmlsZVVwbG9hZGVkID0gZmlsZTtcclxuICAgICB0aGlzLl9mb3JtU2VydmljZS5hcnJheUZpbGVzLmFwcGVuZCgndXBsb2FkRmlsZScsIGZpbGUsIHRoaXMub2JqU3RlcC5uYW1lKTtcclxuXHJcbiAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlGaWxlcy5nZXQoJ3VwbG9hZEZpbGUnKSk7XHJcblxyXG4gICAgIHRoaXMudXJsX3VwbG9hZGVkX2ZpbGUgPSAnYmxhYmxhJztcclxuICAgICAvL1xyXG4gICAgIHZhciBmaWxlVG9VcGxvYWQgPSBldmVudC5kYXRhVHJhbnNmZXIgPyBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXNbMF0gOiBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcblxyXG4gICAgIHZhciBwYXR0ZXJuID0gL2ltYWdlLSovO1xyXG4gICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICBpZiAoIWZpbGVUb1VwbG9hZC50eXBlLm1hdGNoKHBhdHRlcm4pKSB7XHJcbiAgICAgICAgIGFsZXJ0KCdpbnZhbGlkIGZvcm1hdCcpO1xyXG4gICAgICAgICByZXR1cm47XHJcbiAgICAgfVxyXG5cclxuICAgICByZWFkZXIub25sb2FkID0gdGhpcy5faGFuZGxlUmVhZGVyTG9hZGVkLmJpbmQodGhpcyk7XHJcbiAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZVRvVXBsb2FkKTtcclxuXHJcbiAgICAgdGhpcy5pc1VwbG9hZGVkID0gdHJ1ZTtcclxuIH1cclxufVxyXG5cclxuX2hhbmRsZVJlYWRlckxvYWRlZChlKSB7XHJcbiAgICB2YXIgcmVhZGVyID0gZS50YXJnZXQ7XHJcbiAgICB0aGlzLmltYWdlU3JjID0gcmVhZGVyLnJlc3VsdDtcclxuXHJcbn1cclxuXHJcbm9uQ2hhbmdlKGV2ZW50OiBFdmVudFRhcmdldCkge1xyXG4gICAgbGV0IGV2ZW50T2JqOiBNU0lucHV0TWV0aG9kQ29udGV4dCA9IDxNU0lucHV0TWV0aG9kQ29udGV4dD4gZXZlbnQ7XHJcbiAgICBsZXQgdGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+IGV2ZW50T2JqLnRhcmdldDtcclxuICAgIGxldCBmaWxlczogRmlsZUxpc3QgPSB0YXJnZXQuZmlsZXM7XHJcbiAgICB0aGlzLmZpbGUgPSBmaWxlc1swXTtcclxuXHJcbiAgICB0aGlzLl9maWxlVXBsb2FkU2VydmljZS5zdG9yZUZpbGUoZmlsZXNbMF0pXHJcbiAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIClcclxufVxyXG5cclxuZ29Ub1N0ZXAoKXtcclxuICAgIHRoaXMuc2VudC5lbWl0KHtcclxuICAgICAgICBzdGVwSWR4OiB0aGlzLnN0ZXBJZHhcclxuICAgIH0pXHJcbn1cclxuXHJcbmdvVG9OZXh0U3RlcCgpIHtcclxuICAgIHRoaXMuc2VudC5lbWl0KHtcclxuICAgICAgICB2YWx1ZU5hbWUgOiB0aGlzLm9ialN0ZXAubmFtZSxcclxuICAgICAgICB1cmxfdXBsb2FkZWQ6IHRoaXMudXJsX3VwbG9hZGVkX2ZpbGUsXHJcbiAgICAgICAgaWRfaW1nOiB0aGlzLmlkX2ltZyxcclxuICAgICAgICBmaWxlVXBsb2FkZWQ6IHRoaXMuZmlsZVVwbG9hZGVkLFxyXG4gICAgICAgIHN0ZXBJZHggOiB0aGlzLnN0ZXBJZHhcclxuICAgIH0pXHJcbn1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
