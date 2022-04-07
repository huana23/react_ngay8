import React, { Component } from 'react'

export default class BTGlasses extends Component {


    glassesArray = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        imgGlasses:' ',
        img: './img/model.jpg'

    }
    renderGlasses = (img) => {
        //b3: xác định hàm sẽ gọi setState
        let newState = {
            imgGlasses:`./img/${img}.png`,
            // img: `./img/model.jpg`
        }

        this.setState(newState);
    }

  render() {
    return (
        <div className="glasses container text-center">
                <div className="row py-5">
                    <div className="col-7">
                        <img className='img-fluid img-fluid-top' src={this.state.imgGlasses} alt="" />
                        <img className='img-fluid img-fluid-botom' src={this.state.img} alt="" />
                    </div>
                    <div className="col-5">
                        <ul className="list-group">
                            <li onClick={() => { 
                                this.renderGlasses('v1');
                             }} className="list-group-item">
                                <div className="row">
                                    <div className="col-3">
                                        <img className='img-fluid1' src={'./img/g1.jpg'} alt="" />
                                    </div>
                                </div>
                            </li>

                            <li onClick={() => { 
                                this.renderGlasses('v2');
                             }} className="list-group-item">
                                <div className="row">
                                    <div className="col-3">
                                        <img className='img-fluid1' src={'./img/g2.jpg'} alt="" />
                                    </div>
                                </div>
                            </li>

                            <li onClick={() => { 
                                this.renderGlasses('v3');
                             }} className="list-group-item">
                                <div className="row">
                                    <div className="col-3">
                                        <img className='img-fluid1' src={'./img/g3.jpg'} alt="" />
                                    </div>
                                </div>
                            </li>

                            <li onClick={() => { 
                                this.renderGlasses('v4');
                             }} className="list-group-item">
                                <div className="row">
                                    <div className="col-3">
                                        <img className='img-fluid1' src={'./img/g4.jpg'} alt="" />
                                    </div>
                                </div>
                            </li>

                            <li onClick={() => { 
                                this.renderGlasses('v5');
                             }} className="list-group-item">
                                <div className="row">
                                    <div className="col-3">
                                        <img className='img-fluid1' src={'./img/g5.jpg'} alt="" />
                                    </div>
                                </div>
                            </li>

                            <li onClick={() => { 
                                this.renderGlasses('v6');
                             }} className="list-group-item">
                                <div className="row">
                                    <div className="col-3">
                                        <img className='img-fluid1' src={'./img/g6.jpg'} alt="" />
                                    </div>
                                </div>
                            </li>

                            <li onClick={() => { 
                                this.renderGlasses('v7');
                             }} className="list-group-item">
                                <div className="row">
                                    <div className="col-3">
                                        <img className='img-fluid1' src={'./img/g7.jpg'} alt="" />
                                    </div>
                                </div>
                            </li>

                            <li onClick={() => { 
                                this.renderGlasses('v8');
                             }} className="list-group-item">
                                <div className="row">
                                    <div className="col-3">
                                        <img className='img-fluid1' src={'./img/g8.jpg'} alt="" />
                                    </div>
                                </div>
                            </li>

                            <li onClick={() => { 
                                this.renderGlasses('v9');
                             }} className="list-group-item">
                                <div className="row">
                                    <div className="col-3">
                                        <img className='img-fluid1' src={'./img/g9.jpg'} alt="" />
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
    )
  }
}
