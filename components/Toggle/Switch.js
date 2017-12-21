export const Switch = ({ on, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="160"
    height="219"
    viewBox="0 0 160 219"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <g id="switch" transform="translate(8 69)">
        <circle cx="44" cy="20" r="4" fill="#BE2446" fillRule="nonzero" />
        <polygon
          id="lightshadow"
          fill="#BE2446"
          fillOpacity=".2"
          fillRule="nonzero"
          points="30 72 58 72 58 81 30 81"
        />
        <polygon
          id="darkshadow"
          fill="#BE2446"
          fillOpacity=".25"
          points="30 72 58 72 58 75 30 75"
        />
        <polygon
          stroke="#BE2446"
          strokeWidth="3"
          points="29 43 59 43 59 107 29 107"
        />
        <polygon
          id="pole"
          stroke="#BE2446"
          strokeWidth="6"
          points="31 46 57 46 57 69 31 69"
        />
        <circle cx="44" cy="128" r="4" fill="#BE2446" fillRule="nonzero" />
        <polygon
          stroke="#BE2446"
          strokeWidth="3"
          points="0 0 88 0 88 148 0 148"
        />
      </g>
      <g id="santa-hat" transform="translate(1)">
        <path
          fill="#D8232A"
          d="M129.95424,87.9765152 C123.505865,80.2060606 119.485221,51.6681818 123.73299,42.35 C128.31575,32.294697 120.066327,26.3530303 110.900808,24.9818182 C101.735288,23.6106061 81.11325,2.58712121 73.7806827,0.301515152 C66.4481154,-1.98333333 34.8276058,10.8136364 31.61975,19.4977273 C28.4118942,28.1810606 20.6212788,38.2363636 15.1216635,41.4356061 C10.7804615,43.9613636 8.15371154,59.8674242 7.23989423,66.4560606 C23.7979904,45.7795455 44.2362019,42.9060606 65.0739712,43.7204545 C82.6157692,44.4068182 94.9937019,56.6780303 100.852615,64.1106061 C101.957096,58.4333333 100.880721,51.4530303 97.6113365,47.3772727 C93.9446731,42.8068182 95.3195769,29.0954545 97.6113365,38.6931818 C99.9023365,48.2909091 105.86,48.2909091 105.86,48.2909091 C105.86,48.2909091 110.900808,62.9166667 112.275712,77.9992424 C113.060394,86.6030303 117.720635,93.8643939 121.581,98.5181818 C122.955144,94.0878788 125.88726,90.0545455 129.95424,87.9765152"
        />
        <path
          fill="#BE2446"
          d="M129.95424,87.9765152 C123.505865,80.2060606 119.485221,51.6681818 123.73299,42.35 C128.31575,32.294697 120.066327,26.3530303 110.900808,24.9818182 C101.735288,23.6106061 81.11325,2.58712121 73.7806827,0.301515152 C66.4481154,-1.98333333 34.8276058,10.8136364 31.61975,19.4977273 C28.4118942,28.1810606 20.6212788,38.2363636 15.1216635,41.4356061 C10.7804615,43.9613636 8.15371154,59.8674242 7.23989423,66.4560606 C23.7979904,45.7795455 44.2362019,42.9060606 65.0739712,43.7204545 C82.6157692,44.4068182 94.9937019,56.6780303 100.852615,64.1106061 C101.957096,58.4333333 100.880721,51.4530303 97.6113365,47.3772727 C93.9446731,42.8068182 95.3195769,29.0954545 97.6113365,38.6931818 C99.9023365,48.2909091 105.86,48.2909091 105.86,48.2909091 C105.86,48.2909091 110.900808,62.9166667 112.275712,77.9992424 C113.060394,86.6030303 117.720635,93.8643939 121.581,98.5181818 C122.955144,94.0878788 125.88726,90.0545455 129.95424,87.9765152"
        />
        <path
          fill="#FFFFFE"
          stroke="#1B1B1B"
          d="M65.0739712 43.7204545C44.2362019 42.9060606 23.7979904 45.7795455 7.23989423 66.4560606 5.22615385 68.9704545 3.26634615 71.7325758 1.37338462 74.8-2.29251923 80.7416667 2.74828846 78.4560606 3.20633654 81.1984848 3.66514423 83.9409091-.459567308 88.9681818 2.29024038 95.8234848 2.29024038 95.8234848 19.246375 74.3424242 49.0339327 71.1431818 78.8214904 67.9439394 95.777625 91.2530303 100.819192 91.7106061 105.86 92.1674242 104.485096 77.0848485 103.110192 74.3424242 101.735288 71.6 106.318048 72.5143939 104.485096 69.3151515 104.027808 68.5174242 102.800269 66.5810606 100.852615 64.1106061 94.9937019 56.6780303 82.6157692 44.4068182 65.0739712 43.7204545M138.397365 86.6825758C135.234327 86.1848485 132.391087 86.7310606 129.95424 87.9765152 125.88726 90.0545455 122.955144 94.0878788 121.581 98.5181818 119.244423 106.05303 121.410087 114.72803 130.148702 116.847727 130.148702 116.847727 123.73299 119.133333 118.691423 110.906061 118.691423 110.906061 123.274183 129.644697 147.104837 117.304545 147.104837 117.304545 144.355029 121.418182 137.481269 124.617424 137.481269 124.617424 155.3535 124.160606 154.437404 103.136364 154.437404 103.136364 156.270356 103.593182 157.64526 106.335606 157.64526 106.335606 155.811548 89.425 138.397365 86.6825758"
        />
      </g>
    </g>
    <style jsx>
      {`
        svg {
          height: 71px;
          width: auto;
          margin-right: -23px;
          cursor: pointer;
        }
      `}
    </style>
  </svg>
);

export default Switch;
