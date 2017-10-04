//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as helper from '../helper';

// Defines a Mocha test suite to group tests of similar kind together
suite("Helper Tests", () => {
    test("Contains 1", () => {
        var input = "qwerty&";
        assert.equal(helper.Contains(input, "&"), true);
    });

    test("CountChar 1", () => {
        var input = "qwerty&w";
        assert.equal(helper.CountChar(input, "w"), 2);
    });

    test("CountChar 2", () => {
        var input = "qwerty&w";
        assert.equal(helper.CountChar(input, " "), 0);
    });

    test("CountChar 3", () => {
        var input = "qwerty&w";
        assert.equal(helper.CountChar(input, "&"), 1);
    });

    test("IsInvisbileChar 1", () => {
        var input = " ";
        assert.equal(helper.IsInvisibleChar(input), true);
    });

    test("IsInvisbileChar 2", () => {
        var input = "b";
        assert.equal(helper.IsInvisibleChar(input), false);
    });

    test("IsInvisbileChar 3", () => {
        var input = "basd";
        assert.throws(()=>{helper.IsInvisibleChar(input)});
    });

    test(" RemoveSurroundingInvisibleChar 1", () => {
        var input = " hello ";
        assert.equal(helper.RemoveSurroundingInvisibleChar(input), "hello");
    });

    test(" RemoveSurroundingInvisibleChar 2", () => {
        var input = "\nheyyo\t";
        assert.equal(helper.RemoveSurroundingInvisibleChar(input), "heyyo");
    });

    test(" RemoveSurroundingInvisibleChar 3", () => {
        var input = "hello";
        assert.equal(helper.RemoveSurroundingInvisibleChar(input), "hello");
    });

    test(" RemoveSurroundingInvisibleChar 4", () => {
        var input = " hey src='./extension.test.ts' ";
        assert.equal(helper.RemoveSurroundingInvisibleChar(input), "hey src='./extension.test.ts'");
    });

    test(" RemoveSurroundingInvisibleChar 5", () => {
        var input = "   hello baby";
        assert.equal(helper.RemoveSurroundingInvisibleChar(input), "hello baby");
    });

    test(" RemoveSurroundingInvisibleChar 6", () => {
        var input = "hello baby     ";
        assert.equal(helper.RemoveSurroundingInvisibleChar(input), "hello baby");
    });

});