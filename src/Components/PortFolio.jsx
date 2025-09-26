import { Link, useNavigate } from "react-router-dom";

export default function Portfolio() {
   // const navigate = useNavigate();
   return (<>
      
      <div className="portfolio-background">
         <div className="portfolio">
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="portfolio-buttons">
               <button className="portfolio-button ">All</button>
               <button className="portfolio-button">ZBrush</button>
               <button className="portfolio-button">Matrix Gold</button>
               <button
                  className="portfolio-button"
               >
                  <Link to="/rings/ring1"> Rings</Link>
               </button>
               <button className="portfolio-button">Pendants</button>
            </div>
         </div>
      </div>



   </>)
}