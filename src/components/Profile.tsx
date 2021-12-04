import React from "react";
import { useLocation } from "react-router-dom";
import RepoContainer from "./RepoContainer";
const Profile = () => {
	const location: any = useLocation()
	const [datas, setDatas] = React.useState() as any
	console.log(location)
	const API_CLIENT_ID = '5f749d7ba5fd5061d9dc'
	const API_CLIENT_SECRET = '401864132901e04abe89a508b2f75fec78a26690'
	const API_URL = 'https://api.github.com/users'
	const temp = async () => {
		let data = await fetch(`${API_URL}/${location?.state?.user}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`).then(res => res.json()).catch(e => console.log(e))
		setDatas(data)
		console.log(data)
	}

	React.useEffect(() => {
		temp()

		// eslint-disable-next-line
	}, [])
	console.log(datas)
	return (
		<div className="profile-container">
			<RepoContainer user={location?.state?.user} API_URL={API_URL} API_CLIENT_ID={API_CLIENT_ID} API_CLIENT_SECRET={API_CLIENT_SECRET} />
		</div>
	)
}
export default Profile