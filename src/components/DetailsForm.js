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
		refertoemail: ''
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

	const relations = [
		{ value: 'friend', label: 'Friend' },
		{ value: 'family', label: 'Family' },
		{ value: 'colleague', label: 'Colleague' },
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

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!validateReferrerInput()) {
			console.log("Please Enter the Details in correct form")
			return;
		}

		try {
			const response = await fetch(process.env.API_URI + '/refer',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(referrerData),
				}
			)
			console.log(process.env.API_URI + '/refer')
			const apiresponse = await response.json();
			if(apiresponse){
				console.log("Refer email send")
				toast.success("Refer email send")
			}else{
				console.log("Error in sending referal")
			}

		} catch (error) {
			console.log(error)
		}
		handleClose();
		toast.success('Referal Details submitted')
	};

	return (
		<React.Fragment>
			<button onClick={handleClickOpen} className="bg-blue-600 text-white py-2 px-6 mt-6 rounded-lg hover:bg-blue-700 w-fit">
				Refer Now
			</button>
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

					<TextField
						required
						margin="dense"
						id="refertoemail"
						name="refertoemail"
						label="Refer To (Email)"
						type="email"
						fullWidth
						variant="standard"
						value={referrerData.refertoemail}
						onChange={handleReferrerChange}
					/>

				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button type="submit">Submit Details</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
