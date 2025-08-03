export interface TimeRange {
  start: string; // 예: "18:00"
  end: string;
}

export interface FilterState {
  location: string[]; // 예: ["서울특별시", "강남구"]
  jobCategory: string[]; // 예: ["외식·음료", "카페·디저트"]
  period: string; // 예: "즉시", "1주 이상"
  weekdays: string[]; // 예: ["월", "수", "금"]
  time: TimeRange; // 근무 시간 범위
  gender: string; // "무관", "남성", "여성"
  education: string; // "무관", "고졸", "대졸" 등
}
