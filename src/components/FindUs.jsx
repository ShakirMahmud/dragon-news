import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FindUs = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2 className="font-semibold mb-3">Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-100 *:text-base *:text-gray-500">
                <button className="btn join-item justify-start"
                    onClick={() => window.open("https://www.facebook.com/shakir.mahmud.9/", "_blank")}
                ><FaFacebook />Facebook</button>
                <button className="btn join-item justify-start"
                    onClick={() => window.open("https://www.instagram.com/shakir.mahmud.9/", "_blank")}
                ><FaInstagram /> Instagram</button>
                <button className="btn join-item justify-start"
                    onClick={() => window.open("https://x.com/SKRMahmud", "_blank")}
                ><FaTwitter /> Twitter</button>
            </div>
        </div>
    );
};

export default FindUs;