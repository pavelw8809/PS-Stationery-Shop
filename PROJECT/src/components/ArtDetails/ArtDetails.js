import React, { useState, useContext } from 'react';
import { CartContext, TotalContext } from '../../containers/App';
import './ArtDetails.scss';
import carticon from '../../images/icons/black_cart.png';

const Artdetails = (props) => {

    const [Total, setTotal] = useContext(TotalContext);
    const [counter, setCounter] = useState({quantity: 0});
    
    let CartStorage = JSON.parse(localStorage.getItem('pscart'));
    console.log(props.location.artProps);

    let Image, InitPrice, Price, NetPrice, ProdId, Name, ShortDesc, Desc, ImageName;
    if (typeof(props.location.artProps) !== 'undefined') {
        ImageName = props.location.artProps.imagename;
        Image = require('../../images/images/' + props.location.artProps.imagename + '.png');       // Ścieżka do zdjęcia
        InitPrice = parseFloat(props.location.artProps.price);
        Price = InitPrice.toFixed(2)
        NetPrice = (InitPrice/1.23).toFixed(2);
        ProdId = props.location.artProps.prodid;
        Name = props.location.artProps.name;
        ShortDesc = props.location.artProps.shortdesc;
        Desc = props.location.artProps.description;
        localStorage.setItem('psdet', JSON.stringify(props.location.artProps));
    } else {
        let ArtStorage = JSON.parse(localStorage.getItem('psdet'));
        if (ArtStorage !== null) {
            ImageName = ArtStorage.imagename;
            Image = require('../../images/images/' + ImageName + '.png'); 
            InitPrice = parseFloat(ArtStorage.price);
            Price = InitPrice.toFixed(2);
            NetPrice = (InitPrice/1.23).toFixed(2);
            ProdId = ArtStorage.prodid;
            Name = ArtStorage.name;
            ShortDesc = ArtStorage.shortdesc;
            Desc = ArtStorage.description;
        } else {
            NetPrice = 0;
            Name = null;
        }
    }

    let ProdImgStyle;
    ProdImgStyle = {                                                                // Stylizacja zdjęcia - zdjęcie jako tło karty
        backgroundImage: "url(" + Image + ")",
        backgroundColor: 'white',
    }

    const increaseQuantity = () => {
        if (counter.quantity < 100) {
            setCounter({
                quantity: counter.quantity+1
            })
        }
    }
    
    const decreaseQuantity = () => {
        if(counter.quantity > 0) {
            setCounter({
                quantity: counter.quantity-1
            })
        }
    }

    const handleQuantity = (event) => {
        let regexp = /^[0-9\b]+$/
        let input = event.target.value
        if (regexp.test(input)) {
        setCounter({
            quantity: parseInt(input)
        })
        } else {
            document.querySelector(".ArtDqInput").value = 0;
        }
    }

    const addProd = (prodid, name, desc, shortdesc, q, price, imagename) => {
        let check = 0;
        let idToChange;
        let orSum = parseFloat((q*price));

        if (name !== null) {
            CartStorage.map((r, index) => {
                if (r.prodid === prodid) {
                    check = 1
                    idToChange = parseInt(index);
                }
            })

            CartStorage.map((r, index) => {
                if (r.prodid === prodid) {
                    check = 1
                    idToChange = parseInt(index);
                }
            })

            if (q > 0) {
                if (check === 0) {
                    let CartStorageN = ([...CartStorage, {
                        prodid: prodid,
                        imagename: imagename,
                        name: name, 
                        shortdesc: shortdesc,
                        desc: desc,
                        price: parseFloat(price),
                        quantity: q,                                                                               
                        prodtotal: q*price                             
                    }]);
                    console.log(CartStorageN);
                    localStorage.setItem('pscart', JSON.stringify(CartStorageN));

                    const cartarray = [];
    
                    const sum = Object.values(CartStorageN)
                      .map(obj => { cartarray.push(obj.prodtotal); return obj.prodtotal
                    })
                      .reduce((sum, el) => {console.log(sum+el); return sum+el; }, 0);
                
                    setTotal({total: sum});
                } else {
                    let CartStorageN = [...CartStorage];
                    CartStorageN[idToChange].quantity = CartStorageN[idToChange].quantity+q;
                    CartStorageN[idToChange].prodtotal = CartStorageN[idToChange].price*CartStorageN[idToChange].quantity;
                    localStorage.setItem('pscart', JSON.stringify(CartStorageN))
                    const cartarray = [];
    
                    const sum = Object.values(CartStorageN)
                      .map(obj => { cartarray.push(obj.prodtotal); return obj.prodtotal
                    })
                      .reduce((sum, el) => {console.log(sum+el); return sum+el; }, 0);
                
                    setTotal({total: sum});
                }

                setCounter({
                    quantity: 0
                })

            }
        }
    }

    return(
        <div className="ArtDetails">
            <div className="ArtDContainer">
                <div className="ArtImgContainer" style={ProdImgStyle}>
                    <p>Nr artykułu: {ProdId}</p>
                </div>
                <div className="ArtDCard">
                    <div className="ArtDMain">
                        <h4 className="ArtDTitle">{Name}</h4>
                        <p className="ArtDShortDesc">{ShortDesc}</p>
                    </div>
                    <div className="ArtDDesc">
                        <p>{Desc}</p>
                    </div>
                    <div className="ArtDPrice">
                        <div>
                            Cena netto:
                            <p className="NetPrice">{NetPrice}</p>
                        </div>
                        <div className="GrossPriceContainer">
                            Cena brutto: 
                            <p className="GrossPrice">{Price}</p>
                        </div>
                        <div className="ArtDOrderPanel">
                            <button className="ArtDqBtn" onClick={increaseQuantity}>+</button>
                            <input className="ArtDqInput" type="text" value={counter.quantity} onChange={handleQuantity}/>
                            <button className="ArtDqBtn" onClick={decreaseQuantity}>-</button>
                        </div>
                    </div>
                    <div className="ArtDOrderBar">

                    </div>
                </div>
                <button 
                    className="ArtDOrderBtn" 
                    onClick={addProd.bind(this, ProdId, Name, Desc, ShortDesc, counter.quantity, Price, ImageName)}><img className="carticonBtn" src={carticon} alt="cart"/>DO KOSZYKA</button>
            </div>
        </div>
    )
}

export default Artdetails;