import React, { useEffect, useState } from 'react'
import { brandImages } from './Images';
import "../Css/Home.css"


export default function Home() {
  const text1 = "Shop the Latest Trends and Redefine Your Style Today."
  const text2 = "Browse Our Shop"
  const text3 = "Share your passion for The Peace."
  const text4 = "Explore best sellers and classic favorites."
  return (
    <div className='flex-c' style={{ marginTop: 100 }}>
      <Template text1={text1} text2={text2} button="" paddingg={{ padding: "20" }} />
      <CustomCarousel>
        {brandImages.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} style={{objectFit:'cover'}} />;
        })}
      </CustomCarousel>
      <Template mT={40} text1={text3} text2={text4} button="SHOP NOW" padding="0" />

    </div>
  )
}



function Template(props) {
  // console.log(props.mT)
  if(props == undefined || props==null){
return <div></div>
  }
  return (
    <div className='flex-c H-center V-center full-W half-H' style={{marginTop:props.mT}}>
      <div><p style={props.paddingg}>{props.text1}</p></div>
      <div><p>{props.text2}</p></div>
      {
        props.button != "" ?
          <div><button className='button'>{props.button}</button></div> : <hr />
      }
    </div>
  )
}








import "../Css/custom.slider.css";

function CustomCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className="container__slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {children.map((item, index) => {
        return (
          <div
            className={"slider__item slider__item-active-" + (activeIndex + 1)}
            key={index}
          >
            {item}
          </div>
        );
      })}

      <div className="container__slider__links">
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? "container__slider__links-small container__slider__links-small-active"
                  : "container__slider__links-small"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>

      <button
        className="slider__btn-next"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        {">"}
      </button>
      <button
        className="slider__btn-prev"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        {"<"}
      </button>
    </div>
  );
}

