import {
    TagMatcher
} from './../importedFiles/tagMatcher';
//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';

// Defines a Mocha test suite to group tests of similar kind together
suite("TagMatcher Tests", () => {
    test("findOpening 1", () => {
        var input = "<hello></hello>";
        var tagMatcher = new TagMatcher(input, 0);
        assert.equal(tagMatcher.findOpening(true), 0);
    });

    test("findOpening 2", () => {
        var input = "<hello>123</hello>";
        var tagMatcher = new TagMatcher(input, 0);
        assert.equal(tagMatcher.findOpening(false), 7);
    });

    test("findClosing 1", () => {
        var input = "<hello>123</hello>";
        var tagMatcher = new TagMatcher(input, 0);
        assert.equal(tagMatcher.findClosing(true), 18);
    });

    test("findClosing 2", () => {
        var input = "<hello>123</hello>";
        var tagMatcher = new TagMatcher(input, 0);
        assert.equal(tagMatcher.findClosing(false), 10);
    });

});