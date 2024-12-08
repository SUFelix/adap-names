import { describe, it, expect } from "vitest";

import { Name } from "../../src/adap-b06/names/Name";
import { AbstractName } from "../../src/adap-b06/names/AbstractName";
import { StringArrayName } from "../../src/adap-b06/names/StringArrayName";
import { StringName } from "../../src/adap-b06/names/StringName";

describe("Equality test", () => {
  it("test isEqual", () => {
    let stringname1: Name = new StringName("test","#");
    let stringArrayName1: Name = new StringArrayName(["test"],"#");
    expect(stringname1.isEqual(stringArrayName1)).toBe(true);
    expect(stringname1.getHashCode() == stringArrayName1.getHashCode()).toBe(true);
    
    stringname1.append("abc");
    stringArrayName1.append("abc")
    expect(stringname1.isEqual(stringArrayName1)).toBe(true);
    expect(stringname1.getHashCode() == stringArrayName1.getHashCode()).toBe(true);

    stringname1.append("abc");
    stringArrayName1.append("cde")
    console.log("my test cosole log: "+ stringArrayName1.asString());
    console.log(stringname1.asString());
    expect(stringname1.isEqual(stringArrayName1)).toBe(false);
    expect(stringname1.getHashCode() == stringArrayName1.getHashCode()).toBe(false);
  });
});

