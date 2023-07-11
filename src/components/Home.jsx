import { HiArrowNarrowRight } from "react-icons/hi";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Oscar Vehmanen
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a fullstack developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a newly graduated full-stack developer who's also proficient in
          working with cloud solutions. Currently, I'm looking for a position as
          a software developer where I can continue improving my skills.
        </p>
        <div>
          <div className="w-44">
            <Link
              className="cursor-pointer text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
              to="work"
              smooth={true}
              duration={500}
            >
              View Work
              <HiArrowNarrowRight className="ml-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
