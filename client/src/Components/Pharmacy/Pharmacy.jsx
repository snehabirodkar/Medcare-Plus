import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import SectionHeader from '../SectionHeader';
import '../../../src/helper.css';
import dentist from '../../../src/Assets/Images/home-image/dentist.png';
import crocin from "../../Assets/Images/pharmacy-image/crocin.jpg";
import folitrax from "../../Assets/Images/pharmacy-image/folitrax.jpg";
import ecoglip from "../../Assets/Images/pharmacy-image/ecoglip.jpg";
import lomofen from "../../Assets/Images/pharmacy-image/lomofen.jpg";
import isolin from "../../Assets/Images/pharmacy-image/isolin.jpg";
import neeri from "../../Assets/Images/pharmacy-image/neeri.jpg";
import keto from "../../Assets/Images/pharmacy-image/keto.jpg";
import moximoxi from "../../Assets/Images/pharmacy-image/moximoxi.jpg";
import kofarest from "../../Assets/Images/pharmacy-image/kofarest.jpg";

import './Pharmacy.css';



const Pharmacy = () => {

    const getData = (e) => {
        console.log(e.target);
        var eventId = e.target.id;
        var cardName = document.getElementById(eventId + "-name").innerText;
        console.log(cardName);
        var cardPrice = document.getElementById(eventId + "-price").innerText;
        console.log(cardPrice);
        var cardQuantity = document.getElementById(eventId + "-quantity").value;
        console.log(cardQuantity);
        var obj = {
            'name': cardName,
            'price': cardPrice,
            'quantity': cardQuantity
        }
        addToLS(obj);
    }

    const addToLS = (obj) => {
        var localkey;
        if (localStorage.getItem('key') == null) {
            var key = 1
            localStorage.setItem('key', key);
        }
        if (localStorage.getItem('key') != null) {
            localkey = localStorage.getItem('key');
            localStorage.setItem(localkey, JSON.stringify(obj));
            localkey++;
            localStorage.setItem('key', localkey);
        }
        window.location.reload();
    }
    var obj = {};
    const updateCart = () => {
        // console.log(localStorage.length);
        for (let i = 1; i <= localStorage.length; i++) {
            if (localStorage.getItem(i)) {
                var abc = localStorage.getItem(i);
                abc = JSON.parse(abc);
                obj[i] = abc;
            }
        }
    }

    const clearLS = () => {
        for (let i = 1; i <= localStorage.length; i++) {
            if (localStorage.getItem(i)) {
                localStorage.removeItem(i);
            }
            localStorage.setItem('cartvalue',0);
            localStorage.setItem('key',1);
        }
        window.location.reload()
    }

    var total = 0;

    return (
        <>
            <section id="pharmacy">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9 py-3" style={{ 'background': 'transparent' }}>
                            <div className="medicine-cards">
                                <div className="medicine-card">
                                    <div className="medicine-image">
                                        <img src={crocin} alt="crocin tablet's" />
                                    </div>
                                    <div className="medicine-details my-3">
                                        <h5 id='dolo-650-name'>Dolo-650</h5>
                                        <p className='my-1'>Description: <br />Dolo is a famous paracetemol which is usually used to</p>
                                        <hr />
                                        <label htmlFor="quantity">Select Quantity &nbsp;</label>
                                        <select name="quantity" id="dolo-650-quantity">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                        <h5 className='mt-2 mb-0'>Cost: Rs. <span id='dolo-650-price'>999</span></h5>
                                    </div>
                                    <p id="dolo-650" className='btn btn-primary' onClick={getData}>Add to Cart</p>
                                </div>

                                <div className="medicine-card">
                                    <div className="medicine-image">
                                        <img src={isolin} alt="Isolin Tablet's" />
                                    </div>
                                    <div className="medicine-details my-3">
                                        <h5 id='isolin-name'>Isolin</h5>
                                        <p className='my-1'>Description: <br />Dolo is a famous paracetemol which is usually used to</p>
                                        <hr />
                                        <label htmlFor="quantity">Select Quantity &nbsp;</label>
                                        <select name="quantity" id="isolin-quantity">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                        <h5 className='mt-2 mb-0'>Cost: Rs. <span id='isolin-price'>10</span></h5>
                                    </div>
                                    <p id="isolin" className='btn btn-primary' onClick={getData}>Add to Cart</p>
                                </div>

                                <div className="medicine-card">
                                    <div className="medicine-image">
                                        <img src={keto} alt="Keto Cream" />
                                    </div>
                                    <div className="medicine-details my-3">
                                        <h5 id='keto-cream-name'>Keto-Cream</h5>
                                        <p className='my-1'>Description: <br />Dolo is a famous paracetemol which is usually used to</p>
                                        <hr />
                                        <label htmlFor="quantity">Select Quantity &nbsp;</label>
                                        <select name="quantity" id="keto-cream-quantity">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                        <h5 className='mt-2 mb-0'>Cost: Rs. <span id='keto-cream-price'>50</span></h5>
                                    </div>
                                    <button id="keto-cream" className='btn btn-primary' onClick={getData}>Add to Cart</button>
                                </div>

                                <div className="medicine-card">
                                    <div className="medicine-image">
                                        <img src={kofarest} alt="Kofarest Syrup" />
                                    </div>
                                    <div className="medicine-details my-3">
                                        <h5 id='kofarest-name'>Kofarest</h5>
                                        <p className='my-1'>Description: <br />Dolo is a famous paracetemol which is usually used to</p>
                                        <hr />
                                        <label htmlFor="quantity">Select Quantity &nbsp;</label>
                                        <select name="quantity" id="kofarest-quantity">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                        <h5 className='mt-2 mb-0'>Cost: Rs. <span id='kofarest-price'>999</span></h5>
                                    </div>
                                    <button id="kofarest" className='btn btn-primary' onClick={getData}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 py-3">
                            <div className="pharmacy-addto-cart">
                                <h3>Your Cart</h3>
                                <p href="" onClick={clearLS} >Clear Cart</p>
                                <hr />
                                <div className="mb-4"></div>
                                <div id="cartsContainer">
                                    {
                                        updateCart()
                                    }
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
                                                localStorage.setItem("cartvalue",total);
                                                totalh3.innerHTML = "<h3>Subtotal: Rs. <span class='total-amount'>" + total + "</span></h3>";
                                            })
                                        }
                                    }
                                </div>
                                <div className="subtotal">
                                    <div className="mt-5"></div>
                                    <hr width="50%" />
                                    <h3 id='subtotal'></h3>
                                    {/* {
                                        window.onload = () => {
                                            Object.entries(obj).map(item => {
                                                console.log(item[1].price);
                                                
                                                // return 
                                            })
                                        }
                                    } */}

                                </div>
                                <div className="my-3">
                                    <a className="btn btn-primary" href="/pharmacy/checkout">Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Pharmacy;