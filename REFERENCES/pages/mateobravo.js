import Nav from '../components/Nav';
import { FaGlobe, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function MateoBravo() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Mateo Bravo</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">About the Creator</h2>
          
          <div className="space-y-6">
            <section>

              <p className="text-lg leading-relaxed mb-4">
                This program was created by me, Mateo Bravo.
              </p>
              <p className="text-lg leading-relaxed">
                I am a personal trainer who emphasizes movement education and strength development. I can help with the usual fitness goals like building muscle or losing weight, but what I really enjoy is working with people whose movement issues affect their daily lives and quality of life. I love helping people regain confidence and strength while reducing their pain and fear.
              </p>
            </section>

            <section>
              <p className="text-lg leading-relaxed mb-4">
                It's amazing how impactful minor changes can be.
              </p>
            </section>

            <section>
              <h2 className="text-orange-300 text-xl font-semibold mb-4">My Journey</h2>
              <p className="text-lg leading-relaxed">
                When I was in my 20s, I had two herniated discs and sciatica. Standard recovery methods didn't provide long lasting benefits. I did it all; physical therapy, massage, chiropractor, acupuncture, cupping, e-stim, percussion, yoga, pilates, foam rolling… you name it!
              </p>
              <p className="text-lg leading-relaxed mt-4">
                It turns out that without movement education and understanding how my body should move and feel during exercise and daily life, many of these efforts can end up a dead end. Once I learned how to move well and added resistance to develop strength in those movements, my back pain became a thing of the past.
              </p>
            </section>

            <section>
              <p className="text-lg leading-relaxed mb-4">
                I was no longer afraid to sneeze!
              </p>
            </section>

            <section>
              <h2 className="text-orange-300 text-xl font-semibold mb-4">About This Program</h2>
              <p className="text-lg leading-relaxed mb-4">
                I created this program to share simple, gentle drills and exercises that almost anyone can benefit from. It is very simple, low intensity, low impact, with minimal requirements. It is my first attempt at creating a multi-week program with a specific goal in mind that has PDFs and an application.
              </p>
              <p className="text-lg leading-relaxed">
                As I improve my resources and workflow methods, I hope to create many more programs for some of the most common requests; such as "Introduction to Bodyweight Exercises for Beginners" and a follow-up intermediate version, and after those would be the transition to "Fundamental Exercises Using Resistance and Load"... and of course "How to Lose Weight".
              </p>
            </section>

            <section>
              <h2 className="text-orange-300 text-xl font-semibold mb-4">Looking Forward</h2>
              <p className="text-lg leading-relaxed">
                My hope is that the feedback I get from folks who use this program will help me to create more of these materials for people in the near future.
              </p>
            </section>

            <section>
              <p className="text-lg leading-relaxed mb-4">
                Thanks for reading!
              </p>
            </section>

            <section>
              <h2 className="text-orange-300 text-xl font-semibold mb-4">Connect With Me</h2>
              <p className="text-lg leading-relaxed mb-4">You can find links to my website and social media below.</p>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center mb-1">
                    <FaGlobe className="text-white mr-3 text-2xl" />
                    <span className="text-amber-300 text-xl font-semibold">Website</span>
                  </div>
                  <div className="ml-8">
                    <a href="https://www.mateobravo.com" target="_blank" rel="noopener noreferrer" className="text-lg leading-relaxed text-blue-500 hover:text-blue-300">
                      mateobravo.com
                    </a>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-1">
                    <FaFacebook className="text-[#1877F2] mr-3 text-2xl" />
                    <span className="text-amber-300 text-xl font-semibold">Facebook</span>
                  </div>
                  <div className="ml-8">
                    <a href="https://www.facebook.com/MateoBravoPersonalTraining" target="_blank" rel="noopener noreferrer" className="text-lg leading-relaxed text-blue-500 hover:text-blue-300">
                      facebook.com/MateoBravoPersonalTraining
                    </a>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-1">
                    <FaYoutube className="text-[#FF0000] mr-3 text-2xl" />
                    <span className="text-amber-300 text-xl font-semibold">Youtube</span>
                  </div>
                  <div className="ml-8">
                    <a href="https://www.youtube.com/@MateoBravoPersonalTraining" target="_blank" rel="noopener noreferrer" className="text-lg leading-relaxed text-blue-500 hover:text-blue-300">
                      youtube.com/@MateoBravoPersonalTraining
                    </a>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-1">
                    <FaInstagram className="text-[#E4405F] mr-3 text-2xl" />
                    <span className="text-amber-300 text-xl font-semibold">Instagram</span>
                  </div>
                  <div className="ml-8">
                    <a href="https://www.instagram.com/flatfootmatt/" target="_blank" rel="noopener noreferrer" className="text-lg leading-relaxed text-blue-500 hover:text-blue-300">
                      instagram.com/flatfootmatt/
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
