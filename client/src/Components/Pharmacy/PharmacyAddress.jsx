import React from 'react';
import SectionHeader from '../SectionHeader';
import axios from 'axios';
import Navbar from '../NavigationBar/Navbar';

const PharmacyAddress = () => {


    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async () => {

        try {
            const res = await loadScript(
                "https://checkout.razorpay.com/v1/checkout.js"
            );
      
            if (!res) {
                alert("Razorpay SDK failed to load. Are you online?");
                return;
            }
      
            // creating a new order
            const result = await axios.post("http://localhost:5000/payment/orders");
      
            if (!result) {
                alert("Server error. Are you online?");
                return;
            }
      
            // Getting the order details back
            const { amount, id: order_id, currency } = result.data;
      
            const options = {
                // key: "rzp_test_5DajFrSwbuyreA", // Enter the Key ID generated from the Dashboard
                amount: amount.toString(),
                currency: currency,
                name: "Medcare",
                description: "Buying Medicine",
                // image: { logo },
                order_id: order_id,
                handler: async function (response) {
                    const data = {
                        orderCreationId: order_id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                        amount: amount.toString(),
                        currency: currency,
                    };
      
                    const result = await axios.post("http://localhost:5000/payment/success", data);
                    console.log(result.data)
      
                    alert(result.data.msg);
                },
                prefill: {
                    name: "John Doe",
                    email: "johndoe@gmail.com",
                    contact: "9004300436",
                },
                notes: {
                    address: "Medcare Corporate Office",
                },
                theme: {
                    color: "#61dafb",
                },
            };
      
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();

            } catch (error) {
                console.log(error.response.data)
            }
    }


    var obj = {};
    const getDataFromLs = () => {
        for (let i = 1; i <= localStorage.length; i++) {
            if (localStorage.getItem(i)) {
                var abc = localStorage.getItem(i);
                abc = JSON.parse(abc);
                obj[i] = abc;
            }
            // console.log(obj[1].name);
        }
    }
    getDataFromLs();
    var total = 0;

    return (
        <>
        <Navbar />
            <section id="pharmacy">
                <div className="container">
                    <div className="content-box-sm">
                        <SectionHeader title="Checkout Cart" />
                        <div className="row">
                            <div className="col-md-7">
                                <div className="pharmacy-addto-cart">
                                    <h3>Address Details</h3>
                                    <hr />
                                    <form className='mt-4'>
                                        <div className="mb-3">
                                            <label ḥtmlFor="name" className="form-label">Enter Name</label>
                                            <input type="text" className="form-control" id="name" />
                                        </div>
                                        <div className="mb-3">
                                            <label ḥtmlFor="address1" className="form-label">Enter Address 1</label>
                                            <input type="text" className="form-control" id="address1" />
                                        </div>
                                        <div className="mb-3">
                                            <label ḥtmlFor="address2" className="form-label">Enter Address 2</label>
                                            <input type="text" className="form-control" id="address2" />
                                        </div>
                                        <div className="mb-3">
                                            <label ḥtmlFor="pincode" className="form-label">Enter Pincode</label>
                                            <input type="text" className="form-control" id="pincode" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-5">
                                {/* {
                                    Object.entries(obj).map(item => {
                                        item[1].name
                                    })
                                } */}
                                <div className="pharmacy-addto-cart">
                                    <h3>Checkout Cart</h3>
                                    <div className="mb-4"></div>
                                    <div id="cartsContainer">
                                        {
                                            window.onload = () => {
                                                Object.entries(obj).map(item => {
                                                    console.log(item[1])
                                                    var dd = document.getElementById('cartsContainer');
                                                    var div = document.createElement('div');
                                                    var h5 = document.createElement('h5');
                                                    var p1 = document.createElement('p');
                                                    var p2 = document.createElement('p');
                                                    var span1 = document.createElement('span');
                                                    var span2 = document.createElement('span');


                                                    div.classList.add('cart');
                                                    div.classList.add('m-2');
                                                    h5.innerText = item[1].name;
                                                    p1.classList.add('m-0');
                                                    p1.innerText = "Price: Rs." + item[1].price;
                                                    p2.classList.add('m-0');
                                                    p2.innerText = "Quantity: " + item[1].quantity;
                                                    span1.id = "item-value";
                                                    span2.id = "item-value";

                                                    p1.appendChild(span1);
                                                    p2.appendChild(span2);

                                                    div.appendChild(h5);
                                                    div.appendChild(p1);
                                                    div.appendChild(p2);

                                                    dd.appendChild(div);

                                                    var totalh3 = document.getElementById('subtotal');
                                                    total = total + (parseInt(item[1].price) * parseInt(item[1].quantity));
                                                    totalh3.innerHTML = "<h3>Subtotal: Rs. <span class='total-amount'>" + total + "</span></h3>";
                                                })
                                            }
                                        }
                                    </div>
                                    <div className="subtotal">
                                        <div className="mt-5"></div>
                                        <hr />
                                        <h3 id='subtotal' className='text-center'></h3>
                                    </div>
                                    <div className="my-3">
                                        <button id="proceed" className='btn btn-primary w-100' onClick={displayRazorpay}>Pay Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PharmacyAddress;