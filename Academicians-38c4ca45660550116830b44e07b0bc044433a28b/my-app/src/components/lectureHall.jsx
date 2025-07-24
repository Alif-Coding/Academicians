import Split from "react-split";
import { supabase } from "../supabase-client.js";

export default function Lecturehall() {
  function switch01(e) {
    if (e.target.classList.contains("studentTab")) {
      e.target.classList.add("active");
      e.target.classList.remove("noteTab");
    } else if (e.target.classList.contains("noteTab")) {
      e.target.classList.add("active");
      e.target.classList.remove("studentTab");
    }
  }

  return (
    <div className="lectureHall h-screen w-screen bg-slate-700 p-10">
      <h1 className="font-bold text-3xl text-center text-white pt-5">
        Welcome to Lecture Hall
      </h1>

      <div className="h-[90%] mt-8">
        <Split
          className="flex h-full"
          sizes={[60, 40]}
          minSize={100}
          gutterSize={10}
        >
          {/* Left Side (Board and Students stacked vertically) */}
          <Split
            direction="vertical"
            className="flex flex-col h-full w-full gap-4"
            sizes={[70, 30]}
            minSize={100}
            gutterSize={10}
          >
            {/* Display Board */}
            <div className="bg-slate-800 rounded-2xl w-full h-full p-4">
              <p className="text-white">Display Board</p>
            </div>

            {/* Students */}
            <div>
              <div
                onClick={switch01}
                className="studentTab bg-slate-900 rounded-2xl w-full h-full p-4"
              >
                <p className="text-white">Students</p>
              </div>
              <div onClick={switch01} className="noteTab">
                <h class="text-center ">Notes</h>
              </div>
            </div>
            <div>
              <input
                type="textarea"
                class="w-full h-full"
                placeholder="Type your notes here ..."
              ></input>
            </div>
          </Split>

          {/* Chatbox */}
          <div className="bg-green-100 rounded-2xl w-full h-full p-4">
            <p>Chatbox</p>
            <div class="w-full h-150">{/* where chat display */}</div>
            <input
              type="text"
              className="bg-white-250 w-135 h-25 border-4 border-slate-300 rounded-2xl ml-2 mr-10"
            ></input>
            <input
              type="button"
              className="bg-blue-250 w-25 h-25 border-4 border-slate-200 rounded-2xl"
            >
              Send
            </input>
          </div>
        </Split>
      </div>
    </div>
  );
}
