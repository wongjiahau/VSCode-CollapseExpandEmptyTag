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

    test("IsValidTag 1", () => {
        var input = "helo";
        assert.equal(tagValidator.IsValidTag(input), false);
    });

    test("IsValidTag 2", () => {
        var input = "<hey></yo>";
        assert.equal(tagValidator.IsValidTag(input), false);
    });

    test("IsValidTag 3", () => {
        var input = "<hey</yo>";
        assert.equal(tagValidator.IsValidTag(input), false);
    });

    test("IsValidTag 4", () => {
        var input = "<hey>/yo>";
        assert.equal(tagValidator.IsValidTag(input), false);
    });

});