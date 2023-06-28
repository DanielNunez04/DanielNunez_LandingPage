import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotrom from "./jumbotrom.jsx";
import Footer from "./footer.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Cards from "./cards.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container text-center">
			<Navbar/>
			<Jumbotrom/>
			<div className="row">
				<div className="col">
				  <Cards img={"https://picsum.photos/id/237/536/354"} tittle={"Perrito"}/>
				</div>
				<div className="col">
				  <Cards img={"https://miro.medium.com/v2/resize:fit:1400/1*TzaiFDmkiEkOxNU7eG43pw.jpeg"} tittle={"Avion"}/>
				</div>
				<div className="col">
				  <Cards img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ59LHxgN-1QX1X5enYwNdh963jJafqxQ2XdQ&usqp=CAU"} tittle={"Paraguas"}/>
				</div>

			</div>
			<Footer/>
		</div>
	);
};

export default Home;
