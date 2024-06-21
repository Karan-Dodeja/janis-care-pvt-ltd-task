import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counterState, setCounterState] = useState(false);
  return (
    <div className="">
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <div className="counter">
          <div className="counter-1">
            <h2>
              {counterState && (
                <CountUp start={0} end={95} delay={0} duration={2.75}>
                  95%
                </CountUp>
              )}
              %
            </h2>
            <p>Success Rate</p>
          </div>
          <div className="counter-2">
            <h2>
              {counterState && (
                <CountUp start={0} end={55} delay={0} duration={2.75}>
                  55
                </CountUp>
              )}
              %
            </h2>
            <p>Success Rate</p>
          </div>
          <div className="counter-3">
            <h2>
              {counterState && (
                <CountUp start={0} end={85} delay={0} duration={2.75}>
                  85
                </CountUp>
              )}
              %
            </h2>
            <p>Success Rate</p>
          </div>
          <div className="counter-4">
            <h2>
              {counterState && (
                <CountUp start={0} end={75} delay={0} duration={2.75}>
                  75
                </CountUp>
              )}
              %
            </h2>
            <p>Success Rate</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Counter;
