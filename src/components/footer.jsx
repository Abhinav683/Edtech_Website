import './footer.css'
export default function Footer() {
    return(
      <footer>
         <div className='logo-heading-f'>
          <div className='head-f'>
          <img src={require("./LP.jpg") }alt="not found" id="logo-f" /> 
         <h1 id="web-name-f"> <span>Learning Path</span>
         </h1> </div>
         <div className='quote'>Seamless Learning for Brighter Futures</div>
         
         </div>
       
        <table>
          <th>Products</th>
          <th>Company</th>
          <th>Support</th>
          <th>Legal</th>
          <tr>
            <td>Overview</td>
            <td>About</td>
            <td>Contact</td>
            <td>Terms of Service</td>
          </tr>
          <tr>
            <td>Solutions</td>
            <td>Investor Relations</td>
            <td>Documentations</td>
            <td>Privacy Policy</td>
          </tr>
          <tr>
            <td>Pricing</td>
            <td>Jobs</td>
            <td>Chats</td>
            <td>Cookie Setting</td>
          </tr>
          <tr>
            <td>Customers</td>
            <td>Press</td>
            <td>FAQ</td>
          </tr>
        </table>
      </footer>
    )
};
