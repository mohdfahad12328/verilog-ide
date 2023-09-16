// import { useEffect, useState } from "react";
// import CodeEditor from "./code-editor";
// import Preview from "./preview";
// import bundle from "../bundler";
// import Resizable from "./resizable";
// import styled from "styled-components";

// type WrapEditorStyledProps = {};
// const WrapEditorStyled = styled.div<WrapEditorStyledProps>`
//   height: 100%;
//   display: flex;
//   flex-direction: row;
// `;

// const CodeCell = () => {
//   const [code, setCode] = useState("");
//   const [err, setErr] = useState("");
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     const timer = setTimeout(async () => {
//       const output = await bundle(input);
//       console.log(output);
//       setCode(output.code);
//       setErr(output.err);
//     }, 1000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [input]);

//   return (
//     <Resizable direction="vertical">
//       <WrapEditorStyled>
//         <Resizable direction="horizontal">
//           <CodeEditor
//             initialValue="const a = 1;"
//             onChange={(value) => setInput(value)}
//           />
//         </Resizable>
//         {/* <div>
//           <button onClick={onClick}>Submit</button>
//         </div> */}
//         <Preview code={code} err={err} />
//       </WrapEditorStyled>
//     </Resizable>
//   );
// };

// export default CodeCell;
