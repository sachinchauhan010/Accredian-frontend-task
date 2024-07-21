import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DetailsFormDialog from './DetailsForm';


function createData(programs, referrerbonus, refereebonus) {
	return { programs, referrerbonus, refereebonus };
}
function createProgramData(courses) {
	return { courses };
}

const rows = [
	createData('Professional Certificate Program in Product Management', 10000, 6000),
	createData('PG Certificate Program in Strategic Product Management', 8000, 5000),
	createData('Executive Program in Data Driven Product Management', 12000, 11000),
	createData('Executive Program in Product Management and Digital Transformation', 2000, 1000),
	createData('Executive Program in Product Management', 3000, 3000),
	createData('Advanced Certification in Product Management', 6000, 5400),
	createData('Executive Program in Product Management and Project Management', 6000, 5600),
];

const programs = [
	createProgramData('Product Management'),
	createProgramData('Strategy & Leadership'),
	createProgramData('Business Management'),
	createProgramData('Fintech'),
	createProgramData('Data Science'),
	createProgramData('Digital Transformation'),
	createProgramData('Business Analytics'),
]
export default function HeroSection2() {
	return (
		<div className='flex flex-col justify-center py-6 shadow-xl'>
			<p className='text-xl font-semibold text-center my-4'>What Are The <span className='text-blue-500'>Referral Benefits?</span></p>

			<div className='flex flex-row justify-center items-start space-x-4'>

				<div className='shadow-xl'>
					<TableContainer>
						<Table sx={{ width: 300 }} aria-label="simple table">
							<TableHead>
								<TableRow sx={{ backgroundColor: 'rgb(175, 206, 247)', fontWeight: '800' }}>
									<TableCell>ALL PROGRAMS</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{programs.map((row) => (
									<TableRow
										key={row.name}
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										<TableCell component="th" scope="row">
											<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
												{row.courses}
												<ChevronRightIcon />
											</div>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>


				<div className='shadow-xl'>
					<TableContainer component={Paper}>
						<Table aria-label="simple table">
							<TableHead>
								<TableRow sx={{ backgroundColor: 'rgb(175, 206, 247)', fontWeight: '800' }}>
									<TableCell>Programs</TableCell>
									<TableCell align="right">Referrer Bonus</TableCell>
									<TableCell align="right">Refree Bonus</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow
										key={row.name}
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										<TableCell component="th" scope="row">
											{row.programs}
										</TableCell>
										<TableCell align="right">{row.referrerbonus}</TableCell>
										<TableCell align="right">{row.refereebonus}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			</div>
			<div className='mx-auto'>
				<DetailsFormDialog />
			</div>
		</div>
	);
}
