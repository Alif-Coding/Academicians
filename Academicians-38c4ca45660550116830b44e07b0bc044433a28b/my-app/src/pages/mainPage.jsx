import Split from "react-split";
import { Link } from "react-router-dom";
import Lecturehall from "../components/lectureHall";

export default function Mainpage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[150px] bg-blue-950 text-white p-4">
        Sidebar
        <Link to="/Settings">
        <div class="h-[80px] w-[80px] bg-blue-100 text-slate-950 rounded-[20px] p-[20px] m-[10px]">
            Settings
        </div>
        </Link>
        <Link to="/Leaderboard">
        <div class="h-[80px] w-[80px] bg-blue-100 text-slate-950 rounded-[20px] p-[20px] m-[10px]">
            Leaderboard
        </div>
        </Link>
        <Link to="/Profile">
        <div class="h-[80px] w-[80px] bg-blue-100 text-slate-950 rounded-[20px] p-[20px] m-[10px]">
            Profile
        </div>
        </Link>
        <Link to="/Clubs">
        <div class="h-[80px] w-[80px] bg-blue-100 text-slate-950 rounded-[20px] p-[20px] m-[10px]">
            Clubs & Cliques
        </div>
        </Link>
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
            <h2 class="text-[40px]">Hallway</h2>
            <Link to="/Clubstruct">
              <div class="h-[400px] 
                          w-[400px] 
                          rounded-2xl
                          bg-contain
                          bg-no-repeat
                          bg-[url(https://play-lh.googleusercontent.com/iIzqTKnI-DPO4uzSNZKZj7DZiO81c2jIOYD4XDJqXntvTT0Yx25l0LrLZ0anu1hTQOQ1)]">
                
              </div>
            </Link>
          </div>
          <div className="bg-white p-4 overflow-auto">
            <h1 className="text-[40px]">Welcome To The Academy</h1>
            <Link to="/lecturehall">
                <div class="h-80 w-full bg-gray-200 rounded-lg p-50">
                    <h1>
                        Lecture Hall
                    </h1>
                </div>
            </Link>
            <Link to="/homeworks" >
                <div class="homeworkButton h-40 w-40 bg-blue-900 rounded-[30px] text-center pt-15 mt-20 absolute">
                  Homeworks
                </div>
            </Link>
            <Link to="/">
                <div class="library h-40 w-40 bg-green-100 rounded-[30px] text-center p-15 mt-20 ml-60 absolute">
                  Library
                </div>
            </Link>
          </div>
        </Split>
      </div>
    </div>
  );
}
