import Filter from "./Filter";
import Footer from "./Footer";
import Header from "./Header";
import Pages from "./Pages";

export default function HomePage(){
    return (
        <div className="bg-gray-100">
            <Header />
            <Filter />
            <Pages />
            <Footer />
        </div>
    );
}