import {Component} from '@angular/core'
import {FormProfile} from '../profile/formProfile'
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {FormService} from "../components/form.service";
//import {ControlGroup} from "../../../public/js/vendor/@angular/common/esm/src/forms-deprecated/model";
import {ProfileService} from "./profile.service";
//import {ControlGroup, Control} from "@angular/common";

@Component({
    selector: 'profile',
    template: `
<div class="panel panel-default">
        <div class="panel-heading panel-heading-custom">PROFILE </div>
        <div class="panel-body">
        <section class="col-md-8 col-md-offset-2">
            <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="name">Nom</label>
                    <input formControlName="lastName" type="text" id="name" class="form-control">
                    <p *ngIf="registerForm.controls.lastName.errors">This field is required!</p>
                </div>
                <div class="form-group">
                    <label for="email">Mail</label>
                    <input formControlName="email" type="email" id="email" class="form-control">
                </div>
                <div class="form-group">
                    <label for="post_code">Code postal</label>
                    <input formControlName="post_code" type="number" id="post_code" class="form-control">
                </div>
                <div class="form-group">
                    <label for="phone">Numéro de téléphone</label>
                    <input formControlName="phone" type="number" id="phone" class="form-control">
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="!registerForm.valid">Valider</button>
            </form>
        </section>
        </div>
</div>
`
})

export class ProfileComponent {
    //public myForm = new FormProfile(0,'','')
  // registerForm: ControlGroup;

    registerForm: FormGroup;

    constructor(private _fb: FormBuilder, public _formService: FormService, private _profileService: ProfileService) {  //

    // this.fs.modeleSelected;
    }





    ngOnInit() {
       // console.log(this._formService.modeleSelected);
//console.log(this._formService);
        this.registerForm = this._fb.group({
            lastName: ['', Validators.required],
            post_code: ['', Validators.required],
            email: ['', Validators.compose([
                Validators.required//,
                // this.isEmail
            ])],
            phone: ['', Validators.required]
        })


        // this.myForm = this._fb.group({
        //     name: ['', Validators.required],
        //     post_code: ['', Validators.required],
        //     email: ['', Validators.compose([
        //         Validators.required//,
        //        // this.isEmail
        //     ])]
        // });
    }

    onSubmit() {
       // console.log(this.myForm.email);

        //
        // this._formService.email = this.registerForm.value.email;
        // this._formService.name = this.registerForm.value.lastName;
        // this._formService.post_code = this.registerForm.value.post_code;
        // this._formService.telephone =  this.registerForm.value.phone;
        // this._formService.dateDemande = new Date();
//    console.log(this._formService);
        this._profileService.saveDemand(this._formService)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            )

        //const profile = new FormProfile(this.registerForm.value.lastName;, tthis.registerForm.value.post_code, this.registerForm.value.lastName;)
        //console.log(profile);
    }



    // private isEmail(control: Control): {[s: string]: boolean} {
    //     if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
    //         return {invalidMail: true};
    //     }
    // }
}