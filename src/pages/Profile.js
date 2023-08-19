import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../redux/slices/userSlice'
import './profile.css'
import storage from 'redux-persist/lib/storage';

function Profile() {
  const { user } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(signOut())
  }

  const handleLogout = () => {
    storage.removeItem('persist:root')
  };

  return (
    <div className='center'>
      <div className='profile'>
        <h1>Profile</h1>
        <p>
          <strong>Name: </strong>{user?.name}
        </p>
        <p>
          <strong>Email: </strong>
          {`${user?.email}`}
        </p>
        <span onClick={handleSignOut}>Sign Out</span>
        <button onClick={() => handleLogout()}>Sign Out</button>
      </div>
    </div>
  )
}

export default Profile