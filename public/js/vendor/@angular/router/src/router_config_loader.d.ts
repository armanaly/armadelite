/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
<<<<<<< Updated upstream
import { Compiler, InjectionToken, Injector, NgModuleFactoryLoader } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadedRouterConfig, Route } from './config';
=======
import { Compiler, InjectionToken, Injector, NgModuleFactoryLoader, NgModuleRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Route } from './config';
>>>>>>> Stashed changes
/**
 * @docsNotRequired
 * @experimental
 */
export declare const ROUTES: InjectionToken<Route[][]>;
<<<<<<< Updated upstream
=======
export declare class LoadedRouterConfig {
    routes: Route[];
    module: NgModuleRef<any>;
    constructor(routes: Route[], module: NgModuleRef<any>);
}
>>>>>>> Stashed changes
export declare class RouterConfigLoader {
    private loader;
    private compiler;
    private onLoadStartListener;
    private onLoadEndListener;
    constructor(loader: NgModuleFactoryLoader, compiler: Compiler, onLoadStartListener?: (r: Route) => void, onLoadEndListener?: (r: Route) => void);
    load(parentInjector: Injector, route: Route): Observable<LoadedRouterConfig>;
    private loadModuleFactory(loadChildren);
}
