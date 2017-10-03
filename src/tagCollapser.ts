import {GetOpenTagValue} from "./tagExtractor";

export function CollapseTag(str : string) {
    var tags = str.split('\n');
    var result = "";
    tags.forEach(element => {
        result += "<" + GetOpenTagValue(element) + "/>" + "\n";
    });
    return result.substring(0, result.length - 1);
}





