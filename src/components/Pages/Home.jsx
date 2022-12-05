import React from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const dispatch = useDispatch();	
    const navigate = useNavigate();

    const btnSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.name.value()
        if (inputValue.length !== 0){
          dispatch(setNameTrainer(inputValue))
          navigate('/')
        }
        e.target.name.value = ''
      }
  return (
    <div>
        
    </div>
  )
}

export default Home