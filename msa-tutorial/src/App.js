import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function App() {

  let [close, setClose] = useState(['여름 반바지', '가을 의상', '겨울 하의']);
  let [like, setLike] = useState(0);
  const [flag, setFlag] = useState(false); 
 
  function closeChange() {
    let newClose = [...close];
    newClose[0] = '여름 반팔티';
    setClose(newClose);
  }

  function onOff() {
    setFlag(!flag);
  }

  function closeSort() {
    let closeSort = [...close];
    closeSort = closeSort.sort();
    setClose(closeSort);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>
          My blog
        </div>
      </div>
      <h2>{close[0]}</h2>
      <MyButton /><br />

      <button onClick={closeChange}>제목 변경</button>
      <button onClick={closeSort}>정렬</button>
      <div>
        <h1 onClick={() => { setFlag(true) }}>
          {close[0]} <span onClick={() => { setLike(like + 1) }}>👍</span>{like}
        </h1>
        <h1 onClick={() => { setFlag(true) }}>
          {close[1]} <span onClick={() => { setLike(like + 1) }}>👍</span>{like}
        </h1>
        <h1 onClick={() => { setFlag(true) }}>
          {close[2]} <span onClick={() => { setLike(like + 1) }}>👍</span>{like}
        </h1>
      </div>
      <hr />
      <button onClick={onOff}>Modal On/Off</button> {/* 버튼에 함수 바로 전달 */}

      {/* flag가 true일 때만 Modal 렌더링 */}
      {
        flag === true ? <ModalPage /> : null
      }
    </div>
  );
}

// 모달 컴포넌트 이름은 대문자로 시작 (React 컴포넌트 규칙)
function MyButton() {
  return (
    <>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="info">Info</Button>{' '}
    </>
  );
}

function ModalPage() {
  return (
    <div className='modalPage'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세</p>
    </div>
  );
}

export default App;
