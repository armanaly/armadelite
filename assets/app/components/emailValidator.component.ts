import { NG_VALIDATORS, FormControl } from '@angular/forms';

export class EmailValidator {

    validator: Function;

    constructor() {}

    static checkEmail(control: FormControl) {
        let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {

            return { "Please provide a valid email": true };
        }

        return null;
    }
}