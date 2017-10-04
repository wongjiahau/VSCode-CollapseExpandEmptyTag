//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as tagExpander from '../tagExpander';

// Defines a Mocha test suite to group tests of similar kind together
suite("TagExpander Tests", () => {
    
    test("ExpandTag 1", () => {
        var input = "<hello/>";
        assert.equal(tagExpander.ExpandTag(input), "<hello></hello>");
    });
    
    test("ExpandTag 1", () => {
        var input = "<hello height='yo' weight='lala'/>";
        assert.equal(tagExpander.ExpandTag(input), "<hello height='yo' weight='lala'></hello>");
    });

});