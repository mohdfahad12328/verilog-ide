import { Moon, Sun } from "lucide-react"
import { Button } from "./components/ui/button"
import { useTheme } from "./components/theme-provider"
import { Editor } from '@monaco-editor/react';
import { Monaco } from "@monaco-editor/react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Split from '@uiw/react-split';
import { useRef, useState } from "react";
import { editor } from "monaco-editor";

function App() {
  const editorRef = useRef<editor.IStandaloneCodeEditor>();

  let [iframeUrl, setIframeUrl] = useState("http://localhost:5000");
  let [editorTheme, setEditorTheme] = useState("vs-dark");

  function handleEditorDidMount(editor: editor.IStandaloneCodeEditor, monaco: Monaco) {
    editorRef.current = editor;
  }
  
  function onClickSubmit() {
    console.log(editorRef.current?.getValue())
  }

  const { setTheme, theme } = useTheme()
  function changeTheme() {
    if (theme == 'dark') {
      setTheme('light')
      setEditorTheme('light')
    }
    else if (theme == 'light') {
      setTheme('dark')
      setEditorTheme('vs-dark')
    }
  }
  return (
    <div>
      {/* nav bar */}
      <div className='flex justify-end align-middle content-center space-x-1 p-2 border-b-2'>
        <Button size={"default"} className="mr-2" onClick={onClickSubmit}>Submit</Button>
        <Button variant="outline" size="icon" onClick={changeTheme}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
      <div style={{ height: "calc(100vh - 57.6px)" }}>
        <Split style={{ height: "100%" }}>
          <div style={{ width: '40%', minWidth: 200 }}>
            <Editor className="sticky" height={"100%"} width={"100%"}
              language="verilog"
              options={
                {
                  autoIndent: "advanced",
                  fontSize: 20,
                  lineDecorationsWidth: 0,
                  cursorSmoothCaretAnimation: "on",
                  fontFamily: "JetBrains Mono",
                  cursorBlinking: 'smooth',
                  detectIndentation: true,
                  folding: true
                }
              } onMount={handleEditorDidMount} theme={editorTheme} />
          </div>
          <div style={{ overflow:"auto", width: '60%', minWidth: 100 }}>
            <div style={{ height: '500px' }} className="border-spacing-2">
              hello
            </div>
            <iframe src={iframeUrl} style={{ width: '100%', height: "700px" }}></iframe>
          </div>
        </Split>
      </div>
    </div>
  )
}

export default App
