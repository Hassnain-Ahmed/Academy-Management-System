
const AdminDashboardStat = () => {
    return (
        <div className="flex gap-5 justify-evenly my-2 p-5">

            <div className="relative w-full h-[150px] flex items-center justify-center bg-emerald-300 rounded-md">
                <h1 className="text-5xl font-bold">15</h1>
                <span className="absolute top-1 left-2">Total Students</span>
                <div className="absolute bottom-1 right-1">
                    <button className="bg-emerald-700 text-white px-5 py-2 hover:shadow-lg hover:scale-105 hover:px-7 rounded-lg transition-all duration-300 mx-1">View All</button>
                </div>
            </div>

            <div className="relative w-full h-[150px] flex items-center justify-center bg-amber-300 rounded-md">
                <h1 className="text-5xl font-bold">2</h1>
                <span className="absolute top-1 left-2">Total Classes</span>
                <div className="absolute bottom-1 right-1">
                    <a href="/classes" className="block bg-amber-600 text-white px-5 py-2 hover:scale-105 hover:px-7 rounded-lg transition-all duration-300 mx-1">View All</a>
                </div>
            </div>

            <div className="relative w-full h-[150px] flex items-center justify-center bg-teal-300 rounded-md">
                <h1 className="text-5xl font-bold">2</h1>
                <span className="absolute top-1 left-2">Total On Leaves</span>
                <div className="absolute bottom-1 right-1">
                    <button className="bg-teal-600 text-white px-5 py-2 hover:scale-105 hover:px-7 rounded-lg transition-all duration-300 mx-1">View All</button>
                </div>
            </div>

            <div className="relative w-full h-[150px] flex items-center justify-center bg-red-300 rounded-md">
                <h1 className="text-5xl font-bold">2</h1>
                <span className="absolute top-1 left-2">Approve Leaves</span>
                <div className="absolute bottom-1 right-1">
                    <button className="bg-red-600 text-white px-5 py-2 hover:scale-105 hover:px-7 rounded-lg transition-all duration-300 mx-1">View All</button>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboardStat