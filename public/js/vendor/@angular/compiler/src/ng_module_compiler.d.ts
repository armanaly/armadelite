import { CompileNgModuleMetadata, CompileProviderMetadata } from './compile_metadata';
<<<<<<< Updated upstream
import { CompileReflector } from './compile_reflector';
import { OutputContext } from './util';
=======
import * as o from './output/output_ast';
/**
 * This is currently not read, but will probably be used in the future.
 * We keep it as we already pass it through all the rigth places...
 */
export declare class ComponentFactoryDependency {
    compType: any;
    constructor(compType: any);
}
>>>>>>> Stashed changes
export declare class NgModuleCompileResult {
    ngModuleFactoryVar: string;
    constructor(ngModuleFactoryVar: string);
}
export declare class NgModuleCompiler {
    private reflector;
    constructor(reflector: CompileReflector);
    compile(ctx: OutputContext, ngModuleMeta: CompileNgModuleMetadata, extraProviders: CompileProviderMetadata[]): NgModuleCompileResult;
    createStub(ctx: OutputContext, ngModuleReference: any): void;
    private _createNgModuleFactory(ctx, reference, value);
}
