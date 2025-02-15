import React from 'react';

const Header = (props, context) => {
  // eslint-disable-next-line react/prop-types
  const { tagline } = props;
  return (
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The</span>
        </span>
        Day
      </h1>
      <h3 className="tagline">
        <span>{tagline}</span>
      </h3>
    </header>
  );
};

export default Header;
