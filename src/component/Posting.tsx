import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export const Posting = () => {
    const [value, setValue] = useState('');
    return (
        <div>
            <h2>Editor</h2>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
    )
}