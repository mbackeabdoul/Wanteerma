import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './composants/Navbar'
import Header from './composants/Header'
import Advantages from './composants/Advantages'
import Collections from './composants/Collections'
import Soldes from './composants/Soldes'
import DernieresTendances from './composants/Tendances'
import FooterNewsletter from './composants/FooterNewsletter'



// Pages
const Home = () => (
  <>
    <Header />
    <Advantages />
    <Collections />
    <Soldes />
    <DernieresTendances />
    <FooterNewsletter />
    {/* <div>Contenu de la page d'accueil</div> */}
  </>
)
const Tous = () => <div>Tous les produits</div>
const Hommes = () => <div>Collection Hommes</div>
const Femmes = () => <div>Collection Femmes</div>
const Enfants = () => <div>Collection Enfants</div>
const Vente = () => <div>Vente</div>
const Chariot = () => <div>Panier</div>

function App() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tous" element={<Tous />} />
        <Route path="/hommes" element={<Hommes />} />
        <Route path="/femmes" element={<Femmes />} />
        <Route path="/enfants" element={<Enfants />} />
        <Route path="/vente" element={<Vente />} />
        <Route path="/chariot" element={<Chariot />} />
      </Routes>
    </div>
  )
}

export default App