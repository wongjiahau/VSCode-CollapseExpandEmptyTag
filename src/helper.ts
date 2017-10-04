export function Contains(main: string, toBeFind: string) {
    return main.indexOf(toBeFind) >= 0;
}

export function CountChar(str: string, charToBeCount: string) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == charToBeCount) count++;
    }
    return count;
}

export function IsInvisibleChar(char: string): boolean {
    if (char.length > 1) throw new Error("Expected a char, not a string");
    var asciiCode = char.charCodeAt(0);
    return asciiCode >= 0 && asciiCode <= 32;
}

export function RemoveSurroundingInvisibleChar(input: string): string {
    var indexOfFirstVisibleChar = -1;
    var indexOfLastVisibleChar = -1;
    for (var i = 0; i < input.length; i++) {
        var element = input[i];
        if (!(IsInvisibleChar(element))) {
            indexOfFirstVisibleChar = i;
            break;
        }
    }

    for (var i = input.length - 1; i > 0; i--) {
        var element = input[i];
        if (!(IsInvisibleChar(element))) {
            indexOfLastVisibleChar = i;
            break;
        }
    }
    if (indexOfLastVisibleChar == input.length - 1) {
        return input.substring(indexOfFirstVisibleChar);
    }
    return input.substring(indexOfFirstVisibleChar, indexOfLastVisibleChar + 1)
}

export function GetLeadingWhitespaces(input: string): string {
    var result = "";
    for (var i = 0; i < input.length; i++) {
        var element = input[i];
        if(IsInvisibleChar(element)) result += element.toString();
        else return result;
    }
}