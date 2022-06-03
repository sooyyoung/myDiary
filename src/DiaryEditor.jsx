import React, { useRef, useState } from 'react';

export default function DiaryEditor({ onCreate }) {
    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author: '',
        content: '',
        emotion: 1,
    });

    const handleSubmit = () => {
        if (state.author.length < 1){
            authorInput.current.focus();
            return
        }
        if (state.content.length < 5){
            contentInput.current.focus();
            return
        }
        onCreate(state.author, state.content, state.emotion);
        alert('저장 성공!');
        setState({
            author: '',
            content: '',
            emotion: 1,
        });
    }

    return (
        <div className='DiaryEditor'>
            <h1>오늘의 일기</h1>
            <div>
                <input 
                    ref={authorInput}
                    value={state.author} 
                    onChange={(e) => {
                        setState({
                            ...state,
                            author: e.target.value,
                        });
                    }}
                />
            </div>
            <div>
                <textarea 
                    ref={contentInput}
                    value={state.content}
                    onChange={(e) => {
                        setState({
                            ...state,
                            content: e.target.value,
                        });
                    }}
                />
            </div>
            <div>
                <span>오늘의 감정 점수 : </span>
                <select
                    value={state.emotion}
                    onChange={(e) => {
                        setState({
                            ...state,
                            emotion: e.target.value,
                        });
                    }}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
    )
}