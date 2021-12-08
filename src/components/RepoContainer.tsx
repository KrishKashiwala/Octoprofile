import React from "react"
import Repo from "./Repo"

const RepoContainer: React.FC<{ user: string | undefined, API_URL: string, API_CLIENT_ID: string, API_CLIENT_SECRET: string }> = ({ API_URL, API_CLIENT_ID, API_CLIENT_SECRET, user }) => {
	const [customDrop, setCustomDrop] = React.useState(false)
	const [data, setData] = React.useState() as any
	const temp = async () => {
		let data = await fetch(`${API_URL}/${user}/repos?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`).then(res => res.json()).catch(e => console.log(e))
		setData(data)
		console.log(data)
	}

	React.useEffect(() => {
		temp()
		// eslint-disable-next-line
	}, [])
	console.log(data)
	return (

		<div className="repo-container">
			<div className="sub-repo-container">
				<h2>Top Repos</h2>
				<span>by</span>
				<div className="dropdown">
					<button className="button_dropdown" onClick={() => setCustomDrop(!customDrop)}>
						<label>Stars</label>
						<svg aria-hidden="true" height="16" role="img" viewBox="0 0 12 16" width="12" ><path fill-rule="evenodd" d="M0 5l6 6 6-6H0z"></path></svg>
					</button>
					{
						customDrop && <ul>

							<li key="Stars">Stars</li>
							<li key="repos">Repos</li>
							<li key="forks">Forks</li>
						</ul>
					}

				</div>
			</div>
			<div className="repo-content-container">
				{
					data?.slice(0, 8).map((item: any) => (
						<Repo
							repoData={data}
							name={item?.name}
							language={item?.language}
							url={item?.html_url}
							description={item?.description}
							fork_count={item?.forks_count}
							watchers_count={item?.watchers_count}
						/>
					))
				}
			</div>
		</div>
	)
}
export default RepoContainer;