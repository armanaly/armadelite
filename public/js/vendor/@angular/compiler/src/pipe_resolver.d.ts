/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
<<<<<<< Updated upstream
import { Pipe, Type } from '@angular/core';
import { CompileReflector } from './compile_reflector';
=======
import { Pipe, Type, ɵReflectorReader } from '@angular/core';
>>>>>>> Stashed changes
/**
 * Resolve a `Type` for {@link Pipe}.
 *
 * This interface can be overridden by the application developer to create custom behavior.
 *
 * See {@link Compiler}
 */
export declare class PipeResolver {
    private _reflector;
<<<<<<< Updated upstream
    constructor(_reflector: CompileReflector);
=======
    constructor(_reflector?: ɵReflectorReader);
>>>>>>> Stashed changes
    isPipe(type: Type<any>): boolean;
    /**
     * Return {@link Pipe} for a given `Type`.
     */
    resolve(type: Type<any>, throwIfNotFound?: boolean): Pipe | null;
}
