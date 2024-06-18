import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header1">
        <div className="opgg">
          <div className="logo">opgg</div>
          <a>전적</a>
          <button className="showBox">리그오브레전드</button>
          <a>데스크톱</a>
          <a>Duo</a>
          <a>톡피지지</a>
          <a>이스포츠</a>
          <a>게임즈</a>
          <a>Gigs</a>
        </div>
        <div className="login">
          <button>문의하기</button>
          <button>다크모드</button>
          <button>한국어</button>
          <a>로그인</a>
        </div>
      </div>
      <div className="header2">
        <div>
          <a>홈</a>
          <a>챔피언 분석</a>
          <a>게임 모드</a>
          <a>아레나</a>
          <a>통계</a>
          <a>랭킹</a>
          <a>프로 관전</a>
          <a>멀티서치</a>
          <a>커뮤니티</a>
          <a>강의</a>
        </div>
        <a>마이 페이지</a>
      </div>
    </header>
  );
};

export default Header;
