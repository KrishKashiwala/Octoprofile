import React from "react";
import { useLocation } from "react-router-dom";
import CardContainer from "./CardContainer";
import InfoContainer from "./InfoContainer";
import RepoContainer from "./RepoContainer";
require('dotenv').config()
const Profile = () => {
	const location: any = useLocation()
	//eslint-disable-next-line
	const [datas, setDatas] = React.useState() as any
	const API_CLIENT_ID = process.env.API_CLIENT_ID
	const API_CLIENT_SECRET = process.env.API_CLIENT_SECRET
	const token = process.env.token;
	const API_URL = 'https://api.github.com/users'
	document.title = `Github | ${location?.state.user}`
	const temp = async () => {
		let data = await fetch(`${API_URL}/${location?.state?.user}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`).then(res => res.json()).catch(e => console.log(e))
		setDatas(data)
	}

	React.useEffect(() => {

		temp()
		// eslint-disable-next-line
	}, [])
	return (
		<div className="profile-container">
			<InfoContainer user={location?.state?.user} token={token} API_URL={API_URL} API_CLIENT_ID={API_CLIENT_ID} API_CLIENT_SECRET={API_CLIENT_SECRET} />
			<CardContainer user={location?.state?.user} token={token} API_URL={API_URL} API_CLIENT_ID={API_CLIENT_ID} API_CLIENT_SECRET={API_CLIENT_SECRET} />
			<RepoContainer user={location?.state?.user} token={token} API_URL={API_URL} API_CLIENT_ID={API_CLIENT_ID} API_CLIENT_SECRET={API_CLIENT_SECRET} />
		</div>
	)
}
export default Profile