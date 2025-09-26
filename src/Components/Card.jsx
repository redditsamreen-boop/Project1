export default function Card(props) {
   return (<>
      <div className="card home-cards glass-card" >
         <div className="card-body ">
            {props.icon && <div className="card-icon">{props.icon}</div>}
            <h3 class="card-title ">{ props.title}</h3>
            <p class="card-text">{props.body}
            </p>
         </div>
      </div>

      
   </>)
}