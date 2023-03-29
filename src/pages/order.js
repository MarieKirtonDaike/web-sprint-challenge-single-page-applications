
import { useEffect, useState } from "react"
import { formSchema } from "./schema"
import * as yup from "yup"

const style = { margin: '1rem', padding: '0.5rem', border: '2px solid black' }

export function Order(props) {






    const [pizza, setPizza] = useState({
        name: "",
        size: "",
        topping1: false,
        topping2: false,
        topping3: false,
        special: "",
    })
    const [display, setDisplay] = useState([])


    const [error, setError] = useState({
        name: "",
        size: "",
        topping1: false,
        topping2: false,
        topping3: false,
        special: "",
    })


    const Submit = event => {
        event.preventDefault()

    }

    const Changehandler = event => {
        const { name, value } = event.target
        yup
            .reach(formSchema, name)
            //we can then run validate using the value
            .validate(value)
            // if the validation is successful, we can clear the error message
            .then(valid => {
                setError({
                    ...error, [name]: ""
                });
            })
            // if the validation is unsuccessful, we can set the error message to the message
            // returned from yup (that we created in our schema)
            .catch(err => {
            //   console.log(err.errors)
                setError({
                    ...error, [name]: err.errors[0]
                });
            });

    }

    /* Each time the form value state is updated, check to see if it is valid per our schema.
  This will allow us to enable/disable the submit button.*/
    useEffect(() => {
        /* We pass the entire state into the entire schema, no need to use reach here.
        We want to make sure it is all valid before we allow a user to submit
        isValid comes from Yup directly */
        formSchema.isValid(pizza).then(valid => {

        });
    }, [pizza]);




    return (
        <div>
            <h2 style={{ ...style, borderColor: 'blue' }}>Place an Order</h2>
            <form style={style} id="pizza-form" onSubmit={Submit}>
                <label>Name</label>
                <input id="name-input" name="name" type="text" onChange={Changehandler}></input> &nbsp;

            {error.name && <p className="error"> {error.name} </p>}

                <label>Pizza Size</label>
                <select name="toppings" id="size-dropdown" onChange={Changehandler}>
                    <option initial value="choose a size "> Choose a size </option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select> &nbsp;
                <label>Pepperoni </label>
                <input name="pepperoni" value="" type="checkbox" onChange={Changehandler}></input>&nbsp;
                <label>Sausage </label>
                <input name="sausage" type="checkbox" onChange={Changehandler}></input>&nbsp;
                <label>Extra Cheese </label>
                <input name="extracheese" type="checkbox" onChange={Changehandler}></input> &nbsp;
                <label>Veggies</label>
                <input name="veggies" type="checkbox" onChange={Changehandler}></input>
                <div>

                    <label>Special Instructions</label>
                    <input name="instructions" type="text" id="special-text" onChange={Changehandler}></input> &nbsp;
                    <button id="order-button">Submit</button>
                </div>
            </form>
        </div>
    )
}