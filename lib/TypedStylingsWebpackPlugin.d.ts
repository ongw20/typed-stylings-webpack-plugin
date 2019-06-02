import { Preprocessor } from './Preprocessor';
export interface Options {
    asyncHook: string;
    includePaths: string | string[];
    nodeModulesPath?: string;
    exclude?: RegExp;
    preProcessors: Preprocessor[];
    dtsOptions: object;
    cleanup: boolean;
}
export declare class TypedStylingsWebpackPlugin {
    private asyncHook;
    private includePaths;
    private nodeModulesPath;
    private exclude;
    private preProcessors;
    private dtsOptions;
    private dtsCreator;
    private timestampCache;
    private cleanup;
    constructor(options: Options);
    apply(compiler: any): void;
    private cleanupTypings;
    private getModifiedFiles;
    private walkSync;
    private getFileContentAsCss;
}
