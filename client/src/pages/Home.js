// import fonts
import '../styles/Fonts.css'
import '../fonts/akaDora.ttf'
// import '../fonts/BackToBlack.ttf'
import '../fonts/Creattion.otf'
// import '../fonts/Gaby.ttf'
// import '../fonts/Handycheera.otf'

import '../styles/Home.css';

function Body() {
	return (
		<>
			<div className="bg">
				<div className="box">
					<h2 className="centered-text-1">Welcome to</h2>
					<h1 className="centered-text-2">Zoom's Fine Dine</h1>
					<a className="centered-button btn btn-primary btn-lg" aria-current="page" href="/menu">
						Go to Menu
					</a>
				</div>
			</div>
		</>
	);

}

function Home() {
	return (
		<>
			{/* <Layout> */}
			<Body />
			{/* </Layout> */}
		</>
	);
}

export default Home;
