import * as helper from './helper'

export function IsValidTag(str: string){
    if(helper.CountChar(str, "<") < 2) return false;
    if(helper.CountChar(str, ">") < 2) return false;
    if(helper.CountChar(str, "/") < 1) return false;
    

}

export function IsEmptyTag(tag: string){

}