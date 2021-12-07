const Card = ({ title }: any) => {
	return (
		<div className="card">
			<header>{title}</header>
			<canvas id="langChart" width="392" height="392" className="chartjs-render-monitor"></canvas>
		</div>
	)
}
export default Card