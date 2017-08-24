import {Component, OnInit} from '@angular/core'
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {AuthService} from "./auth.service";
import {User} from "./user.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-signin',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
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
            <div class="alert alert-danger" role="alert" *ngIf="!this.response.logged">{{this.response.message}}</div>
            <button class="btn btn-primary" (click)="onSubmit()">Envoyer</button>
        </div>
    `
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;
    response = {}
    constructor(private _authService: AuthService, private _router: Router) {}

    onSubmit() {
        console.log(this.myForm);
        const credentials = new User(
            this.myForm.value.email,
            this.myForm.value.password
        );
        this._authService.signin(credentials)
            .subscribe(
                data => {
                    console.log(data)
                    this.response = data;
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.user_id);
                    if (data.logged){
                        this._router.navigateByUrl('/menu')
                    }


                    console.log(this.response)},

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

