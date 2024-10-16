import React from "react";
import consultation from "../../assets/Consultation.png";
import right from "../../assets/right.png";

const Startconsultation = () => {
  return (
    <>
      <div className=" grid gap-y-14 place-content-center overflow-x-hidden sm:flex sm:gap-x-12   bg-[#fff]  p-2 lg:px-10  py-20">
        <div className="hidden lg:flex">
          <img src={right} alt="" />
        </div>

        <div className="relative   grid place-content-center gap-5">
          <h1 className="font-semibold text-[30px] text-[#00a651]">
            Start Consultation
          </h1>
          <h1 className="text-[18px] font-medium ">
            Consult With our Professional Doctors
          </h1>
          <img
            src={consultation}
            alt=""
            className="w-[80%]   sm:min-w-[70%]  "
          />
        </div>
        <div className="text-[#000] sm:w-[500px] grid place-content-center">
          <p className="font-normal">
            Now you can make an appointment for consultation with your doctor
            anywhere, anytime via this platform which makes it better
          </p>
          <div className="text-[16px] font-semibold  ">
            <p className="flex items-center gap-3">
              {" "}
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 3.71425C15 3.14592 14.7742 2.60088 14.3724 2.19901C13.9705 1.79715 13.4255 1.57138 12.8571 1.57138H12.3214V1.05073C12.3214 0.762452 12.0998 0.515018 11.8115 0.500621C11.7391 0.497131 11.6667 0.508383 11.5987 0.533696C11.5308 0.55901 11.4687 0.597856 11.4162 0.647883C11.3637 0.697909 11.3219 0.758074 11.2933 0.824731C11.2647 0.891388 11.25 0.963149 11.25 1.03567V1.57138H3.75V1.05073C3.75 0.762452 3.52835 0.515018 3.24007 0.500621C3.16763 0.497131 3.09525 0.508383 3.02729 0.533696C2.95933 0.55901 2.89722 0.597856 2.84472 0.647883C2.79222 0.697909 2.75043 0.758074 2.72187 0.824731C2.69331 0.891388 2.67858 0.963149 2.67857 1.03567V1.57138H2.14286C1.57454 1.57138 1.02949 1.79715 0.627628 2.19901C0.225765 2.60088 0 3.14592 0 3.71425V4.11603C0 4.15155 0.0141103 4.18562 0.0392268 4.21074C0.0643433 4.23585 0.0984085 4.24996 0.133929 4.24996H14.8661C14.9016 4.24996 14.9357 4.23585 14.9608 4.21074C14.9859 4.18562 15 4.15155 15 4.11603V3.71425ZM0 13.3571C0 13.9255 0.225765 14.4705 0.627628 14.8724C1.02949 15.2742 1.57454 15.5 2.14286 15.5H12.8571C13.4255 15.5 13.9705 15.2742 14.3724 14.8724C14.7742 14.4705 15 13.9255 15 13.3571V5.42184C15 5.3952 14.9894 5.36965 14.9706 5.35082C14.9517 5.33198 14.9262 5.3214 14.8996 5.3214H0.100446C0.0738064 5.3214 0.0482575 5.33198 0.0294201 5.35082C0.0105828 5.36965 0 5.3952 0 5.42184V13.3571ZM11.5179 6.39283C11.6768 6.39283 11.8322 6.43996 11.9643 6.52825C12.0964 6.61655 12.1994 6.74205 12.2603 6.88889C12.3211 7.03572 12.337 7.19729 12.306 7.35317C12.275 7.50905 12.1984 7.65223 12.0861 7.76461C11.9737 7.877 11.8305 7.95353 11.6746 7.98454C11.5187 8.01554 11.3572 7.99963 11.2103 7.93881C11.0635 7.87799 10.938 7.77499 10.8497 7.64284C10.7614 7.5107 10.7143 7.35533 10.7143 7.1964C10.7143 6.98328 10.7989 6.77889 10.9496 6.62819C11.1003 6.47749 11.3047 6.39283 11.5179 6.39283ZM11.5179 9.07141C11.6768 9.07141 11.8322 9.11854 11.9643 9.20683C12.0964 9.29513 12.1994 9.42063 12.2603 9.56747C12.3211 9.7143 12.337 9.87587 12.306 10.0318C12.275 10.1876 12.1984 10.3308 12.0861 10.4432C11.9737 10.5556 11.8305 10.6321 11.6746 10.6631C11.5187 10.6941 11.3572 10.6782 11.2103 10.6174C11.0635 10.5566 10.938 10.4536 10.8497 10.3214C10.7614 10.1893 10.7143 10.0339 10.7143 9.87498C10.7143 9.66186 10.7989 9.45747 10.9496 9.30677C11.1003 9.15607 11.3047 9.07141 11.5179 9.07141ZM8.83929 6.39283C8.99822 6.39283 9.15358 6.43996 9.28573 6.52825C9.41787 6.61655 9.52087 6.74205 9.58169 6.88889C9.64251 7.03572 9.65842 7.19729 9.62742 7.35317C9.59641 7.50905 9.51988 7.65223 9.4075 7.76461C9.29511 7.877 9.15193 7.95353 8.99605 7.98454C8.84018 8.01554 8.67861 7.99963 8.53177 7.93881C8.38494 7.87799 8.25944 7.77499 8.17114 7.64284C8.08284 7.5107 8.03571 7.35533 8.03571 7.1964C8.03571 6.98328 8.12038 6.77889 8.27108 6.62819C8.42177 6.47749 8.62617 6.39283 8.83929 6.39283ZM8.83929 9.07141C8.99822 9.07141 9.15358 9.11854 9.28573 9.20683C9.41787 9.29513 9.52087 9.42063 9.58169 9.56747C9.64251 9.7143 9.65842 9.87587 9.62742 10.0318C9.59641 10.1876 9.51988 10.3308 9.4075 10.4432C9.29511 10.5556 9.15193 10.6321 8.99605 10.6631C8.84018 10.6941 8.67861 10.6782 8.53177 10.6174C8.38494 10.5566 8.25944 10.4536 8.17114 10.3214C8.08284 10.1893 8.03571 10.0339 8.03571 9.87498C8.03571 9.66186 8.12038 9.45747 8.27108 9.30677C8.42177 9.15607 8.62617 9.07141 8.83929 9.07141ZM8.83929 11.75C8.99822 11.75 9.15358 11.7971 9.28573 11.8854C9.41787 11.9737 9.52087 12.0992 9.58169 12.246C9.64251 12.3929 9.65842 12.5545 9.62742 12.7103C9.59641 12.8662 9.51988 13.0094 9.4075 13.1218C9.29511 13.2342 9.15193 13.3107 8.99605 13.3417C8.84018 13.3727 8.67861 13.3568 8.53177 13.296C8.38494 13.2351 8.25944 13.1322 8.17114 13C8.08284 12.8679 8.03571 12.7125 8.03571 12.5536C8.03571 12.3404 8.12038 12.136 8.27108 11.9853C8.42177 11.8347 8.62617 11.75 8.83929 11.75ZM6.16071 9.07141C6.31965 9.07141 6.47501 9.11854 6.60715 9.20683C6.7393 9.29513 6.8423 9.42063 6.90312 9.56747C6.96394 9.7143 6.97985 9.87587 6.94885 10.0318C6.91784 10.1876 6.84131 10.3308 6.72892 10.4432C6.61654 10.5556 6.47336 10.6321 6.31748 10.6631C6.16161 10.6941 6.00003 10.6782 5.8532 10.6174C5.70637 10.5566 5.58087 10.4536 5.49257 10.3214C5.40427 10.1893 5.35714 10.0339 5.35714 9.87498C5.35714 9.66186 5.4418 9.45747 5.5925 9.30677C5.7432 9.15607 5.94759 9.07141 6.16071 9.07141ZM6.16071 11.75C6.31965 11.75 6.47501 11.7971 6.60715 11.8854C6.7393 11.9737 6.8423 12.0992 6.90312 12.246C6.96394 12.3929 6.97985 12.5545 6.94885 12.7103C6.91784 12.8662 6.84131 13.0094 6.72892 13.1218C6.61654 13.2342 6.47336 13.3107 6.31748 13.3417C6.16161 13.3727 6.00003 13.3568 5.8532 13.296C5.70637 13.2351 5.58087 13.1322 5.49257 13C5.40427 12.8679 5.35714 12.7125 5.35714 12.5536C5.35714 12.3404 5.4418 12.136 5.5925 11.9853C5.7432 11.8347 5.94759 11.75 6.16071 11.75ZM3.48214 9.07141C3.64107 9.07141 3.79644 9.11854 3.92858 9.20683C4.06073 9.29513 4.16373 9.42063 4.22455 9.56747C4.28537 9.7143 4.30128 9.87587 4.27027 10.0318C4.23927 10.1876 4.16273 10.3308 4.05035 10.4432C3.93797 10.5556 3.79479 10.6321 3.63891 10.6631C3.48303 10.6941 3.32146 10.6782 3.17463 10.6174C3.0278 10.5566 2.9023 10.4536 2.814 10.3214C2.7257 10.1893 2.67857 10.0339 2.67857 9.87498C2.67857 9.66186 2.76323 9.45747 2.91393 9.30677C3.06463 9.15607 3.26902 9.07141 3.48214 9.07141ZM3.48214 11.75C3.64107 11.75 3.79644 11.7971 3.92858 11.8854C4.06073 11.9737 4.16373 12.0992 4.22455 12.246C4.28537 12.3929 4.30128 12.5545 4.27027 12.7103C4.23927 12.8662 4.16273 13.0094 4.05035 13.1218C3.93797 13.2342 3.79479 13.3107 3.63891 13.3417C3.48303 13.3727 3.32146 13.3568 3.17463 13.296C3.0278 13.2351 2.9023 13.1322 2.814 13C2.7257 12.8679 2.67857 12.7125 2.67857 12.5536C2.67857 12.3404 2.76323 12.136 2.91393 11.9853C3.06463 11.8347 3.26902 11.75 3.48214 11.75Z"
                  fill="#00A651"
                />
              </svg>
              Easy Online schedule here
            </p>
            <p className="flex items-center gap-3">
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99991 7.99999C9.35742 7.99999 8.73617 7.6088 8.24992 6.89886C7.77711 6.20639 7.48836 5.28295 7.43743 4.29943C7.38305 3.25028 7.61774 2.28551 8.09805 1.58239C8.57836 0.879261 9.24992 0.5 9.99991 0.5C10.7446 0.5 11.418 0.886079 11.8968 1.5875C12.3802 2.29574 12.6155 3.2588 12.5611 4.299C12.509 5.2838 12.2205 6.20681 11.7487 6.89843C11.2637 7.6088 10.6427 7.99999 9.99991 7.99999ZM14.1196 15.5H5.88056C5.74809 15.5009 5.61723 15.4605 5.49804 15.3816C5.37886 15.3028 5.27452 15.1877 5.19306 15.0453C5.10666 14.8909 5.04699 14.7118 5.01852 14.5215C4.99006 14.3312 4.99353 14.1345 5.02869 13.9463C5.29181 12.5055 5.94368 11.3106 6.91368 10.4912C7.77461 9.76419 8.87054 9.36363 9.99991 9.36363C11.1515 9.36363 12.2187 9.74715 13.0846 10.4737C14.0568 11.2889 14.7096 12.4906 14.9714 13.9488C15.0062 14.1372 15.0093 14.3338 14.9805 14.5241C14.9517 14.7143 14.8918 14.8932 14.8052 15.0474C14.7238 15.1892 14.6197 15.3037 14.5009 15.3822C14.382 15.4606 14.2516 15.5009 14.1196 15.5ZM4.09369 8.17045C2.99401 8.17045 2.02714 6.77613 1.93745 5.06264C1.89308 4.1848 2.0937 3.37301 2.49995 2.7777C2.90182 2.18835 3.4687 1.86363 4.09369 1.86363C4.71869 1.86363 5.28119 2.19006 5.68525 2.78281C6.09462 3.38281 6.29462 4.19289 6.24774 5.06349C6.15806 6.77656 5.1915 8.17045 4.09369 8.17045ZM6.14556 9.51064C5.59587 9.14417 4.88244 8.96093 4.09401 8.96093C3.17339 8.96093 2.27933 9.2882 1.57621 9.88223C0.779023 10.5568 0.242776 11.5391 0.0262143 12.725C-0.00547766 12.8956 -0.00847517 13.0737 0.017446 13.2461C0.0433673 13.4185 0.0975362 13.5806 0.175901 13.7204C0.250259 13.8506 0.34552 13.9558 0.454358 14.0279C0.563195 14.1 0.68271 14.1371 0.80371 14.1363H4.27244C4.33099 14.1363 4.38768 14.1083 4.43262 14.0571C4.47756 14.006 4.50791 13.9349 4.51838 13.8564C4.52182 13.8295 4.52619 13.8027 4.53119 13.7763C4.79619 12.3248 5.41712 11.0984 6.33462 10.2044C6.36836 10.1712 6.39551 10.1271 6.41359 10.076C6.43167 10.0249 6.44011 9.96848 6.43816 9.91182C6.4362 9.85516 6.42391 9.80005 6.40239 9.75151C6.38087 9.70296 6.35081 9.6625 6.31493 9.6338C6.26587 9.59459 6.20962 9.55326 6.14556 9.51064Z"
                  fill="#00A651"
                />
              </svg>
              Served directly by experts
            </p>

            <a
              href="http://app.heiler.health/onboarding"
              target="_blank"
              rel=""
              className="w-full  z-20"
            >
              <button className="mt-8 border-[1px] c font-bold px-8 py-2 bg-white text-[#00a651] rounded-xl">
                Start Consultation
              </button>
            </a>  
          </div>
        </div>
      </div>
    </>
  );
};

export default Startconsultation;
