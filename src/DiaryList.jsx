import React from 'react'
import DiaryItem from './DiaryItem'

export default function DiaryList({ diaryList }) {
    return (
        <div className='DiaryList'>
            <h2>일기 리스트</h2>
            <h3>{diaryList.length}개의 일기가 있습니다.</h3>
            <div>
                {diaryList.map((i) => (
                    <DiaryItem key={i.id} {...i}/>
                ))}
            </div>
        </div>
    )
}

DiaryList.defaultProps = {
    diaryList: [],
}