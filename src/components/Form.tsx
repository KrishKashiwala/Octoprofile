import React, { Dispatch, SetStateAction } from "react"
import { useHistory } from "react-router-dom"
const Form: React.FC<{ check: boolean, setCheck: Dispatch<SetStateAction<boolean>>, mainCheck: boolean, setMainCheck: Dispatch<SetStateAction<boolean>> }> = ({ check, setCheck, mainCheck, setMainCheck }) => {
	const [user, setUser] = React.useState('')
	let history = useHistory()

	return (

		<form onSubmit={e => {
			e.preventDefault()
			history.push({
				pathname: "/user", state: {
					user: user
				}
			})
		}}>
			<input autoFocus autoComplete="false" type="text" id="octo_input" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value)} />
		</form>
	)
}
export default Form