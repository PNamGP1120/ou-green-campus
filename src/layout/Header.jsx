import { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Logo from '../components/Header/Logo';
import NavLinks from '../components/Header/NavLinks';
import SearchBar from '../components/Header/SearchBar';
import NotificationIcons from '../components/Header/NotificationIcons';
import AvatarDropdown from '../components/Header/AvatarDropdown';



const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#fff' }} className="fixed-top shadow-sm py-2 border-bottom">
      <Container fluid className="px-3">
        <div className="d-flex align-items-center gap-3">
          <Logo />
        </div>

        <NavLinks />

        <div className="d-flex align-items-center gap-2">
          <SearchBar showSearch={showSearch} setShowSearch={setShowSearch} />
          <NotificationIcons />
          <AvatarDropdown />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
