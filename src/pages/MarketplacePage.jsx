import HeaderProfile from "../components/HeaderProfile"
import SidebarMarketplace from "../components/SidebarMarketplace";
import MarketPlace from "../components/MarketPlace";
const ProfilePage = () => {
    return(
        <div className="flex flex-row">
            <div>
                <SidebarMarketplace />
            </div>
            <div className="flex flex-col w-full">
                <HeaderProfile /> 
                <MarketPlace />
            </div>
        </div>
    )
}

export default ProfilePage;