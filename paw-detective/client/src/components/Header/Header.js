import './Header.css';
import { FaPaw } from 'react-icons/fa';

import AuthNav from '../../Account-setup/AuthNav';

const Header = () => {
  return (
    <header className="home-header">
      <h1 className="title-header">
        Paw Detective <FaPaw />
      </h1>
        <nav>
            <AuthNav />
        </nav>
    </header>
  );
};

export default Header;
