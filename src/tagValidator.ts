import * as helper from './helper'

export function IsValidTag(str: string){
    if(helper.Contains(str, "<")) return false;
    if(helper.Contains(str, ">")) return false;
    if(helper.Contains(str, "/")) return false;
    

}

export function IsEmptyTag(tag: string){

}