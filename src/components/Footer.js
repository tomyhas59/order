import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer1">
        <ul className="logo">OP.GG</ul>
        <ul>
          OP.GG
          <li>About OP.GG</li>
          <li>Company</li>
          <li>Blog</li>
        </ul>
        <ul>
          Products
          <li>리그 오브 레전드</li>
          <li>전략적 팀 전투</li>
          <li>발로란트</li>
        </ul>
        <ul>
          Apps
          <li>OP.GG for Mobile Android</li>
          <li>OP.GG for Mobile iOS</li>
          <li>AllT Android</li>
        </ul>
        <ul>
          Resources
          <li>개인정보처리방침</li>
          <li>이용약관</li>
          <li>도움말</li>
        </ul>
        <ul>
          More
          <li>제휴</li>
          <li>광고</li>
          <li>채용</li>
        </ul>
      </div>

      <div className="footer2">
        <div className="contact">
          <div>
            <div>
              주식회사 오피지지 (OP.GG) 통신판매업신고 : 제2019-서울강남-01973호
              사업자등록번호 : 295-88-00023 대표자 : 최상락
            </div>
            <div>
              서울특별시 강남구 테헤란로 507, 1층, 2층(삼성동, WeWork빌딩) 전화
              : 02-455-9903 (평일 09:00 ~ 18:00)
              <span>이메일 : service@op.gg</span>
            </div>
          </div>
          <div className="contactImg">
            <img />
            <img />
            <img />
            <img />
          </div>
        </div>
        <p className="copyright">
          © 2012-2024 OP.GG. OP.GG is not endorsed by Riot Games and does not
          reflect the views or opinions of Riot Games or anyone officially
          involved in producing or managing League of Legends. League of Legends
          and Riot Games are trademarks or registered trademarks of Riot Games,
          Inc. League of Legends © Riot Games, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
