import Split from "react-split";
import React, { useState, useEffect } from 'react';

export default function Lecturehall() {

  const [activeTab, setActivetab] = useState("participants")

  useEffect(() => {
    console.log(`switched to ${activeTab} tab`)
  }, [activeTab])

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
              <div>
                <div
                onClick={() => setActivetab('participants')}
                className={`studentTab bg-slate-900 rounded-2xl w-[200px] h-[40px] p-4 cursor-pointer ${activeTab === 'participants' ? 'border-2 border-white' : ''}`}
                >
                  <p className="text-white">Students</p>
                </div>

                <div
                  onClick={() => setActivetab('Notes')}
                  className={`noteTab bg-slate-900 rounded-2xl w-[200px] h-[40px] p-4 cursor-pointer ${activeTab === 'Notes' ? 'border-2 border-white' : ''}`}
                >
                  <p className="text-black">Notes</p>
                </div>
              </div>
              <div>
                { activeTab == 'participants' && 
                  <div>
                    <p className="text-white text-center">{/*numberOfstudents*/}Students</p>
                  </div>
                }
                {
                  activeTab == 'Notes' &&
                  <div class="">
                    <textarea 
                      className="w-full h-32 p-2 rounded-md bg-white" 
                      placeholder="Type your notes here..."></textarea>
                    <div class="h-[40px] w-[200px] flex">
                      <div class="h-[40px] w-[50px] bg-blue">
                      Save Note
                      </div>
                      <div class="h-[40px] w-[50px] bg-blue">
                        Discard
                      </div>
                    </div>
                  </div>
                }
              </div>
                
              
              
              
            </div>
            <div>
              
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
            <button
              className="bg-blue-250 w-25 h-25 border-4 border-slate-200 rounded-2xl"
            >
              Send
            </button>
          </div>
        </Split>
      </div>
    </div>
  );
}
