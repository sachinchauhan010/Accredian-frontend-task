import React from 'react'
import HeroImg from '../images/herosec1img.png'
import ContactImg from '../images/contact.png'
import ListImg from '../images/list.png'
import FolderImg from '../images/folder.png'
import DetailsFormDialog from './DetailsForm'

function HeroSection1() {
	return (
		<div className='my-6 p-4 shadow-xl bg-blue-50 flex flex-col justify-center relative h-[100vh]'>
			<p className='text-xl font-semibold text-center'>How Do I <span className='text-blue-500'>Refer</span></p>
			<img src={HeroImg} alt="" className='' />
			<div className='flex justify-center items-center space-x-48 absolute left-60'>
				<div className='w-40 flex flex-col items-center'>
					<img src={ContactImg} alt="" className='w-16 mb-3' />
					<p className='text-sm mt-3 text-center'>Submit referrals easily via our website&apos;s referral section.</p>
				</div>
				<div className='w-40 flex flex-col items-center'>
					<img src={ListImg} alt="" className='w-16 mb-3' />
					<p className='text-sm mt-3 text-center'>Earn rewards once your referral joins an Accredian program.</p>
				</div>
				<div className='w-40 flex flex-col items-center'>
					<img src={FolderImg} alt="" className='w-16 mb-3' />
					<p className='text-sm mt-3 text-center'>Both parties receive a bonus 30 days after program enrollment.</p>
				</div>
			</div>
			<div className='mx-auto'>
			<DetailsFormDialog />
			</div>
		</div>
	)
}

export default HeroSection1
