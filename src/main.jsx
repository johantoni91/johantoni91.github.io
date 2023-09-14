import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NavbarDefault} from './Components/Fragments/Navbar'
import Jumbotron from './Components/Layouts/Jumbotron'
import CardProfile from './Components/Fragments/CardProfile'
import SocialMedia from './Components/Elements/SocialMedia'
import 'react-tooltip/dist/react-tooltip.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarDefault />
    <Jumbotron />
    <CardProfile />
    <SocialMedia/>
  </React.StrictMode>,
)
