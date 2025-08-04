import Filter from "./Filter";
import Pages from "./Pages";

export default function HomePage(){
    return (
        <div className="bg-gray-100 p-4">
            <Filter />
            <Pages />
        </div>
    );
}