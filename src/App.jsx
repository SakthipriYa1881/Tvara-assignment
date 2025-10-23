// import './App.css';
// import BlurText from './components/BlurText';
// import MagnetLines from './components/MagnetLines';

// function App() {
//   const text =
//     "Tvara was born to free people from repetitive, draining tasks, so they can focus on decisions that truly matter. We believe technology should adapt to people, not the other way around. Our mission is to create tools that fit seamlessly into human workflows.";

//   return (
//     <div className="App relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white p-10 overflow-hidden">
      
//       <h1>Blur Text and Magentic lines</h1>
//       {/* MagnetLines behind BlurText */}
//       <div className="absolute inset-0 flex justify-center items-center z-0">
//         <MagnetLines
//           text={text}
//           animateBy="words"
//           lineColor="rgba(0, 255, 234, 0.3)"
//           lineWidth="0.6vmin"
//           lineHeight="5vmin"
//           baseAngle={-10}
//           rotationFactor={0.15}
//           style={{ maxWidth: "90%", gap: "0.6vmin" }}
//         />
//       </div>

//       {/* BlurText on top */}
//       <div className="relative z-10 max-w-4xl text-center">
//         <BlurText
//           text={text}
//           animateBy="words"
//           direction="top"
//           delay={0.05}
//           className="text-2xl md:text-3xl leading-relaxed tracking-wide cursor-pointer"
//         />
//       </div>
//     </div>
//   );
// }

// export default App;


import './App.css';
import BlurText from './components/BlurText';
import MagnetLines from './components/MagnetLines';

function App() {
  const text =
    "Tvara was born to free people from repetitive, draining tasks, so they can focus on decisions that truly matter. We believe technology should adapt to people, not the other way around. Our mission is to create tools that fit seamlessly into human workflows.";

  return (
    <div className="App relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-8 overflow-hidden">
      
      {/* Hero Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
        Tvara AI Experience
      </h1>

      {/* MagnetLines in background */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <MagnetLines
          text={text}
          animateBy="words"
          lineColor="rgba(0, 255, 234, 0.3)"
          lineWidth="0.5vmin"
          lineHeight="5vmin"
          baseAngle={-12}
          rotationFactor={0.12}
          style={{ maxWidth: "90%", gap: "0.5vmin" }}
        />
      </div>

      {/* BlurText with card effect */}
      <div className="relative z-10 max-w-3xl text-center bg-black/50 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
        <BlurText
          text={text}
          animateBy="words"
          direction="top"
          delay={0.05}
          className="text-lg md:text-2xl leading-relaxed tracking-wide cursor-pointer text-white"
        />
      </div>

      {/* Optional Footer/CTA */}
      <p className="mt-12 text-sm text-gray-400">
        Hover or click on the text to see the animation.
      </p>
    </div>
  );
}

export default App;
