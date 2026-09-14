import React, { useEffect, useRef, useState } from 'react';
import p5 from 'p5';

function Kaleidoscope() {
  const canvasRef = useRef(null);
  const p5InstanceRef = useRef(null);

  const [color, setColor] = useState('#57cbff');

  useEffect(() => {
    const sketch = (p) => {
      let symmetry;
      let angle;

      p.setup = function () {
        symmetry = 6;
        angle = 360 / symmetry;

        p.createCanvas(350, 350);
        p.angleMode(p.DEGREES);
        p.stroke('#57cbff');

        p.canvas.addEventListener(
          'touchmove',
          (event) => {
            event.preventDefault();
          },
          { passive: false }
        );
      };

      p.draw = function () {
        p.translate(p.width / 2, p.height / 2);

        if (
          p.mouseX > 0 &&
          p.mouseX < p.width &&
          p.mouseY > 0 &&
          p.mouseY < p.height
        ) {
          const mx = p.mouseX - p.width / 2;
          const my = p.mouseY - p.height / 2;
          const pmx = p.pmouseX - p.width / 2;
          const pmy = p.pmouseY - p.height / 2;

          if (p.mouseIsPressed) {
            for (let i = 0; i < symmetry; i++) {
              p.rotate(angle);
              p.line(mx, my, pmx, pmy);

              p.push();
              p.scale(1, -1);
              p.line(mx, my, pmx, pmy);
              p.pop();
            }
          }
        }
      };
    };

    p5InstanceRef.current = new p5(sketch, canvasRef.current);

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, []);

  const handleReset = () => {
    if (p5InstanceRef.current) {
      p5InstanceRef.current.clear();
    }
  };

  const changeColor = (newColor) => {
    setColor(newColor);

    if (p5InstanceRef.current) {
      p5InstanceRef.current.stroke(newColor);
    }
  };

  return (
    <div className="flex flex-col">
      <div
        className="my-5"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 className="text-2xl text-center text-lightest-slate ml-5">
          Draw on Me ↓
        </h1>

        <button
          onClick={handleReset}
          onTouchStart={handleReset}
          className="text-green border border-green rounded-md text-lg px-5 py-2.5 hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center mx-8"
        >
          Reset
        </button>
      </div>

      <div
        className="kaleidoscope-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          ref={canvasRef}
          style={{
            border: '3px solid rgba(73, 86, 112, 0.102)',
            borderRadius: '5px',
            padding: '5px',
          }}
        />
      </div>

      <div
        className="m-5"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button
          onClick={() => changeColor('#57cbff')}
          onTouchStart={() => changeColor('#57cbff')}
          className={`text-green border border-green rounded-md text-lg px-5 py-2.5 hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center mx-3 ${
            color === '#57cbff' ? 'selected' : ''
          }`}
        >
          Blue
        </button>

        <button
          onClick={() => changeColor('#e8ff64')}
          onTouchStart={() => changeColor('#e8ff64')}
          className={`text-green border border-green rounded-md text-lg px-5 py-2.5 hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center mx-3 ${
            color === '#e8ff64' ? 'selected' : ''
          }`}
        >
          Yellow
        </button>

        <button
          onClick={() => changeColor('#f57dff')}
          onTouchStart={() => changeColor('#f57dff')}
          className={`text-green border border-green rounded-md text-lg px-5 py-2.5 hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center mx-3 ${
            color === '#f57dff' ? 'selected' : ''
          }`}
        >
          Pink
        </button>
      </div>
    </div>
  );
}

export default Kaleidoscope;