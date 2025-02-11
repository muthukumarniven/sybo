import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Gif = () => {
  return (
    <>
      <DotLottieReact
        src="https://lottie.host/643726a5-e034-4148-a525-077418c5f81b/V9w5X8H79K.lottie"
        loop
        autoplay
        color='#76BEE9'
        style={{ maxWidth: "217px", maxHeight: "90px" }}  // Optional: Add your custom size
      />
    </>
  );
}

export default Gif;
