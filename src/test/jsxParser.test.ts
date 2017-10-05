import {
    at
} from 'lodash';
//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import JSXParser from 'jsx-parser'

import {
    isEqual
} from 'lodash'
// Defines a Mocha test suite to group tests of similar kind together
suite("JSXParser Tests", () => {
    test("Jsonify 1", () => {
        var str = `<Button onClick={()=>{ /*some action*/}} height="123" width=' '/>`
        console.log(JSON.stringify(JSXParser(str), null, " "))
    });

    test("Check for void tag 1", () => {
        var tag = `<vege></vege>`
        var tree = JSXParser(tag);
        assert.equal( at(tree, 'isVoidTag')[0], undefined);
    });

    test("Check for void tag 2", () => {
        var tag = `<vege/>`
        var tree = JSXParser(tag);
        assert.equal( at(tree, 'isVoidTag')[0], true);
    });

});