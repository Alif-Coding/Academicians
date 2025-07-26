import { Link } from 'react-router-dom';

export default function Navbar() {

    return(<>
        <div className="h-16 text-blue-600 text-bold flex mt-[50px] ml-[700px] absolute ">
            <Link to="/">
                <h1 class="hover:text-blue-200 mr-[80px]">
                    Landing Page
                </h1>
            </Link>
            <Link to="/Pricing">
                <h1 class="hover:text-blue-200 mx-[40px]">
                    Pricing
                </h1>
            </Link>
            <Link to="/Company">
                <h1 class="hover:text-blue-200 ml-[80px]">
                    Company
                </h1>
            </Link>
        </div>
        </>)
}