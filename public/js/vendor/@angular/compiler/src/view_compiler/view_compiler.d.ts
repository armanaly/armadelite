import { CompileDirectiveMetadata, CompilePipeSummary } from '../compile_metadata';
import { CompileReflector } from '../compile_reflector';
import * as o from '../output/output_ast';
import { TemplateAst } from '../template_parser/template_ast';
<<<<<<< Updated upstream
import { OutputContext } from '../util';
=======
>>>>>>> Stashed changes
export declare class ViewCompileResult {
    viewClassVar: string;
    rendererTypeVar: string;
<<<<<<< Updated upstream
    constructor(viewClassVar: string, rendererTypeVar: string);
}
export declare class ViewCompiler {
    private _reflector;
    constructor(_reflector: CompileReflector);
    compileComponent(outputCtx: OutputContext, component: CompileDirectiveMetadata, template: TemplateAst[], styles: o.Expression, usedPipes: CompilePipeSummary[]): ViewCompileResult;
=======
    constructor(statements: o.Statement[], viewClassVar: string, rendererTypeVar: string);
}
export declare class ViewCompiler {
    private _genConfigNext;
    private _schemaRegistry;
    constructor(_genConfigNext: CompilerConfig, _schemaRegistry: ElementSchemaRegistry);
    compileComponent(component: CompileDirectiveMetadata, template: TemplateAst[], styles: o.Expression, usedPipes: CompilePipeSummary[]): ViewCompileResult;
>>>>>>> Stashed changes
}
