import AdminNavbar from "./AdminNavbar"

const AdminLeaveApproval = () => {
    return (
        <>
            <div className="p-5">
                <h1 className="p-2 border-b-2 text-lg font-bold">Leave Approvals</h1>

                <div className="mt-4">

                    <div className="p-5 rounded-lg">
                        <ul className="flex flex-col gap-y-4">
                            <li className="bg-zinc-100 p-3 rounded">
                                <h1 className=""><span className="text-lg">Hassnain Ahmed</span> | <span>Computer Science</span></h1>
                                <h2 className="text-gray-600">dev.hassnain77@gmail.com | 03103582990</h2>
                                <div className="bg-zinc-200 p-2 rounded">
                                    <p>Leave for: <span className="font-bold">5 </span>Days</p>
                                    <p>Reason:</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsam velit nihil illum perferendis dolorum sit! Hic impedit atque saepe.</p>
                                </div>
                                <div className="flex gap-2 my-2 justify-end">
                                    <button className="bg-emerald-300 p-3 hover:bg-emerald-400 rounded-md hover:scale-x-110 transition-all">Approve</button>
                                    <button className="bg-red-300 p-3 hover:bg-red-400 rounded-md hover:scale-x-110 transition-all">Reject</button>
                                </div>
                            </li>
                            <li className="bg-zinc-100 p-3 rounded">
                                <h1 className=""><span className="text-lg">Hassnain Ahmed</span> | <span>Computer Science</span></h1>
                                <h2 className="text-gray-600">dev.hassnain77@gmail.com | 03103582990</h2>
                                <div className="bg-zinc-200 p-2 rounded">
                                    <p>Leave for: <span className="font-bold">5 </span>Days</p>
                                    <p>Reason:</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsam velit nihil illum perferendis dolorum sit! Hic impedit atque saepe.</p>
                                </div>
                                <div className="flex gap-2 my-2 justify-end">
                                    <button className="bg-emerald-300 p-3 hover:bg-emerald-400 rounded-md hover:scale-x-110 transition-all">Approve</button>
                                    <button className="bg-red-300 p-3 hover:bg-red-400 rounded-md hover:scale-x-110 transition-all">Reject</button>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}

export default AdminLeaveApproval