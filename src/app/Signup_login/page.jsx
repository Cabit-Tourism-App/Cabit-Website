import Login_page from "../../components/login_page";
import Verify_otp from "../../components/verify_otp";
import User_data from "../../components/user_data";
export default function Signup(){
    return(
        <div>
        <Login_page/>
        <Verify_otp/>
        <User_data/>
        </div>
    );
}