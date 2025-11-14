import { useState, useEffect } from 'react';

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timelineEvents = [
    { date: "10.24.25", description: "connects the vercel server this code is deployed to the dheeraj.lol domain and gets some sleep." },
    { date: "10.14.25", description: "cracks growth/distribution. averages 250k-1 million views weekly on TikTok for StudyType" },
    { date: "09.25.25", description: "still building studytype. building it to be the all in one study app." },
    { date: "08.27.25", description: "begins freshman year at a local university" },
    { date: "05.25.25", description: "starts work on avvisi.io. a personalized newsletter app that delivers newsletters to your inbox on your schedule about whatever you want.  " },
    { date: "04.01.25", description: "wraps up coding bootcamp" },
    { date: "03.29.25", description: "raises a pre-seed round from a mentor" },
    { date: "03.01.25", description: "builds inital version of studytype. users upload their notes and the app creates typing content so they can learn their content by typing it out. " },
    { date: "01.20.25", description: "Begins work as a growth lead for Inbox Zero (an AI email assistant app) under Elizer Steinbock" },
    { date: "12.15.24", description: "starting to understand client, servers, databases, react, type script, node.js, express, mongodb, etc." },
    { date: "07.10.24", description: "Starts learning how to code with a free online bootcamp The Odin Project" },
    { date: "06.10.24", description: "Win's gap year argument" },
    { date: "06.01.24", description: "Informs parents of wanting to take a gap year before college to do a coding bootcamp" },
    { date: "05.27.24", description: "Graduates high school. " },
    { date: "02.18.24", description: "Trying to learn how to code. Messes around with no code app builders and stuck in tutorial hell." },
    { date: "01.12.24", description: "Watches Arib Khan's podcast with Brett Maliowski about Musicfy and is 100x more intersted." },
    { date: "11.05.23", description: "Praneeth tells Dheeraj about startups and how he exited Parst ." },
    { date: "05.31.06", description: "Dheeraj is born" },

  ];

  return (
    <div className=" bg-white font-mono">
      {/* Header */}
      <header className="px-6 pt-6 pb-4">
        <div className="text-center mb-6">
          <h1 className="text-lg font-normal text-black">hi, it's dheeraj</h1>
        </div>
        <div className="flex justify-center space-x-8 text-sm">
          <a href="mailto:dheerajnaraharisetti41@gmail.com" className="text-gray-700 hover:text-black underline">email</a>
          <a href="https://x.com/dheerajn25" className="text-gray-700 hover:text-black underline">x</a>
          <a href="https://www.linkedin.com/in/dnarah/" className="text-gray-700 hover:text-black underline">linkedin</a>
          <a href="https://github.com/studytype/studytype_lol" className="text-gray-700 hover:text-black underline">github</a>
          <a href="https://www.instagram.com/dheerajnaraharisetti/" className="text-gray-700 hover:text-black underline">instagram</a>
        </div>
      </header>

      {/* Timeline */}
      <main className="px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex mb-4">
              <div className="w-24 shrink-0 text-sm text-gray-600">
                {event.date}
              </div>
              <div className="flex-1 text-sm text-black leading-relaxed">
                {event.description}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 pb-12 mb-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center text-xs text-gray-500 mb-2">
            dheeraj time: {currentTime.toLocaleTimeString('en-US', { hour12: true, timeZone: 'America/New_York' })}
          </div>
          <div className="text-center text-xs text-gray-500">
            currently building
          </div>
        </div>
      </footer>
    </div>
  );
}