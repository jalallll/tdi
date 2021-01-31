import React from 'react';
import { Button } from './Button';
import './Top.css';
import '../App.css';

function Top() {
	return (
		<div className='top-container'>
			<video src='/videos/video-2.mp4' autoPlay loop muted />
			<h1>Building Global Empires</h1>
			<p>Let us guide your investment journey</p>
			<div className='about-btns'>
				<Button ckassName='btns' buttonStyle='btn--outline'>
					Join us
				</Button>
			</div>
			<p1></p1>
		</div>
	);
}

export default Top;
