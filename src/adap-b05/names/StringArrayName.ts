import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { Name } from "./Name";
import { AbstractName } from "./AbstractName";

export class StringArrayName extends AbstractName {

    protected components: string[] = [];

    constructor(source: string[], delimiter?: string) {
        super();
        this.components = source
    }

    public clone(): Name {
       return super.clone()
    }

    public asString(delimiter: string = this.delimiter): string {
        this.assertClassInvariants();
        
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

    public getDelimiterCharacter(): string {
        return super.getDelimiterCharacter();
    }

    public getNoComponents(): number {
        return this.components.length
    }

    public getComponent(i: number): string {
        this.assertIsNumberInRange(i);

        return this.components[i];
    }

    public setComponent(i: number, c: string) {

        this.components.splice(i,1,c);
    }

    public insert(i: number, c: string) {
        this.assertIsNumberInRange(i);

        this.components.splice(i,0,c);
    }

    public append(c: string) {

        this.components.push(c);
    }

    public remove(i: number) {
        this.assertIsNumberInRange(i);

        this.components.splice(i,1)
    }

    public concat(other: Name): void {

        super.concat(other);
    }
}