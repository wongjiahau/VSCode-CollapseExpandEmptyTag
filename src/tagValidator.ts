import * as helper from './helper'
import * as tagExtractor from './tagExtractor'


/**
 * @export
 * @param {string} input Check if the input is an invalid expanded tag  
 * @returns {string} Return an error if input is an invalid expanded tag, else return null
 */
export function IsInvalidExpandedTag(input: string): string {
    if (!IsValidExpandedTag(input))
        return "'" + input + "'" + " is not a valid tag.";
    else if (!IsEmptyExpandedTag(input))
        return "'" + input + "'" + " is not an empty tag.";
    return null;
}

/**
 * @export
 * @param {string} input String to be validated
 * @returns {boolean} Returns true if the string is a valid expanded tag, else false
 */
export function IsValidExpandedTag(input: string): boolean {
    if (helper.CountChar(input, "<") < 2) return false;
    if (helper.CountChar(input, ">") < 2) return false;
    if (helper.CountChar(input, "/") < 1) return false;
    if (tagExtractor.GetOpenTagValueWithoutAttribute(input) != tagExtractor.GetCloseTagValue(input)) return false;
    return true;
}

export function IsEmptyExpandedTag(tag: string): boolean {
    return tagExtractor.GetValueBetweenTag(tag) == "";
}