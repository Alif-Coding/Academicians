import { Link } from 'react-router-dom';

export default function Navbar() {

    return(<>
        <div className="h-16 w-full text-blue-600 flex items-center px-[80px] absolute ">
            <Link to="/">
                <h1 class="hover:text-blue-200 px-[80px]">
                    Landing Page
                </h1>
            </Link>
            <Link to="/Pricing">
                <h1 class="hover:text-blue-200 px-[80px]">
                    Pricing
                </h1>
            </Link>
            <Link to="/Company">
                <h1 class="hover:text-blue-200 px-[80px]">
                    Company
                </h1>
            </Link>
        </div>
        </>)
}