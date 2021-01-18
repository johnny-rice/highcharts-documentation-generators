/*!*
 *
 *  Copyright (C) Highsoft AS
 *
 * */
import type ImportedJSON from './JSON';
import type ProjectDoc from './ProjectDoc';
declare class OptionDoc {
    constructor(project: ProjectDoc);
    project: ProjectDoc;
    options: OptionDoc.OptionCollectionJSON;
    private getOption;
    private getOptions;
    private mergeOptions;
    private produceOptions;
    toJSON(): OptionDoc.JSON;
}
declare namespace OptionDoc {
    interface JSON extends ImportedJSON.Object {
        branch?: string;
        commit?: string;
        date?: string;
        description?: string;
        name?: string;
        options: OptionCollectionJSON;
        repository?: string;
        version?: string;
    }
    interface OptionJSON extends ImportedJSON.Object {
        name: string;
        children?: OptionCollectionJSON;
    }
    interface OptionCollectionJSON extends ImportedJSON.Object {
        [key: string]: OptionJSON;
    }
}
export default OptionDoc;
