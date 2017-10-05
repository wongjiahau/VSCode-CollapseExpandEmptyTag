//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import {
    Reform
} from '../jsxTreeReformer';
import {
    isEqual
} from 'lodash';
import JSXParser from 'jsx-parser';

// Defines a Mocha test suite to group tests of similar kind together
suite("JSXTreeReformer Tests", () => {
    test("Reformation 1", () => {
        var input = '<Button onClick={()=>{ /*some action*/}} height="123"/>'
        var tree = JSXParser(input);
        var reformedObject = Reform(tree);
        console.log(reformedObject);
        assert.equal(isEqual(tree, JSXParser(reformedObject)), true);
    });
});