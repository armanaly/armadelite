import {Injectable} from "@angular/core";
import { GlobalVariable } from "../global";
import {Http, RequestOptions, Headers} from "@angular/http";
import { Observable } from "rxjs/Observable";
import {FormService} from "./form.service";

@Injectable()
export class SaveService {

    constructor (private _http: Http, private _formService: FormService) {}

    saveFiles() {
            let headerFiles = new Headers();
            headerFiles.append('EncType', 'multipart/form-data');
            headerFiles.append('Accept', 'application/json');
            let options = new RequestOptions({headers: headerFiles});
            var completeUrl = GlobalVariable.BASE_URL + 'store_file';
            return this._http.post(`${completeUrl}`, this._formService.arrayFiles, {headers: headerFiles})
                .map(res => res.json())
                .catch(error => Observable.throw(error))
                }

    saveData(currentStep) {

        // if (this._formService.arrayFiles.has('uploadFile')) {
        //     let headerFiles = new Headers();
        //     headerFiles.append('EncType', 'multipart/form-data');
        //     headerFiles.append('Accept', 'application/json');
        //     let options = new RequestOptions({headers: headerFiles});
        //     var completeUrl = GlobalVariable.BASE_URL + 'store_file';
        //     this._http.post(`${completeUrl}`, this._formService.arrayFiles, {headers: headerFiles})
        //         .map(res => res.json())
        //         .catch(error => Observable.throw(error))
        //         .subscribe(
        //             data => {
        //                 // console.log('success')
        //                 // console.log(data)
        //                 //
        //                 // this._formService.arraySteps.push({"step_id": currentStep});
        //                 //
        //                 // console.log(data[0].step_name);
        //                 // for (let stepName in data) {
        //                 //   //  console.log(stepName);
        //                 //     for (let j = 0; j < this._formService.arraySteps.length; j++) {
        //                 //         if (this._formService.arraySteps[j].nom == data.step_name) {
        //                 //             this._formService.arraySteps[j].file_url = data.file_url;
        //                 //             break;
        //                 //         }
        //                 // }}
        //
        //
        //                 // console.log(this._formService.arraySteps);
        //                 //
        //                 // //SAVE FORM DATA INTO COLLECTION
        //                 // const headers = new Headers({'Content-Type': 'application/json'});
        //                 // let body = JSON.stringify(this._formService.arraySteps);
        //                 // // return this._http.post('http://localhost:3000/demand', body, {headers: headers})
        //                 // let saveUrl = GlobalVariable.BASE_URL + 'save_datas';
        //                 // return this._http.post(saveUrl, body, {headers: headers})
        //                 //     .map(response => response)
        //                 //     .catch(error => Observable.throw(error.json()));
        //             },
        //             error => console.log(error)
        //         )
        // }
        // else {
            this._formService.arraySteps.push({"step_id": currentStep});
            let body = JSON.stringify(this._formService.arraySteps);

            console.log("body");
            console.log(body);

            //SAVE FORM DATA INTO COLLECTION

            const headers = new Headers({'Content-Type': 'application/json'});
            // return this._http.post('http://localhost:3000/demand', body, {headers: headers})
            var completeUrl = GlobalVariable.BASE_URL + 'save_datas';
            return this._http.post(completeUrl, body, {headers: headers})
                .map(response => response)
                .catch(error => Observable.throw(error.json()));
        }
     }
// }