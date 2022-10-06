import React, { FC } from "react";

interface IActivate {
  className: string;
}
const Activate: FC<IActivate> = (props) => {
  return (
    <svg
      {...props}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5530_2525)">
        <path
          d="M4.98844 6.61042L4.9883 6.61032C4.16917 5.99661 3.6376 5.01997 3.6376 3.91777C3.6376 2.10402 5.07433 0.625678 6.87097 0.557898L6.87143 0.554956H6.99998C8.85641 0.554956 10.3613 2.06095 10.3613 3.91726C10.3613 5.01894 9.82975 5.99541 9.01128 6.60916C9.01126 6.60917 9.01124 6.60919 9.01122 6.60921L8.8311 6.74442L9.04517 6.81481C9.04518 6.81481 9.04519 6.81482 9.0452 6.81482C9.86977 7.08578 10.6377 7.52127 11.3015 8.10107L11.3015 8.10111C11.4683 8.24689 11.4846 8.49091 11.3393 8.65726L11.339 8.65759C11.1928 8.82395 10.9489 8.83881 10.7831 8.69395L10.8818 8.58099L10.7831 8.69395C9.77092 7.80959 8.48183 7.30916 7.13928 7.27625H7.12745L7.12248 7.27643C7.08099 7.27795 7.03809 7.27953 6.99838 7.27953C6.95946 7.27953 6.91838 7.27801 6.87793 7.27652L6.8704 7.27625H6.85909C4.2063 7.34106 1.91033 9.24287 1.36801 11.8468L1.36796 11.8471C1.32757 12.0393 1.37682 12.2406 1.50067 12.3934L1.5188 12.4157C1.60005 12.5064 1.7639 12.6326 2.00101 12.6326H6.51279C6.73367 12.6326 6.9067 12.8061 6.9067 13.027C6.9067 13.2492 6.733 13.4209 6.51279 13.4209H2.00101C1.56642 13.4209 1.16332 13.2288 0.889327 12.892L0.889302 12.892C0.613527 12.5528 0.507874 12.1163 0.597436 11.6872L4.98844 6.61042ZM4.98844 6.61042L5.16885 6.74525M4.98844 6.61042L5.16885 6.74525M7.86128 11.061L7.96602 10.9537L7.96608 10.9537C7.9661 10.9538 7.96613 10.9538 7.96615 10.9538L9.59842 12.5462L9.60673 12.5543L9.60695 12.5546C9.71302 12.6487 9.83815 12.6606 9.90482 12.6559L9.90539 12.6559C9.97132 12.6515 10.0909 12.6244 10.1837 12.5199L12.7175 8.98412L12.7176 8.98398C12.781 8.89585 12.8717 8.84017 12.9732 8.82387L13.0491 8.81167L13.0571 8.81973L9.94875 13.4437L9.95862 13.443C10.2896 13.4212 10.6004 13.2595 10.8092 13.0015L10.8046 13.0062L10.8029 13.0078L10.8019 13.0068M7.86128 11.061C7.76284 10.9648 7.613 10.967 7.51621 11.066C7.41996 11.1644 7.4216 11.3137 7.52003 11.4105L9.15523 13.0062C9.34992 13.1916 9.61133 13.295 9.8793 13.295C9.9061 13.295 9.92852 13.295 9.94711 13.2933M7.86128 11.061L9.49368 12.6535M7.86128 11.061L9.49368 12.6535M9.94711 13.2933V13.4433H9.94875V13.4436C9.95207 13.4434 9.95536 13.4432 9.95861 13.4429C9.95918 13.4428 9.95974 13.4428 9.9603 13.4427L9.95359 13.3667L9.94875 13.3119L9.94711 13.2933ZM9.94711 13.2933H9.94875C10.1958 13.277 10.4305 13.1713 10.6075 13.0001C10.6241 13.0151 10.6423 13.0284 10.6566 13.035C10.6809 13.041 10.7225 13.0417 10.7389 13.0388C10.7494 13.0359 10.7664 13.0294 10.773 13.0262C10.7855 13.0198 10.7941 13.0131 10.7972 13.0107C10.7989 13.0093 10.8005 13.008 10.8019 13.0068M10.8019 13.0068C10.8025 13.0063 10.8031 13.0057 10.8037 13.0053C10.8046 13.0044 10.8054 13.0037 10.806 13.0031C10.8084 13.0009 10.8104 12.9989 10.8118 12.9975C10.8124 12.9969 10.8128 12.9964 10.8132 12.9961L10.8146 12.9945L10.8152 12.9939L10.8159 12.9931L10.8169 12.9918L10.7443 12.9373L10.71 12.9116L10.6969 12.9018L10.7105 12.9154L10.7147 12.9196L10.8019 13.0068ZM9.49368 12.6535L9.49532 12.6557C9.64407 12.7957 9.8218 12.8121 9.91532 12.8056C10.0061 12.7996 10.1729 12.7624 10.3014 12.6131L9.49368 12.6535ZM5.16885 6.74525L4.95422 6.81591C4.95422 6.81591 4.95422 6.81591 4.95422 6.81591C4.19092 7.06717 3.47392 7.45838 2.84687 7.97401C1.69729 8.91932 0.899155 10.2389 0.59745 11.6872L5.16885 6.74525ZM4.42376 4.03523V3.91725C4.42376 2.50179 5.5796 1.34523 6.99471 1.34327L6.99471 1.34329H6.99881C8.41557 1.34329 9.57335 2.5001 9.57335 3.91727C9.57335 5.2906 8.48741 6.4205 7.12966 6.48821L7.12964 6.48794L7.12056 6.48895L7.11906 6.48911C7.07768 6.48803 7.03776 6.48748 6.99932 6.48748C6.97359 6.48748 6.94583 6.48798 6.91902 6.48847C6.90572 6.48871 6.89265 6.48895 6.88018 6.48912H6.87965L6.87807 6.48895L6.8781 6.48867L6.86894 6.48821C5.60286 6.42537 4.60496 5.42448 4.47602 4.16989L4.46218 4.03523H4.42376Z"
          fill="#545F7D"
          stroke="#545F7D"
          strokeWidth="0.3"
        />
      </g>
      <defs>
        <clipPath id="clip0_5530_2525">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Activate;
