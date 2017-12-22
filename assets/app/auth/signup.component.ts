import {Component, OnInit} from '@angular/core'
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {AuthService} from "./auth.service";
import {User} from "./user.model";

@Component({
    selector: 'app-signup',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="firstName">Prénom</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        class="form-control"
                        formControlName="firstName">
                </div>
                <div class="form-group">
                    <label for="lastName">Nom</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        class="form-control"
                        formControlName="lastName">
                </div>
                <div class="form-group">
                    <label for="email">Mail</label>
                    <input 
                        type="email" 
                        id="email" 
                        class="form-control"
                        formControlName="email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        class="form-control"
                        formControlName="password">
                </div>
            </form>
            <button class="btn btn-primary" (click)="onSubmit()">Envoyer</button>
        </div>
    `
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;

    constructor(private _authService: AuthService) {}

    onSubmit() {
        console.log(this.myForm);
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            'ballet',
            this.myForm.value.firstName,
            this.myForm.value.lastName
        );
        this._authService.signup(user)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')]
            ),
            password: new FormControl(null, Validators.required)

        });
    }
}

