import {
    isEqual,
    at
} from 'lodash';
import {
    CountChar,
    IsInvisibleChar
} from './helper'
import * as tagExtractor from './tagExtractor'
import JSXParser from 'jsx-parser'


/**
 * @export
 * @param {string} tag Check if the input tag can be collapsed
 * @returns {string} Return an error if input is an invalid expanded tag, else return null
 */
export function CheckIfThisTagCanBeCollapsed(tag: string): string {
    if (IsCollapsed(tag))
        return "This tag is already collapsed.";
    if (!IsValidTag(tag))
        return "This tag is invalid.";
    if (!IsEmptyExpandedTag(tag))
        return "Cannot collapse a non-empty tag.";
    return null;
}

/**
 * @export
 * @param {string} input Check if the input tag can be expanded
 * @returns {string} Return an error if input is an invalid collapsed tag, else return null
 */
export function CheckIfThisTagCanBeExpanded(input: string): string {
    if (IsExpanded(input))
        return "This tag is already expanded.";
    if (!IsValidTag(input))
        return "This tag is invalid.";
    return null;
}


export function IsEmptyExpandedTag(tag: string): boolean {
    return isEqual(at(JSXParser(tag), 'children')[0], []);
}

/**
 * Check if the input is a valid collapsed HTML/XML/JSX tag
 * @export
 * @param {string} input 
 * @returns {boolean} 
 */
export function IsValidTag(input: string): boolean {
    var fastXmlParser = require('fast-xml-parser');
    return fastXmlParser.validate(input);
}

function IsCollapsed(tag: string) : boolean{
    return at(JSXParser(tag), 'isVoidTag')[0] == true;
}

function IsExpanded(tag: string) : boolean{
    return at(JSXParser(tag), 'isVoidTag')[0] == undefined;
}