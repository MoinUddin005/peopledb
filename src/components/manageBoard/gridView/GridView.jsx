import { Link } from "react-router-dom";

const GridView = ({ todos , queryValue }) => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-4 gap-4">
        { todos.filter(todo => todo.firstName.toLowerCase().includes(queryValue)).map((todo) => (
          <div
            key={todo.id}
            className="py-2 px-5 border-2 border-gray-100 rounded-lg shadow-md"
          >
            <div className="flex justify-between">
              <div>
                <Link to={`/user/${todo.id}`} className="cursor-pointer">
                  <h4 className="uppercase text-lg font-semibold ">
                    {todo.firstName} {todo.maidenName} {todo.lastName}
                  </h4>
                </Link>
              </div>
              
            </div>
            <div className="py-3">
              <span className="block text-xl leading-none pt-1 font-semibold">
                {todo.email}
              </span>
            </div>
            <span className="flex content-center items-center">
              {todo.phone}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridView;
