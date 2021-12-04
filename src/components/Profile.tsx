import React from "react";
import { useLocation } from "react-router-dom";
const Profile = () => {
	const location: any = useLocation()
	console.log(location)
	let urls = `https://api.github.com/users?id=${location?.state?.user}`
	let temp = async () => {
		let data = await fetch(urls).then(res => res.json())
		console.log(data)
	}
	temp()
	return (
		<div>
			<h1>Hello world</h1>
		</div>
	)
}
export default Profile