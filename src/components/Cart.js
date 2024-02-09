import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    items = useSelector((store)=> store.cart.items);
    const disapatch = useDispatch();
    const handleClearCart = () =>{
        disapatch(clearCart())
    }
    return (
        <div className="text-center m-4 p-4">
            <div className="w-6/12 m-auto">
                <h1 className="text-2xl font-bold">Cart</h1>
                <button disabled ={(!items || items.length === 0)} className="bg-black text-white mt-4 p-2 font-bold rounded-lg" onClick={handleClearCart}>Clear </button>
                {(!items || items.length === 0) && <h1>Please add items to the cart!</h1>}
                <ItemsList className="w-6/12 m-auto" items={items} />
            </div>
        </div>
    )
}
export default Cart;