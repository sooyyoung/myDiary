import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import './App.css'

const dummyList = [
  {
    id: 1,
    author: '뚜용',
    content: '하이 1',
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: '댕이',
    content: '하이 2',
    emotion: 3,
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: '또잉',
    content: '하이 3',
    emotion: 1,
    created_date: new Date().getTime()
  },
  {
    id: 4,
    author: '띠용',
    content: '하이 4',
    emotion: 4,
    created_date: new Date().getTime()
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;