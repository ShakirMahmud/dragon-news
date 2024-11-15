import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavBar from "../components/layout-components/LeftNavBar";
import RightNavBar from "../components/layout-components/RightNavBar";
import NavBar from "../components/NavBar";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-2">
                <NavBar></NavBar>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
                <aside className="left col-span-3">
                    <LeftNavBar></LeftNavBar>
                </aside>
                <section className="col-span-6"><Outlet/></section>
                <aside className="col-span-3">
                    <RightNavBar></RightNavBar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;