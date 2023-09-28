import "./button.css";
import React from "react";

function Cart(){
 

     return(

            <div className="button-position">

                <div>
               <p className="p"> ₱1000 </p>
               <button className="btn1" > ADD TO CART </button>
               </div>
                <div>
                  <p className="p">₱999</p>
               <button className="btn2" > ADD TO CART </button>

               </div>
               <div>
                  <p className="p">₱1110</p>
               <button className="btn3" > ADD TO CART </button>

               </div>

               <div>
                  <p className="p">₱400</p>
               <button className="btn4" > ADD TO CART </button>

               </div>

                 
            </div>

     );



};

export default Cart;


