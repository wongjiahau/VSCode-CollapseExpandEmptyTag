import * as helper from './helper'
import * as tagExtractor from './tagExtractor'

export function IsValidTag(str: string){
    if(helper.CountChar(str, "<") < 2) return false;
    if(helper.CountChar(str, ">") < 2) return false;
    if(helper.CountChar(str, "/") < 1) return false;
    if(tagExtractor.GetOpenTagValue(str)!=tagExtractor.GetCloseTagValue(str)) return false;
}

export function IsEmptyTag(tag: string){

}