//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as tagCollapser from '../tagCollapser';

// Defines a Mocha test suite to group tests of similar kind together
suite("TagCollapser Tests", () => {
    test("CollapseTag 1", () => {
        var input = "<Open></Open>";
        assert.equal(tagCollapser.CollapseTag(input), "<Open/>");
    });

    test("CollapseTag 2", () => {
        var input = "<Open height='foo' bar='yo'></Open>";
        assert.equal(tagCollapser.CollapseTag(input), "<Open height='foo' bar='yo'/>");
    });

    test("CollapseTag 3", () => {
        var input = "<Open height='foo' bar='yo'></Open>\n<Tag2></Tag2>";
        assert.equal(tagCollapser.CollapseTag(input), "<Open height='foo' bar='yo'/>\n<Tag2/>");
    });


});