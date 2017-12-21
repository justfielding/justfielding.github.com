export const Header = () => (
  <h1>
    <strong className="js-random-interval glitched">.</strong>
    <span className="js-random-interval glitched">Fielding</span>
    <strong className="js-random-interval glitched">.</strong>
    <style jsx>
      {`
        h1 {
          font-weight: 900;
          white-space: nowrap;
        }
        h1 strong {
          font-weight: 900;
          color: rgba(190, 36, 70, 1);
        }
      `}
    </style>
  </h1>
);

export default Header;
