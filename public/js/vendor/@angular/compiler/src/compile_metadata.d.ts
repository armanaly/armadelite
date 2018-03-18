/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
<<<<<<< Updated upstream
import { ChangeDetectionStrategy, ComponentFactory, RendererType2, SchemaMetadata, Type, ViewEncapsulation } from '@angular/core';
import { StaticSymbol } from './aot/static_symbol';
import { LifecycleHooks } from './lifecycle_reflector';
export declare function identifierName(compileIdentifier: CompileIdentifierMetadata | null | undefined): string | null;
=======
import { ChangeDetectionStrategy, ComponentFactory, RendererType2, SchemaMetadata, Type, ViewEncapsulation, ɵLifecycleHooks } from '@angular/core';
import { StaticSymbol } from './aot/static_symbol';
export declare class CompileAnimationEntryMetadata {
    name: string;
    definitions: CompileAnimationStateMetadata[];
    constructor(name?: string, definitions?: CompileAnimationStateMetadata[]);
}
export declare abstract class CompileAnimationStateMetadata {
}
export declare class CompileAnimationStateDeclarationMetadata extends CompileAnimationStateMetadata {
    stateNameExpr: string;
    styles: CompileAnimationStyleMetadata;
    constructor(stateNameExpr: string, styles: CompileAnimationStyleMetadata);
}
export declare class CompileAnimationStateTransitionMetadata extends CompileAnimationStateMetadata {
    stateChangeExpr: string | StaticSymbol | ((stateA: string, stateB: string) => boolean);
    steps: CompileAnimationMetadata;
    constructor(stateChangeExpr: string | StaticSymbol | ((stateA: string, stateB: string) => boolean), steps: CompileAnimationMetadata);
}
export declare abstract class CompileAnimationMetadata {
}
export declare class CompileAnimationKeyframesSequenceMetadata extends CompileAnimationMetadata {
    steps: CompileAnimationStyleMetadata[];
    constructor(steps?: CompileAnimationStyleMetadata[]);
}
export declare class CompileAnimationStyleMetadata extends CompileAnimationMetadata {
    offset: number;
    styles: Array<string | {
        [key: string]: string | number;
    }>;
    constructor(offset: number, styles?: Array<string | {
        [key: string]: string | number;
    }>);
}
export declare class CompileAnimationAnimateMetadata extends CompileAnimationMetadata {
    timings: string | number;
    styles: CompileAnimationStyleMetadata | CompileAnimationKeyframesSequenceMetadata;
    constructor(timings?: string | number, styles?: CompileAnimationStyleMetadata | CompileAnimationKeyframesSequenceMetadata);
}
export declare abstract class CompileAnimationWithStepsMetadata extends CompileAnimationMetadata {
    steps: CompileAnimationMetadata[];
    constructor(steps?: CompileAnimationMetadata[]);
}
export declare class CompileAnimationSequenceMetadata extends CompileAnimationWithStepsMetadata {
    constructor(steps?: CompileAnimationMetadata[]);
}
export declare class CompileAnimationGroupMetadata extends CompileAnimationWithStepsMetadata {
    constructor(steps?: CompileAnimationMetadata[]);
}
export declare function identifierName(compileIdentifier: CompileIdentifierMetadata): string;
>>>>>>> Stashed changes
export declare function identifierModuleUrl(compileIdentifier: CompileIdentifierMetadata): string;
export declare function viewClassName(compType: any, embeddedTemplateIndex: number): string;
export declare function rendererTypeName(compType: any): string;
export declare function hostViewClassName(compType: any): string;
<<<<<<< Updated upstream
=======
export declare function dirWrapperClassName(dirType: any): string;
>>>>>>> Stashed changes
export declare function componentFactoryName(compType: any): string;
export interface ProxyClass {
    setDelegate(delegate: any): void;
}
export interface CompileIdentifierMetadata {
    reference: any;
}
export declare enum CompileSummaryKind {
    Pipe = 0,
    Directive = 1,
    NgModule = 2,
    Injectable = 3,
}
/**
 * A CompileSummary is the data needed to use a directive / pipe / module
 * in other modules / components. However, this data is not enough to compile
 * the directive / module itself.
 */
