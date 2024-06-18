// App.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; // CSS 파일 import

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  // 페이지 로드 시 데이터 불러오기
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3001/getData")
      .then((response) => {
        // 서버에서 반환된 데이터가 배열이라고 가정
        setData(response.data); // 전체 데이터 업데이트
        if (response.data.length > 0) {
          setCount(response.data[response.data.length - 1].count);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const updateServerAndFetchData = (newCount) => {
    // 서버에 데이터 전송
    axios
      .post("http://localhost:3001/saveData", { count: newCount })
      .then((response) => {
        console.log(response.data); // 성공 시 응답 데이터 처리
        // 데이터 업데이트
        fetchData();
      })
      .catch((error) => {
        console.error("Error saving data:", error); // 오류 처리
      });
  };

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount); // 현재 상태 기준으로 업데이트
    updateServerAndFetchData(newCount);
  };

  const decrementCount = () => {
    const newCount = count - 1;
    if (newCount < 0) return;
    setCount(newCount); // 현재 상태 기준으로 업데이트
    updateServerAndFetchData(newCount);
  };

  // 빨간색 바의 스타일을 조절하는 함수
  const getBarStyle = () => {
    const maxWidth = 200; // 최대 길이
    const currentWidth = (count / 10) * maxWidth; // 현재 길이
    return {
      width: currentWidth,
      height: 20,
      backgroundColor: "red",
      marginTop: 10,
      transition: "width 0.3s ease-out", // 애니메이션 효과 추가
    };
  };

  return (
    <div className="App">
      <h1>숫자 증가 앱</h1>
      <p>현재 숫자: {count}</p>
      <button onClick={incrementCount}>증가</button>
      <button onClick={decrementCount}>감소</button>
      <div style={getBarStyle()}></div>
    </div>
  );
}

export default App;
