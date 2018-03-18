/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
<<<<<<< Updated upstream
import { NgModule, Type } from '@angular/core';
import { CompileReflector } from './compile_reflector';
=======
import { NgModule, Type, ɵReflectorReader } from '@angular/core';
>>>>>>> Stashed changes
/**
 * Resolves types to {@link NgModule}.
 */
export declare class NgModuleResolver {
    private _reflector;
<<<<<<< Updated upstream
    constructor(_reflector: CompileReflector);
=======
    constructor(_reflector?: ɵReflectorReader);
>>>>>>> Stashed changes
    isNgModule(type: any): boolean;
    resolve(type: Type<any>, throwIfNotFound?: boolean): NgModule | null;
}
