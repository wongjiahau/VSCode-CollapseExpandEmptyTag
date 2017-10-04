import {GetOpenTagValueWithAttribute} from "./tagExtractor";

export function CollapseTag(str : string) {
    var tags = str.split('\n');
    var result = "";
    tags.forEach(element => {
        result += "<" + GetOpenTagValueWithAttribute(element) + "/>" + "\n";
    });
    return result.substring(0, result.length - 1);
}





