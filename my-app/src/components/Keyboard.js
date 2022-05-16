import React from "react";
import useKeyPress from "../hooks/useKeyPress"

const keyboard = [
  {
    key: "`",
    class: "key"
  },
  {
    key: "1",
    class: ""
  },
  {
    key: "2",
    class: ""
  },
  {
    key: "3",
    class: ""
  },
  {
    key: "4",
    class: ""
  },
  {
    key: "5",
    class: ""
  },
  {
    key: "6",
    class: ""
  },
  {
    key: "7",
    class: ""
  },
  {
    key: "8",
    class: ""
  },
  {
    key: "9",
    class: ""
  },
  {
    key: "0",
    class: ""
  },
  {
    key: "-",
    class: ""
  },
  {
    key: "+",
    class: ""
  },
  {
    key: "DELETE",
    class: "delete"
  },
  {
    key: "TAB",
    class: "tab"
  },
  {
    key: "Q",
    class: ""
  },
  {
    key: "W",
    class: ""
  },
  {
    key: "E",
    class: ""
  },
  {
    key: "R",
    class: ""
  },
  {
    key: "T",
    class: ""
  },
  {
    key: "Y",
    class: ""
  },
  {
    key: "U",
    class: ""
  },
  {
    key: "I",
    class: ""
  },
  {
    key: "O",
    class: ""
  },
  {
    key: "P",
    class: ""
  },
  {
    key: "{",
    class: ""
  },
  {
    key: "}",
    class: ""
  },
  {
    key: "\\",
    class: "backslash"
  },
  {
    key: "CAPSLOCK",
    class: "capslock"
  },
  {
    key: "A",
    class: ""
  },
  {
    key: "S",
    class: ""
  },
  {
    key: "D",
    class: ""
  },
  {
    key: "F",
    class: ""
  },
  {
    key: "G",
    class: ""
  },
  {
    key: "H",
    class: ""
  },
  {
    key: "J",
    class: ""
  },
  {
    key: "K",
    class: ""
  },
  {
    key: "L",
    class: ""
  },
  {
    key: ";",
    class: ""
  },
  {
    key: "'",
    class: ""
  },
  {
    key: "Enter",
    class: "return"
  },
  {
    key: "SHIFT",
    class: "leftshift"
  },
  {
    key: "Z",
    class: ""
  },
  {
    key: "X",
    class: ""
  },
  {
    key: "C",
    class: ""
  },
  {
    key: "V",
    class: ""
  },
  {
    key: "B",
    class: ""
  },
  {
    key: "N",
    class: ""
  },
  {
    key: "M",
    class: ""
  },
  {
    key: ",",
    class: ""
  },
  {
    key: ".",
    class: ""
  },
  {
    key: "?",
    class: ""
  },
  {
    key: "SHIFT",
    class: "rightshift"
  },
  {
    key: "CONTROL",
    class: "leftctrl"
  },
  {
    key: "ALT",
    class: ""
  },
  {
    key: "COMMAND",
    class: "command"
  },
  {
    key: " ",
    class: "space"
  },
  {
    key: "COMMAND",
    class: "command"
  },
  {
    key: "Alt",
    class: ""
  },
  {
    key: "CONTROL",
    class: "leftctrl"
  },
]


function Keyboard() {
  const [currentKey, setCurrentKey] = React.useState();

  const resetKey = () => {
    const reset = () => {
      setCurrentKey("")
    }
    window.addEventListener("keyup", reset);

    return () => {
      window.removeEventListener("keyup", reset)
    }

  }

  useKeyPress(key => {
    setCurrentKey(key.toUpperCase());
    resetKey()
  })

  return (
    <div className="keyboard-base">
      {keyboard.map(props => {
        let classname = `${props.class} key ${currentKey === props.key ? "key-active" : ""}`;
        return (
        <div className={classname}>{props.key}</div>
        )
      })}
    </div>
  )
}

export default Keyboard;