import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt.jsx";
import Backdrop from "./Backdrop.jsx";
import CameraRig from "./CameraRig.jsx";

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
// import React, { useEffect } from "react";
// import { Canvas, useThree } from "@react-three/fiber";
// import { Environment, Center } from "@react-three/drei";
// import Shirt from "./Shirt.jsx";
// import Backdrop from "./Backdrop.jsx";
// import CameraRig from "./CameraRig.jsx";

// const CanvasModel = () => {
//   const { gl } = useThree(); // Access the WebGLRenderer instance

//   useEffect(() => {
//     const handleContextLost = (event) => {
//       console.warn("WebGL context lost");
//       event.preventDefault();
//     };

//     const handleContextRestored = () => {
//       console.log("WebGL context restored");
//     };

//     // Attach event listeners
//     gl.domElement.addEventListener(
//       "webglcontextlost",
//       handleContextLost,
//       false
//     );
//     gl.domElement.addEventListener(
//       "webglcontextrestored",
//       handleContextRestored,
//       false
//     );

//     // Cleanup on component unmount
//     return () => {
//       gl.domElement.removeEventListener("webglcontextlost", handleContextLost);
//       gl.domElement.removeEventListener(
//         "webglcontextrestored",
//         handleContextRestored
//       );
//     };
//   }, [gl]);

//   return (
//     <Canvas shadows camera={{ position: [0, 0, 0], fov: 25 }}>
//       <ambientLight intensity={0.5} />
//       <Environment preset="city" />
//       <CameraRig>
//         <Backdrop />
//         <Center>
//           <Shirt />
//         </Center>
//       </CameraRig>
//     </Canvas>
//   );
// };

// export default CanvasModel;
