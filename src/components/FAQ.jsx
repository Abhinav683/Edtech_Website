import './FAQ.css'
export default function FAQ() {
    return(
        <div className='faq-container'>
        <div className="card">
  <h1> Frequently Asked Questions</h1>
  
  <details className="warning">
    <summary>Can I provide feedback on the course?</summary>
    <p> Yes! We’d love to hear from you and welcome your suggestions for resources or improvement. Please use this form to submit feedback on the course.</p> 

  </details>
  
  <details className="info" >
    <summary>How to contribute to the community?</summary>
    <p>We really love to see people contributing to the community in any form possible</p>
  </details>
  
  <details className="alert">
    <summary>What is the duration of the course?</summary>
    <p>Each module is 3 months long, we follow a steady and structured approach to make coding a regular part of child’s routine.</p> 
 
  </details>
</div></div>
    )
    
};
