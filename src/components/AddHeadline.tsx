import React, { useState } from 'react'

interface Props {
    addHeadline: any
}

const AddHeadline:React.FC<Props> = (props:any) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const changeTitle = (e:React.FormEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    const changeContent = (e:React.FormEvent<HTMLTextAreaElement>) => {
        setContent(e.currentTarget.value);
    }

    const onSubmit = (e:any) => {
        e.preventDefault();
        props.addHeadline({title: title, content: content});
        setTitle('');
        setContent('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                name="title"
                placeholder="Add headline"
                value={title}
                onChange={changeTitle} />
            <textarea
                name="content"
                placeholder="Add headline content"
                value={content}
                onChange={changeContent} />
            <input 
                type="submit" 
                value="Submit" />
        </form>
    )
}

export default AddHeadline;
