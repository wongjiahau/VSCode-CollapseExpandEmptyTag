import * as helper from './helper'
import * as tagExtractor from './tagExtractor'


/**
 * @export
 * @param {string} input Check if the input is an invalid tag 
 * @returns {string} Return an error if input is an invalid tag, else return null
 */
export function IsInvalidExpandedTag(input: string): string {
    if (!IsValidExpandedTag(input))
        return "'" + input + "'" + " is not a valid tag.";
    else if (!IsEmptyTag(input))
        return "'" + input + "'" + " is not an empty tag.";
    return null;
}

/**
 * @export
 * @param {string} str String to be validated
 * @returns {boolean} Returns true if the string is a valid tag, else false
 */
export function IsValidExpandedTag(str: string): boolean {
    if (helper.CountChar(str, "<") < 2) return false;
    if (helper.CountChar(str, ">") < 2) return false;
    if (helper.CountChar(str, "/") < 1) return false;
    if (tagExtractor.GetOpenTagValueWithoutAttribute(str) != tagExtractor.GetCloseTagValue(str)) return false;
    return true;
}

export function IsEmptyTag(tag: string): boolean {
    return tagExtractor.GetValueBetweenTag(tag) == "";
}