import { Header, Link } from 'components/AppBar/AppBarStyled';
import { BiFilm } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';

const navItems = [
  { href: '/', text: 'Home', icon: FaHome },
  { href: '/movies', text: 'Movies', icon: BiFilm },
];

export const AppBar = () => {
  return (
    <Header>
      <nav>
        {navItems.map(({ href, text, icon: Icon }) => (
          <Link to={href} key={href} end>
            <Icon size={24} />
            {text}
          </Link>
        ))}
      </nav>
    </Header>
  );
};

