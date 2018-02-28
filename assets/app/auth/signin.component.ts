import {Component, OnInit} from '@angular/core'
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {AuthService} from "./auth.service";
import {User} from "./user.model";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
    selector: 'app-signin',
    template: `
        <div class="col-md-8 col-md-offset-2">
             <div class="row">
                <div align="center" *ngIf="this.appName == 'ballet'" >    
                    <img class="img-thumbnail"  src="http://res.cloudinary.com/htamml3fv/image/upload/v1505394543/balletLogo_pdo80u.jpg" width="240" height="160">
                </div>
            </div>
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
            <button class="btn btn-primary" (click)="onSubmit()">SEND</button>
        </div>
    `
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;
    response = {"logged": true}
    constructor(private _authService: AuthService, private router: Router,private route: ActivatedRoute) {}
    appName;
    private sub: any;
    onSubmit() {
        // console.log(this.myForm);
        const credentials = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.appName
        );
        this._authService.signin(credentials)
            .subscribe(
                data => {
                    console.log(data)
                    this.response = data;
                    localStorage.setItem('token', data.token.$binary);
                    localStorage.setItem('userId', data.user_id.$oid);
                    localStorage.setItem('app', this.appName);
                    if (data.logged){
                        // console.log(this.response)
                        this.router.navigate(['/menu', this.appName]);
                    }


                    },

                error => console.error(error)
            );
        this.myForm.reset();
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.appName = params['app']; // (+) converts string 'id' to a number

            // In a real app: dispatch action to load the details here.
        });
        // console.log(this.appName)
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

