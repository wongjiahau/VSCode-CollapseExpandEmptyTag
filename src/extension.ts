'use strict';
// The module 'vscode' contains the VS Code extensibility API Import the module
// and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Range } from 'vscode';
import { IsInvalidExpandedTag, IsInvalidCollapsedTag } from './tagValidator';
import { CollapseTag } from './tagCollapser';
import { ExpandTag } from './tagExpander'

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
            SelectCurrentLine(editor);
            editor.edit(builder => {
                editor.selections.forEach(selection => {
                    const range = new Range(selection.start, selection.end);
                    const text = editor.document.getText(range) || '';
                    var error = IsInvalidExpandedTag(text);
                    if (error != null)
                        vscode.window.showErrorMessage(error);
                    else {
                        const collapsedTag = CollapseTag(text);
                        builder.replace(selection, collapsedTag);
                    }
                });
            });
        });

    let command2 =
        vscode.commands.registerCommand('extension.expandTag', () => {
            var editor = vscode.window.activeTextEditor;
            if (!editor) return;
            SelectCurrentLine(editor);
            editor.edit(builder => {
                editor.selections.forEach(selection => {
                    const range = new Range(selection.start, selection.end);
                    const text = editor.document.getText(range) || '';
                    var error = IsInvalidCollapsedTag(text);
                    if (error != null)
                        vscode.window.showErrorMessage(error);
                    else {
                        const expandedTag = ExpandTag(text);
                        builder.replace(selection, expandedTag);
                    }
                });
            });
        });

    context.subscriptions.push(command1);
    context.subscriptions.push(command2);

    function SelectCurrentLine(editor: vscode.TextEditor) {
        let {
            document,
            selections
        } = editor;
        editor.selections = selections.map(s => {
            // active.line is zero based while document.lineCount aren't
            // therefore s.active.line is increased by one here
            let currentLine = s.active.line + 1;
            let selectionFirst = new vscode.Position(s.start.line, 0);
            // default expand selection to current line
            let selectionCurrentLine = new vscode.Position(s.active.line, document.lineAt(s.active.line).range.end.character);
            return new vscode.Selection(selectionFirst, selectionCurrentLine);
        });
    }
}

export function GetCurrentLine(editor: vscode.TextEditor) {
    return editor.document.lineAt(GetCurrentCursorPosition(editor));
}

export function GetCurrentCursorPosition(editor: vscode.TextEditor) {
    return editor.selection.active;
}

// this method is called when your extension is deactivated
export function deactivate() {}