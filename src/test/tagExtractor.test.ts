//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as tagExtractor from '../tagExtractor';

// Defines a Mocha test suite to group tests of similar kind together
suite("TagExtractor Tests", () => {

    test("GetOpenTagValueWithoutAttribute 1", () => {
        var input = "<Open></Close>";
        assert.equal(tagExtractor.GetOpenTagValueWithoutAttribute(input), "Open");
    });

    test("GetOpenTagValueWithoutAttribute 2", () => {
        var input = "<Open height='5' weight='yo'></Close>";
        assert.equal(tagExtractor.GetOpenTagValueWithoutAttribute(input), "Open");
    });

    test("GetOpenTagValueWithoutAttribute 3", () => {
        var input = " <Open></Close>";
        assert.equal(tagExtractor.GetOpenTagValueWithoutAttribute(input), "Open");
    });

    test("GetOpenTagValueWithoutAttribute 4", () => {
        var input = " <Open height='5' weight='yo'></Close>";
        assert.equal(tagExtractor.GetOpenTagValueWithoutAttribute(input), "Open");
    });

    test("GetOpenTagValueWithoutAttribute 5", () => {
        var input = 
                `<Hello
                hey='yo'
                ></Hello>`;
        assert.equal(tagExtractor.GetOpenTagValueWithoutAttribute(input), "Hello");
    });

    test("GetOpenTagValueWithAttribute 1", () => {
        var input = "<Open></Close>";
        assert.equal(tagExtractor.GetOpenTagValueWithAttribute(input), "Open");
    });

    test("GetOpenTagValueWithAttribute 2", () => {
        var input = "<Open height='5' weight='yo'></Close>";
        assert.equal(tagExtractor.GetOpenTagValueWithAttribute(input), "Open height='5' weight='yo'");
    });

    test("GetOpenTagValueWithAttribute 3", () => {
        var input = " <Open></Close>";
        assert.equal(tagExtractor.GetOpenTagValueWithAttribute(input), "Open");
    });

    test("GetOpenTagValueWithAttribute 4", () => {
        var input = " <Open height='5' weight='yo'></Close>";
        assert.equal(tagExtractor.GetOpenTagValueWithAttribute(input), "Open height='5' weight='yo'");
    });

    test("GetOpenTagValueWithAttribute 5", () => {
        var input =
            `<Button title='hey' onPress={ ()=>{ Alert.alert("oi", "walao"); } }></Button>`;
        assert.equal(tagExtractor.GetOpenTagValueWithAttribute(input), `Button title='hey' onPress={ ()=>{ Alert.alert("oi", "walao"); } }`);
    });

    test("GetCloseTagValue 1", () => {
        var input = "<Open></Close>";
        assert.equal(tagExtractor.GetCloseTagValue(input), "Close");
    });

    test("GetCloseTagValue 2", () => {
        var input = 
                `<Hello
                hey='yo'
                ></Hello>`;
        assert.equal(tagExtractor.GetCloseTagValue(input), "Hello");
    });

    test("GetValueBetweenTag 1", () => {
        var input = "<tag>hey</tag>";
        assert.equal(tagExtractor.GetValueBetweenTag(input), "hey");
    });

    test("GetValueBetweenTag 2", () => {
        var input = "<tag></tag>";
        assert.equal(tagExtractor.GetValueBetweenTag(input), "");
    });

    test("GetValueBetweenTag 3", () => {
        var input =
            `<Button onPress={ ()=>{ /*Some action*/} }></Button>`;
        assert.equal(tagExtractor.GetValueBetweenTag(input), "");
    });

    test("GetCollapsedTagValueWithAttribute 1", () => {
        var input = "<tag/>";
        assert.equal(tagExtractor.GetCollapsedTagValueWithAttribute(input), "tag");
    });

    test("GetCollapsedTagValueWithAttribute 2", () => {
        var input = "<tag hello='hey'/>";
        assert.equal(tagExtractor.GetCollapsedTagValueWithAttribute(input), "tag hello='hey'");
    });

    test("GetCollapsedTagValueWithAttribute 3", () => {
        var input = `<example src="./file/test.ts"/>`;
        assert.equal(tagExtractor.GetCollapsedTagValueWithAttribute(input), `example src="./file/test.ts"`);
    });

    test("GetCollapsedTagValueWithoutAttribute 1", () => {
        var input = "<tag/>";
        assert.equal(tagExtractor.GetCollapsedTagValueWithoutAttribute(input), "tag");
    });

    test("GetCollapsedTagValueWithoutAttribute 2", () => {
        var input = "<tag hello='hey'/>";
        assert.equal(tagExtractor.GetCollapsedTagValueWithoutAttribute(input), "tag");
    });

    test("GetCollapsedTagValueWithoutAttribute 3", () => {
        var input = `<tag 
                        hello='hey'/>`;
        assert.equal(tagExtractor.GetCollapsedTagValueWithoutAttribute(input), "tag");
    });

});