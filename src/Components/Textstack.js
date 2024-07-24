import { GiPositionMarker } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";

const TechStack=()=>{
    return(
        <div className=" p-6 bg-white rounded-lg shadow-lg text-md text-black text-opacity-60">
            <div className="text-[22px] tracking-wide mb-3 font-medium">Tech Stack </div>
            <div className="px-[2px]">
                <div className="flex flex-wrap justify-center gap-2 text-white opacity-60">
                    <div className="px-3 py-[2px] rounded-full bg-slate-900 text-md  flex justify-center  items-center">React</div>
                    <div className="px-3 py-[2px] rounded-full bg-slate-900 text-md  flex justify-center  items-center">Next js</div>
                    <div className="px-3 py-[2px] rounded-full bg-slate-900 text-md  flex justify-center  items-center">Mongo db</div>
                    <div className="px-3 py-[2px] rounded-full bg-slate-900 text-md  flex justify-center  items-center">Node js</div>
                    <div className="px-3 py-[2px] rounded-full bg-slate-900 text-md  flex justify-center  items-center">Express js</div>
                    <div className="px-3 py-[2px] rounded-full bg-slate-900 text-md  flex justify-center  items-center">Java</div>
                    <div className="px-3 py-[2px] rounded-full bg-slate-900 text-md  flex justify-center  items-center">Tailwind css</div>
                   
                    

                    
                </div>
            </div>
         

      </div>
    )
}
export default TechStack;