import React from 'react';
import logo from '../images/accredianlogo.png'

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-gray-300 py-8">
			<div className="container mx-auto px-6 md:px-12">
				<div className='flex justify-between'>
					<img src={logo} alt="" className='h-10' />
					<div className='flex flex-col items-center justify-center pb-2'>
						<button className="bg-blue-600 text-white py-2 px-6 mt-6 rounded-lg hover:bg-blue-700 w-fit">Schedule 1-on-1 Call Now</button>
						<p>Speak with our Learning Advisor</p>
					</div>
				</div>
				<div className='w-full h-[2px] bg-gray-50 mb-2'></div>
				<div className="flex flex-col md:flex-row justify-between">

					<div className="flex flex-col md:flex-row md:justify-center md:mx-auto space-y-6 md:space-y-0 md:space-x-8">
						<div>
							<h3 className="text-white text-lg font-semibold mb-4">Programs</h3>
							<ul className="space-y-2">
								{['Data Science & AI', 'Product Management', 'Business Analytics', 'Digital Transformation', 'Business Management', 'Project Management', 'Strategy & Leadership', 'Senior Management', 'Fintech'].map((program) => (
									<li key={program} className="flex justify-between text-sm">
										{program} <span>+</span>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
							<ul className="space-y-2 text-sm">
								<li>Email us for Data Science Queries: admissions@accredian.com</li>
								<li>Email us for Product Management Queries: pmg@accredian.com</li>
								<li>Data Science Admission Helpline: +91 7991201232 (9 AM - 7 PM)</li>
								<li>Product Management Admission Helpline: +91 9267810054</li>
								<li>General Student Helpline: +91 7972920277</li>
								<li>Office Address: 4th Floor, 230, Phase V, Udyog Vihar, Sector 19, Gurugram, Haryana 122015</li>
							</ul>
							<h3 className="text-white text-lg font-semibold mt-4">Why Accredian</h3>
							<ul className="space-y-2">
								<li>Follow Us</li>
								<li className="flex space-x-4">
									{['facebook', 'linkedin', 'twitter', 'instagram', 'youtube'].map((icon) => (
										<a key={icon} href={`#${icon}`} className="text-gray-300 hover:text-white">
											<i className={`fab fa-${icon}`}></i>
										</a>
									))}
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-white text-lg font-semibold mb-4">Accredian</h3>
							<ul className="space-y-2 text-sm">
								<li>About</li>
								<li>Career</li>
								<li>Blog</li>
								<li>Admissions Policy</li>
								<li>Referral Policy</li>
								<li>Privacy Policy</li>
								<li>Terms of Service</li>
								<li>Master FAQs</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex justify-between items-center mt-8">
					<div className="text-sm text-center mx-auto">&copy; 2024 Accredian. A Brand of Fullstack Education Pvt Ltd. All Rights Reserved</div>
					
				</div>
			</div>
		</footer>
	);
}
