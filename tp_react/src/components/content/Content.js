import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Accueil from './pages/accueil/Accueil';
import APropos from './pages/aPropos/APropos';
import Contact from './pages/contact/Contact';
import List from './pages/list/List';
import Admis from './pages/admis/Admis';
import NonAdmis from './pages/nonAdmis/NonAdmis';
import Formation from './pages/formation/Formation';




function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a_propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/list" element={<List />} />
        <Route path="/admis" element={<Admis />} />
        <Route path="/non_admis" element={<NonAdmis />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="*" element={"Aucune page trouver, retry dude !"} />
      </Routes>
    </div>
  )
}

export default Content
