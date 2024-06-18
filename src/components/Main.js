import React from "react";

const Main = () => {
  const date = new Date();

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
          <div>OP.GG Talk 인기글</div>
          <div className="best">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </div>
        <div className="info">
          <div className="bestPlayer">
            <div>PLAYER OF THE WEEK</div>
            <div>Viper</div>
          </div>
          <div className="team">
            <div className="standing">
              <div>Standing</div>
              <div className="teamButton">
                <button>Team</button>
                <button>player</button>
              </div>
            </div>
            <div className="schedule">
              <div>Schedule</div>
              <div>{date}</div>
            </div>
            <div className="lank">
              <div>1위</div>
              <div>2위</div>
              <div>3위</div>
              <div>4위</div>
              <div>5위</div>
              <div>6위</div>
            </div>
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
