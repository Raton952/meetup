import React from "react";
import NavBar from "../Shared/NavBar/NavBar";
import "./LandingPage.css";
import headerRight from "../../assets/images/headerRight.png";
import group from "../../assets/images/group.png";
import playGame1 from "../../assets/images/playinggame1.png";
import playGame2 from "../../assets/images/playinggame2.png";

const LandingPage = () => {
  return (
    <div className="landingContainer w-full">
      <NavBar />
      {/* hero section start */}
      <div className="container mx-auto flex flex-col sm:flex-row items-center mt-[90px]">
        <div className="headerLeft sm:w-[50%] w-[100%] pb-5 px-5">
          <h3>
            Let’s Explore <br /> Three-Dimensional <br /> visual
          </h3>

          <p className="text-[12px] pt-5">
            With virtual technology you can see the digital world <br /> feel
            more real and you can play the game with a new style.
          </p>
          <div className="mt-5 flex gap-5">
            <button className="rounded-full getItBtn text-[.8rem] text-white p-2 flex items-center justify-center">
              Get it Now
            </button>
            <button className="rounded-full font-[700] text-[.8rem] text-white p-2 flex items-center">
              Explore Device
            </button>
          </div>
          <div className="headerGroupImg pt-8 flex items-center gap-5">
            <img src={group} alt="" />
            <span className="flex items-center gap-2">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4.49219" cy="4.16992" r="4.16992" fill="white" />
              </svg>
              <p>400k people online</p>
            </span>
          </div>
        </div>
        <div className="headerRight sm:w-[50%] w-[100%]">
          <div className="relative flex items-center justify-center max-w-[600px]">
            <img src={headerRight} className="w-full" alt="" />
            <div className="hearderRightContent text-white absolute text-center sm:bottom-32 bottom-8">
              <h3 className="virtual_text">Cinematic Virtual Reality</h3>
              <p className=" text-[12px] pt-3">
                Let’s be the best for more <br /> reals and effective results{" "}
                <br />
                and ready to explore the limitless <br /> world that we have
                prepared <br /> for you.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* New Experience In Playing Game */}

      <div className="playingGameContainer container mx-auto flex flex-col sm:flex-row items-center mt-[90px]">
        <div className="playingLeft sm:w-[60%] w-[100%] pb-5 px-5 sm:flex mx-auto">
          <div className="sm:w-[50%] w-[100%] pb-5 px-5">
            <img className="w-full" src={playGame1} alt="" />
          </div>
          <div className="sm:w-[50%] w-[100%] pb-5 px-5 ">
            <img className="w-full sm:mt-[50%]" src={playGame2} alt="" />
          </div>
        </div>
        <div className="playingRight sm:w-[40%] w-[100%] pb-5 px-5 text-white">
          <h2 className="playingGameHead mb-3">
            New Experience In Playing Game
          </h2>
          <p className="mb-8">
            You can try playing the game with a new style and of course a more
            real feel, like you are the main character in your game and
            adventure in this new digital world.
          </p>
          <button className="rounded-full getItBtn text-[.8rem] text-white p-2 flex items-center justify-center">
            Get it Now
          </button>
        </div>
      </div>

      {/* client say start */}

      <div className="container mx-auto ">
        <div className="clientsayContainer text-white text-center sm:pb-28">
          <h2 className="playingGameHead mb-3 pt-8 text-[20px]">
            What our user say
          </h2>
          <p className="text-center p-5">
            See what our customer say about us. It really matter for us. How
            good or bad <br /> we will make ir for evaluation to make EhyalLive better.
          </p>
        </div>
        <div className="reviewContainer grid grid-cols-3 gap-4 text-white">
            <div className="clientsayContainer container p-5">
              <p>starstar <span>star</span></p>
              <p>VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap.</p>
            </div>
            <div className="clientsayContainer p-5">
              <p>starstar <span>star</span></p>
              <p>VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap.</p>
            </div>
            <div className="clientsayContainer p-5">
              <p>starstar <span>star</span></p>
              <p>VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
