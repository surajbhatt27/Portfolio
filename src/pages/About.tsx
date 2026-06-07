import { Layout } from '../components/Layout';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';
import type { setActivePageType } from '../types/page';

export const About = ({ setActivePage }: setActivePageType) => {
  return (
    <Layout title="About" setActivePage={setActivePage}>
      <div className="space-y-6">
        {/* Intro */}
        <div className="space-y-3">
          <p className="text-gray-300 text-lg">
            I'm Suraj, a final year CS student and backend developer intern who loves building web applications.
          </p>
          <p className="text-gray-400">
            Currently diving deep into fullstack development while preparing for software engineering roles.
          </p>
        </div>

        {/* Education */}
        <div className="border border-gray-800 rounded-lg bg-gray-900/30 p-5">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap size={16} className="text-cyan-500" />
            <h2 className="text-white font-medium text-sm">Education</h2>
          </div>
          <p className="text-gray-300">
            B.Tech Computer Science (Final Year)
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Amrapali Institute of Technology & Science • Uttarakhand Technical University
          </p>
        </div>

        {/* Current Focus */}
        <div className="border border-gray-800 rounded-lg bg-gray-900/30 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase size={16} className="text-cyan-500" />
            <h2 className="text-white font-medium text-sm">Current Focus</h2>
          </div>
          <ul className="space-y-1.5">
            <li className="text-gray-400 text-sm flex items-start gap-2">
              <span className="text-cyan-500">→</span>
              Building fullstack applications
            </li>
            <li className="text-gray-400 text-sm flex items-start gap-2">
              <span className="text-cyan-500">→</span>
              Preparing for software engineering roles
            </li>
            <li className="text-gray-400 text-sm flex items-start gap-2">
              <span className="text-cyan-500">→</span>
              Learning and exploring modern tech stacks
            </li>
          </ul>
        </div>

        {/* Interests */}
        <div className="border border-gray-800 rounded-lg bg-gray-900/30 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Heart size={16} className="text-cyan-500" />
            <h2 className="text-white font-medium text-sm">Beyond Code</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Reading", "Yoga", "Meditation", "Music", "Table Tennis"].map((interest) => (
              <span
                key={interest}
                className="text-xs text-gray-400 px-2 py-1 rounded border border-gray-700 bg-gray-800/30"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};