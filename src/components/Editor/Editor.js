import React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
// Remove the unused imports
// import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
// import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';

// Define your editor's initial configuration
const editorConfig = {
    // Add any theme or initial state configuration here
    theme: {
        ltr: 'ltr',
        rtl: 'rtl',
        paragraph: 'editor-paragraph',
        quote: 'editor-quote',
        heading: {
            h1: 'editor-heading-h1',
            h2: 'editor-heading-h2',
            h3: 'editor-heading-h3',
            h4: 'editor-heading-h4',
            h5: 'editor-heading-h5',
            h6: 'editor-heading-h6',
        },
        list: {
            nested: {
                listitem: 'editor-nested-listitem',
            },
            ol: 'editor-list-ol',
            ul: 'editor-list-ul',
            listitem: 'editor-listItem',
            listitemChecked: 'editor-listItemChecked',
            listitemUnchecked: 'editor-listItemUnchecked',
        },
        hashtag: 'editor-hashtag',
        image: 'editor-image',
        link: 'editor-link',
        text: {
            bold: 'editor-textBold',
            code: 'editor-textCode',
            italic: 'editor-textItalic',
            strikethrough: 'editor-textStrikethrough',
            subscript: 'editor-textSubscript',
            superscript: 'editor-textSuperscript',
            underline: 'editor-textUnderline',
            underlineStrikethrough: 'editor-textUnderlineStrikethrough',
        },
        code: 'editor-code',
        codeHighlight: {
            atrule: 'editor-tokenAttr',
            attr: 'editor-tokenAttr',
            boolean: 'editor-tokenProperty',
            builtin: 'editor-tokenSelector',
            cdata: 'editor-tokenComment',
            char: 'editor-tokenSelector',
            class: 'editor-tokenFunction',
            'class-name': 'editor-tokenFunction',
            comment: 'editor-tokenComment',
            constant: 'editor-tokenProperty',
            deleted: 'editor-tokenProperty',
            doctype: 'editor-tokenComment',
            entity: 'editor-tokenOperator',
            function: 'editor-tokenFunction',
            important: 'editor-tokenVariable',
            inserted: 'editor-tokenSelector',
            keyword: 'editor-tokenAttr',
            namespace: 'editor-tokenVariable',
            number: 'editor-tokenProperty',
            operator: 'editor-tokenOperator',
            prolog: 'editor-tokenComment',
            property: 'editor-tokenProperty',
            punctuation: 'editor-tokenPunctuation',
            regex: 'editor-tokenVariable',
            selector: 'editor-tokenSelector',
            string: 'editor-tokenSelector',
            symbol: 'editor-tokenProperty',
            tag: 'editor-tokenProperty',
            url: 'editor-tokenOperator',
            variable: 'editor-tokenVariable',
        }
    },
    onError(error) {
        console.error(error);
    },
};

export default function LexicalEditorComponent() {
    return (
        <LexicalComposer initialConfig={editorConfig}>
            <div className="editor-container">
                <RichTextPlugin />
                <PlainTextPlugin />
                <HistoryPlugin />
                {/* <LinkPlugin /> */}
                {/* <ListPlugin /> */}
                <AutoFocusPlugin />
                <ContentEditable className="editor-content" />
                <OnChangePlugin onChange={(editorState) => {
                    // Handle editor state change
                    editorState.read(() => {
                        // Read the editor state and do something with it
                    });
                }} />
            </div>
        </LexicalComposer>
    );
}
