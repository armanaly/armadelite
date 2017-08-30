import {Http, Headers, RequestOptions} from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import {GlobalVariable} from "../global";


@Injectable()
export class PhotosService {


    constructor (private _http: Http) {}

    upload(photo): Observable<any> {
        var completeUrl = GlobalVariable.BASE_URL+'load_image';
       // let headers = new Headers({'Content-Type': 'application/json'});
       console.log(photo);
       // var tmpImg = {"path": photo};
        //let bodyString = JSON.stringify(tmpImg);
     //   let options = new RequestOptions({ headers: headers});
      //  console.log(bodyString);
        console.log("apres body");


        return this._http.post(completeUrl, photo)
             .map(response => response.json())
             .catch(error => Observable.throw(error.json()));


        // //return this._http.get('sellmycarfast.herokuapp.com/marque')
        //     .catch(error => Observable.throw(error));
    }

}