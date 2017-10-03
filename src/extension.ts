'use strict';
// The module 'vscode' contains the VS Code extensibility API Import the module
// and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Range } from 'vscode'; 
import * as tagValidator from './tagValidator';

// this method is called when your extension is activated your extension is
// activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors
    // (console.error) This line of code will only be executed once when your
    // extension is activated
    console.log('Congratulations, your extension "collapsed-expand-empty-tag" is now active!');

    // The command has been defined in the package.json file Now provide the
    // implementation of the command with  registerCommand The commandId parameter
    // must match the command field in package.json
    let command1 =
        vscode.commands.registerCommand('extension.collapseTag', () => {
            var editor = vscode.window.activeTextEditor;
            if (!editor) return;
            editor.edit(builder => {
                editor.selections.forEach(selection => {
                    const range = new Range(selection.start, selection.end);
                    const tag = editor.document.getText(range) || '';
                    if (!tagValidator.IsValidTag(tag))
                        vscode.window.showErrorMessage("'" + tag + "'" + " is not a valid tag.");
                    else if (!tagValidator.IsEmptyTag(tag))
                        vscode.window.showErrorMessage("'" + tag + "'" + " is not an empty tag.");
                    else {
                        const collapsedTag = CollapseTag(tag);
                        builder.replace(selection, collapsedTag);
                    }
                });
            });
        });

    let command2 =
        vscode.commands.registerCommand('extension.expandTag', () => {
            // The code you place here will be executed every time your command is executed
            // Display a message box to the user
            vscode.window.showInformationMessage('Expanding tag');
        });

    context.subscriptions.push(command1);
    context.subscriptions.push(command2);
}

export function CollapseTag(str: string) {
    var tags = str.split('\n');
    var result = "";
    tags.forEach(element => {
        result += "<" + GetOpenTagValue(element) + "/>" + "\n";
    });
    return result.substring(0, result.length - 1);
}

export function ContainValidTag(str: string) {
    if (!Contains(str, "<")) return false;
    if (!Contains(str, ">")) return false;


}

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



export function Contains(main: string, toBeFind: string) {
    return main.indexOf(toBeFind) >= 0;
}

export function GetCurrentLine(editor: vscode.TextEditor) {
    return editor.document.lineAt(GetCurrentCursorPosition(editor));
}

export function GetCurrentCursorPosition(editor: vscode.TextEditor) {
    return editor.selection.active;
}

// this method is called when your extension is deactivated
export function deactivate() {}