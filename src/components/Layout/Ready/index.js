import './index.scss'
import header from './header-bg.jpg'
import { useState } from 'react'
import Random from '../Random/Random'


const Ready = () => {

    const[random, setRandom] = useState([])
    const[open, setOpen] = useState('')
    const[visible, setVisible] = useState(false)

    const url = 'https://jsonplaceholder.typicode.com/posts'

    const randomQuiz = () => {

        fetch(url).then(res => {
            if (!res.ok) {
              return Error("Oh no");
            }
            return res.json();
          })
          .then(data => setRandom(data));
          
          setVisible(!visible)
          setOpen(<Random title ={random.map(rand =>rand.title)} key={random.map(rand =>rand.id)}/>)
          
      }

      return(

        <div className='home'>
            <div className='ready' style={{ backgroundImage: `url(${header})` }}>
               <div className='button-container'>
                <button onClick={randomQuiz}>
                    Feeling lucky?
                </button>
               </div>    
            </div>
                <div className='modal' style={{visibility: visible ? 'visible' : 'hidden'}}>{open}</div>
                
        </div>
    )
}


export default Ready