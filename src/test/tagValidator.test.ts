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
        assert.equal(tagValidator.IsInvalidExpandedTag(input), "'<tagfglala></tag>' is not a valid tag.");
    });

    test("IsInvalidExpandedTag 2", () => {
        var input = "<lol>haha</lol>";
        assert.equal(tagValidator.IsInvalidExpandedTag(input), "'<lol>haha</lol>' is not an empty tag.");
    });

    test("IsInvalidExpandedTag 3", () => {
        var input = "<lol></lol>";
        assert.equal(tagValidator.IsInvalidExpandedTag(input), null);
    });

    test("IsValidTag 1", () => {
        var input = "helo";
        assert.equal(tagValidator.IsValidExpandedTag(input), false);
    });

    test("IsValidTag 2", () => {
        var input = "<hey></yo>";
        assert.equal(tagValidator.IsValidExpandedTag(input), false);
    });

    test("IsValidTag 3", () => {
        var input = "<hey</yo>";
        assert.equal(tagValidator.IsValidExpandedTag(input), false);
    });

    test("IsValidTag 4", () => {
        var input = "<hey>/yo>";
        assert.equal(tagValidator.IsValidExpandedTag(input), false);
    });

    test("IsValidTag 5", () => {
        var input = "<hey></hey>";
        assert.equal(tagValidator.IsValidExpandedTag(input), true);
    });

    test("IsValidTag 6", () => {
        var input = "<hey walao='a'></hey>";
        assert.equal(tagValidator.IsValidExpandedTag(input), true);
    });

    test("IsValidTag 7", () => {
        var input = "<hey>yo</hey>";
        assert.equal(tagValidator.IsValidExpandedTag(input), true);
    });

    test("IsValidTag 8", () => {
        var input = "<hey walao='a'>yo</hey>";
        assert.equal(tagValidator.IsValidExpandedTag(input), true);
    });

    test("IsValidTag 8", () => {
        var input = "<yo/>";
        assert.equal(tagValidator.IsValidExpandedTag(input), false);
    });

    test("IsEmptyTag 1", () => {
        var input = "<hey></hey>";
        assert.equal(tagValidator.IsEmptyTag(input), true);
    });

    test("IsEmptyTag 2", () => {
        var input = "<hey>yo</hey>";
        assert.equal(tagValidator.IsEmptyTag(input), false);
    });

});