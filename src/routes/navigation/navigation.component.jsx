import {Fragment, useContext} from 'react'; 
import { Outlet, Link } from 'react-router-dom'; 
import { ReactComponent as CrwnLogo} from '../../components/assets/crown.svg'
import { UserContext } from '../../context/user.context';
import { SignOutUser } from '../../Utils/firebase/firebase.utils';
import './navigation.styles.scss'; 

const Navigation = () =>{
  const { currentUser } = useContext(UserContext);



    return(
      <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/'>  
            <CrwnLogo className='logo' />
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
            <Link className='nav-link' to='/shop'>
              CONTACT
            </Link>
            {
              currentUser ? (
                <span className='nav-link' onClick={SignOutUser}>SIGN OUT</span>
                ):(
                  <Link className='nav-link' to='/auth'>
                    SIGN IN
                  </Link>
                )
              
            }

          </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation; 