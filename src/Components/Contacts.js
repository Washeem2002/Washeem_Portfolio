import { GiPositionMarker } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";

const Contacts=()=>{
    return(
        <div className=" p-6 bg-white rounded-lg shadow-lg text-md text-black text-opacity-60">
            <div className="text-[22px] tracking-wide mb-3 font-medium">Profile </div>
         <div className="grid grid-cols-1 gap-6  px-1">
            <div className="flex gap-2 ">
                <div className="flex justify-center items-center"><GiPositionMarker/></div>
                <div className="flex-grow">Based in :</div>
                <div className="">India</div>
            </div>

            <div className="flex gap-2 ">
                <div className="flex justify-center items-center"><FaGithub/></div>
                <div className="flex-grow">Github :</div>
                <a href="https://github.com/Washeem2002" target="_blank">Washeem2002</a>
            </div>

            <div className="flex gap-2 ">
                <div className="flex justify-center items-center"><FaXTwitter/></div>
                <div className="flex-grow">Twitter :</div>
                <a href="https://x.com/washeemmohd1" target="_blank">washeemmohd1</a>
            </div>

            <div className="flex gap-2 ">
                <div className="flex justify-center items-center"><FaLinkedinIn/></div>
                <div className="flex-grow">Linkedin :</div>
                <a href="https://www.linkedin.com/in/mohd-washeem-7a9b16225/" target="_blank">mohd-washeem</a>
            </div>

            <div className="flex gap-2 ">
                <div className="flex justify-center items-center"><SiLeetcode/></div>
                <div className="flex-grow">Leetcode :</div>
                <a href="https://leetcode.com/u/jk2002/" target="_blank">jk2002</a>
            </div>

            <div className="flex gap-2 ">
                <div className="flex justify-center items-center"><MdOutlineMail/></div>
                <div className="flex-grow">Email:</div>
                <a href="mailto:jkrowling7702@gmail.com" target="_blank">jkrowling7702@gmail.com</a>
            </div>

            <div className="flex gap-2 ">
                <div className="flex justify-center items-center"><MdOutlineMail/></div>
                <div className="flex-grow">Email:</div>
                <a href="mailto:washeem2002@gmail.com" target="_blank">washeem2002@gmail.com</a>
            </div>
           
            
         </div>

      </div>
    )
}
export default Contacts;