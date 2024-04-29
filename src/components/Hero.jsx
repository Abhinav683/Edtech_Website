import './hero.css';
export default function Hero() {
    return(
        <main className='main'>
            <div className="inner-box">
            <div className='intro'>
                <p></p>
                <h1>Seamless Learning for Brighter Futures</h1>
                <div className='image001'>
                <img src={require("./LP.jpg") }alt="not found" id="logo2"/>  </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere  unde at voluptates similique pariatur, architecto vel! Quaerat, necessitatibus totam!</p>
                <div className="butt">
                    <button>Start Now</button>
                    <button>Take Tour</button>
                </div>
            </div>
            <div className='image'>
            <img src={require("./LP.jpg") }alt="not found" />  
            </div></div>
            
        </main>
    )
};
