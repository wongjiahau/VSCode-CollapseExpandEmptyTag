//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as tagValidator from '../tagValidator'
import JSXParser from 'jsx-parser'

// Defines a Mocha test suite to group tests of similar kind together
suite("JSXParser Tests", () => {
    test("Test 1", () => {
        var str = '<Button onClick={()=>{ /*some action*/}} />'
        console.log(JSON.stringify(JSXParser(str), null, " "))
    });
});