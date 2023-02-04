import React, { useContext, useRef } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "../scss/Main.module.scss";
import giphy from "../assets/imgs/giphy.gif";
import b from "../assets/imgs/b.gif";
import c from "../assets/imgs/c.gif";
import d from "../assets/imgs/d.gif";
import e from "../assets/imgs/e.jpg";
import f from "../assets/imgs/f.png";
import h from "../assets/imgs/h.jpg";
import write from "../assets/imgs/write.png";
import choose from "../assets/imgs/choose.png";
import complete from "../assets/imgs/complete.png";
import useIntersectionObsever from "./useIntersectionObsever";

const Main = () => {
  let navigate = useNavigate();
  const desRef = useRef();
  const scrollBtn = useRef();
  const titleRef = useRef();
  const cardRef = useRef();
  const titleBoxRef = useRef();
  const isInViewport1 = useIntersectionObsever(desRef);
  const isInViewport2 = useIntersectionObsever(titleRef);
  const isInViewport3 = useIntersectionObsever(cardRef);
  const isInViewport4 = useIntersectionObsever(titleBoxRef);

  function scrollDown() {
    let desBoxTop = desRef.current.offsetTop;
    let scrollBtnTop = scrollBtn.current.offsetTop;
    let minusTop = (desBoxTop - scrollBtnTop) / 2;
    window.scrollTo({
      top: desBoxTop - minusTop,
      behavior: "smooth",
    });
  }

  // console.log(happyData);
  return (
    <>
      <div className={`${style.FullContentBox}`}>
        <Header />

        <div
          // ref={titleBoxRef} className={` ${style.mainTitleBox}`}>
          ref={titleBoxRef}
          className={
            isInViewport4
              ? `${style.mainTitleBox} ${style.animation2}`
              : `${style.mainTitleBox} ${style.opa_zero}`
          }
        >
          {/* <p className={`${style.mainTitle}`}>HOW YOU FEEL DURING</p> */}
          <p
            className={
              isInViewport4
                ? `${style.mainTitle} ${style.animation2}`
                : `${style.mainTitle} ${style.opa_zero}`
            }
          >
            HOW YOU FEEL DURING
          </p>
          <p
            className={
              isInViewport4
                ? `${style.mainTitle} ${style.animation2}`
                : `${style.mainTitle} ${style.opa_zero}`
            }
          >
            {" "}
            THE MONTH
          </p>
          <button
            onClick={() => {
              navigate("/write");
            }}
          >
            <div>
              <p className={`${style.readyTxt}`}>Ready?</p>
              <p className={`${style.goTxt}`}> Let's Go!</p>
            </div>
          </button>

          <div
            className={`${style.scroll}`}
            onClick={scrollDown}
            ref={scrollBtn}
          ></div>
        </div>

        {/* <div className={`${style.siteDesBox}`} ref={desRef}> */}
        <div
          className={
            isInViewport1
              ? `${style.siteDesBox} ${style.animation}`
              : `${style.siteDesBox} ${style.opa_zero}`
          }
          ref={desRef}
        >
          <div className={`${style.siteDes_pBox}`}>
            <div>
              <p>What is </p>
              <p>Month Mood?</p>
            </div>
            <p className={`${style.siteDes_p2Box}`}>
              MonthMood is a diary to record my mood for a month. Have a healthy
              mind while managing your mood.
            </p>
          </div>
          <div className={`${style.siteDesimgBox}`}>
            <p className={`${style.gifBox1}`}>
              <img className={`${style.gif}`} src={giphy}></img>
            </p>
            <p className={`${style.gifBox2}`}>
              <img className={`${style.gif1}`} src={b}></img>
            </p>
            <p className={`${style.gifBox3}`}>
              <img className={`${style.gif2}`} src={c}></img>
            </p>
            <p className={`${style.gifBox4}`}>
              <img className={`${style.gif3}`} src={d}></img>
            </p>
          </div>
        </div>

        <div className={`${style.howUseFullBox}`}>
          {/* <p ref={useTitleRef} className={`${style.howUseTitle}`}> */}
          <p
            ref={titleRef}
            className={
              isInViewport2
                ? `${style.howUseTitle} ${style.animation}`
                : `${style.howUseTitle} ${style.opa_zero}`
            }
          >
            How to <span>use?</span>
          </p>
          {/* <div className={`${style.howUseContentBox}`}> */}
          <div
            ref={cardRef}
            className={
              isInViewport3
                ? `${style.howUseContentBox} ${style.animation}`
                : `${style.howUseContentBox} ${style.opa_zero}`
            }
          >
            <div className={`${style.howUseBox}`}>
              <div className={`${style.howUseImgBox}`}>
                <img src={e}></img>
                <img src={choose}></img>
              </div>
              <p>Choose GIF</p>
              <p>
                Choose a gif that fits
                <br /> your mood for the day
              </p>
            </div>
            <div className={`${style.howUseBox}`}>
              <div className={`${style.howUseImgBox}`}>
                <img src={f}></img>
                <img src={write}></img>
              </div>
              <p>Write Title</p>
              <p>
                Write a simple title
                <br /> summarizing your day
              </p>
            </div>
            <div className={`${style.howUseBox}`}>
              <div className={`${style.howUseImgBox}`}>
                <img src={h}></img>
                <img src={complete}></img>
              </div>
              <p>Complete</p>
              <p>
                Done! Don't forget to look
                <br /> at your monthly stats
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Main;
