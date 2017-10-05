//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as tagValidator from '../tagValidator';

// Defines a Mocha test suite to group tests of similar kind together
suite("TagValidator Tests", () => {

    test("IsInvalidExpandedTag 1", () => {
        var input = "<tagfglala></tag>";
        assert.equal(tagValidator.CheckIfThisTagCanBeCollapsed(input), "This tag is invalid.");
    });

    test("IsInvalidExpandedTag 2", () => {
        var input = "<lol>haha</lol>";
        assert.equal(tagValidator.CheckIfThisTagCanBeCollapsed(input), "Cannot collapse a non-empty tag.");
    });

    test("IsInvalidExpandedTag 3", () => {
        var input = "<lol></lol>";
        assert.equal(tagValidator.CheckIfThisTagCanBeCollapsed(input), null);
    });

    test("IsInvalidExpandedTag 4", () => {
        var input = "<lol/>";
        assert.equal(tagValidator.CheckIfThisTagCanBeCollapsed(input), "This tag is already collapsed.");
    });

    test("IsInvalidExpandedTag 4", () => {
        var input = `<tag hey='yo' src='/myFile/myTest.ts'> 
                        hello 
                      </tag>`;
        assert.equal(tagValidator.CheckIfThisTagCanBeCollapsed(input), "Cannot collapse a non-empty tag.");
    });

    test("IsValidTag 1", () => {
        var input = "<lol</lol>";
        assert.equal(tagValidator.IsValidTag(input), false);
    });

    test("IsValidTag 2", () => {
        var input = "<lol></lol>";
        assert.equal(tagValidator.IsValidTag(input), true);
    });

    test("IsValidTag 3", () => {
        var input = "<lol/>";
        assert.equal(tagValidator.IsValidTag(input), true);
    });

    test("IsValidTag 4", () => {
        var input = "<lol hey='yo'/>";
        assert.equal(tagValidator.IsValidTag(input), true);
    });

    test("IsValidTag 5", () => {
        var input = "<lol src='../extension.ts'/>";
        assert.equal(tagValidator.IsValidTag(input), true);
    });

    test("IsValidTag 6", () => {
        var input = "<Button onClick={()=>{ /*some action*/}} />";
        assert.equal(tagValidator.IsValidTag(input), true);
    });

    test("IsEmptyTag 1", () => {
        var input = "<hey></hey>";
        assert.equal(tagValidator.IsEmptyExpandedTag(input), true);
    });

    test("IsEmptyTag 2", () => {
        var input = "<hey>yo</hey>";
        assert.equal(tagValidator.IsEmptyExpandedTag(input), false);
    });

    test("IsEmptyTag 3", () => {
        var input = "<hey> </hey> ";
        assert.equal(tagValidator.IsEmptyExpandedTag(input), true);
    });

    test("IsEmptyTag 4", () => {
        var input = "<hey>\n</hey> ";
        assert.equal(tagValidator.IsEmptyExpandedTag(input), true);
    });

    test("IsEmptyTag 5", () => {
        var input = "<hey>\t</hey> ";
        assert.equal(tagValidator.IsEmptyExpandedTag(input), true);
    });

    test("IsEmptyTag 6", () => {
        var input =
            `<Button title='hey' onPress={
          ()=>{ Alert.alert("oi", "walao"); }
        }></Button>`;
        assert.equal(tagValidator.IsEmptyExpandedTag(input), true);
    });
});