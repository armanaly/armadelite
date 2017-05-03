/*
    This file is the form of the application. Every single data will be created here. The variables will be created dynamically through the step.service config file.
 */

import { Injectable } from "@angular/core";
import {StepService} from "../Engine/step.service";
@Injectable()
export class FormService {

    constructor(private _stepService: StepService){}
    // ICI JE VAIS RAMENER this._stepService et de là je créée à la volée les données de mon formulaire de config et je le mets dans les variable du service de formulaire (form.service.ts)
    arraySteps = [];

    current_step_id = 1;

    init(){

        // console.log("LIST of STEPS");
        // console.log(this._stepService.step);
        //this._stepService.steps.sort();
        let keyExists = [];
        for (let i of this._stepService.steps) {
            // console.log(i.step_id);
            // console.log(i.type);

          //  let step_id = i.step_id;
            if (i.type == "click_selection" || i.type == 'image_selection' || i.type == "multi_selection") {

                let keyName = i.configuration.form_value.name;

                // J'ajoute une seule fois la variable qui va recevoir le formulaire
                if (!keyExists.includes(keyName)){
                    this.arraySteps.push({[keyName]: ""});
                    keyExists.push(keyName);
                }


                // }
                // TODO voir si il faut relire les form_value dans ce cas car c'est un tableau et plus une variable
            }

            if (i.type == "field_panel") {
                let keysList = [];
                for (let j of i.configuration.form_values) {
                        let keyName = j.name;
                        keysList.push({[keyName]: ""})
                }
                this.arraySteps.push({"nom": i.name ,[i.name]: keysList});
            }

        }
            // console.log(this);
        }
}