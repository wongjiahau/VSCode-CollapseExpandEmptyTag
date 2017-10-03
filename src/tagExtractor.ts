export function GetOpenTagValue(str: string) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var element = str[i];
        if (element == '<') continue;
        if (element == '>') return result;
        result += element.toString();
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