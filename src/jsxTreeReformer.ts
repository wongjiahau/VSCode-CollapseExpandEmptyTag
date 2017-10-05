import {
    at
} from "lodash";

export function Reform(jsxTree): string {
    var result = "";
    result += "<" + at(jsxTree, 'type')[0];
    var props = at(jsxTree, 'props')[0];
    for (var key in props) {
        if (props.hasOwnProperty(key)) {
            var element = props[key];
            result += " " + key + "=";
            if (element.hasOwnProperty('type'))
                result += "{" + at(element, 'nodeValue')[0] + "} ";
            else
                result += '"' + element + '"';
        }
    }
    result += " />";
    return result;
}