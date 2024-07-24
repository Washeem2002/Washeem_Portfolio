
const Profile=()=>{
    return(
        <div className="grid place-items-center p-6 bg-white gap-6 rounded-lg shadow-lg text-black text-opacity-60">
       <div className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] lg:w-40 lg:h-40 rounded-full bg-green-900 ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden opacity-90">
         <img src="https://avatars.githubusercontent.com/u/113255423?v=4" className="w-full h-full"></img>
       </div>

       <div className="font-bold text-2xl "> Mohd Washeem</div>
       <div className="font-bold   text-center"> ⚡ Full Stack Developer | Frontend Developer | Next js | Node.js | React ⚡</div>
       <a className="px-6 py-2  border rounded-full hover:bg-slate-400 hover:text-white " href="https://drive.google.com/uc?export=download&id=1W1XllptwyKPSbgoQ9cL4g-6Mn_oCesIT">Download Resume </a>

      </div>
    )
}
export default Profile;