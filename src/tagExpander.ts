import {
    GetCollapsedTagValueWithAttribute,
    GetCollapsedTagValueWithoutAttribute
}
from "./tagExtractor";

import {RemoveSurroundingInvisibleChar} from "./helper"

/**
 * @export
 * @param {string} input Input should be a closed tag, e.g. <example/>
 * @returns {string} Return an expanded tag, e.g. <example></example>
 */
export function ExpandTag(input: string): string {
    var tagName = GetCollapsedTagValueWithoutAttribute(input);
    var tagValue = GetCollapsedTagValueWithAttribute(input);
    tagName =  RemoveSurroundingInvisibleChar(tagName);
    tagValue = RemoveSurroundingInvisibleChar(tagValue);
    return `<${tagValue}></${tagName}>`;
}