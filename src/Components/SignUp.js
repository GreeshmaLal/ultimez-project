import axios from "axios"
import {  useState } from "react"
import { useNavigate } from 'react-router-dom';
import InputBox from "./InputBox.js";


const SignUp = () => {
    const [list, setList] = useState({})
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        try {
          await axios.post('https://lobster-app-ddwng.ondigitalocean.app/user/register',
                list ,
               {
                   headers: {
                       'api_key': 'Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH',
                   },
               }
           );
       // since not getting proper response from the api, passing it through navigation
           navigate('/dashboard', { state: list });
        } catch (error) {
            console.log(error)
        }
     

    };
    const onChangeHandler = (e) => {
        setList({ ...list, ...e })
        console.log(list, 'list')
    }
   const onChangeHandlerSelect=(e)=>{
    // eslint-disable-next-line no-useless-computed-key
    onChangeHandler({ ['country_row_id']: e?.target?.value })

    }
    return (
            <div className="app">
                <form onSubmit={onSubmitHandler}>
                    <InputBox type='text' placeholder="Full Name" name="full_name" value={list?.full_name} label='full_name' onChange={onChangeHandler} />
                    <InputBox type='name' placeholder="username" name="username" maxLength={4} value={list?.username} label='username' onChange={onChangeHandler} />
                    <InputBox type='text' placeholder="Password" name="Password" minLength={6} value={list?.password} label='password' onChange={onChangeHandler} />
                    <InputBox type='email' placeholder="Emal Id" name="Emal Id" value={list?.email_id} label='email_id' onChange={onChangeHandler} />
                  
                            <select value={list?.country_row_id} onChange={onChangeHandlerSelect}>
                            <option value="">Select an option</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                {/* since we dont have api for this now giving sample data */}
                            </select>
                    <InputBox type='number' placeholder="mobile_number" name="mobile_number" value={list?.mobile_number} label='mobile_number' onChange={onChangeHandler} />
                    <InputBox type='number' placeholder="referral_id" name="referral_id" value={list?.referral_id} label='referral_id' onChange={onChangeHandler} />

                    <button type="submit"  onClick={onSubmitHandler}>Submit</button>
                </form>
            </div>
    )
}

export default SignUp