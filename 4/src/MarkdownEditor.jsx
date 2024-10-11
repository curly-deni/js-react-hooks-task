import React, {useRef, useEffect} from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({onContentChange}) => {
    // BEGIN (write your solution here)
    const editorRef = useRef();

    useEffect(() => {
        const editor = new Editor({
            el: editorRef.current,
            hideModeSwitch: true,
        });

        editor.addHook("change", () => {
            const content = editor.getMarkdown();
            onContentChange(content)
        });
    }, [])

    return <div ref={editorRef}/>
    // END
};

export default MarkdownEditor;
