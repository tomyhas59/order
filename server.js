const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // cors 패키지 import
const fs = require("fs");
const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS 설정
const corsOptions = {
  origin: "http://localhost:3000", // 허용할 origin
};

app.use(cors(corsOptions));

const dataFilePath = "./data.json";

// 초기 데이터 생성
if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, "[]");
}

// 데이터 덮어쓰기 함수
const overwriteData = (data) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    console.log("Data overwritten successfully");
  } catch (err) {
    console.error("Error overwriting data:", err);
  }
};

// 데이터 가져오기 엔드포인트
app.get("/getData", (req, res) => {
  // JSON 파일 읽기
  const jsonData = JSON.parse(fs.readFileSync(dataFilePath));
  res.json(jsonData);
});

// 데이터 저장 엔드포인트 (데이터 덮어쓰기)
app.post("/saveData", (req, res) => {
  const { count } = req.body;

  // 새로운 데이터

  // JSON 파일 읽기
  let jsonData = JSON.parse(fs.readFileSync(dataFilePath));

  // 데이터 덮어쓰기
  jsonData = [count]; // 새로운 데이터로 기존 데이터 덮어쓰기

  // JSON 파일 쓰기
  overwriteData(count);

  console.log("Data overwritten successfully:", count);

  res.send("Data overwritten successfully");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
