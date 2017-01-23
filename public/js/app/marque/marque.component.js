"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const marque_service_1 = require("./marque.service");
let MarqueComponent = class MarqueComponent {
    constructor(_marqueService) {
        this._marqueService = _marqueService;
        this.controllerVariable = '';
    }
    ngOnInit() {
        this._marqueService.getMarques()
            .subscribe(marqueReturn => {
            this.marques = marqueReturn;
            this._marqueService.marques = marqueReturn;
            this.marques.sort();
        }, error => console.log(error));
    }
};
MarqueComponent = __decorate([
    core_1.Component({
        selector: 'choose-marque',
        template: `
          <div class="panel panel-default" align="center">
               <div class="panel-heading panel-heading-custom"> 
                    VEUILLEZ SELECTIONNER LA MARQUE DE VOTRE VEHICULE 
              </div>
              <div class="panel-body panel-body-custom">
                <section class="col-md-8 col-md-offset-2">
                    <article class="panel panel-default">
                        <div class="panel-body">       
                            <div class="row">
                                    <ul class="items">
                                            <li *ngFor="let marque of marques">
                                                    <a [routerLink]="['/details', marque.name]"> <img src="{{marque.url}} " />  </a>       
                                            </li>
                                    </ul>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </div>
     `
    }), 
    __metadata('design:paramtypes', [marque_service_1.MarqueService])
], MarqueComponent);
exports.MarqueComponent = MarqueComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcnF1ZS9tYXJxdWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBZ0MsZUFDaEMsQ0FBQyxDQUQ4QztBQUUvQyxpQ0FBNkIsa0JBQWtCLENBQUMsQ0FBQTtBQTRCaEQ7SUFLRSxZQUFtQixjQUE2QjtRQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUQ5Qyx1QkFBa0IsR0FBRyxFQUFFLENBQUM7SUFDeUIsQ0FBQztJQUVsRCxRQUFRO1FBRUwsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUU7YUFDdEIsU0FBUyxDQUNGLFlBQVk7WUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixDQUFDLEVBQ0QsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQ2xDLENBQUM7SUFDVixDQUFDO0FBR1QsQ0FBQztBQS9DRDtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXFCUjtLQUNMLENBQUM7O21CQUFBO0FBRVcsdUJBQWUsa0JBcUIzQixDQUFBIiwiZmlsZSI6Im1hcnF1ZS9tYXJxdWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgTWFycXVlfSBmcm9tIFwiLi9tYXJxdWVcIjtcclxuaW1wb3J0IHsgTWFycXVlU2VydmljZX0gZnJvbSBcIi4vbWFycXVlLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjaG9vc2UtbWFycXVlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIFZFVUlMTEVaIFNFTEVDVElPTk5FUiBMQSBNQVJRVUUgREUgVk9UUkUgVkVISUNVTEUgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHkgcGFuZWwtYm9keS1jdXN0b21cIj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgbWFycXVlIG9mIG1hcnF1ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2RldGFpbHMnLCBtYXJxdWUubmFtZV1cIj4gPGltZyBzcmM9XCJ7e21hcnF1ZS51cmx9fSBcIiAvPiAgPC9hPiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hcnF1ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgbWFycXVlcyA6IE1hcnF1ZVtdO1xyXG5cclxuICAgIGNvbnRyb2xsZXJWYXJpYWJsZSA9ICcnO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfbWFycXVlU2VydmljZTogTWFycXVlU2VydmljZSkge31cclxuICBcclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgICAgIHRoaXMuX21hcnF1ZVNlcnZpY2UuZ2V0TWFycXVlcygpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJxdWVSZXR1cm4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFycXVlcyA9IG1hcnF1ZVJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXJxdWVTZXJ2aWNlLm1hcnF1ZXMgPSBtYXJxdWVSZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJxdWVzLnNvcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4iXX0=
