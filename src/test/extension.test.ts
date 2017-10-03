//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as myExtension from '../extension';

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", () => {

    // Defines a Mocha unit test
    test("Something 1", () => {
        assert.equal(-1, [1, 2, 3].indexOf(5));
        assert.equal(-1, [1, 2, 3].indexOf(0));
    });

    test("Test Contains", () => {
        var input = "qwerty&";
        assert.equal(myExtension.Contains(input, "&"), true);
    });

    test("Test GetOpenTagValue 1", () => {
        var input = "<Open></Close>";
        assert.equal(myExtension.GetOpenTagValue(input), "Open");
    });

    test("Test GetOpenTagValue 2", () => {
        var input = "<Open height='5' weight='yo'></Close>";
        assert.equal(myExtension.GetOpenTagValue(input), "Open height='5' weight='yo'");
    });

    test("Test GetCloseTagValue", () => {
        var input = "<Open></Close>";
        assert.equal(myExtension.GetCloseTagValue(input), "Close");
    });

    test("Test CollapseTag 1", () => {
        var input = "<Open></Open>";
        assert.equal(myExtension.CollapseTag(input), "<Open/>");
    });

    test("Test CollapseTag 2", () => {
        var input = "<Open height='foo' bar='yo'></Open>";
        assert.equal(myExtension.CollapseTag(input), "<Open height='foo' bar='yo'/>");
    });

    test("Test CollapseTag 3", () => {
        var input = "<Open height='foo' bar='yo'></Open>\n<Tag2></Tag2>";
        assert.equal(myExtension.CollapseTag(input), "<Open height='foo' bar='yo'/>\n<Tag2/>");
    });

});