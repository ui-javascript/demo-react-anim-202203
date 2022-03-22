// 用react-spring以react hook组件的形式编写动画
// https://juejin.cn/post/6844903988383449096
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default () => {
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const colorAnimation = useSpring({
    from: { color: 'blue' },
    to: { color: `rgb(255,0,0)` },
  });

  const multiAnimation = useSpring({
    from: { opacity: 0, color: 'red' },
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 1, color: 'red' },
      { opacity: 0.5, color: '#008000' },
      { opacity: 0.8, color: 'black' },
    ],
  });
  return (
    <div>
      <animated.h1 style={animation}>Hello World</animated.h1>
      <animated.h1 style={colorAnimation}>Hello World</animated.h1>
      <animated.h1 style={multiAnimation}>Hello World</animated.h1>
    </div>
  );
};
