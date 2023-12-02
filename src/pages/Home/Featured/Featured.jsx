import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-20 my-20">
            <SectionTitle subHeading="Check it out" heading="Featured Items"></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-25 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>30 Sep, 2024</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque et dicta tempore ea explicabo blanditiis temporibus incidunt maxime culpa, ratione veritatis quisquam ipsam provident debitis perferendis animi minima quidem nulla ex numquam commodi quis eaque porro! Beatae sed labore optio, nihil quisquam, nesciunt reprehenderit totam, tenetur repellendus eaque laudantium!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;