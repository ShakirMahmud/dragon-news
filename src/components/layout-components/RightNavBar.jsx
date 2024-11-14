import AdZone from "../AdZone";
import FindUs from "../FindUs";
import QZone from "../QZone";
import SocialLogin from "../SocialLogin";

const RightNavBar = () => {
    return (
        <div className="space-y-5">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
            <AdZone/>
        </div>
    );
};

export default RightNavBar;