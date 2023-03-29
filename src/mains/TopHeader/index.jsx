// components
import TopCenterComponent from "../../components/TopCenterComponent";
import HeaderComponent from "../../components/HeaderComponent";
import NumberList from "../../components/NumberList";
// others
import "./styles.scss";

const TopHeader = () => (
    <div className="top-header-wrapper">
        <HeaderComponent />
        <div className="top-header-content">
            <TopCenterComponent />
            <NumberList />
        </div>
    </div>
)

export default TopHeader;
