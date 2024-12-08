import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { AbstractName } from "./AbstractName";
import { MethodFailedException } from "../common/MethodFailedException";

export class StringName extends AbstractName {

    protected name: string = "";
    protected noComponents: number = 0;

    constructor(source: string, delimiter?: string) {
        super();
        this.name = source;
        this.noComponents = this.name.length
    }

    public clone(): Name {
       return super.clone();
    }

    public asString(delimiter: string = this.delimiter): string {
        return super.asString(delimiter);
    }

    public toString(): string {
        return super.toString();
    }

    public asDataString(): string {
        return super.asDataString();
    }

    public isEqual(other: Name): boolean {
        return super.isEqual(other);
    }

    public getHashCode(): number {
        return super.getHashCode();
    }

    public isEmpty(): boolean {
        return super.isEmpty();
    }

    public getNoComponents(): number {

        const array = this.splitByDelimiter(this.name,this.delimiter);

        return array.length;
    }

    public getComponent(i: number): string {

        const array = this.splitByDelimiter(this.name,this.delimiter);

        return array[i];
    }

    public setComponent(i: number, c: string) {
        let array = this.splitByDelimiter(this.name,this.delimiter);
        array[i] = c;
        this.name = this.arrayToString(array);
    }

    public insert(i: number, c: string) {

        const oldNoComponents: number = this.getNoComponents();
        this.doInsert(i, c);

        const condition: boolean = this.getNoComponents() == (oldNoComponents + 1);
    }

    private doInsert(i: number, c: string) {
        let array = this.splitByDelimiter(this.name, this.delimiter);
        array.splice(i, 0, c);
        this.name = this.arrayToString(array);
    }

    public append(c: string) {

        this.name += (this.delimiter + c);
    }

    public remove(i: number) {

        let array = this.splitByDelimiter(this.name,this.delimiter);
        array.splice(i,1)
        this.name = this.arrayToString(array);
    }

    public concat(other: Name): void {
        super.concat(other);
    }

    private splitByDelimiter(input:string,delimiter:string):string[]{
        return input.split(delimiter)
    }
    private arrayToString(array:string[],delimiter: string = this.delimiter): string {
        let name: string = ''

        array.forEach(element => {
            if (name.length == 0){
                name += element
            }else{
            name += delimiter
            name += element
            }
        });

        return name
    }

}