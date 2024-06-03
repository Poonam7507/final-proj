import React from 'react'
import Navbar from '../components/Utility/Navbar'

export default function Contact() {
  return (

    <div>
    <Navbar/>
    <div className="contactpage">
       
       <div className="page" id="form" >
           <form action="">
              
           <div >
               <input type ="text"  id="nam" name="name" placeholder="Enter Name" required/>
           </div>
           <div id="column2">
               <input type ="text"  id="nam" name="phone" placeholder="Enter Mobile no." required/>
           </div>
        
          
           <div id="column4">

               <textarea  id="nam" cols="30" rows="10" name="message" placeholder="Enter Message" required/>
           </div>
             
     <div>
         <button className="btn " id="na" type="submit" >Send Message <i className="fa fa-telegram tele"></i></button>
       </div>
      
           </form>
          
       </div>
       
      </div>
      {/* </section> */}
      </div>
    // </div>
  )
}
