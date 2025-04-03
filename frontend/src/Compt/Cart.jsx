import { useEffect} from "react"
import axios from "axios"
import "../Css/Cart.css"
import { testimage } from './Images'
function Cart() {
    useEffect(() => {
        axios.get("http://localhost:4000/cart", {
            withCredentials: true,  // Ensure cookies are sent
            headers: {
                withCredentials: true,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => {
            console.log("Cart Data:", response.data);
        })
        .catch((error) => {
            console.error("Error fetching cart:", error);
        });
    }, []);

    return (
        <>
            <div className="flex cartBox" style={{ backgroundColor: "#ddd" }}>
                <div className="flex-C H-center V-center size100percent cartList boxShadow" style={{ marginTop: '1em', borderRadius: "1em", backgroundColor: "#fff" }}>
                    <summary className='headings flex H-center' style={{ justifyContent: "space-around" }}><h3>Shoping Cart </h3><p> 3 Items</p></summary>



                    <ItmeDetails />
                    <ItmeDetails />
                    <ItmeDetails />
                    <ItmeDetails />
                    <ItmeDetails />
                    <ItmeDetails />
                    <ItmeDetails />
                    <ItmeDetails />

                </div>

                <hr className='seprator-V' />

                <div className="flex-C H-center V-center cartList size100percent boxShadow" style={{ marginTop: "1em", backgroundColor: "#ddd", borderRadius: "1em" }}>
                    <summary className='headings flex H-center' style={{ justifyContent: "space-around" }}><p>Summary</p></summary>
                    <div className="itmes"><p style={{display:'inline'}}>Items 0 </p><p style={{display:'inline'}}>€ 0.00</p></div>
                </div>
            </div>
        </>
    )
}





function ItmeDetails() {
    return (
        <>
            <div className="cartItems flex">

                <div className="img width6em"><img src={testimage} alt="X" /></div>
                <div className="Name width6em"><p className="type" style={{ borderBottom: '2px solid ', backgroundColor: "#f4f2f2", margin: '0', fontSize: "0.9em" }}>Shirt</p><p className="ItemName" >Cotton T-shirt</p></div>

                <div className="qt width6em flex" style={{ margin: "auto 1em" }}><button type="button" className='xbutton'>+</button><p className="value xbutton">2</p><button type="button" className='xbutton'>-</button></div>
                <p className="price width6em">€ 44.00 </p>

                <button className="close boxShadow xbutton">x</button>
            </div>
            <hr className="seprator-H" /></>
    )
}


export default Cart