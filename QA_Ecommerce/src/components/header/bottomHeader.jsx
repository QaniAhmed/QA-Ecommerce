import './BottomHeader.css';

import LoginIconSectoin from './bottomHeader/LoginIconSectoin.jsx';
import NavigationSection from './bottomHeader/NavigationSection.jsx';

const BottomHeader = () => {
  return (
    <nav className="bottom-header">
      <div className="bottom-header-container">
        
        
       
    <NavigationSection/>
    <LoginIconSectoin/>

      </div>
    </nav>
  );
};

export default BottomHeader;