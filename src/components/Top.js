import React from 'react';
import { Button } from './Button';
import './Top.css';
import '../App.css';
import Typical from 'react-typical';
function Top() {
	return (
		<div className='top-container'>
			<video src='/videos/video-2.mp4' autoPlay loop muted />
			<h1>
				<Typical
					loop={1}
					wrapper='p'
					steps={['Building Global Empires', 1000]}
				/>
			</h1>
			<p>
				<Typical
					loop={1}
					wrapper='p'
					steps={[
						'Let us guide your investment journey',
						1000,
						'What are you waiting for?',
						1000,
						'Come join us!',
						1000,
					]}
				/>
			</p>
			<div className='about-btns'>
				<Button ckassName='btns' buttonStyle='btn--outline' onClick='/about'>
					Get Started
				</Button>
			</div>
			<p1></p1>
		</div>
	);
}

export default Top;
