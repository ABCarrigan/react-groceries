import React, {useState, useEffect} from "react"
import './App.css'
import GroceryParams from './services/groceryApi'

function App() {
  const [groceries, setGroceries] = useState(GroceryParams)
  const createGroceryDiv = () => {
      const newGrocery = {
        item: (document.getElementById('item').value),
        brand: (document.getElementById('brand').value),
        pounds: (document.getElementById('pounds').value),
        quantity: (document.getElementById('quantity').value),
        isPurchased: (false)
    }
      setGroceries(groceries.concat([{
        newGrocery
      }]))
  }
  useEffect(() => {
      document.getElementById('submit').addEventListener('click', createGroceryDiv)}, groceries)

  return (
    <div className="bodyContainer">
      <h3>React Groceries</h3>
      <div className="groceryContainer">
                {groceries.map((each,i) => {
                    return(
                        <div className="groceryItem">
                            Item name: {each.item}<br/>
                            Brand: {each.brand}<br/>
                            Weight:{each.pounds} lbs<br/>
                            Quantity: {each.quantity}<br/>
                            Is purchased?: <input type="checkbox" name="isPurchased" value={each.isPurchased} /><br/>
                        </div>
                    )
                })}
            </div>
            <div className="groceryCreateButton">
                <form>
                    Item Name: <input type='text' id='item' />
                    <br></br>
                    Brand: <input type='text' id='brand' />
                    <br></br>
                    Pounds: <input type="number" id="pounds" />
                    <br></br>
                    Quantity: <input type="number" id="quantity" />
                    <br></br>
                    <input type='button' id="submit" value='Create grocery!'/>
                </form>
            </div>
   </div>
  )
}

export default App