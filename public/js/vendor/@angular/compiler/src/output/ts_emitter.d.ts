import { EmitterVisitorContext, OutputEmitter } from './abstract_emitter';
import * as o from './output_ast';
export declare function debugOutputAstAsTypeScript(ast: o.Statement | o.Expression | o.Type | any[]): string;
export declare class TypeScriptEmitter implements OutputEmitter {
<<<<<<< Updated upstream
    emitStatementsAndContext(srcFilePath: string, genFilePath: string, stmts: o.Statement[], preamble?: string, emitSourceMaps?: boolean): {
        sourceText: string;
        context: EmitterVisitorContext;
    };
    emitStatements(srcFilePath: string, genFilePath: string, stmts: o.Statement[], preamble?: string): string;
=======
    private _importResolver;
    constructor(_importResolver: ImportResolver);
    emitStatements(srcFilePath: string, genFilePath: string, stmts: o.Statement[], exportedVars: string[], preamble?: string): string;
>>>>>>> Stashed changes
}
