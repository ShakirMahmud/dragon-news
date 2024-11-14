import swim from '../assets/swimming.png'
import classRoom from '../assets/class.png'
import playGround from '../assets/playground.png'

const QZone = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Find Us On</h2>
            <div>
                <img src={swim} alt="" />
            </div>
            <div>
                <img src={classRoom} alt="" />
            </div>
            <div>
                <img src={playGround} alt="" />
            </div>
        </div>
    );
};

export default QZone;