

import Logo4 from './../assets/Front4.jpg'

export default function Block() {
   return (<>
      <div className="div1">
         <div className="div2">
            <div className='brand-content'>
               <h1 className="heading" >Professional Jewelry CAD Services</h1>
               <p className="brand" >ZBrush & MatrixGold Specialists</p>
               <div className="buttons">
                  <button className="btn portfolio-button top-buttons">View Portfolio</button>
                  <button className="btn portfolio-button top-buttons">Get Quote</button>
               </div>
            </div>

          
         </div>
         <div className="div3">
            <img src={Logo4} alt="Logo"  className='img-logo'/>
        </div>
      </div>


   </>)
}