import React from "react"
// import Home from "./components/layout/content/Home"
import Recent_Work from "./components/layout/content/Recent_Work"
import Contact from "./components/layout/content/Contact"
import Footer from "./components/layout/content/Footer"
import Services from "./components/layout/content/Services"

import AchievementPage from "./components/layout/content/Achievements"
import { NavbarDemo } from "./newUI/navbar/NavbarDemo"
import { Home } from "./newUI/home/Home"
import Certificates from "./newUI/certifications/Certificates"
// import Recent_Work from "./newUI/Work/Recent_Work"


export default function App() {
  return (
    <div >
      <NavbarDemo />
      <Home />
      <Recent_Work />
      <Services />
      <Certificates />
      <AchievementPage />
      <Contact />
      <Footer />
    </div>
  )
}
