import React from "react"
const Form = () => {
	const [user, setUser] = React.useState('')
	return (
		<form action="">
			<input type="text" id="octo_input" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value)} />
		</form>
	)
}
export default Form