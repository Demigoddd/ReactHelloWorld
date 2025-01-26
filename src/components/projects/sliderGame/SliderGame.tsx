import React from "react";
import "./style.css";
import Crossfire from 'react-canvas-confetti/dist/presets/crossfire';

const SLIDER_COIN_HEIGHT = 30;
const SLIDER_COIN_WIDTH = 30;
const SLIDER_PICKER_HEIGHT = 70;
const SLIDER_CONTAINER_WIDTH = 170;
const SLIDER_CONTAINER_HEIGHT = 370;

const clamp = (number: number, min: number, max: number) => {
  return Math.min(Math.max(number, min), max);
};

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


export const SliderGame: React.FC<any> = () => {
  const [data, setData] = React.useState({
    point: 0,
    click: 10,
    coins: [
      {
        type: '🌍',
        level: 1,
        point: 3,
      },
      {
        type: '🏝️',
        level: 1,
        point: 6,
      },
      {
        type: '🌞',
        level: 1,
        point: 9,
      }
    ],
  });
  const crossfireController = React.useRef<any>(null);
  const sliderPickerRef = React.useRef<HTMLDivElement | null>(null);
  const [sliderPickerPositionY, setSliderPickerPositionY] = React.useState(0);
  const [coins, setCoins] = React.useState<any[]>([]);
  const [isFinish, setIsFinish] = React.useState(false);

  React.useEffect(() => {
    if (coins.length === 0) {
      const generatedCoins: any[] = [];
      data.coins.forEach((n: any, i: number) => {
        [...Array(n.level)].forEach((x: any, index: number) => {
          generatedCoins.push({
            type: n.type,
            point: n.point,
            position: {
              x: randomIntFromInterval(
                0,
                SLIDER_CONTAINER_WIDTH - SLIDER_COIN_WIDTH
              ),
              y: randomIntFromInterval(
                0,
                SLIDER_CONTAINER_HEIGHT - SLIDER_COIN_HEIGHT
              ),
            },
          });
        });
      });

      setCoins([...generatedCoins]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coins]);

  const sliderHandler = (e: any) => {
    if (sliderPickerRef.current !== e.target) {
      if (data.click === 0) {
        setIsFinish(true);
        return;
      } else {
        setData((oldState) => ({ ...oldState, click: oldState.click - 1 }));
      }

      const newSliderPickerPositionY = clamp(
        e.nativeEvent.offsetY - Math.round(SLIDER_PICKER_HEIGHT / 2),
        0,
        SLIDER_CONTAINER_HEIGHT - SLIDER_PICKER_HEIGHT
      );

      setSliderPickerPositionY(newSliderPickerPositionY);

      coins.forEach((n: any, i: number) => {
        const coinTop = n.position.y;
        const coinBottom = n.position.y + SLIDER_COIN_HEIGHT;

        const sliderPickerTop = newSliderPickerPositionY;
        const sliderPickerBottom =
          newSliderPickerPositionY + SLIDER_PICKER_HEIGHT;

        const top = coinTop <= sliderPickerTop && coinBottom >= sliderPickerTop;
        const bottom =
          coinTop <= sliderPickerBottom && coinBottom >= sliderPickerBottom;

        if (top || bottom) {
          crossfireController?.current?.shoot();
          setCoins(coins.filter((_: any, index: number) => index !== i));
          setData({
            ...data,
            point:
              data.point +
              coins.find((_: any, index: number) => index === i).point,
          });
        }
      });
    }
  };

  return (
    <div className="slider-game-countainer">
      <div className="game-container">
        <Crossfire
          onInit={({ conductor }: any) =>
            (crossfireController.current = conductor)
          }
        />

        <div
          className="slider-container"
          style={{
            width: `${SLIDER_CONTAINER_WIDTH}px`,
            height: `${SLIDER_CONTAINER_HEIGHT}px`,
          }}
        >
          <div className="slider-coins">
            {coins.map((n: any, i: number) => (
              <div
                className="slider-coin" key={i}
                style={{
                  transform: `translate(${n.position.x}px, ${n.position.y}px)`,
                  height: `${SLIDER_COIN_HEIGHT}px`,
                  width: `${SLIDER_COIN_WIDTH}px`,
                }}
              >
                {n.type}
              </div>
            ))}
          </div>

          <div className="slider-body" onClick={(e) => sliderHandler(e)} />

          <div
            className="slider-picker"
            ref={sliderPickerRef}
            style={{
              height: `${SLIDER_PICKER_HEIGHT}px`,
              transform: `translateY(${sliderPickerPositionY}px)`,
            }}
          />
        </div>
      </div>
      <div className="footer-container">
        {isFinish ? <>point: {data.point}</> : <>click: {data.click}</>}
      </div>
    </div>
  );
};
