// @ts-nocheck
import { useEffect, useState } from "react";
import buildChart from "../utils/buildChart";
import { backgroundColor, borderColor, langColors } from "../utils/colors";


const Card = ({ langData, repoData }: any) => {
	const [langChartData, setLangChartData] = useState(null);
	//langchart
	const initLangChart = () => {
		const ctx = document.getElementById('langChart');
		const labels = langData.map((lang: { label: any; }) => lang.label);
		const data = langData.map((lang: { value: any; }) => lang.value);
		setLangChartData(data);

		if (data.length > 0) {
			const backgroundColor = langData.map(
				({ color }: any) => `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}B3`,
			);
			const borderColor = langData.map((lang: { color: any; }) => `${lang.color}`);
			const chartType = 'pie';
			const axes = false;
			const legend = true;
			const config = { ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend };
			buildChart(config);
		}
	}


	// Create Most Starred chart
	//eslint-disable-next-line
	const [starChartData, setStarChartData] = useState(null);
	const initStarChart = () => {
		const ctx = document.getElementById('starChart');
		const LIMIT = 5;
		const sortProperty = 'stargazers_count';
		const mostStarredRepos = repoData
			.filter(repo => !repo.fork)
			.sort((a, b) => b[sortProperty] - a[sortProperty])
			.slice(0, LIMIT);
		const labels = mostStarredRepos.map(repo => repo.name);
		const data = mostStarredRepos.map(repo => repo[sortProperty]);

		setStarChartData(data);

		if (data.length > 0) {
			const chartType = 'bar';
			const axes = true;
			const legend = false;
			const config = { ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend };
			buildChart(config);
		}
	};

	// Create Stars per language chart
	//eslint-disable-next-line
	const [thirdChartData, setThirdChartData] = useState(null);
	const initThirdChart = () => {
		const ctx = document.getElementById('thirdChart');
		const filteredRepos = repoData.filter((repo: { fork: any; stargazers_count: number; }) => !repo.fork && repo.stargazers_count > 0);
		const uniqueLangs = new Set(filteredRepos.map((repo: { language: any; }) => repo.language));
		const labels = Array.from(uniqueLangs.values()).filter(l => l);
		const data = labels.map(lang => {
			const repos = filteredRepos.filter((repo: { language: unknown; }) => repo.language === lang);
			const starsArr = repos.map((r: { stargazers_count: any; }) => r.stargazers_count);
			const starSum = starsArr.reduce((a: any, b: any) => a + b, 0);
			return starSum;
		});

		// @ts-ignore
		setThirdChartData(data);

		if (data.length > 0) {
			const chartType = 'doughnut';
			const axes = false;
			const legend = true;
			// @ts-ignore
			const borderColor = labels.map(label => langColors[label]);
			const backgroundColor = borderColor.map(color => `${color}B3`);
			const config = { ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend };
			buildChart(config);
		}
	};

	useEffect(() => {
		if (langData.length && repoData.length) {
			initLangChart()
			initStarChart()
			initThirdChart()
		}

		// eslint-disable-next-line
	}, [])
	const chartSize = 300;
	const langChartError = !(langChartData && langChartData.length > 0);
	//eslint-disable-next-line
	const starChartError = !(starChartData && starChartData.length > 0);
	//eslint-disable-next-line
	const thirdChartError = !(thirdChartData && thirdChartData.length > 0);
	return (
		<div className="main-card">
			<div className="card">
				<header>Top Languages</header>
				{langChartError && <p>Nothing to see here!</p>}
				<canvas id="langChart" width={chartSize} height={chartSize} />
			</div>
			<div className="card">
				<header>Most Starred</header>
				{starChartError && <p>Nothing to see here!</p>}
				<canvas id="starChart" width={chartSize} height={chartSize} />
			</div>
			<div className="card">
				<header>Stars per Language</header>
				{thirdChartError && <p>Nothing to see here!</p>}
				<canvas id="thirdChart" width={chartSize} height={chartSize} />
			</div>
		</div>
	)
}
export default Card