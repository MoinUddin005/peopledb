import axios from "axios";
import { useEffect, useState } from "react";
import GridView from "../components/manageBoard/gridView/GridView";
import TableView from "../components/manageBoard/tabelView/TableView";
import useMainContext from "../hooks/useMainContext";
import { UserData } from "../redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const ListView = () => {
  const [todos, setTodos] = useState([]);
  const [view, setView] = useState("table");
  const [queryValue, setQueryValue] = useState("");
  const dispatch = useDispatch();


  const [getData, setData] = useMainContext();
  const {users} = useSelector(state => state.peopleDB);

  const {page, limit, total } = getData;


  async function fetchData(page, limit) {
    const skip = page * limit;
    try {
      const response = await axios.get(
        `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
      );
      const userData = response.data;
      setTodos(userData.users);

      setData({
        ...getData,
        total: userData.total,
      });

      dispatch(UserData(userData.users));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
        fetchData(page, limit);
  }, [limit, page]);

  const paginationHandler = (page) => {
    
    setData({
      ...getData,
      page: page,
      prevPage: getData.page
    });
  };

  return (
    <div className="container mx-auto my-10 px-10">
      <h1 className="text-xl font-bold mb-4">User List</h1>

      {/* Search bar */}
      <div className="form-control w-5/12">
        <div className="input-group">
          <span className="bg-white border-2 border-gray-300 border-r-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search…"
            onChange={(e) => setQueryValue(e.target.value)}
            className="input input-sm w-full border-2 input-bordered"
          />
        </div>
      </div>

      {/* Action bar */}
      <div className="flex flex-wrap gap-y-2 gap-x-2 lg:gap-x-0  lg:justify-between mt-10">
        <div className="btn-group">
          <button
            className={
              view === "table" ? "btn btn-sm btn-active" : "btn btn-sm"
            }
            onClick={() => setView("table")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </button>
          <button
            className={view === "grid" ? "btn btn-sm btn-active" : "btn btn-sm"}
            onClick={() => setView("grid")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* grid view or list view */}
      {view === "grid" ? (
        <form id="boardManageForm">
          <GridView setTodos={setTodos} queryValue={queryValue} todos={todos} />
        </form>
      ) : (
        <form id="boardManageForm">
          <TableView
            setTodos={setTodos}
            queryValue={queryValue}
            todos={todos}
          />
        </form>
      )}

      {/* pagination */}
      {total > 0 && (
        <div className="join mt-10">
          {[...Array(total / limit)]
            .map((u, i) => i + 1)
            .map((item, index) => (
              <button
                key={item}
                className={
                  page == index
                    ? "join-item btn btn-sm btn-active"
                    : "join-item btn btn-sm"
                }
                onClick={() => paginationHandler(index)}
              >
                {item}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default ListView;
