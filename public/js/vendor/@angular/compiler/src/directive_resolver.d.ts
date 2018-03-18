/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
<<<<<<< Updated upstream
import { Directive, Type } from '@angular/core';
import { CompileReflector } from './compile_reflector';
export declare class DirectiveResolver {
    private _reflector;
    constructor(_reflector: CompileReflector);
=======
import { Directive, Type, ɵReflectorReader } from '@angular/core';
export declare class DirectiveResolver {
    private _reflector;
    constructor(_reflector?: ɵReflectorReader);
>>>>>>> Stashed changes
    isDirective(type: Type<any>): boolean;
    /**
     * Return {@link Directive} for a given `Type`.
     */
    resolve(type: Type<any>): Directive;
    resolve(type: Type<any>, throwIfNotFound: true): Directive;
    resolve(type: Type<any>, throwIfNotFound: boolean): Directive | null;
    private _mergeWithPropertyMetadata(dm, propertyMetadata, directiveType);
    private _extractPublicName(def);
    private _dedupeBindings(bindings);
    private _merge(directive, inputs, outputs, host, queries, directiveType);
}
<<<<<<< Updated upstream
export declare function findLast<T>(arr: T[], condition: (value: T) => boolean): T | null;
=======
export declare function findLast<T>(arr: T[], condition: (value: T) => boolean): T;
>>>>>>> Stashed changes
