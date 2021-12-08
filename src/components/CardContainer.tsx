import Card from "./Card";
import GhPolyglot from 'gh-polyglot';
import { useEffect, useState } from "react";
const CardContainer: React.FC<{ user: string | undefined, API_URL: string, API_CLIENT_ID: string, API_CLIENT_SECRET: string }> = ({ API_URL, API_CLIENT_ID, API_CLIENT_SECRET, user }) => {
	const [userData, setUserData] = useState(null);
	//eslint-disable-next-line
	const [langData, setLangData] = useState(null);
	const [repoData, setRepoData] = useState(null);
	//eslint-disable-next-line
	const [error, setError] = useState({ active: false, type: 200 });
	//eslint-disable-next-line
	const [rateLimit, setRateLimit] = useState(null);
	const getLangData = () => {
		const me = new GhPolyglot(`${user}`);
		me.userStats((err: any, stats: any) => {
			if (err) {
				console.error('Error:', err);
				setError({ active: true, type: 400 });
			}
			setLangData(stats);
		});
	};
	const getRepoData = () => {
		fetch(`https://api.github.com/users/${user}/repos?per_page=100`)
			.then(response => {
				if (response.status === 404) {
					return setError({ active: true, type: 404 });
				}
				if (response.status === 403) {
					return setError({ active: true, type: 403 });
				}
				return response.json();
			})
			.then(json => setRepoData(json))
			.catch(error => {
				setError({ active: true, type: 200 });
				console.error('Error:', error);
			});
	};

	const getUserData = () => {
		fetch(`https://api.github.com/users/${user}`)
			.then(response => {
				if (response.status === 404) {
					return setError({ active: true, type: 404 });
				}
				if (response.status === 403) {
					return setError({ active: true, type: 403 });
				}
				return response.json();
			})
			.then(json => setUserData(json))
			.catch(error => {
				setError({ active: true, type: 400 });
				console.error('Error:', error);
			});
	};

	useEffect(() => {
		getUserData()
		getRepoData()
		getLangData()

		// eslint-disable-next-line
	}, [])
	console.log('user  : ', userData)
	console.log(`repo  :`, repoData)
	console.log(`lang  : `, langData)
	return (
		<div className="card-container">
			{langData && repoData && <Card langData={langData} repoData={repoData} />}
		</div>
	)
}
export default CardContainer;