import React from 'react';
import './backgroundimage.css';

const BackGroundImage = () => {
  return (
    <section role='region'>
      <div className='desert-image' alt='desert landscape' />
      <p>
        Image by
        <a href='https://pixabay.com/users/jpeter2-697843/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1270345'>
          Jörg Peter
        </a>
        from
        <a href='https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1270345'>
          Pixabay
        </a>
      </p>
    </section>
  );
};

export default BackGroundImage;
