import React, { Dispatch, SetStateAction } from "react"
import { useHistory } from "react-router-dom"
const Form: React.FC<{ check: boolean, setCheck: Dispatch<SetStateAction<boolean>>, mainCheck: boolean, setMainCheck: Dispatch<SetStateAction<boolean>> }> = ({ check, setCheck, mainCheck, setMainCheck }) => {
	const [user, setUser] = React.useState('')
	let history = useHistory()
	let inputEnter = document.querySelector('#octo_input')

	inputEnter?.addEventListener('keydown', (e: any) => {
		if (e.code === "Enter") {
			history.push('/user', {
				user: user
			})
		}
	})

	return (

		<div>
			<input type="text" id="octo_input" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value)} />
		</div>
	)
}
export default Form