import { describe, it, expect } from "vitest";
import { Name } from "../../../src/adap-b04/names/Name";
import { AbstractName } from "../../../src/adap-b04/names/AbstractName";
import { StringArrayName } from '../../../src/adap-b04/names/StringArrayName';
import { StringName } from "../../../src/adap-b04/names/StringName";


describe("Empty Delimiter function tests", () => {
  it("test insert", () => {
    let n: Name = new StringArrayName(["oss", "fau", "de"], '');
    n.insert(1, "cs");
    expect(n.asString()).toThrow("invalid delimiter character");
  });
});
describe("Out of Range Entry function tests", () => {
  it("test insert", () => {
    let n: Name = new StringArrayName(["oss", "fau", "de"], '');
    expect(n.setComponent(1000000, "abc")).toThrow("invalid number");
  });
});


