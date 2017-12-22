import {Injectable} from "@angular/core";
import { GlobalVariable } from "../../global";
import {Http, Headers, RequestOptions} from "@angular/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class OffreService {

    constructor (private _http: Http) {}

    makeOffer(offre_rachat, id){
        console.log(offre_rachat);
        let token = localStorage.getItem("token");
        let body = {"offre_rachat": offre_rachat, "_id": id, "token": token }

        const headers = new Headers({'Content-Type': 'application/json'});
        var completeUrl = GlobalVariable.BASE_URL + 'make_offer';
        return this._http.post(completeUrl, JSON.stringify(body), {headers: headers})
            .map(response => response)
            .catch(error => Observable.throw(error.json()));
    }

    saveBuyingPrice(price, id){
        let token = localStorage.getItem("token");
        let body = {"price": price, "_id": id, "token": token }

        const headers = new Headers({'Content-Type': 'application/json'});
        var completeUrl = GlobalVariable.BASE_URL + 'save_buying_price';
        return this._http.post(completeUrl, JSON.stringify(body), {headers: headers})
            .map(response => response)
            .catch(error => Observable.throw(error.json()));
    }

    saveSellingPrice(price, id){
        let token = localStorage.getItem("token");
        let body = {"price": price, "_id": id, "token": token }

        const headers = new Headers({'Content-Type': 'application/json'});
        var completeUrl = GlobalVariable.BASE_URL + 'save_selling_price';
        return this._http.post(completeUrl, JSON.stringify(body), {headers: headers})
            .map(response => response)
            .catch(error => Observable.throw(error.json()));
    }


}