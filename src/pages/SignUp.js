import { useCallback, useState } from "react";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    nickname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [okPasswordError, setOkPasswordError] = useState("");

  const signUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setEmailError("");
      setPasswordError("");
      setOkPasswordError("");
      const parts = signUpData.email.split("@");
      const validEmail = parts.length === 2 && parts[0] && parts[1];
      const validPassword = signUpData.password.length >= 6;
      const okPassword = signUpData.password === signUpData.passwordConfirm;

      if (!validEmail) {
        setEmailError("이메일이 올바르지 않습니다.");
        return;
      }
      if (!validPassword) {
        setPasswordError("비밀번호가 너무 짧습니다.");
        return;
      }
      if (!okPassword) {
        setOkPasswordError("비밀번호가 다릅니다.");
        return;
      }

      alert("회원가입 성공");
      setSignUpData({
        nickname: "",
        email: "",
        password: "",
        passwordConfirm: "",
      });
    },
    [signUpData]
  );

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <div>닉네임</div>
          <input
            name="nickname"
            value={signUpData.nickname}
            onChange={signUpChange}
            placeholder="nickname"
            type="text"
            required
          />
        </label>
        <label>
          <div>이메일</div>
          <input
            name="email"
            value={signUpData.email}
            onChange={signUpChange}
            placeholder="email"
            required
            type="email"
          />
          {emailError && <div style={{ color: "red" }}>{emailError}</div>}
        </label>

        <label>
          <div>비밀번호</div>
          <input
            name="password"
            value={signUpData.password}
            onChange={signUpChange}
            placeholder="password"
            required
            type="password"
          />
          {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}
        </label>
        <label>
          <div>비밀번호 확인</div>
          <input
            name="passwordConfirm"
            value={signUpData.passwordConfirm}
            onChange={signUpChange}
            placeholder="password confirm"
            type="password"
          />
          {okPasswordError && (
            <div style={{ color: "red" }}>{okPasswordError}</div>
          )}
        </label>
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};

export default SignUp;
