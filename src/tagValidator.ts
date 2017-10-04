import {
    CountChar,
    IsInvisibleChar
} from './helper'
import * as tagExtractor from './tagExtractor'


/**
 * @export
 * @param {string} input Check if the input is an invalid expanded tag  
 * @returns {string} Return an error if input is an invalid expanded tag, else return null
 */
export function IsInvalidExpandedTag(input: string): string {
    if (IsValidCollapsedTag(input))
        return "This tag is already collapsed.";
    if (!IsValidExpandedTag(input))
        return "This tag is invalid.";
    if (!IsEmptyExpandedTag(input))
        return "Cannot collapse a non-empty tag.";
    return null;
}


/**
 * @export
 * @param {string} input String to be validated
 * @returns {boolean} Returns true if the string is a valid expanded tag, else false
 */
export function IsValidExpandedTag(input: string): boolean {
    if (CountChar(input, "<") < 2) return false;
    if (CountChar(input, ">") < 2) return false;
    if (CountChar(input, "/") < 1) return false;
    if (tagExtractor.GetOpenTagValueWithoutAttribute(input) != tagExtractor.GetCloseTagValue(input)) return false;
    return true;
}

export function IsEmptyExpandedTag(tag: string): boolean {
    var valueBetweenTag = tagExtractor.GetValueBetweenTag(tag);
    if (valueBetweenTag.length == 0) return true;
    for (var i = 0; i < valueBetweenTag.length; i++) {
        var char = valueBetweenTag[i];
        if (!IsInvisibleChar(char)) return false;
    }
    return true;
}

/**
 * Check if the input is an invalid collapsed HTML/XML tag
 * @export
 * @param {string} input 
 * @returns {string} Return an error message if input is not a valid collapsed tag, else return null
 */
export function IsInvalidCollapsedTag(input: string): string {
    if (IsValidExpandedTag(input))
        return `'${input}' is already expanded.`;
    if (!IsValidCollapsedTag(input))
        return `'${input}' is not a valid tag.`;
    return null;
}

/**
 * Check if the input is a valid collapsed HTML/XML tag
 * @export
 * @param {string} input 
 * @returns {boolean} 
 */
export function IsValidCollapsedTag(input: string): boolean {
    if (CountChar(input, '<') != 1) return false;
    if (CountChar(input, '>') != 1) return false;
    if (CountChar(input, '/') < 1) return false;
    return true;
}