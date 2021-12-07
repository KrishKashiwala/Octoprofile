import React from "react"
import InfoBox from "./InfoBox"

const InfoContainer: React.FC<{ user: string | undefined, API_URL: string, API_CLIENT_ID: string, API_CLIENT_SECRET: string }> = ({ API_URL, API_CLIENT_ID, API_CLIENT_SECRET, user }) => {
	const [data, setData] = React.useState() as any
	const temp = async () => {
		let data = await fetch(`${API_URL}/${user}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`).then(res => res.json()).catch(e => console.log(e))
		setData(data)
		console.log(data)
	}
	React.useEffect(() => {
		temp()
		// eslint-disable-next-line
	}, [])
	var dated = new Date(data?.created_at).toDateString()
	console.log(data)
	return (
		<div className="info-container">
			<img src={data?.avatar_url} alt="" />
			<div className="name">
				<span>{data?.login}</span>
				<a href={data?.html_url} target="_blank" rel="noreferrer" >@{data?.login}</a>
			</div>
			<div className="bio">{data?.bio}</div>
			<div className="location-join">
				<div className="same-lojo">
					<svg aria-hidden="true" height="16" role="img" viewBox="0 0 12 16" width="12" ><path fillRule="evenodd" d="M5 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
					<span>{data?.location}</span>
				</div>
				<div className="same-lojo add">
					<svg aria-hidden="true" className="octicon" height="16" role="img" viewBox="0 0 14 16" width="14" ><path fillRule="evenodd" d="M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z"></path></svg>
					<span>Joined&nbsp;{dated}</span>


				</div>
			</div>
			<div className="pro-data">
				<InfoBox val={data?.public_repos} label="repositories" />
				<InfoBox val={data?.followers} label="followers" />
				<InfoBox val={data?.following} label="following" />
			</div>
		</div>
	)
}
export default InfoContainer