import React, { useState } from "react";
import "./Cait2024.module.scss";
import { Box, Grid } from "@mui/material";
import { SHA256 } from "./hash";

const ACCEPTABLE_ANSWERS = [
	"b1505d081959c706f3ccc958630ccec548a72f6e7f5cfbdc96fe72dfd5aca4ff",
	"4ff236948d513bdcaab100eeb417bf7d4940061ca152d674e2cac706065bc6c9",
	"02613a5c01a93ae6f856528e30d499f352ccf28d328b866d991176c481c70845",
	"978c0a05f64ffb711fa09753e180eb08e466cf31032c4cd1000dbe63e469d639",
	"585fa60a04476fc42c406906889b323c6a9f641695883d7c0935419a4056106b"
];

const PLANSIES = `
	<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12615.06077847134!2d-122.46062593989464!3d37.7721035112742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x808f7f8d6ae661eb%3A0x21042aa03ee23805!2sWela%20Thai%20Massage%20and%20Spa%2C%202343%20Market%20St%2C%20San%20Francisco%2C%20CA%2094114!3m2!1d37.7633353!2d-122.4339375!4m5!1s0x8085873e62cc3349%3A0xd4b84b587d36b120!2sKhaosoi%20Thai%20Cuisine%2C%20Geary%20Boulevard%2C%20San%20Francisco%2C%20CA!3m2!1d37.7807404!2d-122.46664179999999!5e0!3m2!1sen!2sus!4v1713140190627!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
`;

const Cait2024 = () => {
	const [foundDaAnswer, setFoundDaAnswer] = useState(false);
	const handleSubmit = (e) => {
			e.preventDefault();
			const form = e.target;
			const formData = new FormData(form);
			const formJson = Object.fromEntries(formData.entries());
			const answer = formJson['answer'];
			const answer_cleaned = answer.toLowerCase().replace(/\s/g, '');
			const hashed = SHA256(answer_cleaned.toLowerCase());
			for (const aa of ACCEPTABLE_ANSWERS) {
				if (hashed == aa) {
					setFoundDaAnswer(true);
				}
			}
	};

	if (foundDaAnswer) {
		return (
			<Grid container item style={{ padding: "8%" }} spacing={2}>
				<Grid item xs={12}>
					<p>Cait,</p>
				</Grid>
				<Grid item xs={12}>
					<p>Web development really sucks, but you definitely don't - happy happy birthday, and I love you so much! This year is already my favorite year yet, and it's only getting started. Looking forward to a fun evening with you ❤️</p>
				</Grid>
				<Grid item xs={12}>
					<p>- F</p>
				</Grid>
				<Grid item xs={12} display={"flex"}
				flexDirection={{ xs: "column", md: "row" }}
				alignItems={"center"}
				justifyContent={"center"}>
					<div dangerouslySetInnerHTML={{__html: PLANSIES}} style={{ margin: "10px", outline: "1px solid darkgray" }}></div>
				</Grid>
			</Grid>
		);
	}

	return (
		<Box>
			<Grid container item justifyContent={"center"} spacing={2}>
				<Grid item xs={2}>
					<img
					src="https://www.ties.com/assets/img/how-to-tie-a-tie/thumbs/four-in-hand-knot.jpg"
					style={{ maxWidth: "100%" }}
					/>
				</Grid>
				<Grid item xs={2}>
					<img
					src="https://img.uline.com/is/image/uline/S-566Y?$Mobile_SI$"
					style={{ maxWidth: "100%" }}
					/>
				</Grid>
				<Grid item xs={2}>
					<img
					src="https://sarahmaker.com/wp-content/uploads/2022/03/keep-tie-dye-from-fading-819x1024.jpg"
					style={{ maxWidth: "100%" }}
					/>
				</Grid>
				<Grid item xs={2}>
					<img
					src="https://miro.medium.com/v2/resize:fit:2988/1*2setn808TbYPX7C1oPhvWg.png"
					style={{ maxWidth: "100%" }}
					/>
				</Grid>
				<Grid item xs={2}>
					<img
					src="https://cdn.britannica.com/47/18447-050-2C5E2037/Tai-Chi-chuan-practitioner.jpg"
					style={{ maxWidth: "100%" }}
					/>
				</Grid>
			</Grid>
			<Grid container item justifyContent={"center"} spacing={2}>
				<Grid item xs={12} style={{ margin: '10px', backgroundColor: '#2f4ad0' }}></Grid>
				<Grid item xs={2}>
					<img
					src="https://www.health.com/thmb/K_Vtfnh3Yu-Ceya3aETxfH72k9Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1175433234-034014dc5b9c45edaeaf04c7b80ceafc.jpg"
					style={{ maxWidth: "100%" }}
					/>
				</Grid>
				<Grid item xs={2}>
					<img
					src="https://www.spectator.co.uk/wp-content/uploads/2021/03/Ampersand-Alamy.jpg?w=730"
					style={{ maxWidth: "100%" }}
					/>
				</Grid>
				<Grid item xs={2}>
					<img
					src="https://thedinnerdaily.com/wp-content/uploads/2015/09/homepagedinner-scaled.jpg"
					style={{ maxWidth: "100%" }}
					/>
				</Grid>
			</Grid>
			<Box
				component={"main"}
				display={"flex"}
				flexDirection={{ xs: "column", md: "row" }}
				alignItems={"center"}
				justifyContent={"center"}
				style={{ padding: '10px' }}
			>
				<form
					onSubmit={handleSubmit}
					target='_blank'
				>
					<div>
						<input type='text' placeholder='What is goin on' name='answer' required />
					</div>
					<div>
						<button type='submit'> guess </button>
					</div>
				</form>
			</Box>
		</Box>
		
	);
};

export default Cait2024;
