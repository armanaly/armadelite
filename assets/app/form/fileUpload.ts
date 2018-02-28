import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {FileUploadService} from "./fileUpload.service";
import {FormService} from "../Engine/form.service";
import {StepService} from "../Engine/step.service";

@Component({
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
`})

export class FileUploadComponent {

    isUploaded = false;
    id_img: string;
    url_uploaded_file;

    uploadedFileUrls: string[] = [];
    imageSrc: string;
    cloudinaryImage: any;
    display = false;

    file : File;
    fileUploaded : File;
    @Input() objStep;     //Value received from MainComponent
    @Input() stepIdx;     //Value received from MainComponent
    @Output() sent = new EventEmitter(); // Emitter to send back data to parent component
    constructor(private _fileUploadService : FileUploadService, private _http: Http,
                private _formService: FormService, private _stepService: StepService) {
    }

 ngOnInit() {
    console.log(this.objStep);
    console.log(this.objStep.configuration.path_model)
 }

fileChange(event) {

  // GARDER FICHIER DANS LE CACHE
 let fileList: FileList = event.target.files;

 // if (this.isUploaded){
 //     this._formService.arrayFiles.append();
 // }

 if(fileList.length > 0) {
     let file: File = fileList[0];
     let formData = new FormData();

     console.log(this._formService.arrayFiles)
     // if (this.isUploaded){
     //     this._formService.arrayFiles.splice(1,-1);
     // }
     // console.log(this._formService.arrayFiles)
     this.fileUploaded = file;
     this._formService.arrayFiles.append('uploadFile', file, this.objStep.name);

     console.log(this._formService.arrayFiles.get('uploadFile'));

     this.url_uploaded_file = 'blabla';
     //
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

onChange(event: EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    let files: FileList = target.files;
    this.file = files[0];

    this._fileUploadService.storeFile(files[0])
        .subscribe(data => {
                console.log(data)
            },
            error => console.log(error)
        )
}

goToStep(){
    this.sent.emit({
        stepIdx: this.stepIdx
    })
}

goToNextStep() {
    this.sent.emit({
        valueName : this.objStep.name,
        url_uploaded: this.url_uploaded_file,
        id_img: this.id_img,
        fileUploaded: this.fileUploaded,
        stepIdx : this.stepIdx
    })
}

}