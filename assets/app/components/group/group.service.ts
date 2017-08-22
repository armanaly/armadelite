import {Injectable} from "@angular/core";
import { GlobalVariable } from "../../global";
import {Http, Headers, RequestOptions} from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class GroupService {

    constructor (private _http: Http) {}

    getGroups(rec_id, course_type, stage){

        let query = "id="+rec_id+"&course="+course_type+"&stage="+stage;
        let headers= new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        var completeUrl = GlobalVariable.BASE_URL+'get_groups?'+query;
        return this._http.get(completeUrl)
            .map(response =>
            {
                console.log(response);
                let data = response.json();
                console.log(data);
                return data
            })
            .catch(error => Observable.throw(error))
    }

    changeGroup(groupName, userId){
        let body = JSON.stringify({"groupName" : groupName, "_id": userId});
        const headers = new Headers({'Content-Type': 'application/json'});
        var completeUrl = GlobalVariable.BASE_URL + 'set_group_to_user';
        return this._http.post(completeUrl, body, {headers: headers})
            .map(response => response)
            .catch(error => Observable.throw(error.json()));

    }
}