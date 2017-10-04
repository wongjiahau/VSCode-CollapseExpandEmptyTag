import {
    GetCollapsedTagValueWithAttribute,
    GetCollapsedTagValueWithoutAttribute
}
from "./tagExtractor";

import {RemoveSurroundingInvisibleChar, GetLeadingWhitespaces} from "./helper"

/**
 * @export
 * @param {string} input Input should be a closed tag, e.g. <example/>
 * @returns {string} Return an expanded tag, e.g. <example></example>
 */
export function ExpandTag(input: string): string {
    var leadingWhitespaces = GetLeadingWhitespaces(input);
    var tagName = GetCollapsedTagValueWithoutAttribute(input);
    var tagValue = GetCollapsedTagValueWithAttribute(input);
    tagName =  RemoveSurroundingInvisibleChar(tagName);
    tagValue = RemoveSurroundingInvisibleChar(tagValue);
    return leadingWhitespaces +  `<${tagValue}></${tagName}>`;

}