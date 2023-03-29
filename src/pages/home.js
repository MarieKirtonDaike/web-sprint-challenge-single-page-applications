import { useNavigate } from "react-router-dom"



const style = { margin: '1rem', padding: '0.5rem', border: '2px solid black' }
export function Home(props) {
    const navigate = useNavigate()



    return <div>
       <h2 style={{ ...style, borderColor: 'red' }}>Welcome to The Pizza Shop</h2>
       <button onClick={()=> navigate("/pizza")} id="order-pizza" >ORDER PIZZA</button>
        </div>
  }
  