import './App.css';
import Header from './components/Header.component';
import Footer from './components/Footer.component';
// creare componente header e footer
// componente carosello per utenti che hanno già partecipato al corso
function App() {

  const elencoLinkObj = [
    {nomeLink:'Home', urlLink:'/'},
    {nomeLink:'Corsi', urlLink:'/Corsi'},
    {nomeLink:'Docenti', urlLink:'/Docenti'},
    {nomeLink:'Contatti', urlLink:'/Contatii'},
]
  return (

    <div className="container-app">
     <Header testoLogo='Mia Azienda' elencoLink ={elencoLinkObj}/>
      <div className='hero-section'>Hero banner</div>
      <Footer></Footer>
    </div>

  );
}

export default App;
