import Link from "next/link"


const Navbar = () => {
  return (
    <div className="px-4 text-white flex justify-between items-center py-6">
       <h2 className="font-bold text-2xl leading-6">Recipe</h2> 
       <div className="flex gap-4 items-center">
          <Link className="text-sm hover:text-slate-500 hover:underline-offset-4 " href='/'>Signin</Link>
          <Link className="text-sm hover:text-slate-500 hover:underline-offset-4 " href='/'>Order</Link>
       </div>
    </div>
  )
}

export default Navbar