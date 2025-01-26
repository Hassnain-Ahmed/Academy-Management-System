import { useState } from "react"
import AdminNavbar from "./AdminNavbar"

const AdminGradingSystem = () => {
    const [datalist, setDatalist] = useState(false)
    const [searchInput, setSearchInput] = useState({ search: "" })
    const [isShowClasses, setIsShowClasses] = useState(false)

    const toggleDatalist = (e) => {
        e.currentTarget.value.length < 1 ? setDatalist(false) : setDatalist(true)
    }

    const handleSearchInput = (e) => {
        const { name, value } = e.currentTarget
        setSearchInput({
            ...searchInput,
            [name]: value
        })
    }
    const setSearchState = (e) => {
        const value = e.currentTarget.getAttribute("aria-valuetext");
        setSearchInput({ search: value });
        setDatalist(false)
        setIsShowClasses(true)

    }
    return (
        <>
            <div className="p-5">
                <p className="text-lg font-bold border-b-2 my-2">Grading System</p>

                <div className="p-4 bg-neutral-200 rounded-lg">
                    <div className="flex gap-2 items-center">
                        <span>Search: </span>
                        <input
                            autoComplete="off"
                            type="text"
                            placeholder="Ex: Student Id | Student Name"
                            className="w-full p-2 rounded-md"
                            name="searchStudent"
                            list="searchStudent"
                            id="searchStudent"
                            value={searchInput.search}
                            onChange={(e) => { toggleDatalist(e); handleSearchInput(e) }}
                        />
                    </div>
                    <ul className={`mx-16 my-2 ${datalist ? " block " : "hidden"}`}>
                        <li key={1} className="flex"><a href="#" aria-valuetext="Hassnain Ahmed" onClick={setSearchState} className="bg-slate-400 p-2 rounded">12934 | Hassnain Ahmed</a></li>
                    </ul>
                </div>

                <div className="my-4">
                    <h1 className="text-md border-b-2 my-2">Student Classes and Grades</h1>
                    <div className="">

                        {isShowClasses ?
                            <div>
                                <table className="w-full tableDesign-1">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Instructor</th>
                                            <th>Course</th>
                                            <th>Obtained</th>
                                            <th>Total</th>
                                            <th>Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td>12315</td>
                                            <td>Hassnain Ahmed</td>
                                            <td>Mr. Arslan</td>
                                            <td>FYP</td>
                                            <td><input type="number" name="" id="" placeholder="Ex: 100" className="w-[70px] p-2" /></td>
                                            <td><input type="number" name="" id="" placeholder="Ex: 72" className="w-[70px] p-2" /></td>
                                            <td>
                                                <select name="" id="">
                                                    <option value="--" selected>--</option>
                                                    <option value="A+">A+</option>
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                    <option value="C">C</option>
                                                    <option value="F">F</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12316</td>
                                            <td>Jai Kumar</td>
                                            <td>Mr. Ali</td>
                                            <td>Thesis</td>
                                            <td><input type="number" name="" id="" placeholder="Ex: 100" className="w-[70px] p-2" /></td>
                                            <td><input type="number" name="" id="" placeholder="Ex: 85" className="w-[70px] p-2" /></td>
                                            <td>
                                                <select name="" id="">
                                                    <option value="--" selected>--</option>
                                                    <option value="A+">A+</option>
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                    <option value="C">C</option>
                                                    <option value="F">F</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12317</td>
                                            <td>Tariq Babar</td>
                                            <td>Ms. Fatima</td>
                                            <td>Research Project</td>
                                            <td><input type="number" name="" id="" placeholder="Ex: 100" className="w-[70px] p-2" /></td>
                                            <td><input type="number" name="" id="" placeholder="Ex: 90" className="w-[70px] p-2" /></td>
                                            <td>
                                                <select name="" id="">
                                                    <option value="--" selected>--</option>
                                                    <option value="A+">A+</option>
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                    <option value="C">C</option>
                                                    <option value="F">F</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12318</td>
                                            <td>Ali Raza</td>
                                            <td>Mr. Usman</td>
                                            <td>Case Study</td>
                                            <td><input type="number" name="" id="" placeholder="Ex: 100" className="w-[70px] p-2" /></td>
                                            <td><input type="number" name="" id="" placeholder="Ex: 78" className="w-[70px] p-2" /></td>
                                            <td>
                                                <select name="" id="">
                                                    <option value="--" selected>--</option>
                                                    <option value="A+">A+</option>
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                    <option value="C">C</option>
                                                    <option value="F">F</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12319</td>
                                            <td>Sarah Khan</td>
                                            <td>Ms. Ayeza</td>
                                            <td>Capstone Project</td>
                                            <td><input type="number" name="" id="" placeholder="Ex: 100" className="w-[70px] p-2" /></td>
                                            <td><input type="number" name="" id="" placeholder="Ex: 95" className="w-[70px] p-2" /></td>
                                            <td>
                                                <select name="" id="">
                                                    <option value="--" selected>--</option>
                                                    <option value="--" selected>--</option>
                                                    <option value="A+">A+</option>
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                    <option value="C">C</option>
                                                    <option value="F">F</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="my-3 text-center">
                                    <button disabled className="bg-cyan-300 hover:bg-cyan-400 transition-colors p-2 w-full disabled:bg-cyan-100 disabled:text-neutral-500">Submit Changes</button>
                                </div>
                            </div>

                            : ""}
                    </div>
                </div>


            </div>
        </>
    )
}

export default AdminGradingSystem