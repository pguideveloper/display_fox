const editor = document.querySelector("textarea");

const code_mirror_editor = CodeMirror.fromTextArea(editor, {
    lineNumbers: true,
    lineWrapping: true,
    theme: 'dracula',
    mode: 'css'
});

code_mirror_editor.on("change", function(editor) {
    if (document.querySelector("style")) {
        let css_to_apply = editor.doc.getValue();
        document.querySelector("style").appendChild(document.createTextNode(css_to_apply));
    }
});

