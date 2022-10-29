import { Button } from '@mui/material';
import './About.css';
import { useContext } from 'react';
import { colorContext } from './../../App';

import resume from './../../assets/VaibhavB.pdf';
import mine1 from './../../assets/mine1.jpg';

function About() {
	const { secondary } = useContext(colorContext);
	const textColor = { color: secondary };
	return (
		<div className="about-for-svg " id="about">
			<div className="container-sm about-wrapper">
				{/* This will hold about myself */}
				<div className="about-me" style={textColor}>
					<div className="about-content">
						<h3 className="myname">I'm Vaibhav V Burde</h3>
						<h4>A Full Stack Developer</h4>
						<p>
							&emsp; &emsp; Software Engineer dedicated to improving skills through hands-on
							learning and development work. <br />
							&emsp; &emsp; Proficient in mobile and desktop development environments. Adept at
							using HTML5, JavaScript and other programming languages to produce clean code.
							Well-organized and collaborative with strong communication and analytical abilities.{' '}
							<br />
							&emsp; &emsp; Having worked as a Digital Associate role, where i worked on define set of instructions 
							to collect ground truth data for the product development.
						</p>
					</div>

					{/* Buttons to resume an contact me */}
					<div className="about-btns">
						<Button className="resume-btn" variant="outlined" color="primary">
							<a href={resume} target="_blank" rel="noreferrer">
								Resume
							</a>
						</Button>
						<Button variant="contained" color="primary" href="#contact">
							Hire me
						</Button>
					</div>
				</div>

				{/* Profile picture */}
				<div className="my-profile">
					<img src={mine1} alt="broken" aria-label="my picture" />
				</div>
			</div>
		</div>
	);
}
export default About;