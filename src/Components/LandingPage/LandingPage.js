import React from "react";
import NavBar from "../Shared/NavBar/NavBar";
import "./LandingPage.css";
import headerRight from "../../assets/images/headerRight.png";
import group from "../../assets/images/group.png";
import playGame1 from "../../assets/images/playinggame1.png";
import playGame2 from "../../assets/images/playinggame2.png";
import cli1 from "../../assets/images/cli1.png";
import cli2 from "../../assets/images/cli2.png";
import cli3 from "../../assets/images/cli3.png";

const LandingPage = () => {
  return (
    <div className="landingContainer w-full">
      <h1>hi</h1>
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
        <div className="clientsayContainer mx-4 sm:mx-0 text-white text-center sm:pb-28">
          <h2 className="playingGameHead mb-3 pt-8 text-[20px]">
            What our user say
          </h2>
          <p className="text-center p-5">
            See what our customer say about us. It really matter for us. How
            good or bad <br /> we will make ir for evaluation to make EhyalLive
            better.
          </p>
        </div>
        <div className="reviewContainer container mx-auto grid px-10 grid-cols-1 sm:grid-cols-3 gap-4 pb-5 text-white">
          <div className="clientsayContainer container p-5">
            <p className="text-[#F7B603] reviewContent">
              starstar <span className="text-white">star</span>
            </p>
            <p className="mt-2 reviewContent">
              “I know in real-time where the money is spent,and I don’t have to
              lend out the company’s credit card anymore. What a relief!”
            </p>
            <div className="flex gap-4 items-center mt-5">
              <div>
                <img src={cli3} className="w-[30px]" alt="" />
              </div>
              <div>
                <p>Denny Hilguston</p>
                <p className="text-[#EB4468]">@denny.hill</p>
              </div>
            </div>
          </div>
          <div className="clientsayContainer container p-5">
            <p className="text-[#F7B603] reviewContent">
              starstar <span className="text-white">star</span>
            </p>
            <p className="mt-2 reviewContent">
              VISUALS are much better. The improvements in optics and resolution
              and much more than a modern console generation leap.
            </p>
            <div className="flex gap-4 items-center mt-5">
              <div>
                <img src={cli2} className="w-[30px]" alt="" />
              </div>
              <div>
                <p>Vani Pandey</p>
                <p className="text-[#EB4468]">@vani.pandey</p>
              </div>
            </div>
          </div>
          <div className="clientsayContainer container p-5">
            <p className="text-[#F7B603] reviewContent">
              starstar <span className="text-white">star</span>
            </p>
            <p className="mt-2 reviewContent">
              I can actually see the improvement in the graphics, not having the
              external sensors is a big plus.
            </p>
            <div className="flex gap-4 items-center mt-5">
              <div>
                <img src={cli1} className="w-[30px]" alt="" />
              </div>
              <div>
                <p>milly Singh</p>
                <p className="text-[#EB4468]">@milly.singh</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* company valus */}

      <div className="container mx-auto mt-24">
        <div className="grid grid-cols-2 gap-3">
          <div className="text-white">
            <h2 className="companyValueHead mb-5">Our company values culture</h2>
            <p className="reviewContent text-lg">
              We specialize in creating visual identities for products and
              branda in your company.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-white">
            <div className="">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9177 14.1605C15.7088 15.08 16.2939 16.0414 17.2553 16.2504C18.2166 16.4594 19.178 15.8742 19.387 14.9546L21.9367 4.00349C22.1457 3.08393 21.5605 2.12257 20.5991 1.91358C19.6378 1.70459 18.6764 2.28976 18.4674 3.20932L15.9177 14.1605Z"
                  fill="url(#paint0_linear_150_101)"
                  stroke="white"
                  stroke-width="0.5"
                />
                <path
                  d="M19.2198 15.2464C19.2198 15.2464 15.5833 11.6517 9.14641 13.4491C9.14641 13.4491 5.34277 14.1178 5.55176 16.0405C5.55176 16.0405 5.42637 20.8055 7.0565 23.6478C9.07126 27.0968 16.341 27.6854 19.962 23.6478C20.7732 22.7433 20.6963 21.9305 21.1323 20.5C21.1323 19 21.1323 15.5 19.2198 15.2464Z"
                  fill="url(#paint1_linear_150_101)"
                  stroke="white"
                  stroke-width="0.5"
                />
                <path
                  d="M12.7393 14.7868C12.9065 15.7482 13.8679 16.3333 14.8292 16.1661C15.7906 15.9989 16.4594 15.0794 16.2922 14.118L14.2023 3.08328C14.0351 2.12192 13.0737 1.53675 12.1123 1.70394C11.151 1.87113 10.4822 2.7907 10.6912 3.75206L12.7393 14.7868"
                  fill="url(#paint2_linear_150_101)"
                />
                <path
                  d="M12.7393 14.7868C12.9065 15.7482 13.8679 16.3333 14.8292 16.1661C15.7906 15.9989 16.4594 15.0794 16.2922 14.118L14.2023 3.08328C14.0351 2.12192 13.0737 1.53675 12.1123 1.70394C11.151 1.87113 10.4822 2.7907 10.6912 3.75206L12.7393 14.7868"
                  stroke="white"
                  stroke-width="0.5"
                />
                <path
                  d="M5.34442 14.244C5.21903 13.2827 5.9296 12.4049 6.93276 12.2795H6.97455C7.93591 12.1959 8.85547 12.8647 8.93907 13.8678L9.23166 16.5847C9.35705 17.5461 8.64648 18.4238 7.64332 18.5492H7.60153C6.59837 18.6328 5.72061 17.9641 5.63701 16.9609L5.34442 14.244"
                  fill="url(#paint3_linear_150_101)"
                />
                <path
                  d="M5.34442 14.244C5.21903 13.2827 5.9296 12.4049 6.93276 12.2795H6.97455C7.93591 12.1959 8.85547 12.8647 8.93907 13.8678L9.23166 16.5847C9.35705 17.5461 8.64648 18.4238 7.64332 18.5492H7.60153C6.59837 18.6328 5.72061 17.9641 5.63701 16.9609L5.34442 14.244"
                  stroke="white"
                  stroke-width="0.5"
                />
                <path
                  d="M8.72626 12.2795C8.60086 11.3182 9.31143 10.4404 10.3146 10.315H10.3564C11.3595 10.2314 12.2373 10.9002 12.3209 11.9034L12.6135 14.6202C12.7389 15.5816 12.0283 16.4594 11.0252 16.5848H10.9834C9.9802 16.6684 9.10244 15.9996 9.01885 14.9964L8.72626 12.2795"
                  fill="url(#paint4_linear_150_101)"
                />
                <path
                  d="M8.72626 12.2795C8.60086 11.3182 9.31143 10.4404 10.3146 10.315H10.3564C11.3595 10.2314 12.2373 10.9002 12.3209 11.9034L12.6135 14.6202C12.7389 15.5816 12.0283 16.4594 11.0252 16.5848H10.9834C9.9802 16.6684 9.10244 15.9996 9.01885 14.9964L8.72626 12.2795"
                  stroke="white"
                  stroke-width="0.5"
                />
                <path
                  d="M7.0474 17.9647C8.05056 17.8393 8.71933 17.0034 8.63573 16.0002L8.34315 13.2833C8.30135 13.0325 8.17595 12.7399 8.05056 12.4891C8.67753 12.7817 8.88652 13.2833 8.97012 13.8685L9.26271 16.5854C9.3881 17.5467 8.67753 18.4245 7.71617 18.5081C7.0056 18.5917 6.33683 18.2155 6.00244 17.6721C6.25323 17.8811 6.62942 18.0065 7.0474 17.9647"
                  fill="white"
                />
                <path
                  d="M10.3859 16.0001C11.389 15.8747 12.0996 15.0387 11.9742 14.0773L11.6816 11.3605C11.6398 11.1097 11.5144 10.7753 11.389 10.5663C11.9742 10.9007 12.225 11.4022 12.3086 11.9874L12.6012 14.7043C12.7266 15.6657 12.016 16.5016 11.0128 16.627H10.9711C10.2605 16.7106 9.59171 16.3344 9.25732 15.7911C9.59171 15.9583 9.96789 16.0419 10.3859 16.0001"
                  fill="white"
                />
                <path
                  d="M17.6247 17.8807C15.6184 16.9193 11.0624 18.5913 11.9819 22.7711C11.9819 18.4241 15.911 17.6717 17.6247 17.8807Z"
                  fill="white"
                />
                <path
                  d="M16.8672 13.5755C15.4043 12.6977 15.1535 14.0771 12.6874 14.1607C11.6007 14.2025 11.1409 16.4178 12.771 17.2119C15.0281 18.3405 15.1953 16.7522 15.7805 17.3791C16.3657 18.0479 16.909 18.1733 17.4106 18.9257C17.7868 19.469 20.5873 18.6331 20.8799 17.5045C21.4233 15.2892 19.1244 14.9548 16.8672 13.5755Z"
                  fill="white"
                />
                <path
                  d="M17.0452 13.9515C15.5405 13.0737 15.2479 14.4531 12.6982 14.5367C11.5696 14.5785 11.0681 16.8774 12.7818 17.7133C15.1225 18.8837 15.3315 17.2117 15.8749 17.8805C16.5018 18.5493 17.0452 18.7165 17.5886 19.5106C17.9648 20.0958 16.9616 22.2693 16.9616 22.2693C16.9616 22.2693 19.8457 24.3174 20.4309 23.1471C21.5176 20.9736 21.225 19.3017 21.1832 18.0477C21.0997 15.08 19.4277 15.3726 17.0452 13.9515"
                  fill="url(#paint5_linear_150_101)"
                />
                <path
                  d="M17.0452 13.9515C15.5405 13.0737 15.2479 14.4531 12.6982 14.5367C11.5696 14.5785 11.0681 16.8774 12.7818 17.7133C15.1225 18.8837 15.3315 17.2117 15.8749 17.8805C16.5018 18.5493 17.0452 18.7165 17.5886 19.5106C17.9648 20.0958 16.9616 22.2693 16.9616 22.2693C16.9616 22.2693 19.8457 24.3174 20.4309 23.1471C21.5176 20.9736 21.225 19.3017 21.1832 18.0477C21.0997 15.08 19.4277 15.3726 17.0452 13.9515"
                  stroke="white"
                  stroke-width="0.5"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_150_101"
                    x1="16.4412"
                    y1="0.563672"
                    x2="24.9137"
                    y2="1.7091"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C54A92" />
                    <stop offset="1" stop-color="#2E62EB" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_150_101"
                    x1="7.03075"
                    y1="11.6952"
                    x2="26.959"
                    y2="19.1003"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C54A92" />
                    <stop offset="1" stop-color="#2E62EB" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_150_101"
                    x1="11.1779"
                    y1="0.359154"
                    x2="19.0629"
                    y2="1.34194"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C54A92" />
                    <stop offset="1" stop-color="#2E62EB" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_150_101"
                    x1="5.69306"
                    y1="11.7027"
                    x2="11.0172"
                    y2="12.7626"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C54A92" />
                    <stop offset="1" stop-color="#2E62EB" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_150_101"
                    x1="9.0749"
                    y1="9.73825"
                    x2="14.3991"
                    y2="10.7981"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C54A92" />
                    <stop offset="1" stop-color="#2E62EB" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_150_101"
                    x1="12.5566"
                    y1="12.7675"
                    x2="24.9072"
                    y2="16.6062"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C54A92" />
                    <stop offset="1" stop-color="#2E62EB" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-md">Be Sincere</p>
            </div>
            <div>
              <svg
                width="31"
                height="20"
                viewBox="0 0 31 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.7482 0.690552H16.8314C16.4666 0.690552 16.1155 0.83616 15.8465 1.09825L11.3642 5.46648C11.3596 5.47134 11.355 5.48105 11.3505 5.4859C10.5936 6.24306 10.6072 7.4516 11.2547 8.20391C11.8338 8.87856 13.0513 9.05814 13.8128 8.33496C13.8173 8.3301 13.8265 8.3301 13.831 8.32525L17.4743 4.77242C17.7707 4.48606 18.2358 4.50547 18.5048 4.82096C18.7784 5.13644 18.7556 5.62665 18.4592 5.91787L17.2691 7.07788L23.9082 12.8148C24.0404 12.9313 24.159 13.0575 24.2684 13.1885V3.79685L21.7788 1.14679C21.5097 0.855574 21.1358 0.690552 20.7482 0.690552V0.690552ZM25.7321 3.80656V14.6737C25.7321 15.5328 26.3842 16.2269 27.1913 16.2269H30.1095V3.80656H25.7321ZM27.9208 14.6737C27.5196 14.6737 27.1913 14.3243 27.1913 13.8972C27.1913 13.4701 27.5196 13.1206 27.9208 13.1206C28.3221 13.1206 28.6504 13.4701 28.6504 13.8972C28.6504 14.3243 28.3221 14.6737 27.9208 14.6737ZM0.926758 16.222H3.84504C4.65212 16.222 5.30417 15.528 5.30417 14.6689V3.80656H0.926758V16.222ZM3.11547 13.1206C3.51673 13.1206 3.84504 13.4701 3.84504 13.8972C3.84504 14.3243 3.51673 14.6737 3.11547 14.6737C2.7142 14.6737 2.3859 14.3243 2.3859 13.8972C2.3859 13.4652 2.7142 13.1206 3.11547 13.1206ZM22.9917 14.0234L16.1839 8.14081L14.8159 9.47555C13.4617 10.7909 11.387 10.6647 10.1786 9.26199C8.95202 7.83504 9.04778 5.62665 10.3792 4.32589L14.1092 0.690552H10.288C9.90046 0.690552 9.53112 0.855574 9.25753 1.14679L6.76331 3.79685V14.664H7.59776L11.7244 18.6391C12.9738 19.7215 14.8114 19.5176 15.8282 18.1877L15.8373 18.178L16.6535 18.9303C17.3785 19.5613 18.4501 19.44 19.0383 18.6683L20.4701 16.7948L20.7163 17.0083C21.341 17.5471 22.2621 17.45 22.7682 16.7802L23.2014 16.2123C23.7121 15.5425 23.6164 14.567 22.9917 14.0234V14.0234Z"
                  fill="url(#paint0_linear_150_116)"
                  stroke="white"
                  stroke-width="0.5"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_150_116"
                    x1="3.63184"
                    y1="-0.999879"
                    x2="36.6318"
                    y2="15.5001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C54A92" />
                    <stop offset="1" stop-color="#2E62EB" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.23092 1.93262C2.51961 1.93262 1.13232 3.3199 1.13232 5.03121V17.4256C1.13232 19.1369 2.51961 20.5242 4.23092 20.5242H16.6253C18.3366 20.5242 19.7239 19.1369 19.7239 17.4256V5.03121C19.7239 4.53134 19.6055 4.05911 19.3953 3.64103C18.8658 2.54417 17.8661 2.17875 17.706 2.12628C17.3695 2.00106 17.0054 1.93262 16.6253 1.93262H4.23092ZM17.706 2.12628C17.6917 2.1216 17.6841 2.11941 17.6841 2.11941C16.1231 3.57571 14.972 4.85631 13.8455 6.10949C13.1307 6.90466 12.4259 7.6888 11.6325 8.49978L10.1593 6.74631C9.0523 5.47603 7.13586 5.3531 5.87881 6.47176C4.62176 7.59041 4.50012 9.52703 5.60711 10.7973L9.70753 15.4917C10.2853 16.1547 11.118 16.5335 11.9922 16.531C12.8664 16.5285 13.697 16.145 14.271 15.4787L19.7236 9.21419V5.18608C19.7236 4.55603 19.5918 4.04815 19.3953 3.64103C19.0456 2.94572 18.4419 2.40017 17.706 2.12628Z"
                  fill="url(#paint0_linear_150_118)"
                />
                <path
                  d="M17.6841 2.11941L17.7533 1.87919L17.6172 1.83995L17.5136 1.93661L17.6841 2.11941ZM13.8455 6.10949L14.0314 6.27661L14.0314 6.27661L13.8455 6.10949ZM11.6325 8.49978L11.4411 8.6606L11.6185 8.87167L11.8113 8.67461L11.6325 8.49978ZM10.1593 6.74631L10.3507 6.58547L10.3478 6.58206L10.1593 6.74631ZM5.87881 6.47176L5.71261 6.285L5.71261 6.285L5.87881 6.47176ZM5.60711 10.7973L5.41864 10.9616L5.41883 10.9618L5.60711 10.7973ZM9.70753 15.4917L9.89601 15.3275L9.89582 15.3273L9.70753 15.4917ZM11.9922 16.531L11.9929 16.781L11.9922 16.531ZM14.271 15.4787L14.0824 15.3146L14.0816 15.3155L14.271 15.4787ZM19.7236 9.21419L19.9121 9.37833L19.9736 9.30776V9.21419H19.7236ZM1.38232 5.03121C1.38232 3.45797 2.65768 2.18262 4.23092 2.18262V1.68262C2.38154 1.68262 0.882324 3.18183 0.882324 5.03121H1.38232ZM1.38232 17.4256V5.03121H0.882324V17.4256H1.38232ZM4.23092 20.2742C2.65768 20.2742 1.38232 18.9988 1.38232 17.4256H0.882324C0.882324 19.275 2.38154 20.7742 4.23092 20.7742V20.2742ZM16.6253 20.2742H4.23092V20.7742H16.6253V20.2742ZM19.4739 17.4256C19.4739 18.9988 18.1985 20.2742 16.6253 20.2742V20.7742C18.4747 20.7742 19.9739 19.275 19.9739 17.4256H19.4739ZM19.4739 5.03121V17.4256H19.9739V5.03121H19.4739ZM19.1719 3.75335C19.365 4.13737 19.4739 4.57122 19.4739 5.03121H19.9739C19.9739 4.49146 19.846 3.98085 19.6186 3.52872L19.1719 3.75335ZM17.6281 2.36385C17.7658 2.40896 18.6851 2.7449 19.1701 3.74972L19.6204 3.53235C19.0465 2.34343 17.9664 1.94854 17.7838 1.88871L17.6281 2.36385ZM16.6253 2.18262C16.9752 2.18262 17.3098 2.24558 17.6188 2.36058L17.7932 1.89198C17.4292 1.75653 17.0356 1.68262 16.6253 1.68262V2.18262ZM4.23092 2.18262H16.6253V1.68262H4.23092V2.18262ZM17.6841 2.11941C17.6149 2.35963 17.6148 2.35963 17.6148 2.35963C17.6148 2.35963 17.6148 2.35963 17.6148 2.35962C17.6148 2.35962 17.6148 2.35962 17.6148 2.35962C17.6148 2.35961 17.6147 2.3596 17.6147 2.3596C17.6147 2.35959 17.6147 2.35958 17.6146 2.35957C17.6145 2.35954 17.6145 2.35953 17.6144 2.35951C17.6143 2.35948 17.6142 2.35945 17.6142 2.35944C17.6141 2.3594 17.6141 2.3594 17.6142 2.35944C17.6144 2.35951 17.6151 2.35971 17.6162 2.36006C17.6185 2.36075 17.6225 2.362 17.6281 2.36385L17.7838 1.88871C17.7752 1.88588 17.7682 1.8837 17.7631 1.88212C17.7606 1.88134 17.7585 1.8807 17.7568 1.88022C17.756 1.87997 17.7553 1.87976 17.7547 1.87959C17.7544 1.87951 17.7542 1.87943 17.7539 1.87937C17.7538 1.87933 17.7537 1.8793 17.7536 1.87927C17.7536 1.87926 17.7535 1.87924 17.7535 1.87923C17.7534 1.87922 17.7534 1.87922 17.7534 1.87921C17.7534 1.87921 17.7534 1.8792 17.7534 1.8792C17.7534 1.8792 17.7533 1.8792 17.7533 1.8792C17.7533 1.87919 17.7533 1.87919 17.6841 2.11941ZM14.0314 6.27661C15.1579 5.02346 16.3025 3.75024 17.8546 2.30221L17.5136 1.93661C15.9437 3.40118 14.7861 4.68916 13.6596 5.94236L14.0314 6.27661ZM11.8113 8.67461C12.6088 7.85929 13.3171 7.07134 14.0314 6.27661L13.6596 5.94236C12.9444 6.73799 12.2429 7.51831 11.4538 8.32496L11.8113 8.67461ZM9.96789 6.90713L11.4411 8.6606L11.824 8.33896L10.3507 6.58549L9.96789 6.90713ZM6.045 6.65851C7.19792 5.63254 8.95499 5.74489 9.97082 6.91056L10.3478 6.58206C9.1496 5.20716 7.0738 5.07367 5.71261 6.285L6.045 6.65851ZM5.79559 10.6331C4.77844 9.46588 4.89057 7.68585 6.045 6.65851L5.71261 6.285C4.35294 7.49497 4.2218 9.58818 5.41864 10.9616L5.79559 10.6331ZM9.89582 15.3273L5.7954 10.6329L5.41883 10.9618L9.51925 15.6562L9.89582 15.3273ZM11.9915 16.281C11.1903 16.2833 10.4264 15.9362 9.89601 15.3275L9.51906 15.656C10.1441 16.3732 11.0457 16.7837 11.9929 16.781L11.9915 16.281ZM14.0816 15.3155C13.5546 15.9272 12.7927 16.2787 11.9915 16.281L11.9929 16.781C12.9401 16.7783 13.8394 16.3627 14.4604 15.6419L14.0816 15.3155ZM19.535 9.05006L14.0824 15.3146L14.4596 15.6428L19.9121 9.37833L19.535 9.05006ZM19.4736 5.18608V9.21419H19.9736V5.18608H19.4736ZM19.1701 3.74972C19.3497 4.12159 19.4736 4.59214 19.4736 5.18608H19.9736C19.9736 4.51992 19.834 3.97471 19.6204 3.53235L19.1701 3.74972ZM17.6188 2.36058C18.2951 2.61228 18.8504 3.11398 19.1719 3.75335L19.6186 3.52872C19.2409 2.77747 18.5887 2.18806 17.7932 1.89198L17.6188 2.36058Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.4796 1.45573C23.2712 2.12809 23.3543 3.29919 22.665 4.07145L13.0283 14.3634C12.6686 14.7665 12.1481 14.9985 11.6003 15C11.0524 15.0015 10.5306 14.7724 10.1685 14.3713L6.46206 10.1167C5.76833 9.34826 5.84456 8.17672 6.63232 7.5C7.42009 6.82328 8.62107 6.89764 9.3148 7.66609L11.5867 10.3317L19.7981 1.63662C20.4873 0.864361 21.6879 0.783374 22.4796 1.45573Z"
                  fill="url(#paint1_linear_150_118)"
                  stroke="white"
                  stroke-width="0.5"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_150_118"
                    x1="2.85566"
                    y1="0.246992"
                    x2="26.7016"
                    y2="7.86443"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C54A92" />
                    <stop offset="1" stop-color="#2E62EB" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_150_118"
                    x1="7.50396"
                    y1="1.91266"
                    x2="25.5737"
                    y2="9.01352"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C54A92" />
                    <stop offset="1" stop-color="#2E62EB" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.949 9.13774C19.949 13.8751 16.5714 14.6109 16.5714 19.026C16.5714 21.3053 14.4617 21.4973 12.856 21.4973C11.4691 21.4973 8.40694 20.9242 8.40694 19.0245C8.40694 14.6116 5.0874 13.8759 5.0874 9.13774C5.0874 4.70052 8.65756 1.10352 12.5743 1.10352C16.4923 1.10352 19.949 4.70052 19.949 9.13774Z"
                  fill="url(#paint0_linear_150_124)"
                  stroke="white"
                  stroke-width="0.5"
                />
                <path
                  d="M15.3344 24.9116C15.3344 25.5208 13.8253 26.7509 12.5195 26.7509C11.2137 26.7509 9.70459 25.5208 9.70459 24.9116C9.70459 24.3024 11.213 24.5437 12.5195 24.5437C13.8253 24.5437 15.3344 24.3024 15.3344 24.9116Z"
                  fill="url(#paint1_linear_150_124)"
                  stroke="white"
                  stroke-width="0.5"
                />
                <path
                  d="M15.6964 8.57314C15.6337 8.50476 15.5593 8.45051 15.4773 8.41349C15.3954 8.37647 15.3075 8.35742 15.2188 8.35742C15.1301 8.35742 15.0422 8.37647 14.9603 8.41349C14.8783 8.45051 14.8039 8.50476 14.7412 8.57314L12.5167 10.9959L10.2922 8.57314C10.2295 8.50483 10.155 8.45065 10.0731 8.41368C9.99111 8.37671 9.90328 8.35768 9.81459 8.35768C9.72589 8.35768 9.63806 8.37671 9.55611 8.41368C9.47417 8.45065 9.39971 8.50483 9.33699 8.57314C9.27427 8.64145 9.22452 8.72254 9.19057 8.81179C9.15663 8.90104 9.13916 8.9967 9.13916 9.0933C9.13916 9.18991 9.15663 9.28557 9.19057 9.37482C9.22452 9.46407 9.27427 9.54516 9.33699 9.61347L11.8412 12.3408V20.1293C11.8412 20.3244 11.9123 20.5116 12.039 20.6496C12.1657 20.7875 12.3375 20.8651 12.5167 20.8651C12.6959 20.8651 12.8677 20.7875 12.9944 20.6496C13.1211 20.5116 13.1922 20.3244 13.1922 20.1293V12.3408L15.6964 9.61347C15.7592 9.5452 15.809 9.46412 15.843 9.37486C15.877 9.28561 15.8945 9.18993 15.8945 9.0933C15.8945 8.99668 15.877 8.901 15.843 8.81174C15.809 8.72249 15.7592 8.64141 15.6964 8.57314V8.57314Z"
                  fill="white"
                />
                <path
                  d="M17.1323 23C17.1323 23.2652 16.9918 23.5196 16.7418 23.7071C16.4918 23.8946 16.1526 24 15.799 24H10.4657C10.112 24 9.7729 23.8946 9.52285 23.7071C9.2728 23.5196 9.13232 23.2652 9.13232 23V20H17.1323V23Z"
                  fill="#09010E"
                />
                <path
                  d="M8.4616 24.5433C8.29244 24.5426 8.12967 24.4728 8.00547 24.3477C7.88127 24.2226 7.80468 24.0514 7.79084 23.8677C7.777 23.6841 7.82692 23.5015 7.93074 23.356C8.03455 23.2106 8.18469 23.1128 8.35149 23.0821L16.4578 21.6106C16.5453 21.5942 16.635 21.5969 16.7216 21.6185C16.8081 21.6401 16.8899 21.6802 16.9622 21.7364C17.0344 21.7927 17.0957 21.864 17.1425 21.9462C17.1893 22.0284 17.2206 22.1199 17.2347 22.2154C17.2493 22.3107 17.2465 22.4082 17.2265 22.5023C17.2065 22.5964 17.1696 22.6852 17.118 22.7638C17.0665 22.8424 17.0012 22.9091 16.9259 22.9602C16.8507 23.0113 16.7669 23.0457 16.6794 23.0615L8.57306 24.533C8.53626 24.54 8.49896 24.5435 8.4616 24.5433V24.5433ZM8.4616 21.6003C8.29244 21.5997 8.12967 21.5299 8.00547 21.4048C7.88127 21.2797 7.80468 21.1084 7.79084 20.9248C7.777 20.7412 7.82692 20.5586 7.93074 20.4131C8.03455 20.2676 8.18469 20.1699 8.35149 20.1392L16.4578 18.6677C16.5453 18.6514 16.6349 18.6541 16.7215 18.6758C16.808 18.6974 16.8898 18.7375 16.962 18.7937C17.0342 18.85 17.0955 18.9212 17.1423 19.0034C17.1891 19.0856 17.2205 19.177 17.2347 19.2725C17.2493 19.3678 17.2465 19.4652 17.2265 19.5593C17.2065 19.6534 17.1696 19.7423 17.118 19.8209C17.0665 19.8995 17.0012 19.9662 16.9259 20.0173C16.8507 20.0684 16.7669 20.1028 16.6794 20.1186L8.57306 21.59C8.53626 21.5971 8.49896 21.6005 8.4616 21.6003V21.6003Z"
                  fill="url(#paint2_linear_150_124)"
                  stroke="white"
                  stroke-width="0.5"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_150_124"
                    x1="6.46499"
                    y1="-0.745515"
                    x2="26.3921"
                    y2="3.89329"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C54A92" />
                    <stop offset="1" stop-color="#2E62EB" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_150_124"
                    x1="10.2264"
                    y1="24.2922"
                    x2="11.9854"
                    y2="27.9562"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C54A92" />
                    <stop offset="1" stop-color="#2E62EB" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_150_124"
                    x1="8.66503"
                    y1="18.1236"
                    x2="14.3075"
                    y2="25.6839"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C54A92" />
                    <stop offset="1" stop-color="#2E62EB" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
