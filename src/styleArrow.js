import { css } from "styled-components";

export const styleArrow = css`
  .slick-arrow {
    /* 컨트롤 버튼 공통 */
   
  }
  .slick-next {
    /* 다음 컨트롤러 */
    right: -4%;
    left: unset;
    background: coral;
    clip-path: polygon(
      0% 20%,
      60% 20%,
      60% 0%,
      100% 50%,
      60% 100%,
      60% 80%,
      0% 80%
    );
  }
  .slick-prev {
    /* 이전 컨트롤러 */
    background: coral;
    clip-path: polygon(
      40% 0%,
      40% 20%,
      100% 20%,
      100% 80%,
      40% 80%,
      40% 100%,
      0% 50%
    );
  }
`;
