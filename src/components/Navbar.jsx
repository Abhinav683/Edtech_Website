import './Navbar.css';
export default function Navbar() {
  
  const myFunction = () =>{
    var element = document.body;
    element.classList.toggle("buttons");
 }
  return (
    
      <header className='head'>
        <div className='logo-heading'>
          <img src={require("./LP.jpg") }alt="not found" id="logo" /> 
         <h1 id="web-name"> <span>Learning Path</span>
         </h1>
        </div>
          <nav>
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">About</a>
            <a href="#">Courses</a>
          </nav>
      
      <div className='buttons'>
            <button className='signup'>SignUp</button>
      
        <button className='signin'>SignIn</button>
      </div>
      <div id="dark-mode-logo">
      <button type="button" onclick={myFunction}>tap me</button>
          
      </div>
       <img src={require("./hamm.png") }alt="not found" id="hamm"/>  
       

      </header>
    
  );
}
