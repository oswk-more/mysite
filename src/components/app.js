import React from "react"
import { useSpring, animated } from '@react-spring/web'

function App() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  return <animated.div style={props}>I will fade infhaskjfhoudhakjhdogjakgosahgaogaho</animated.div>
}

export default App