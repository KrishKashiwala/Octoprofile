import React, { SetStateAction, useEffect, useState } from "react"
import FlipMove from "react-flip-move";
import Repo from "./Repo"

const RepoContainer: React.FC<{ user: string | undefined, API_URL: string, API_CLIENT_ID: string, API_CLIENT_SECRET: string }> = ({ API_URL, API_CLIENT_ID, API_CLIENT_SECRET, user }) => {
	const [customDrop, setCustomDrop] = React.useState(false)
	const [sortType, setSortType] = useState('stars');
	const [repoData, setRepoData] = useState<any>(null);
	const getRepoData = async () => {
		let data = await fetch(`${API_URL}/${user}/repos?client_id=${API_CLIENT_ID}&client_secret=${API_URL}`).then(res => res.json()).catch(e => console.log(e))
		if (sortType === 'stars') {
			let val = data.sort((a: any, b: any) => b.watchers_count - a.watchers_count)
			val = val.slice(0, 8)
			setRepoData(val)
		}
		else if (sortType === 'forks') {
			let val = data.sort((a: any, b: any) => b.forks_count - a.forks_count)
			val = val.slice(0, 8)
			setRepoData(val)
		}
		else {
			let val = data.sort((a: { size: number }, b: { size: number }) => b.size - a.size)
			val = val.slice(0, 8)
			setRepoData(val)
		}


	};
	console.log(repoData)
	const changeRepoSort = (sortType: SetStateAction<string>) => {
		setSortType(sortType);
		setCustomDrop(false)
	};
	console.log(repoData)
	const sortTypes = ['stars', 'forks', 'size'];
	useEffect(() => {
		getRepoData()
		//eslint-disable-next-line
	}, [sortType])
	return (

		<div className="repo-container">
			<div className="sub-repo-container">
				<h2>Top Repos</h2>
				<span>by</span>
				<div className="dropdown">
					<button className="button_dropdown" onClick={() => setCustomDrop(!customDrop)}>
						<label>{sortType}</label>
						<svg aria-hidden="true" height="16" role="img" viewBox="0 0 12 16" width="12" ><path fill-rule="evenodd" d="M0 5l6 6 6-6H0z"></path></svg>
					</button>
					{
						customDrop && <ul>
							{sortTypes.map((type, item) => (
								<li onClick={() => changeRepoSort(type)} key={item}>{type}</li>
							))}
						</ul>
					}

				</div>
			</div>
			<div className="repo-content-container">

				{repoData?.length > 0 ?
					repoData?.map((item: any) => (
						<FlipMove typeName="ul" className="flip-wrapper">
							<li key={item?.name}>
								< Repo
									name={item?.name}
									language={item?.language}
									url={item?.html_url}
									description={item?.description}
									fork_count={item?.forks_count}
									watchers_count={item?.watchers_count}
									size={item?.size}
								/>
							</li>
						</FlipMove>
					))
					: (
						<p>No available repositories!</p>
					)
				}

			</div>
		</div>
	)
}
export default RepoContainer;

