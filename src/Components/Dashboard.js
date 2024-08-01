import { useLocation } from "react-router-dom";

const Dashboard = () => {
    const {state} = useLocation()
 
// Since we have only one data showing like this if we have the api we could list it

    return (
      <table>
            <thead>
                <tr>
                    <th>Fullname</th>
                    <th>Username</th>
                    <th>Email id</th>
                    <th>Mobile number</th>
                    <th> Referral id</th>
                </tr>
            </thead>
            <tbody>
                    <tr key={state?.full_name}>
                        <td>{state?.full_name}</td>
                        <td>{state?.username}</td>
                        <td>{state?.email_id}</td>
                        <td>{state?.mobile_number}</td>
                        <td>{state?.referral_id}</td>
                    </tr>
               
            </tbody>
        </table>
    )
}

export default Dashboard