import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Footer from '../components/Footer';
import {
	homeObjOne,
	homeObjThree,
	homeObjTwo,
} from '../components/InfoSection/Data';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<InfoSection {...homeObjOne} />
			<Services />
			<InfoSection {...homeObjTwo} />
			<InfoSection {...homeObjThree} />
			<Footer />
		</>
	);
};

export default Home;