export interface CompileTypeSummary {
    summaryKind: CompileSummaryKind | null;
    type: CompileTypeMetadata;
}
export interface CompileDiDependencyMetadata {
    isAttribute?: boolean;
    isSelf?: boolean;
    isHost?: boolean;
    isSkipSelf?: boolean;
    isOptional?: boolean;
    isValue?: boolean;
    token?: CompileTokenMetadata;
    value?: any;
}
export interface CompileProviderMetadata {
    token: CompileTokenMetadata;
    useClass?: CompileTypeMetadata;
    useValue?: any;
    useExisting?: CompileTokenMetadata;
    useFactory?: CompileFactoryMetadata;
    deps?: CompileDiDependencyMetadata[];
    multi?: boolean;
}
export interface CompileFactoryMetadata extends CompileIdentifierMetadata {
    diDeps: CompileDiDependencyMetadata[];
    reference: any;
}
export declare function tokenName(token: CompileTokenMetadata): string | null;
export declare function tokenReference(token: CompileTokenMetadata): any;
export interface CompileTokenMetadata {
    value?: any;
    identifier?: CompileIdentifierMetadata | CompileTypeMetadata;
}
/**
 * Metadata regarding compilation of a type.
 */
export interface CompileTypeMetadata extends CompileIdentifierMetadata {
    diDeps: CompileDiDependencyMetadata[];
    lifecycleHooks: ɵLifecycleHooks[];
    reference: any;
}
export interface CompileQueryMetadata {
    selectors: Array<CompileTokenMetadata>;
    descendants: boolean;
    first: boolean;
    propertyName: string;
    read: CompileTokenMetadata;
}
/**
 * Metadata about a stylesheet
 */
export declare class CompileStylesheetMetadata {
    moduleUrl: string | null;
    styles: string[];
    styleUrls: string[];
    constructor({moduleUrl, styles, styleUrls}?: {
        moduleUrl?: string;
        styles?: string[];
        styleUrls?: string[];
    });
}
/**
 * Summary Metadata regarding compilation of a template.
 */
export interface CompileTemplateSummary {
    ngContentSelectors: string[];
    encapsulation: ViewEncapsulation | null;
}
/**
 * Metadata regarding compilation of a template.
 */
