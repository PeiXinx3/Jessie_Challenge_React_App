import '../index.css';
import { ClientLogos, Container, ElevatedButton, Menu } from '../Shared';
import './App.css';
import NavbarBrand from './Links/NavbarBrand.json';
import NavbarLinks from './Links/NavbarLinks.json';

const App = () => {
  const clients = [
    "images/client-databiz.svg",
    "images/client-audiophile.svg",
    "images/client-meet.svg",
    "images/client-maker.svg"
  ];
  return (
    <div className="App">
      <Menu
        brand={NavbarBrand}
        Key
        links={NavbarLinks}
      />
      <Container>
        <div className='text-field' >
          <div className='label'>
            Make remote work
          </div>
          <div className='description'>
            Get your team in sync, no matter your location.
            Streamline processes, create team rituals, and watch productivity sonar.
          </div>
          <ElevatedButton name="Learn more" />
          <ClientLogos images={clients} />
        </div>
        <div className='hero-image'>
        </div>
      </Container>
    </div >
  );
}

export default App;
