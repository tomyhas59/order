import React from "react";

const Main = () => {
  return (
    <main>
      <div className="mainImg"></div>
      <div className="search">
        <select>
          지역
          <option></option>
          <option></option>
          <option></option>
        </select>
        <input />
        <button>검색</button>
      </div>
      <div className="contentWrapper">
        <div className="bestWrapper">
          <div className="bestWrapper-title">OP.GG Talk 인기글</div>
          <div className="best">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
        <div className="info">
          <div className="bestPlayer">
            <div>PLAYER OF THE WEEK</div>
            <div>Viper</div>
          </div>
          <div className="standing">
            <div>Standing</div>
            <div className="teamButton">
              <button>Team</button>
              <button>player</button>
            </div>
          </div>
          <div className="schedule">
            <div>Schedule</div>
            <div className="date">날짜</div>
          </div>
          <div className="lank">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item}>{item}위</div>
            ))}
          </div>
          <div>
            <NextGameInfo />
            <NextGameInfo />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

const NextGameInfo = () => {
  return (
    <div className="nextGame">
      <div className="nextTeamImg">
        <img />
        <span>Preview</span>
        <img />
      </div>
      <div className="nextTeamName">
        <h1>NS</h1>
        <div>
          <div>6.19 수</div>
          <div>17:00</div>
        </div>
        <h1>KDF</h1>
      </div>
      <div className="nextTeamRatio">
        <div className="ratio">
          <div>그래프</div>
          <div>60.3%</div>
        </div>
        <div>승부 예측</div>
        <div className="ratio">
          <div>그래프</div>
          <div>39.7%</div>
        </div>
      </div>
    </div>
  );
};
