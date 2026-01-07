"use client"

const NavBar = () => {
  return (
    <nav className="h-16 flex items-center justify-between px-10 border-b border-gray-100 bg-white shrink-0">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-400 cursor-pointer group">
             Ask Stream <span className="text-gray-200 group-hover:text-gray-400 transition-colors">▼</span>
          </div>
          <button className="text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors">
            Show History
          </button>
        </nav>
  )
}

export default NavBar;
