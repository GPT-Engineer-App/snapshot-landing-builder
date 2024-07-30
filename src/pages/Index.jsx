import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Heart className="w-6 h-6 mr-2" />
          <span className="text-xl font-bold">lovable</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#gpt-engineer" className="hover:text-gray-300">GPT Engineer</a></li>
            <li><a href="#vision" className="hover:text-gray-300">Vision</a></li>
            <li><a href="#news" className="hover:text-gray-300">News</a></li>
            <li><a href="#careers" className="hover:text-gray-300">Careers</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-yellow-400 via-orange-500 to-purple-600 rounded-full"></div>
          <h1 className="text-5xl font-bold mb-4">The last piece of software.</h1>
          <p className="text-xl mb-4">
            We're building software that builds software. Our <a href="#vision" className="underline">vision</a> is to unlock<br />
            human creativity — by enabling anyone to create software.
          </p>
        </div>
        <div className="mb-12">
          <img src="/placeholder.svg" alt="GPT Engineer" className="w-8 h-8 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-8">It starts with an AI software engineer.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['For Everyone', 'For Developers', 'For Agencies'].map((title, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex justify-between items-center">
                  {title} <ArrowRight className="w-5 h-5" />
                </h3>
                <p className="text-gray-400">
                  {index === 0 && "Chat with AI to build and deploy web apps, with no technical knowledge needed."}
                  {index === 1 && "Collaborate in chat and code with an AI engineer, to build at lightning speed."}
                  {index === 2 && "Partner with AI to streamline web app creation, iteration, and support."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="w-6 h-6 mr-2" />
              <span className="text-xl font-bold text-white">lovable</span>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-bold mb-4">GPT Engineer</h4>
                <ul className="space-y-2">
                  <li><a href="#overview" className="hover:text-white">Overview</a></li>
                  <li><a href="#for-everyone" className="hover:text-white">For Everyone</a></li>
                  <li><a href="#for-developers" className="hover:text-white">For Developers</a></li>
                  <li><a href="#for-agencies" className="hover:text-white">For Agencies</a></li>
                  <li><a href="#get-early-access" className="hover:text-white">Get early access <ArrowRight className="inline w-4 h-4" /></a></li>
                  <li><a href="#login" className="hover:text-white">Login <ArrowRight className="inline w-4 h-4" /></a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#vision" className="hover:text-white">Vision</a></li>
                  <li><a href="#news" className="hover:text-white">News</a></li>
                  <li><a href="#careers" className="hover:text-white">Careers</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#twitter" className="hover:text-white"><span className="sr-only">Twitter</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a>
            <a href="#github" className="hover:text-white"><span className="sr-only">GitHub</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg></a>
            <a href="#discord" className="hover:text-white"><span className="sr-only">Discord</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M18.93 5.34a16.89 16.89 0 00-4.07-1.23c-.18.32-.38.73-.52 1.07a15.72 15.72 0 00-4.67 0c-.14-.34-.34-.75-.52-1.07a16.89 16.89 0 00-4.07 1.23C1.14 9.17.21 12.91.43 16.6a16.93 16.93 0 005.12 2.59c.41-.56.78-1.16 1.1-1.78-.61-.23-1.19-.51-1.73-.84.14-.11.29-.22.43-.34 3.38 1.58 7.05 1.58 10.4 0 .14.12.29.23.43.34-.54.33-1.12.61-1.73.84.32.62.69 1.22 1.1 1.78a16.93 16.93 0 005.12-2.59c.26-4.32-.88-8.03-2.74-11.26zM8.02 14.51c-1 0-1.82-.92-1.82-2.04s.8-2.04 1.82-2.04c1.02 0 1.85.93 1.83 2.04 0 1.12-.81 2.04-1.83 2.04zm6.75 0c-1 0-1.82-.92-1.82-2.04s.8-2.04 1.82-2.04c1.02 0 1.85.93 1.83 2.04 0 1.12-.81 2.04-1.83 2.04z" clipRule="evenodd"></path></svg></a>
            <a href="#youtube" className="hover:text-white"><span className="sr-only">YouTube</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path></svg></a>
            <a href="#linkedin" className="hover:text-white"><span className="sr-only">LinkedIn</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd"></path></svg></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
