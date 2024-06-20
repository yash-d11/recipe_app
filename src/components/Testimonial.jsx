import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";

const testimonials = [
  {
    id: 1,
    content: "This is an amazing product! Highly recommend it.",
    author: "John Doe",
  },
  {
    id: 2,
    content: "Excellent service and fantastic results!",
    author: "Jane Smith",
  },
  {
    id: 3,
    content: "A game-changer in the industry. Outstanding experience!",
    author: "Alice Johnson",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(testimonials[index], {
    key: testimonials[index].id,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    config: { duration: 1000 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-md mx-auto h-full mt-10 p-16 bg-green-200  ">
      <h1 className="text-4xl lg:text-5xl font-bold mb-16 text-green-600">Testimonials</h1>
      <div className="relative h-40">
        {transitions((style, item) => (
          <animated.div
            className="absolute inset-0 flex flex-col items-center justify-center bg-green-100 p-4 rounded-lg shadow-2xl"
            style={style}
          >
            <p className="text-lg mb-2 text-center text-black">{item.content}</p>
            <p className="text-sm text-gray-500 text-center">- {item.author}</p>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
