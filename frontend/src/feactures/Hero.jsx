import React from 'react';
import HeroButton from './HeroButton';

const Hero = () => {
	return (
		<div id="hero" className="Hero" style={{ backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)' }}>
			<div className='content'>
				<img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="" />
				<h2>Season 2 now available</h2>
				<p>Lorem ipsum dolor sit amet...</p>
				<div className='button-wrapper'>
					<HeroButton primary={true} text="Watch now"/>
					<HeroButton primary={false} text="+ My list"/>
				</div>
			</div>
			<div className='overlay'></div>
		</div>	
	)
}

export default Hero;