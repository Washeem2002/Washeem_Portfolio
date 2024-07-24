import { GiPositionMarker } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";

const Education=()=>{
    return(
        <div className=" p-6 bg-white rounded-lg shadow-lg text-md text-black text-opacity-60">
            <div className="text-[22px] tracking-wide mb-3 font-medium">Education </div>
            <div class="text-base-content text-opacity-60">
                <ol class="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                    <li class="mb-5 ml-4"><div class="absolute w-2 h-2 bg-black rounded-full border border-base-300 mt-1.5 left-[-5px] "></div><div class="my-0.5 text-xs">2021 - 2025</div><h3 class="font-semibold">Btech - Information technology</h3><div class=" font-normal">Bundelkhand Institute of Engineering & Technology</div><div class=" font-normal">7.3 cgpa</div></li>
                    <li class="mb-5 ml-4"><div class="absolute w-2 h-2 bg-black rounded-full border border-base-300 mt-1.5 left-[-5px] " ></div><div class="my-0.5 text-xs">2019 - 2020</div><h3 class="font-semibold">Intermediate Education</h3><div class=" font-normal">BBS international school</div><div class=" font-normal">93.4 %</div></li></ol></div>

      </div>
    )
}
export default Education;