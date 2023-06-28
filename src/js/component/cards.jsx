import React from "react";

const Cards = (props) => {
return (
<>
<div  id="secondaryCards" className="d-flex" style={{marginTop: "20px", alignContent: "center"}}>
            <div className="card-container" style={{margin: "20px"}}>
                <div className="card" style={{width: "18rem"}}>
                    <img src={props.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.tittle}</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            {/* <div className="card-container" style="margin: 20px;">
                <div className="card" style="width: 18rem;">
                    <img src="http://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div> */}
            {/* <div className="card-container" style="margin: 20px;">
                <div className="card" style="width: 18rem;">
                    <img src="http://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div> */}
            {/* <div className="card-container" style="margin: 20px;">
                <div className="card" style="width: 18rem;">
                    <img src="http://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div> */}
        </div>
</>

);

};

export default Cards;