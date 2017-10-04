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
    if(char.length > 1) throw new Error("Expected a char, not a string");
    var asciiCode = char.charCodeAt(0);
    return asciiCode >= 0 && asciiCode <= 32;
}