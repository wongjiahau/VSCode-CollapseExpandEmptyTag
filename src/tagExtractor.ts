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

export function GetCloseTagValue(str: string) {
    var result = "";
    var leftAngularBracketCount = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '<') {
            leftAngularBracketCount++;
            continue;
        }
        if (leftAngularBracketCount > 1) {
            if (str[i] == "<" || str[i] == "/") continue;
            if (str[i] == ">") return result;
            result += str[i].toString();
        }
    }
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