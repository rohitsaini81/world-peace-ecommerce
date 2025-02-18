import React from 'react'
import "../Css/Cart.css"
function Cart() {
    return (
        <>
            <div className="flex cartBox" style={{ backgroundColor: "#ddd" }}>
                <div className="flex-C H-center V-center minH75vh size100percent boxShadow" style={{ margin: "4em 0 1em 1em", borderRadius: "1em", backgroundColor: "#fff" }}>
                    <summary className='headings flex H-center' style={{ justifyContent: "space-around" }}><h3>Shoping Cart </h3><p> 3 Items</p></summary>
                    <div className="cartItems flex">
                        <div className="img width6em"><img src="" alt="X" /></div>
                        <div className="Name width6em"><p className="type">Shirt</p><p className="ItemName">Cotton T-shirt</p></div>
                        <div className="qt width6em"><button type="button">+</button><p className="value">2</p><button type="button">-</button></div>
                        <p className="price width6em">€ 44.00 </p>
                        <button className="close width6em">x</button>
                    </div>
                    <hr className="seprator-H" />

                </div>

                <hr className='seprator-V' />

                <div className="flex-C H-center V-center minH75vh size100percent boxShadow" style={{ marginTop: "4em", backgroundColor: "#ddd", borderRadius: "1em" }}>
                    <summary className='headings flex H-center' style={{ justifyContent: "space-around" }}><p>Summary</p></summary>
                    <div className="itmes"><span>Items 3</span><span>€ 132.00</span></div>
                </div>
            </div>
        </>
    )
}

export default Cart