export declare class CompileTemplateMetadata {
<<<<<<< Updated upstream
    encapsulation: ViewEncapsulation | null;
    template: string | null;
    templateUrl: string | null;
=======
    encapsulation: ViewEncapsulation;
    template: string;
    templateUrl: string;
>>>>>>> Stashed changes
    isInline: boolean;
    styles: string[];
    styleUrls: string[];
    externalStylesheets: CompileStylesheetMetadata[];
    animations: any[];
    ngContentSelectors: string[];
<<<<<<< Updated upstream
    interpolation: [string, string] | null;
    preserveWhitespaces: boolean;
    constructor({encapsulation, template, templateUrl, styles, styleUrls, externalStylesheets, animations, ngContentSelectors, interpolation, isInline, preserveWhitespaces}: {
        encapsulation: ViewEncapsulation | null;
        template: string | null;
        templateUrl: string | null;
        styles: string[];
        styleUrls: string[];
        externalStylesheets: CompileStylesheetMetadata[];
        ngContentSelectors: string[];
        animations: any[];
        interpolation: [string, string] | null;
        isInline: boolean;
        preserveWhitespaces: boolean;
=======
    interpolation: [string, string];
    constructor({encapsulation, template, templateUrl, styles, styleUrls, externalStylesheets, animations, ngContentSelectors, interpolation, isInline}?: {
        encapsulation?: ViewEncapsulation;
        template?: string;
        templateUrl?: string;
        styles?: string[];
        styleUrls?: string[];
        externalStylesheets?: CompileStylesheetMetadata[];
        ngContentSelectors?: string[];
        animations?: any[];
        interpolation?: [string, string];
        isInline?: boolean;
>>>>>>> Stashed changes
    });
    toSummary(): CompileTemplateSummary;
}
export interface CompileEntryComponentMetadata {
    componentType: any;
    componentFactory: StaticSymbol | ComponentFactory<any>;
}
export interface CompileDirectiveSummary extends CompileTypeSummary {
    type: CompileTypeMetadata;
    isComponent: boolean;
    selector: string | null;
    exportAs: string | null;
    inputs: {
        [key: string]: string;
    };
    outputs: {
        [key: string]: string;
    };
    hostListeners: {
        [key: string]: string;
    };
    hostProperties: {
        [key: string]: string;
    };
    hostAttributes: {
        [key: string]: string;
    };
    providers: CompileProviderMetadata[];
    viewProviders: CompileProviderMetadata[];
    queries: CompileQueryMetadata[];
    viewQueries: CompileQueryMetadata[];
    entryComponents: CompileEntryComponentMetadata[];
<<<<<<< Updated upstream
    changeDetection: ChangeDetectionStrategy | null;
    template: CompileTemplateSummary | null;
    componentViewType: StaticSymbol | ProxyClass | null;
    rendererType: StaticSymbol | RendererType2 | null;
    componentFactory: StaticSymbol | ComponentFactory<any> | null;
=======
    changeDetection: ChangeDetectionStrategy;
    template: CompileTemplateSummary;
    componentViewType: StaticSymbol | ProxyClass;
    rendererType: StaticSymbol | RendererType2;
    componentFactory: StaticSymbol | ComponentFactory<any>;
>>>>>>> Stashed changes
}
/**
 * Metadata regarding compilation of a directive.
 */
export declare class CompileDirectiveMetadata {
<<<<<<< Updated upstream
    static create({isHost, type, isComponent, selector, exportAs, changeDetection, inputs, outputs, host, providers, viewProviders, queries, viewQueries, entryComponents, template, componentViewType, rendererType, componentFactory}: {
        isHost: boolean;
        type: CompileTypeMetadata;
        isComponent: boolean;
        selector: string | null;
        exportAs: string | null;
        changeDetection: ChangeDetectionStrategy | null;
        inputs: string[];
        outputs: string[];
        host: {
            [key: string]: string;
        };
        providers: CompileProviderMetadata[];
        viewProviders: CompileProviderMetadata[];
        queries: CompileQueryMetadata[];
        viewQueries: CompileQueryMetadata[];
        entryComponents: CompileEntryComponentMetadata[];
        template: CompileTemplateMetadata;
        componentViewType: StaticSymbol | ProxyClass | null;
        rendererType: StaticSymbol | RendererType2 | null;
        componentFactory: StaticSymbol | ComponentFactory<any> | null;
=======
    static create({isHost, type, isComponent, selector, exportAs, changeDetection, inputs, outputs, host, providers, viewProviders, queries, viewQueries, entryComponents, template, componentViewType, rendererType, componentFactory}?: {
        isHost?: boolean;
        type?: CompileTypeMetadata;
        isComponent?: boolean;
        selector?: string;
        exportAs?: string;
        changeDetection?: ChangeDetectionStrategy;
        inputs?: string[];
        outputs?: string[];
        host?: {
            [key: string]: string;
        };
        providers?: CompileProviderMetadata[];
        viewProviders?: CompileProviderMetadata[];
        queries?: CompileQueryMetadata[];
        viewQueries?: CompileQueryMetadata[];
        entryComponents?: CompileEntryComponentMetadata[];
        template?: CompileTemplateMetadata;
        componentViewType?: StaticSymbol | ProxyClass;
        rendererType?: StaticSymbol | RendererType2;
        componentFactory?: StaticSymbol | ComponentFactory<any>;
>>>>>>> Stashed changes
    }): CompileDirectiveMetadata;
    isHost: boolean;
    type: CompileTypeMetadata;
    isComponent: boolean;
    selector: string | null;
    exportAs: string | null;
    changeDetection: ChangeDetectionStrategy | null;
    inputs: {
        [key: string]: string;
    };
    outputs: {
        [key: string]: string;
    };
    hostListeners: {
        [key: string]: string;
    };
    hostProperties: {
        [key: string]: string;
    };
    hostAttributes: {
        [key: string]: string;
    };
    providers: CompileProviderMetadata[];
    viewProviders: CompileProviderMetadata[];
    queries: CompileQueryMetadata[];
    viewQueries: CompileQueryMetadata[];
    entryComponents: CompileEntryComponentMetadata[];
<<<<<<< Updated upstream
    template: CompileTemplateMetadata | null;
    componentViewType: StaticSymbol | ProxyClass | null;
    rendererType: StaticSymbol | RendererType2 | null;
    componentFactory: StaticSymbol | ComponentFactory<any> | null;
    constructor({isHost, type, isComponent, selector, exportAs, changeDetection, inputs, outputs, hostListeners, hostProperties, hostAttributes, providers, viewProviders, queries, viewQueries, entryComponents, template, componentViewType, rendererType, componentFactory}: {
        isHost: boolean;
        type: CompileTypeMetadata;
        isComponent: boolean;
        selector: string | null;
        exportAs: string | null;
        changeDetection: ChangeDetectionStrategy | null;
        inputs: {
=======
    template: CompileTemplateMetadata;
    componentViewType: StaticSymbol | ProxyClass;
    rendererType: StaticSymbol | RendererType2;
    componentFactory: StaticSymbol | ComponentFactory<any>;
    constructor({isHost, type, isComponent, selector, exportAs, changeDetection, inputs, outputs, hostListeners, hostProperties, hostAttributes, providers, viewProviders, queries, viewQueries, entryComponents, template, componentViewType, rendererType, componentFactory}?: {
        isHost?: boolean;
        type?: CompileTypeMetadata;
        isComponent?: boolean;
        selector?: string;
        exportAs?: string;
        changeDetection?: ChangeDetectionStrategy;
        inputs?: {
>>>>>>> Stashed changes
            [key: string]: string;
        };
        outputs: {
            [key: string]: string;
        };
        hostListeners: {
            [key: string]: string;
        };
        hostProperties: {
            [key: string]: string;
        };
        hostAttributes: {
            [key: string]: string;
        };
<<<<<<< Updated upstream
        providers: CompileProviderMetadata[];
        viewProviders: CompileProviderMetadata[];
        queries: CompileQueryMetadata[];
        viewQueries: CompileQueryMetadata[];
        entryComponents: CompileEntryComponentMetadata[];
        template: CompileTemplateMetadata | null;
        componentViewType: StaticSymbol | ProxyClass | null;
        rendererType: StaticSymbol | RendererType2 | null;
        componentFactory: StaticSymbol | ComponentFactory<any> | null;
=======
        providers?: CompileProviderMetadata[];
        viewProviders?: CompileProviderMetadata[];
        queries?: CompileQueryMetadata[];
        viewQueries?: CompileQueryMetadata[];
        entryComponents?: CompileEntryComponentMetadata[];
        template?: CompileTemplateMetadata;
        componentViewType?: StaticSymbol | ProxyClass;
        rendererType?: StaticSymbol | RendererType2;
        componentFactory?: StaticSymbol | ComponentFactory<any>;
>>>>>>> Stashed changes
    });
    toSummary(): CompileDirectiveSummary;
}
/**
 * Construct {@link CompileDirectiveMetadata} from {@link ComponentTypeMetadata} and a selector.
 */
export declare function createHostComponentMeta(hostTypeReference: any, compMeta: CompileDirectiveMetadata, hostViewType: StaticSymbol | ProxyClass): CompileDirectiveMetadata;
export interface CompilePipeSummary extends CompileTypeSummary {
    type: CompileTypeMetadata;
    name: string;
    pure: boolean;
}
export declare class CompilePipeMetadata {
    type: CompileTypeMetadata;
    name: string;
    pure: boolean;
    constructor({type, name, pure}: {
        type: CompileTypeMetadata;
        name: string;
        pure: boolean;
    });
    toSummary(): CompilePipeSummary;
}
export interface CompileNgModuleSummary extends CompileTypeSummary {
    type: CompileTypeMetadata;
    exportedDirectives: CompileIdentifierMetadata[];
    exportedPipes: CompileIdentifierMetadata[];
    entryComponents: CompileEntryComponentMetadata[];
    providers: {
        provider: CompileProviderMetadata;
        module: CompileIdentifierMetadata;
    }[];
    modules: CompileTypeMetadata[];
}
/**
 * Metadata regarding compilation of a module.
 */
export declare class CompileNgModuleMetadata {
    type: CompileTypeMetadata;
    declaredDirectives: CompileIdentifierMetadata[];
    exportedDirectives: CompileIdentifierMetadata[];
    declaredPipes: CompileIdentifierMetadata[];
    exportedPipes: CompileIdentifierMetadata[];
    entryComponents: CompileEntryComponentMetadata[];
    bootstrapComponents: CompileIdentifierMetadata[];
    providers: CompileProviderMetadata[];
    importedModules: CompileNgModuleSummary[];
    exportedModules: CompileNgModuleSummary[];
    schemas: SchemaMetadata[];
    id: string | null;
    transitiveModule: TransitiveCompileNgModuleMetadata;
<<<<<<< Updated upstream
    constructor({type, providers, declaredDirectives, exportedDirectives, declaredPipes, exportedPipes, entryComponents, bootstrapComponents, importedModules, exportedModules, schemas, transitiveModule, id}: {
        type: CompileTypeMetadata;
        providers: CompileProviderMetadata[];
        declaredDirectives: CompileIdentifierMetadata[];
        exportedDirectives: CompileIdentifierMetadata[];
        declaredPipes: CompileIdentifierMetadata[];
        exportedPipes: CompileIdentifierMetadata[];
        entryComponents: CompileEntryComponentMetadata[];
        bootstrapComponents: CompileIdentifierMetadata[];
        importedModules: CompileNgModuleSummary[];
        exportedModules: CompileNgModuleSummary[];
        transitiveModule: TransitiveCompileNgModuleMetadata;
        schemas: SchemaMetadata[];
        id: string | null;
=======
    constructor({type, providers, declaredDirectives, exportedDirectives, declaredPipes, exportedPipes, entryComponents, bootstrapComponents, importedModules, exportedModules, schemas, transitiveModule, id}?: {
        type?: CompileTypeMetadata;
        providers?: CompileProviderMetadata[];
        declaredDirectives?: CompileIdentifierMetadata[];
        exportedDirectives?: CompileIdentifierMetadata[];
        declaredPipes?: CompileIdentifierMetadata[];
        exportedPipes?: CompileIdentifierMetadata[];
        entryComponents?: CompileEntryComponentMetadata[];
        bootstrapComponents?: CompileIdentifierMetadata[];
        importedModules?: CompileNgModuleSummary[];
        exportedModules?: CompileNgModuleSummary[];
        transitiveModule?: TransitiveCompileNgModuleMetadata;
        schemas?: SchemaMetadata[];
        id?: string;
>>>>>>> Stashed changes
    });
    toSummary(): CompileNgModuleSummary;
}
export declare class TransitiveCompileNgModuleMetadata {
    directivesSet: Set<any>;
    directives: CompileIdentifierMetadata[];
    exportedDirectivesSet: Set<any>;
    exportedDirectives: CompileIdentifierMetadata[];
    pipesSet: Set<any>;
    pipes: CompileIdentifierMetadata[];
    exportedPipesSet: Set<any>;
    exportedPipes: CompileIdentifierMetadata[];
    modulesSet: Set<any>;
    modules: CompileTypeMetadata[];
    entryComponentsSet: Set<any>;
    entryComponents: CompileEntryComponentMetadata[];
    providers: {
        provider: CompileProviderMetadata;
        module: CompileIdentifierMetadata;
    }[];
    addProvider(provider: CompileProviderMetadata, module: CompileIdentifierMetadata): void;
    addDirective(id: CompileIdentifierMetadata): void;
    addExportedDirective(id: CompileIdentifierMetadata): void;
    addPipe(id: CompileIdentifierMetadata): void;
    addExportedPipe(id: CompileIdentifierMetadata): void;
    addModule(id: CompileTypeMetadata): void;
    addEntryComponent(ec: CompileEntryComponentMetadata): void;
}
export declare class ProviderMeta {
    token: any;
    useClass: Type<any> | null;
    useValue: any;
    useExisting: any;
    useFactory: Function | null;
    dependencies: Object[] | null;
    multi: boolean;
    constructor(token: any, {useClass, useValue, useExisting, useFactory, deps, multi}: {
        useClass?: Type<any>;
        useValue?: any;
        useExisting?: any;
        useFactory?: Function | null;
        deps?: Object[] | null;
        multi?: boolean;
    });
}
export declare function flatten<T>(list: Array<T | T[]>): T[];
export declare function sourceUrl(url: string): string;
export declare function templateSourceUrl(ngModuleType: CompileIdentifierMetadata, compMeta: {
    type: CompileIdentifierMetadata;
}, templateMeta: {
    isInline: boolean;
<<<<<<< Updated upstream
    templateUrl: string | null;
=======
    templateUrl: string;
>>>>>>> Stashed changes
}): string;
export declare function sharedStylesheetJitUrl(meta: CompileStylesheetMetadata, id: number): string;
export declare function ngModuleJitUrl(moduleMeta: CompileNgModuleMetadata): string;
export declare function templateJitUrl(ngModuleType: CompileIdentifierMetadata, compMeta: CompileDirectiveMetadata): string;
