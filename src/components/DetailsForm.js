import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-toastify'


export default function DetailsFormDialog() {
	const [open, setOpen] = React.useState(false);
	const [referrerData, setReferrerData] = React.useState({
		referrerName: '',
		referrerEmail: '',
		referrerPhoneNo: '',
		referrerRelation: 'friend',
	});
	const [refereeData, setRefereeData] = React.useState({
		refereeName: '',
		refereeEmail: '',
		refereePhoneNo: '',
		referralCode: '',
		refereeCourse: 'fullstackdevelopment',
	});

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleReferrerChange = (e) => {
		const { name, value } = e.target;
		setReferrerData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleRefereeChange = (e) => {
		const { name, value } = e.target;
		setRefereeData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const relations = [
		{ value: 'friend', label: 'Friend' },
		{ value: 'family', label: 'Family' },
		{ value: 'colleague', label: 'Colleague' },
	];

	const courses = [
		{ value: 'frontenddevelopment', label: 'Frontend Development' },
		{ value: 'backenddevelopment', label: 'Backend Development' },
		{ value: 'fullstackdevelopment', label: 'Fullstack Development' },
	];

	//Validation
	function validateReferrerInput() {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (referrerData.referrerName === '' || referrerData.referrerEmail === '' || referrerData.referrerPhoneNo === '') {
			toast.error('Any field is Empty Referrer Details')
			return false;
		} else {
			if (!emailRegex.test(referrerData.referrerEmail)) {
				toast.error(`Referrer Email is invaild`)
				return false;
			}
			else if (referrerData.referrerPhoneNo.length < 10 || referrerData.referrerPhoneNo.length > 10) {
				toast.error(`Referrer Phone number must be of 10 digits`)
				return false;
			}
		}
		return true;
	}

	function validateRefereeInput() {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (refereeData.refereeName === '' || refereeData.refereeEmail === '' || refereeData.refereePhoneNo === '') {
			toast.error('Any field is Empty of Referee Details')
			return false;
		} else {
			if (!emailRegex.test(refereeData.refereeEmail)) {
				toast.error(`Referee Email is invaild`)
				return false;
			} else if (refereeData.refereePhoneNo.length < 10 || refereeData.refereePhoneNo.length > 10) {
				toast.error(`Referee Phone number must be of 10 digits`)
				return false;
			}
		}
		return true;
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!validateReferrerInput() || !validateRefereeInput()) {
			console.log("Please Enter the Details in correct form")
			return;
		}
		console.log('Referrer Data:', referrerData);
		console.log('Referee Data:', refereeData);
		handleClose();
		toast.success('Referal Details submitted')
	};

	return (
		<React.Fragment>
			<Button
				onClick={handleClickOpen}
				sx={{
					backgroundColor: '#1E3A8A',
					color: '#FFFFFF',
					paddingY: '0.5rem',
					paddingX: '1.5rem',
					marginTop: '1.5rem',
					borderRadius: '0.375rem',
					'&:hover': {
						backgroundColor: '#1D4ED8',
					},
				}}
			>
				Refer Now
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				PaperProps={{
					component: 'form',
					onSubmit: handleSubmit,
				}}
			>
				<DialogTitle>Enter the Details of Referrer and Referee</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<div className='text-blue-600 font-medium'>Enter the details of the referrer</div>
					</DialogContentText>
					<TextField
						autoFocus
						required
						margin="dense"
						id="referrerName"
						name="referrerName"
						label="Full Name"
						type="text"
						fullWidth
						variant="standard"
						value={referrerData.referrerName}
						onChange={handleReferrerChange}
					/>
					<TextField
						required
						margin="dense"
						id="referrerEmail"
						name="referrerEmail"
						label="Email Address"
						type="email"
						fullWidth
						variant="standard"
						value={referrerData.referrerEmail}
						onChange={handleReferrerChange}
					/>
					<TextField
						required
						margin="dense"
						id="referrerPhoneNo"
						name="referrerPhoneNo"
						label="Phone Number"
						type="text"
						fullWidth
						variant="standard"
						value={referrerData.referrerPhoneNo}
						onChange={handleReferrerChange}
					/>
					<TextField
						id="referrerRelation"
						name="referrerRelation"
						select
						label="Relation with Referee"
						value={referrerData.referrerRelation}
						onChange={handleReferrerChange}
						helperText="Please select relation"
						variant="standard"
						fullWidth
					>
						{relations.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>

					<DialogContentText>
						<div className='text-blue-600 mt-10 font-medium'>Enter the details of the referee</div>
					</DialogContentText>
					<TextField
						required
						margin="dense"
						id="refereeName"
						name="refereeName"
						label="Full Name"
						type="text"
						fullWidth
						variant="standard"
						value={refereeData.refereeName}
						onChange={handleRefereeChange}
					/>
					<TextField
						required
						margin="dense"
						id="refereeEmail"
						name="refereeEmail"
						label="Email Address"
						type="email"
						fullWidth
						variant="standard"
						value={refereeData.refereeEmail}
						onChange={handleRefereeChange}
					/>
					<TextField
						required
						margin="dense"
						id="refereePhoneNo"
						name="refereePhoneNo"
						label="Phone Number"
						type="text"
						fullWidth
						variant="standard"
						value={refereeData.refereePhoneNo}
						onChange={handleRefereeChange}
					/>
					<TextField
						required
						margin="dense"
						id="referralCode"
						name="referralCode"
						label="Referral Code"
						type="text"
						fullWidth
						variant="standard"
						value={refereeData.referralCode}
						onChange={handleRefereeChange}
					/>
					<TextField
						id="refereeCourse"
						name="refereeCourse"
						select
						label="Desired Course"
						value={refereeData.refereeCourse}
						onChange={handleRefereeChange}
						helperText="Please select the Course"
						variant="standard"
						fullWidth
					>
						{courses.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button type="submit">Submit Details</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
