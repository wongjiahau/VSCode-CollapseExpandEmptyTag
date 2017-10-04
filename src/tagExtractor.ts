import {
    Contains
} from './helper'

export function GetOpenTagValueWithoutAttribute(str: string) {
    var result = GetOpenTagValueWithAttribute(str);
    if (Contains(result, ' ')) return result.substring(0, result.indexOf(' '));
    return result;
}

export function GetOpenTagValueWithAttribute(str: string) {
    var result = "";
    var leftAngularBrackIsFound = false;
    for (var i = 0; i < str.length; i++) {
        var element = str[i];
        if (element == '<') {
            leftAngularBrackIsFound = true;
            continue;
        }
        if (element == '>') return result;
        if (leftAngularBrackIsFound) result += element.toString();
    }
}

/**
 * @export
 * @param {string} input Input should be an expanded tag, e.g. <example></example>
 * @returns Returns the value of closing tag
 */
export function GetCloseTagValue(input: string) {
    var result = "";
    var leftAngularBracketCount = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] == '<') {
            leftAngularBracketCount++;
            continue;
        }
        if (leftAngularBracketCount > 1) {
            if (input[i] == "<" || input[i] == "/") continue;
            if (input[i] == ">") return result;
            result += input[i].toString();
        }
    }
}

/**
 * @export
 * @param {string} input Input should be an collapsed tag, e.g. <example hey='yo'/>
 * @returns {string} Returns the value inside the tag INLCUDING attributes
 */
export function GetCollapsedTagValueWithAttribute(input: string): string {
    var result = "";
    for (var i = 0; i < input.length; i++) {
        var c = input[i];
        if (c == '<') continue;
        if (c == '/') return result;
        result += c.toString();
    }
}

/**
 * @export
 * @param {string} input Input should be an collapsed tag, e.g. <example/>
 * @returns {string} Returns the value inside the tag EXCLUDING attributes
 */
export function GetCollapsedTagValueWithoutAttribute(input: string): string {
    var result = GetCollapsedTagValueWithAttribute(input);
    if(Contains(result, ' ')) return result.substring(0, result.indexOf(' '));
    return result;
}

export function GetValueBetweenTag(str: string) {
    var rightAngularBracketIsFound = false;
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '>') {
            rightAngularBracketIsFound = true;
            continue;
        }
        if (!rightAngularBracketIsFound) continue;
        if (str[i] == '<') return result;
        result += str[i];
    }
}