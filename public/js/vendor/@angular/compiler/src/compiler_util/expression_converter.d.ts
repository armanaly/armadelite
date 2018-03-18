/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as cdAst from '../expression_parser/ast';
import * as o from '../output/output_ast';
export declare class EventHandlerVars {
    static event: o.ReadVarExpr;
}
export interface LocalResolver {
<<<<<<< Updated upstream
    getLocal(name: string): o.Expression | null;
=======
    getLocal(name: string): o.Expression;
>>>>>>> Stashed changes
}
export declare class ConvertActionBindingResult {
    stmts: o.Statement[];
    allowDefault: o.ReadVarExpr;
    constructor(stmts: o.Statement[], allowDefault: o.ReadVarExpr);
}
/**
 * Converts the given expression AST into an executable output AST, assuming the expression is
 * used in an action binding (e.g. an event handler).
 */
<<<<<<< Updated upstream
export declare function convertActionBinding(localResolver: LocalResolver | null, implicitReceiver: o.Expression, action: cdAst.AST, bindingId: string): ConvertActionBindingResult;
=======
export declare function convertActionBinding(localResolver: LocalResolver, implicitReceiver: o.Expression, action: cdAst.AST, bindingId: string): ConvertActionBindingResult;
>>>>>>> Stashed changes
export interface BuiltinConverter {
    (args: o.Expression[]): o.Expression;
}
export interface BuiltinConverterFactory {
    createLiteralArrayConverter(argCount: number): BuiltinConverter;
<<<<<<< Updated upstream
    createLiteralMapConverter(keys: {
        key: string;
        quoted: boolean;
    }[]): BuiltinConverter;
=======
    createLiteralMapConverter(keys: string[]): BuiltinConverter;
>>>>>>> Stashed changes
    createPipeConverter(name: string, argCount: number): BuiltinConverter;
}
export declare function convertPropertyBindingBuiltins(converterFactory: BuiltinConverterFactory, ast: cdAst.AST): cdAst.AST;
export declare class ConvertPropertyBindingResult {
    stmts: o.Statement[];
    currValExpr: o.Expression;
    constructor(stmts: o.Statement[], currValExpr: o.Expression);
}
/**
 * Converts the given expression AST into an executable output AST, assuming the expression
 * is used in property binding. The expression has to be preprocessed via
 * `convertPropertyBindingBuiltins`.
 */
<<<<<<< Updated upstream
export declare function convertPropertyBinding(localResolver: LocalResolver | null, implicitReceiver: o.Expression, expressionWithoutBuiltins: cdAst.AST, bindingId: string): ConvertPropertyBindingResult;
=======
export declare function convertPropertyBinding(localResolver: LocalResolver, implicitReceiver: o.Expression, expressionWithoutBuiltins: cdAst.AST, bindingId: string): ConvertPropertyBindingResult;
>>>>>>> Stashed changes
export declare function temporaryDeclaration(bindingId: string, temporaryNumber: number): o.Statement;
