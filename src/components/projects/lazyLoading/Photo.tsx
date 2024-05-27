import React from "react";
import { useInView } from "react-intersection-observer";
import './style.css';

export const Photo: React.FC<{url: string, iterate: number}> = ({
  url, iterate
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="lazyloading-countainer__photo">
      {inView ? (
        <img src={url} alt={`wallpaper-${iterate}`} key={iterate} />
      ) : (
        <div className="lazyloading-countainer__photo-skeleton" />
      )}
      <span>Photo #{iterate}</span>
    </div>
  );
};
