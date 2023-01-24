import "./App.css"

import React from "react"

import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Home from "./components/Home"
import Qualification from "./components/Qualification"
import ScrollUp from "./components/ScrollUp"
import Services from "./components/Services"
import Skills from "./components/Skills"

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
      </main>
      <ScrollUp />
    </>
  )
}

export default App
