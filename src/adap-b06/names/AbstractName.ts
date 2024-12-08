import { DEFAULT_DELIMITER, ESCAPE_CHARACTER } from "../common/Printable";
import { IllegalArgumentException } from "../common/IllegalArgumentException";
import { Name } from "./Name";

export abstract class AbstractName implements Name {

    protected delimiter: string = DEFAULT_DELIMITER;

    constructor(delimiter: string = DEFAULT_DELIMITER) {
        this.delimiter = delimiter
    }

    public clone(): Name {
        const clonedObject = Object.create(this)
        clonedObject.delimiter = this.delimiter
        return clonedObject
    }

    public asString(delimiter: string = this.delimiter): string {
        let name: string = ''
        const noOfComponents = this.getNoComponents();

        for (let i = 0; i < noOfComponents; i++) {

            if (name.length == 0){
                name += this.getComponent(i)
            }else{
            name += delimiter
            name += this.getComponent(i)
            }
        }

        return name
    }

    public toString(): string {
        let name: string = ''
        const noOfComponents = this.getNoComponents();

        for (let i = 0; i < noOfComponents; i++) {
            name += this.getComponent(i)
        }

        return name
    }

    public asDataString(): string {
        return this.asString(ESCAPE_CHARACTER + this.delimiter)
    }

    public isEqual(other: Name): boolean {
        return (this.delimiter == other.getDelimiterCharacter()
            && this.asDataString() == other.asDataString());
    }

    public getHashCode(): number {
        let hashCode: number = 0;
        const s: string = this.asDataString();
        for (let i = 0; i < s.length; i++) {
            let c = s.charCodeAt(i);
            hashCode = (hashCode << 5) - hashCode + c;
            hashCode |= 0;
        }
        return hashCode;
    }

    public isEmpty(): boolean {
        return (this.getNoComponents() == 0)
    }

    public getDelimiterCharacter(): string {
        return this.delimiter;
    }

    abstract getNoComponents(): number;

    abstract getComponent(i: number): string;
    abstract setComponent(i: number, c: string): void;

    abstract insert(i: number, c: string): void;
    abstract append(c: string): void;
    abstract remove(i: number): void;

    public concat(other: Name): void {
        for (let i = 1; i <= other.getNoComponents(); i++) {
            this.append( other.getComponent(i))
        }
    }

    protected assertIsNumberInRange(i: number): void {
        IllegalArgumentException.assert(i >= 0 && i < this.getNoComponents(), "Illegal index!");
    }
}