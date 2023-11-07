import Appcontent from "../components/AppContent";
import { Header } from "../components";
import Tabbar from "../components/Tabbar";
import ScrollToTopButton from "../components/ScrollToTopButton";
function DefaultLayout() {
    return (
        <div className="wrapper__layout">

            <Appcontent />

            <div className="">
                <Tabbar />
                <ScrollToTopButton />
            </div>
        </div>
    );
}

export default DefaultLayout;