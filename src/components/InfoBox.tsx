const InfoBox = ({ val, label }: any) => {
	return (
		<div className="info-box">
			<span>{val}</span>
			<span id="label">{label}</span>
		</div>
	)
}
export default InfoBox