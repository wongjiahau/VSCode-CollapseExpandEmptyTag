import {GetOpenTagValueWithAttribute} from "./tagExtractor";

/**
 * Collapse an expanded empty tag
 * 
 * @export
 * @param {string} input Input should be an empty expanded tag, e.g. <example> </example>
 * @returns Returns a collapsed tag, e.g. <example/>
 */
export function CollapseTag(input : string) {
    var result = "";
    result += "<" + GetOpenTagValueWithAttribute(input) + "/>" + "\n";
    return result.substring(0, result.length - 1);
}





