import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { logoutSuccess } from '../../redux/slices/authSlice';
import './Mint.css';

const Mint = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logOutHandler = () => {
    dispatch(logoutSuccess());
    navigate('/');
  }

  const [timer, setTimer] = React.useState(10);
  const [count, setCount] = React.useState(3);
  const [isActive, setIsActive] = React.useState(false);

  const clickHandler = () => {
    if ( count > 1) {
      setCount(count => count - 1);
    } else {
      setCount(count => count - 1);
      setTimer(10);
      setIsActive(false);
    }
  }

  React.useEffect(() => {
    setIsActive(true)
    let interval = null;
    if (timer > 0 && isActive) {
      interval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
      setCount(3);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);


    const timerText = (<h2>Button will be able in, seconds: 
                      &nbsp;<span className='timer'>{timer}</span>
                      </h2>);

    const countText = (<h2>You can push button, times: 
                        &nbsp;<span className='counter'>{count}</span>
                      </h2> );

    const isButtonActive = timer !== 0 || count === 0 ? true : false;

  return isAuth ? (
    <div >
      <div className='text-center my-4'>
        <h1>Mint page</h1>
        <Button variant="danger" onClick={logOutHandler}>Log Out</Button>
      </div>
      <hr />
      <div className="mint-content">
        <h1 className="text-center">Mint content</h1>
        <div className='my-3 text-center'>
          {timer > 0 ? timerText : countText }
        </div>
        <button disabled={isButtonActive} 
        className='mint-btn'
        onClick={clickHandler}
        >Push me</button>
      </div>
    </div> ) : (
    <>
      <Navigate to="/login" replace={true} />
    </>
    )
  }

export default Mint