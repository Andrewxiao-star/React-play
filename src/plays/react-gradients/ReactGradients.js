import PlayHeader from "common/playlists/PlayHeader";
import GradientComponent from "./GradientComponent";
import "./styles.css";
import gradients from "./gradients.json";
import { IoColorPaletteSharp, IoAddSharp } from "react-icons/io5";

// WARNING: Do not change the entry componenet name
function ReactGradients(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="w-full h-fit py-11 px-7 text-center">
            <span className="font-bold md:text-4xl text-3xl w-full text-black inline-flex justify-center items-center">
              React
              <IoColorPaletteSharp
                className="text-[#00f2fe] mt-auto mb-auto"
                size={50}
              />
              Gradients
            </span>
            <p className="mt-2 font-semibold md:text-xl text-lg w-full text-gray-700">
              A collection of beautiful gradients that you can copy to easily
              use in your application.
            </p>
          </div>
          <div className="grid py-2 md:px-6 px-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 place-items-center">
            {gradients.map((gradient, index) => (
              <GradientComponent
                index={index}
                name={gradient.name}
                css={gradient.css}
                tailwind={gradient.tailwind}
                colors={gradient.colors}
              />
            ))}
          </div>
          <a
            href="https://github.com/reactplay/react-play/src/plays/react-gradients"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-16 md:right-9 right-7 w-fit p-4 text-white bg-[#00f2fe] rounded-full font-semibold text-xl inline-flex justify-center items-center border-2 border-[#00f2fe] hover:bg-white hover:text-[#00f2fe] transition-all duration-200"
          >
            <IoAddSharp size={32} />{" "}
            <span className="md:flex hidden ml-2">Add a Gradient</span>
          </a>
          <div className="w-full h-fit pt-14 px-6 flex justify-center items-center text-center">
            <span>
              Built with 💙 by{" "}
              <a
                href="https://twitter.com/itsammaar_7"
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline hover:text-[#00f2fe] transition-all duration-200"
              >
                Ammaar Aslam
              </a>{" "}
              for{" "}
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline hover:text-[#00f2fe] transition-all duration-200"
              >
                ReactPlay.io
              </a>
            </span>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default ReactGradients;
