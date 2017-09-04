import {Component, Input, Output, EventEmitter} from '@angular/core'
import {StepService} from "../Engine/step.service";
import {Router, ActivatedRoute} from '@angular/router';
import {GridPanelService} from "../components/grid.service";
import {GlobalVariable} from "../global";
@Component({
    selector: 'grid-panel',
    template: `
        <div class="panel-body">
                    <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
                <li role="auth" class="active"><a href="#signin" aria-controls="signin" role="tab" data-toggle="tab">Login</a></li>
                <li role="auth"><a href="#signup" aria-controls="signup" role="tab" data-toggle="tab">S'inscrire</a></li>
            </ul>
            <div class="tab-content">  
                <div role="tabpanel" class="tab-pane active" id="signin">
                    <app-signin></app-signin>
                </div>
                <div role="tabpanel" class="tab-pane active" id="signup">
                        <app-signup></app-signup>
                </div>
            </div>
        </div>
`

})

export class AuthenticationComponent {

    constructor(private route: ActivatedRoute) {
    }

    appName = '';

    ngOnInit() {
        console.log(window);

        this.appName = this.route.snapshot.queryParams["app"];
        console.log(this.appName);
    }
}
