import { TiTick } from "react-icons/ti";
import { VscError } from "react-icons/vsc";

function Card({item}) {
  
  return (
 
    <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="text-center my-0 fw-normal">{item.PlanName}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">Rs {item.price}<small className="text-body-secondary fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
             {item.features.map((features,index) =>{
              return <li key={index}>{
                features.enabled ? <sapn><TiTick />{features.name}</sapn>:
                <del><VscError />{features.name}</del>}
                </li>
             })}
            </ul>
            <button type="button"
             className={`w-100 btn btn-lg ${item.buttonFocus ? 'btn-primary' : 'btn-outline-primary' }`}>Sign up for free</button>
          </div>
        </div>
      </div>
   
  )
}

export default Card;