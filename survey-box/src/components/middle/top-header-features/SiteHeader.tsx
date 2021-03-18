import React from "react";
import "./SiteHeader.css";

function SiteHeader() {
  return (
    <div className="header-container">
      <div className="logo">SURVEYBOX</div>
      <div className="features">
        <div className="URL-icon">
          <svg
            viewBox="0 0 30 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0441 23.8667C15.1323 23.8963 15.1911 23.9556 15.2205 24.0445C15.2499 24.1333 15.2352 24.2222 15.1764 24.3111L11.5146 28C10.9264 28.5926 10.2499 29.0667 9.48523 29.4222C8.72052 29.7778 7.94111 29.9852 7.14699 30.0445C6.35287 30.1037 5.55876 30.0445 4.76464 29.8667C3.97052 29.6889 3.24993 29.3185 2.60287 28.7556C1.80876 28.1333 1.19111 27.3778 0.749932 26.4889C0.308756 25.6 0.0734615 24.7111 0.0440498 23.8222C0.014638 22.9333 0.146991 22.0296 0.441109 21.1111C0.735226 20.1926 1.23523 19.3926 1.94111 18.7111L7.63229 12.9778C8.54405 12.0593 9.60287 11.3778 10.8088 10.9333C12.0146 10.4889 13.2499 10.3704 14.5146 10.5778C15.6323 10.7556 16.5146 11.0815 17.1617 11.5556C17.8088 12.0296 18.3235 12.5778 18.7058 13.2C18.7646 13.3482 18.7573 13.4593 18.6838 13.5333C18.6102 13.6074 18.5293 13.6741 18.4411 13.7333C18.3529 13.7926 18.2499 13.8815 18.1323 14L17.8235 14.3111C17.5293 14.637 17.1764 14.8 16.7646 14.8C16.3529 14.8 15.9779 14.6296 15.6396 14.2889C15.3014 13.9482 14.9264 13.6889 14.5146 13.5111C14.1029 13.3333 13.647 13.2593 13.147 13.2889C12.647 13.3185 12.2058 13.3926 11.8235 13.5111C11.4411 13.6296 11.0441 13.8963 10.6323 14.3111L4.10287 20.8889C3.72052 21.2741 3.44111 21.7185 3.26464 22.2222C3.08817 22.7259 3.02934 23.2296 3.08817 23.7333C3.14699 24.237 3.29405 24.7407 3.52934 25.2445C3.76464 25.7482 4.14699 26.1482 4.6764 26.4445C5.4117 26.9482 6.20581 27.1259 7.05876 26.9778C7.9117 26.8296 8.63229 26.4741 9.22052 25.9111L12.0441 23.1111C12.1029 23.0222 12.1911 23.0074 12.3088 23.0667C13.1911 23.4519 14.1029 23.7185 15.0441 23.8667ZM27.3088 1.37778C28.1029 2.00001 28.7205 2.74075 29.1617 3.60001C29.6029 4.45927 29.8529 5.34816 29.9117 6.26667C29.9705 7.18519 29.8382 8.10371 29.5146 9.02223C29.1911 9.94075 28.6764 10.7407 27.9705 11.4222L22.2793 17.1556C21.3676 18.0741 20.3088 18.7407 19.1029 19.1556C17.897 19.5704 16.647 19.6889 15.3529 19.5111C14.2352 19.363 13.3676 19.037 12.7499 18.5333C12.1323 18.0296 11.6176 17.4815 11.2058 16.8889C11.147 16.7704 11.1617 16.6667 11.2499 16.5778L12.0441 15.7778C12.3676 15.4815 12.7352 15.3333 13.147 15.3333C13.5588 15.3333 13.9117 15.4815 14.2058 15.7778C14.5588 16.1333 14.9558 16.4 15.397 16.5778C15.8382 16.7556 16.2941 16.8445 16.7646 16.8445C17.2352 16.8445 17.6911 16.7556 18.1323 16.5778C18.5735 16.4 18.9558 16.1333 19.2793 15.7778L25.8088 9.24445C26.1911 8.85927 26.4705 8.40001 26.647 7.86667C26.8235 7.33334 26.8823 6.81482 26.8235 6.31112C26.7646 5.80741 26.6029 5.31853 26.3382 4.84445C26.0735 4.37038 25.6911 3.97038 25.1911 3.64445C24.4852 3.17038 23.7058 2.9926 22.8529 3.11112C21.9999 3.22964 21.2646 3.60001 20.647 4.22223L17.8676 7.02223C17.7793 7.11112 17.6911 7.12593 17.6029 7.06667C16.7793 6.71112 15.8676 6.42964 14.8676 6.22223C14.7499 6.22223 14.6911 6.16297 14.6911 6.04445C14.6911 5.92593 14.7058 5.85186 14.7352 5.82223L18.397 2.13334C18.9852 1.54075 19.6617 1.06667 20.4264 0.711118C21.1911 0.355562 21.9558 0.13334 22.7205 0.0444508C23.4852 -0.0444381 24.2793 0.029636 25.1029 0.266673C25.9264 0.50371 26.6617 0.874081 27.3088 1.37778Z"
              fill="#222831"
            />
          </svg>
        </div>
        <div className="results-icon">
          <svg
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9332 26.5084C15.1392 24.8759 14.7266 23.0843 14.7265 21.269C14.7265 20.2755 14.8701 19.2546 15.1642 18.1522C15.2959 17.6563 15.4612 17.1821 15.647 16.7221C14.9339 16.3328 14.1502 16.0934 13.3094 16.0934C10.1915 16.0934 7.66759 19.0306 7.66759 22.6581C7.66759 25.1957 8.90791 27.3919 10.7194 28.4846L3.07282 32.0437C2.5963 32.2677 2.28223 32.8058 2.28223 33.4071V39.4423C2.28223 40.2511 2.8471 40.9066 3.54193 40.9066H8.06146V34.5739C8.06146 32.7288 9.0886 31.0559 10.6829 30.3098L16.5322 27.5857C16.3134 27.2376 16.1135 26.878 15.9332 26.5084Z"
              fill="#222831"
            />
            <path
              d="M34.2781 19.8366H53.7106V19.836L53.714 19.8366C54.2686 19.8366 54.7178 19.3868 54.7178 18.8328V15.1671C54.7178 14.6125 54.268 14.1634 53.714 14.1634L53.7106 14.1639V14.1611H31.9958C32.9521 15.4193 33.6365 16.8624 34.0057 18.399C34.1282 18.9058 34.2171 19.3794 34.2781 19.8366Z"
              fill="#222831"
            />
            <path
              d="M54.7177 37.8685C54.7177 37.3139 54.268 36.8648 53.7139 36.8648L53.7105 36.8653V36.8625H41.044V42.0432C41.044 42.2102 41.0348 42.375 41.0183 42.5374H53.7105V42.5368L53.7139 42.5374C54.2685 42.5374 54.7177 42.0877 54.7177 41.5336V37.8685Z"
              fill="#222831"
            />
            <path
              d="M53.714 25.5143L53.7105 25.5149V25.5121H33.5981C33.5075 25.7509 33.4117 25.9886 33.3051 26.224C33.1008 26.6749 32.8678 27.1123 32.6074 27.5333L38.4716 30.3308C38.9117 30.5479 39.3121 30.8375 39.656 31.1875H53.7105V31.187L53.714 31.1875C54.2686 31.1875 54.7177 30.7378 54.7177 30.1838V26.5181C54.7177 25.9635 54.268 25.5143 53.714 25.5143Z"
              fill="#222831"
            />
            <path
              d="M37.2341 32.8901L30.65 29.7494L27.8655 28.4213C29.0819 27.6552 30.0692 26.4731 30.7155 25.0486C31.2545 23.8615 31.5334 22.5728 31.5335 21.269C31.5335 20.5006 31.4121 19.7716 31.2416 19.0671C30.4134 15.6567 27.7498 13.1436 24.5521 13.1436C21.4149 13.1436 18.7917 15.5667 17.9128 18.8807C17.7099 19.6405 17.5696 20.4311 17.5696 21.2684C17.5696 22.723 17.9094 24.0785 18.4868 25.2584C19.1542 26.6264 20.1432 27.7544 21.347 28.4795L18.6806 29.7209L11.8827 32.8867C11.2917 33.1632 10.9041 33.8295 10.9041 34.5733V42.0432C10.9041 43.0441 11.6017 43.8564 12.463 43.8564H36.6407C37.502 43.8564 38.1996 43.0447 38.1996 42.0432V34.5739C38.2008 33.8323 37.8189 33.1728 37.2341 32.8901Z"
              fill="#222831"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SiteHeader;