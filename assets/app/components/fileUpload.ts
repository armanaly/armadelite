import {Component, Input, Output, EventEmitter} from "@angular/core";
// import {FileUploadService} from "./fileUpload.service";
import {Http, RequestOptions, Headers} from "@angular/http";
import { Observable } from "rxjs/Observable";
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import {FileUploadService} from "./fileUpload.service";
import {GlobalVariable} from "../global";
declare const filestack: {
    init(apiKey: string): {
        pick({ maxFiles }: { maxFiles: number }):
            Promise<{ filesUploaded: { url: string }[] }>
    }
};

@Component({
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
`})

export class FileUploadComponent {

    url_uploaded_file: string = '';
    id_img: string;


    uploadedFileUrls: string[] = [];
    imageSrc: string;
    cloudinaryImage: any;
    display = false;
     // uploader: CloudinaryUploader = new CloudinaryUploader(
     //     new CloudinaryOptions({ cloudName: 'havjcqppv', uploadPreset: 'oi2x61db' })
     // );
    fileUploaded : File;
    @Input() objStep;     //Value received from MainComponent
    @Input() stepIdx;     //Value received from MainComponent
    @Output() sent = new EventEmitter(); // Emitter to send back data to parent component
    constructor(private _fileUploadService : FileUploadService, private _http: Http) {
        //  , this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any) => {
        //     //response is the cloudinary response
        //     //see http://cloudinary.com/documentation/upload_images#upload_response
        //     let res: any = JSON.parse(response);
        //     this.imageId = res.public_id;
        //     return { item, response, status, headers };
        // };

    }


    upload() {
        // this.uploader.uploadAll();
    }
     ngOnInit() {
        console.log(this.objStep);
        console.log(this.objStep.configuration.path_model)
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
    console.log(this.imageSrc)
    //this.loaded = true;
}




    onChange(event: EventTarget) {
        let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        this.file = files[0];
        console.log(this.file);

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

    //
    // async showPicker() {
    //     const client = filestack.init('AgaXy7tWgRMuzr11Hh6OJz');
    //     const result = await client.pick({ maxFiles: 1 });
    //     const url = result.filesUploaded[0].url;
    //     this.uploadedFileUrls.push(url);
    // }
}