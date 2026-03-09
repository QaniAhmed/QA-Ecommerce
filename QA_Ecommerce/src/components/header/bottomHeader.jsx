import './BottomHeader.css';

import LoginIconSectoin from './bottomHeader/LoginIconSectoin.jsx';
import NavigationSection from './bottomHeader/NavigationSection.jsx';
import Categories_dropdown from './bottomHeader/categories-dropdown.jsx';

const BottomHeader = () => {
  return (
    <nav className="bottom-header">
      <div className="bottom-header-container">
        
        
       <Categories_dropdown/>
    <NavigationSection/>
    <LoginIconSectoin/>

      </div>
    </nav>
  );
};

export default BottomHeader;