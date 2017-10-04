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
        assert.equal(tagValidator.IsInvalidExpandedTag(input), "This tag is invalid.");
    });

    test("IsInvalidExpandedTag 2", () => {
        var input = "<lol>haha</lol>";
        assert.equal(tagValidator.IsInvalidExpandedTag(input), "Cannot collapse a non-empty tag.");
    });

    test("IsInvalidExpandedTag 3", () => {
        var input = "<lol></lol>";
        assert.equal(tagValidator.IsInvalidExpandedTag(input), null);
    });

    test("IsInvalidExpandedTag 4", () => {
        var input = "<lol/>";
        assert.equal(tagValidator.IsInvalidExpandedTag(input), "This tag is already collapsed.");
    });

    test("IsInvalidExpandedTag 4", () => {
        var input = `<tag hey='yo' src='/myFile/myTest.ts'> 
                        hello 
                      </tag>`;
        assert.equal(tagValidator.IsInvalidExpandedTag(input), "Cannot collapse a non-empty tag.");
    });

    test("IsValidExpandedTag 1", () => {
        var input = "helo";
        assert.equal(tagValidator.IsValidExpandedTag(input), false);
    });

    test("IsValidExpandedTag 2", () => {
        var input = "<hey></yo>";
        assert.equal(tagValidator.IsValidExpandedTag(input), false);
    });

    test("IsValidExpandedTag 3", () => {
        var input = "<hey</yo>";
        assert.equal(tagValidator.IsValidExpandedTag(input), false);
    });

    test("IsValidExpandedTag 4", () => {
        var input = "<hey>/yo>";
        assert.equal(tagValidator.IsValidExpandedTag(input), false);
    });

    test("IsValidExpandedTag 5", () => {
        var input = "<hey></hey>";
        assert.equal(tagValidator.IsValidExpandedTag(input), true);
    });

    test("IsValidExpandedTag 6", () => {
        var input = "<hey walao='a'></hey>";
        assert.equal(tagValidator.IsValidExpandedTag(input), true);
    });

    test("IsValidExpandedTag 7", () => {
        var input = "<hey>yo</hey>";
        assert.equal(tagValidator.IsValidExpandedTag(input), true);
    });

    test("IsValidExpandedTag 8", () => {
        var input = "<hey walao='a'>yo</hey>";
        assert.equal(tagValidator.IsValidExpandedTag(input), true);
    });

    test("IsValidExpandedTag 9", () => {
        var input = "<yo/>";
        assert.equal(tagValidator.IsValidExpandedTag(input), false);
    });

    test("IsValidExpandedTag 10", () => {
        var input = "<hey helo='hey'></hey> ";
        assert.equal(tagValidator.IsValidExpandedTag(input), true);
    });

    test("IsValidExpandedTag 11", () => {
        var input =
            `<Hello
                    hey='yo'
                    ></Hello>`;
        assert.equal(tagValidator.IsValidExpandedTag(input), true);
    });

    test("IsInvalidCollapsedTag 1", () => {
        var input = "<lol></lol>";
        assert.equal(tagValidator.IsInvalidCollapsedTag(input), "'<lol></lol>' is already expanded.");
    });

    test("IsInvalidCollapsedTag 2", () => {
        var input = "<lol/>";
        assert.equal(tagValidator.IsInvalidCollapsedTag(input), null);
    });

    test("IsInvalidCollapsedTag 3", () => {
        var input = "<lol</lol>";
        assert.equal(tagValidator.IsInvalidCollapsedTag(input), "'<lol</lol>' is not a valid tag.");
    });

    test("IsValidCollapsedTag 1", () => {
        var input = "<lol</lol>";
        assert.equal(tagValidator.IsValidCollapsedTag(input), false);
    });

    test("IsValidCollapsedTag 2", () => {
        var input = "<lol></lol>";
        assert.equal(tagValidator.IsValidCollapsedTag(input), false);
    });

    test("IsValidCollapsedTag 3", () => {
        var input = "<lol/>";
        assert.equal(tagValidator.IsValidCollapsedTag(input), true);
    });

    test("IsValidCollapsedTag 4", () => {
        var input = "<lol hey='yo'/>";
        assert.equal(tagValidator.IsValidCollapsedTag(input), true);
    });

    test("IsValidCollapsedTag 5", () => {
        var input = "<lol src='../extension.ts'/>";
        assert.equal(tagValidator.IsValidCollapsedTag(input), true);
    });

    test("IsValidCollapsedTag 6", () => {
        var input = "<Button onClick={()=>{ /*some action*/}} />";
        assert.equal(tagValidator.IsValidCollapsedTag(input), true);
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