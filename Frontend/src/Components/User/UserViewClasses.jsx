
const UserViewClasses = () => {
    return (
        <>
            <div className="p-5">
                <div className="flex justify-between border-b-2 p-2">
                    <h1 className="text-xl font-bold text-neutral-500">Enrolled Classes</h1>
                    <a href="#" className="text-sky-400">Enroll in a new Class</a>
                </div>
                <ul className="flex gap-4 my-5 w-full">
                    <li>
                        <div className="bg-gray-500 text-gray-100 p-5 rounded-md cursor-default">
                            <p className="text-2xl border-b-2 my-4">01.</p>
                            <h1 className="text-md">Class: <span className="font-bold">Section A</span></h1>
                            <h2 className="text-md">Depeartment: <span className="font-bold">BSCS-7</span></h2>
                            <h2 className="text-md">Instructor: <span className="font-bold">Sir MB</span></h2>
                            <h2 className="text-md">Enrolled: <span className="font-bold">6-7-2024</span></h2>
                            <button className="mt-4 bg-emerald-500 w-full text-white p-2 rounded">View Attendance</button>
                        </div>
                    </li>
                    <li>
                        <div className="bg-gray-500 text-gray-100 p-5 rounded-md cursor-pointer">
                            <p className="text-2xl border-b-2 my-4">02.</p>
                            <h1 className="text-md">Class: <span className="font-bold">Section A</span></h1>
                            <h2 className="text-md">Depeartment: <span className="font-bold">BSCS-7</span></h2>
                            <h2 className="text-md">Instructor: <span className="font-bold">Sir MB</span></h2>
                            <h2 className="text-md">Enrolled: <span className="font-bold">6-7-2024</span></h2>
                            <button className="mt-4 bg-emerald-500 w-full text-white p-2 rounded">View Attendance</button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default UserViewClasses