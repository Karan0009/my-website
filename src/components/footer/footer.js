import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="container footerContainer">
      <div className="container__inner pageFooter">
        <div className="pageFooter-leftSection">
          <p className="pageFooter-leftSection__text">
            Handcrafted with ❤️ (but mostly Gatsby)
          </p>
        </div>
        <div className="pageFooter-rightSection">
          <p className="pageFooter-rightSection__text">
            Let's talk someplace else:
          </p>
          <div className="pageFooter-rightSection__icons">
            <span>
              <svg
                width="30"
                height="24"
                viewBox="0 0 30 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 15.5C11.8284 15.5 12.5 14.8284 12.5 14C12.5 13.1716 11.8284 12.5 11 12.5C10.1716 12.5 9.5 13.1716 9.5 14C9.5 14.8284 10.1716 15.5 11 15.5Z"
                  fill="#81B5FF"
                />
                <path
                  d="M19 15.5C19.8284 15.5 20.5 14.8284 20.5 14C20.5 13.1716 19.8284 12.5 19 12.5C18.1716 12.5 17.5 13.1716 17.5 14C17.5 14.8284 18.1716 15.5 19 15.5Z"
                  fill="#81B5FF"
                />
                <path
                  d="M8.2998 6.00005C10.4677 5.3215 12.728 4.98414 14.9996 5.00005C17.2712 4.98414 19.5314 5.32149 21.6993 6.00001"
                  stroke="#81B5FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.6996 18C19.5317 18.6785 17.2715 19.0159 15 19C12.7284 19.0159 10.4682 18.6785 8.30029 18"
                  stroke="#81B5FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.3804 18.761L19.8835 21.7673C19.9837 21.9692 20.1494 22.1312 20.3535 22.2268C20.5577 22.3224 20.7882 22.3459 21.0074 22.2934C24.0748 21.5435 26.719 20.236 28.645 18.5621C28.792 18.4356 28.8994 18.2694 28.9543 18.0833C29.0091 17.8973 29.009 17.6994 28.9539 17.5134L24.7072 3.35758C24.6643 3.21484 24.5902 3.08345 24.4902 2.97298C24.3901 2.8625 24.2667 2.77572 24.1289 2.71895C22.9291 2.22773 21.6883 1.84361 20.4208 1.57108C20.1793 1.51817 19.9268 1.55637 19.7118 1.67834C19.4968 1.80032 19.3344 1.99746 19.2559 2.23189L18.2593 5.22184"
                  stroke="#81B5FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6193 18.7609L10.1161 21.7673C10.016 21.9692 9.85028 22.1312 9.64613 22.2268C9.44199 22.3224 9.21146 22.3458 8.99223 22.2934C5.9249 21.5435 3.28064 20.2361 1.35472 18.5621C1.20765 18.4356 1.10025 18.2694 1.04543 18.0833C0.990613 17.8973 0.990718 17.6994 1.04573 17.5134L5.29246 3.35757C5.33533 3.21483 5.40948 3.08345 5.50952 2.97297C5.60956 2.8625 5.73297 2.77571 5.87078 2.71894C7.07053 2.22772 8.31138 1.84361 9.57883 1.57108C9.82031 1.51817 10.0728 1.55637 10.2879 1.67834C10.5029 1.80032 10.6652 1.99746 10.7437 2.23189L11.7404 5.22184"
                  stroke="#81B5FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>
              <svg
                width="27"
                height="23"
                viewBox="0 0 27 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.00019 20C2.00019 20 7.00019 19 8.00019 16C8.00019 16 0.000186861 13 2.00019 2C2.00019 2 6.00019 7 12.0002 8V6.00036C12.0003 4.85156 12.3959 3.73783 13.1206 2.84641C13.8452 1.95498 14.8547 1.34023 15.9792 1.10551C17.1038 0.870781 18.2749 1.0304 19.2956 1.55752C20.3164 2.08464 21.1245 2.94712 21.5841 3.99996L26.0002 4L22.0002 8C22.0002 15 17.0002 22 8.00019 22C4.00019 22 2.00019 20 2.00019 20Z"
                  stroke="#FF8B66"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>
              <svg
                width="24"
                height="27"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 26C7.29565 26 8.05871 25.6839 8.62132 25.1213C9.18393 24.5587 9.5 23.7956 9.5 23V17"
                  stroke="#87BF67"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 26C16.7044 26 15.9413 25.6839 15.3787 25.1213C14.8161 24.5587 14.5 23.7956 14.5 23V17"
                  stroke="#87BF67"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 17H17C17.7956 17 18.5587 17.3161 19.1213 17.8787C19.6839 18.4413 20 19.2044 20 20V21C20 21.7956 20.3161 22.5587 20.8787 23.1213C21.4413 23.6839 22.2044 24 23 24"
                  stroke="#87BF67"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 17H7C6.20435 17 5.44129 17.3161 4.87868 17.8787C4.31607 18.4413 4 19.2044 4 20V21C4 21.7956 3.68393 22.5587 3.12132 23.1213C2.55871 23.6839 1.79565 24 1 24"
                  stroke="#87BF67"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.06396 6.58797C3.71428 5.6832 3.57192 4.71153 3.64739 3.74447C3.72285 2.77741 4.0142 1.83958 4.50001 1C5.59164 0.999379 6.66583 1.27391 7.6233 1.79823C8.58078 2.32256 9.39065 3.07975 9.97809 3.99985V4H14.0219V3.99985C14.6094 3.07975 15.4192 2.32256 16.3767 1.79823C17.3342 1.27391 18.4084 0.999379 19.5 1C19.9858 1.83958 20.2772 2.77741 20.3526 3.74447C20.4281 4.71153 20.2857 5.6832 19.9361 6.58797V6.58797C20.6307 7.59004 21.002 8.78072 21 10V11C21 12.5913 20.3679 14.1174 19.2426 15.2426C18.1174 16.3679 16.5913 17 15 17H9.00001C7.40871 17 5.88259 16.3679 4.75737 15.2426C3.63215 14.1174 3.00001 12.5913 3.00001 11V10C2.99805 8.78071 3.36933 7.59004 4.06396 6.58797L4.06396 6.58797Z"
                  stroke="#87BF67"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
