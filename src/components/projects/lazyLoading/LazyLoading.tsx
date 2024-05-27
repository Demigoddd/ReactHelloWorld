import React, { useState } from "react";
import './style.css';
import { Photo } from "./Photo";

import image1 from '../../../assets/images/image1.jpg';
import image2 from '../../../assets/images/image2.jpg';
import image3 from '../../../assets/images/image3.jpg';
import image4 from '../../../assets/images/image4.jpg';
import image5 from '../../../assets/images/image5.jpg';
import image6 from '../../../assets/images/image6.jpg';

export const LazyLoading: React.FC = () => {
  const [photos] = useState([
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ]);

  return (
    <div className="lazyloading-countainer">
      <div className="lazyloading-countainer__photos">
        {photos.map((n, i) => (
          <Photo url={n} iterate={i} key={i} />
        ))}
      </div>
    </div>
  );
};
