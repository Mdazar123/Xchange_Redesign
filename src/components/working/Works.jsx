import React, { useEffect } from "react";
import "./works.css";

const Works = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".works-card");
    const stackArea = document.querySelector(".works-stack-area");

    const rotateCards = () => {
      let angle = 0;
      cards.forEach((card) => {
        if (card.classList.contains("works-active")) {
          card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
        } else {
          card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
          angle -= 10;
        }
      });
    };

    const adjust = () => {
      const windowWidth = window.innerWidth;
      const left = document.querySelector(".works-left");
      if (windowWidth < 800) {
        stackArea.insertAdjacentElement("beforebegin", left);
      } else {
        stackArea.insertAdjacentElement("afterbegin", left);
      }
    };

    const handleScroll = () => {
      const proportion = stackArea.getBoundingClientRect().top / window.innerHeight;
      if (proportion <= 0) {
        const n = cards.length;
        const index = Math.abs(Math.ceil((proportion * n) / 2)) - 1;

        cards.forEach((card, i) => {
          if (i <= index) {
            card.classList.add("works-active");
          } else {
            card.classList.remove("works-active");
          }
        });

        rotateCards();
      }
    };

    adjust();
    rotateCards();
    window.addEventListener("resize", adjust);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", adjust);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="works-center">
      {/* <div className="works-top">Scroll Down</div> */}
      <div className="works-stack-area">
        <div className="works-left">
          <div className="works-title"><span>Easy Steps</span> <br />How It Works</div>
          <div className="works-sub-title">
          Create an account to join our platform and access exclusive benefits. Post ads to promote your products or services and start earning by reaching a wider audience.
          </div>
        </div>
        <div className="works-right">
          <div className="works-cards">
            <div className="works-card">
              <div className="works-sub">Create Account</div>
              <div className="works-content">Join our community and unlock exclusive benefits with a few clicks. Create your account today and start exploring the possibilities!</div>
            </div>
            <div className="works-card">
              <div className="works-sub">Post an Ad</div>
              <div className="works-content">Boost your online visibility with our 'Post an Ad' feature, a powerful tool for reaching a wider audience and promoting your products or services on your website.</div>
            </div>
            <div className="works-card">
              <div className="works-sub">Start Earning</div>
              <div className="works-content">Unlock your financial potential and take the first step towards success with 'Start Earning.' Join us today and pave your path to prosperity.</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="works-bottom">Other Content...</div> */}
    </div>
  );
};

export default Works;
