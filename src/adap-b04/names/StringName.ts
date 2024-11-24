import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { AbstractName } from "./AbstractName";

export class StringName extends AbstractName {

    protected name: string = "";
    protected noComponents: number = 0;

    constructor(other: string, delimiter?: string) {
        super();
        this.name = other;
        this.noComponents = this.name.length
    }

    public clone(): Name {
       return super.clone();
    }

    public asString(delimiter: string = this.delimiter): string {
        this.assertIsValidDelChar(delimiter);

        return super.asString(delimiter);
    }

    public toString(): string {
        return super.toString();
    }

    public asDataString(): string {
        return super.asDataString();
    }

    public isEqual(other: Name): boolean {
        this.assertIsNotNullOrUndefined(other);

        return super.isEqual(other);
    }

    public getHashCode(): number {
        return super.getHashCode();
    }

    public isEmpty(): boolean {
        return super.isEmpty();
    }

    public getDelimiterCharacter(): string {
        let del = super.getDelimiterCharacter();

        this.assertIsValidDelChar(del);

        return del;
    }

    public getNoComponents(): number {
        this.assertIsValidDelChar(this.delimiter);

        const array = this.splitByDelimiter(this.name,this.delimiter);

        this.assertIsNotNullOrUndefined(array.length);

        return array.length;
    }

    public getComponent(i: number): string {
        this.assertIsNumberInRange(i);

        const array = this.splitByDelimiter(this.name,this.delimiter);

        this.assertIsNotNullOrUndefined(array[i]);

        return array[i];
    }

    public setComponent(i: number, c: string) {
        this.assertIsNumberInRange(i);
        this.assertIsNotNullOrUndefined(c);

        let array = this.splitByDelimiter(this.name,this.delimiter);
        array[i] = c;
        this.name = this.arrayToString(array);
    }

    public insert(i: number, c: string) {
        this.assertIsNumberInRange(i);
        this.assertIsNotNullOrUndefined(c);


        let array = this.splitByDelimiter(this.name,this.delimiter); 
        array.splice(i,0,c);
        this.name = this.arrayToString(array);
    }

    public append(c: string) {
        this.assertIsNotNullOrUndefined(c);

        this.name += (this.delimiter + c);
    }

    public remove(i: number) {
        this.assertIsNumberInRange(i);

        let array = this.splitByDelimiter(this.name,this.delimiter);
        array.splice(i,1)
        this.name = this.arrayToString(array);
    }

    public concat(other: Name): void {
        this.assertIsNotNullOrUndefined(other);

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