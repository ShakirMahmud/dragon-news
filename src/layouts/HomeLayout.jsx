import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
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
                <aside className="left col-span-3">Left Navbar</aside>
                <section className="col-span-6">Main Content</section>
                <aside className="col-span-3">Right Navbar</aside>
            </main>
        </div>
    );
};

export default HomeLayout;