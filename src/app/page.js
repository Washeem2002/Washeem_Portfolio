import Image from "next/image";
import Education from "@/Components/Education";
import Profile from "@/Components/Profile";
import Contacts from "@/Components/Contacts";
import TechStack from "@/Components/Textstack";
import Projects from "@/Components/Projects";
export default function Home() {
  return (
    <div className="min-w-full p-4 lg:p-10 ">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
     <div className="col-span-1 ">
      
      <div className="grid grid-cols-1 gap-4 ">

      
       <Profile/>
       <Contacts/>
       <TechStack/>
       <Education/>

         
      </div>
         
        



     </div>
     <div className="col-span-1 lg:col-span-2 ">

     <Projects/>

      </div>




     </div>

     <div className="w-full flex justify-center mt-6"> Made by <a href="https://github.com/Washeem2002/Washeem_Portfolio">Mohd</a></div>

    </div>
  );
}
