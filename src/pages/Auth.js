import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [emailOrNumber, setEmailOrNumber] = useState("");
  const [isPhone, setIsPhone] = useState(false);
  const [otp, setOtp] = useState("");
  const [OTPInput, setOTPInput] = useState(false);
  const [otpResult, setOtpResult] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  let token = sessionStorage.getItem("Auth token");
  const [authenticated, setAuthenticated] = useState("");

  useEffect(() => {
    const isPhoneNumber = () => {
      if (
        emailOrNumber[0] == "+" ||
        emailOrNumber[0] == "9" ||
        emailOrNumber.length >= 12
      ) {
        setIsPhone(true);
      } else {
        setIsPhone(false);
      }
    };
    isPhoneNumber();
  }, [emailOrNumber]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha_container",
      {
        size: "invisible",
        callback: (response) => {
          setOTPInput(true);
        },
      },
      auth
    );
    signInWithPhoneNumber(auth, emailOrNumber, window.recaptchaVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log("SMS not sent", error);
      });
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    window.confirmationResult
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        setAuthenticated(result.user);
      })
      .catch((error) => {
        setOtpResult(error.message);
      });
  };

  const EmailOrNumberRegister = (e) => {
    e.preventDefault();
    if (
      emailOrNumber.startsWith("+") ||
      emailOrNumber.startsWith("9") ||
      emailOrNumber.length >= 12
    ) {
      generateRecaptcha();
    } else {
      createUserWithEmailAndPassword(auth, emailOrNumber, password)
        .then((response) => {
          console.log(response);
          sessionStorage.setItem(
            "Auth token",
            response._tokenResponse.refreshToken
          );
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const emailOrNumberLogin = (e) => {
    e.preventDefault();
    if (
      emailOrNumber.startsWith("+") ||
      emailOrNumber.startsWith("9") ||
      emailOrNumber.length >= 12
    ) {
      generateRecaptcha();
    } else {
      signInWithEmailAndPassword(auth, emailOrNumber, password)
        .then((response) => {
          console.log(response);
          sessionStorage.setItem(
            "Auth token",
            response._tokenResponse.refreshToken
          );
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const googleSignIn = () => {
    if (windowSize.innerWidth <= 425) {
      signInWithRedirect(auth, provider)
        .then((result) => {
          console.log(result);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      signInWithPopup(auth, provider)
        .then((result) => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    const authorizedNavigate = () => {
      setAuthenticated(sessionStorage.getItem("Auth token"));
    };
    authorizedNavigate();
  }, [
    googleSignIn,
    emailOrNumberLogin,
    EmailOrNumberRegister,
    verifyOTP,
    generateRecaptcha,
  ]);

  if (authenticated) {
    return navigate("/profile");
  } else {
    return (
      <div className="transition-all duration-200 pb-14  bg-[#212633] h-full w-full flex flex-1 flex-col justify-center items-center">
        <Link to="/" className="mt-8">
          <img className="w-52" src={logo} alt="" />
        </Link>
        <div className="transition-all duration-200  flex flex-col items-center min-w-[300px] h-fit p-3">
          <div className="w-full transition-all duration-200 ">
            <div className="flex justify-around transition-all duration-200  font-medium mb-1 text-white">
              <p
                className={`border-[2px] ${
                  isLogin ? "text-[#e4ac37]" : ""
                } border-white rounded-tl-[30px] cursor-pointer transition-all duration-200 mr-[2px] h-full py-[10px] flex-[0.5] text-center`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </p>
              <p
                className={`border-[2px] ${
                  !isLogin ? "text-[#e4ac37]" : ""
                } border-white rounded-tr-[30px] cursor-pointer ml-[2px] transition-all duration-200 h-full py-[10px] flex-[0.5] text-center`}
                onClick={() => setIsLogin(false)}
              >
                Register
              </p>
            </div>
            {isLogin ? (
              <form className="transition-all duration-200 flex flex-col mt-3">
                <input
                  className="auth_input p-3 rounded-md mb-3 bg-transparent text-white border-[1px] border-white"
                  type="text"
                  value={emailOrNumber}
                  onChange={(e) => setEmailOrNumber(e.target.value)}
                  placeholder="Email/Phone number"
                />
                <input
                  className={`${
                    isPhone && "hidden"
                  } auth_input p-3 rounded-md mb-3 bg-transparent border-[1px] text-white border-white`}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                {OTPInput && (
                  <input
                    className={`auth_input p-3 rounded-md mb-3 bg-transparent border-[1px] text-white border-white`}
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter confirmation code"
                  />
                )}
                {!OTPInput && (
                  <button
                    onClick={emailOrNumberLogin}
                    className="border-[1px] border-white rounded-md text-[#febe32] py-2"
                    type="submit"
                  >
                    Submit
                  </button>
                )}
                {otp.length == 6 && (
                  <button
                    onClick={verifyOTP}
                    className="border-[1px] border-white rounded-md text-[#febe32] py-2"
                    type="submit"
                  >
                    Confirm
                  </button>
                )}
                <div id="recaptcha_container"></div>
                {otpResult && (
                  <p className="text-[#e4ac38] m-3 text-xs font-semibold">
                    {otpResult}
                  </p>
                )}
              </form>
            ) : (
              <form className="transition-all duration-300 flex flex-col mt-3">
                <input
                  className="auth_input p-3 rounded-md mb-3 bg-transparent border-[1px] text-white border-white"
                  type="text"
                  value={emailOrNumber}
                  onChange={(e) => setEmailOrNumber(e.target.value)}
                  placeholder="Email/Phone number"
                />
                <input
                  className={`${
                    isPhone && "hidden"
                  } auth_input p-3 rounded-md mb-3 bg-transparent border-[1px] text-white border-white`}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <input
                  className={`${
                    isPhone && "hidden"
                  } auth_input transition-all duration-200  p-3 rounded-md mb-3 bg-transparent border-[1px] text-white border-white`}
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                />
                {OTPInput && (
                  <input
                    className={`auth_input p-3 rounded-md mb-3 bg-transparent border-[1px] text-white border-white`}
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter confirmation code"
                  />
                )}
                {!OTPInput && (
                  <button
                    onClick={EmailOrNumberRegister}
                    className="border-[1px] border-white rounded-md text-[#febe32] py-2"
                    type="submit"
                  >
                    Submit
                  </button>
                )}
                {otp.length == 6 && (
                  <button
                    onClick={verifyOTP}
                    className="border-[1px] border-white rounded-md text-[#febe32] py-2"
                    type="submit"
                  >
                    Confirm
                  </button>
                )}
                <div id="recaptcha_container"></div>
              </form>
            )}
          </div>
          <div className="transition-all duration-300 flex flex-col mt-3 w-full">
            <div className="auth_or w-full mb-5">
              <p className="w-full text-center text-white">Or</p>
            </div>
            <div className="flex justify-center">
              <div className="google_sign" role="button" onClick={googleSignIn}>
                <div className="google_pic">
                  <img src={require("../assets/icons/google.png")} alt="" />
                </div>
                <p>Sign in with google</p>
              </div>
            </div>
            <div className="mt-5 text-white text-xs font-light text-center">
              <p>
                Входя в раздел Мой профиль, вы принимаете{" "}
                <Link className="underline" to="/*">
                  Условия использования
                </Link>{" "}
                сайта
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Auth;
