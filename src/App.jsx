import { React, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Refer from "./pages/Refer"

const App = () => {
    
    const [signed, setSigned] = useState(false);

    return (
        <>
            <Refer signed={signed} />
        </>
    )
}

export default App