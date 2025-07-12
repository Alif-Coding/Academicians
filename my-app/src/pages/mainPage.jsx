import Split from "react-split";
import { Link } from "react-router-dom";
import Lecturehall from "../components/lectureHall";

export default function Mainpage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[80px] bg-blue-950 text-white p-4">
        Sidebar
      </div>

      {/* Main split content */}
      <div className="flex-1">
        <Split
          className="flex h-full"
          sizes={[40, 60]}
          minSize={100}
          gutterSize={10}
        >
          <div className="bg-gray-100 p-4 overflow-auto">
            <h2>Hallway</h2>
            
          </div>
          <div className="bg-white p-4 overflow-auto">
            <h1>Welcome To The Academy</h1>
            <Link to="/lecturehall">
                <div class="h-35 w-80 bg-gray-200 rounded-lg">
                    <h1>
                        Lecture Hall
                    </h1>
                </div>
            </Link>
          </div>
        </Split>
      </div>
    </div>
  );
}
