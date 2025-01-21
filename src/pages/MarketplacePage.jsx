import HeaderProfile from "../components/HeaderProfile"
import SidebarMarketplace from "../components/SidebarMarketplace";
import MarketPlace from "../components/MarketPlace";
const ProfilePage = () => {
    return(
        <div className="flex flex-row">
            <div className="sm25:hidden sm20:hidden sm75:hidden">
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