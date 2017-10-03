//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as tagCollapser from '../tagExtractor';

// Defines a Mocha test suite to group tests of similar kind together
suite("TagExtractor Tests", () => {
    test("GetOpenTagValue 1", () => {
        var input = "<Open></Close>";
        assert.equal(tagCollapser.GetOpenTagValue(input), "Open");
    });

    test("GetOpenTagValue 2", () => {
        var input = "<Open height='5' weight='yo'></Close>";
        assert.equal(tagCollapser.GetOpenTagValue(input), "Open height='5' weight='yo'");
    });

    test("GetCloseTagValue", () => {
        var input = "<Open></Close>";
        assert.equal(tagCollapser.GetCloseTagValue(input), "Close");
    });

});