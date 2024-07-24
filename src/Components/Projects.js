import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import gamepro from "../../public/gamepro.png";
import PMS from "../../public/PMS.png";
import anime from "../../public/anime.png";
import paint from "../../public/paint.png"
import { FaLink } from "react-icons/fa";

const Projects=()=>{
    const projects=[{name:"Drawing Board",src:paint,dis:"Developed an interactive drawing board .Enabled users to add shapes, draw with a brush, add text, insert images, and use an eraser",Github:"https://github.com/Washeem2002/DrawingBoard",Link:"https://paintshop-chi.vercel.app/"},{name:"Game Cart",src:gamepro,dis:"Full-stack responsive e-commerce website dedicated to the purchase of games, creating a seamless and immersive online shopping experience for users build with React js ,Tailwind Css,Node js ,Express js and Mongodb.",Github:"https://github.com/Washeem2002/game-project",Link:"https://game-project-inky.vercel.app/"},{name:"Anime.com",src:anime,dis:"Built a full-stack responsive media-streaming website for watching anime. Enabled features like anime search, filtering, and a Watch Later playlist for user convenience.",Github:"https://github.com/Washeem2002/anime.com",Link:"https://anime-com.vercel.app/"},{name:"Patient Management System",src:PMS,dis:"Designed and implemented a comprehensive patient management system.Facilitated patient record management, appointment scheduling , daily report generation and real time updates using a robust backend and database integration .",Github:"https://github.com/Washeem2002/PMS",Link:"https://github.com/Washeem2002/PMS"}]
    return(
        <div className="grid  p-6 bg-base-100 gap-6 rounded-lg shadow-lg text-black text-opacity-60">
          <div className="text-[22px] tracking-wide  font-medium">My Projects </div>   
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">

           {projects.map((arr,i)=>{
           return( <div className=" shadow-lg rounded-lg bg-white grid gap-4 p-4" key={i}>
                <div className="text-[18px] tracking-wide  font-medium flex w-full justify-center">{arr.name} </div>
                <div className="w-full h-[200px] sm:h-[250px] bg-slate-500 rounded-lg overflow-hidden">
                    <Image src={arr.src} cover className="opacity-90 h-full"></Image>
                </div>
                <p className="text-sm text-justify">{arr.dis}</p>
                <div className="flex flex-wrap justify-center w-full gap-2">
                    <a href={arr.Github} target="_blank"><div className="px-[10px] py-[5px] border bg-slate-700 rounded-md flex gap-[10px] items-center text-white "><FaGithub/><div>Github</div></div></a>
                    <a href={arr.Link} target="_blank"><div className="px-[10px] py-[5px] border bg-slate-700 rounded-md flex gap-[10px] items-center text-white "><FaLink/><div>Link</div></div></a>
                </div>
            </div>)
           })}

            
           
        

           
           
            </div>      

      </div>
    )
}
export default Projects;