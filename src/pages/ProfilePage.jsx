import HeaderProfile from "../components/HeaderProfile"
import Sidebar from "../components/Sidebar";
import MyTokens from "../components/MyTokens";
const ProfilePage = () => {
    return(
        <div className="flex flex-row">
            <div>
                <Sidebar />
            </div>
            <div className="flex flex-col w-full">
                <HeaderProfile /> 
                <MyTokens />
            </div>
        </div>
    )
}

export default ProfilePage;