
import { Link } from 'react-router-dom';


const TableView = ({ todos, queryValue }) => {


    return (
        <div className='mt-5'>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-gray-500'>
                            
                            <th></th>
                            <th className='text-sm font-extrabold'>Name</th>
                            <th className='font-extrabold text-sm'>Email</th>
                            <th className='font-extrabold text-sm'>Gender</th>
                            <th className='font-extrabold text-sm'>phone</th>
                        </tr>
                    </thead>
                    <tbody className='table-height'>
                        {
                            todos.filter(todo => todo.firstName.toLowerCase().includes(queryValue)).map(todo => <tr key={todo.id}>
                              
                                <td className='p-3 relative w-12 h-12'>
                                <img className="rounded-full border border-blue-400 shadow-sm" src={todo.image} alt="user image" />
                                </td>
                                <td className='p-3'>
                                    <Link to={`/user/${todo.id}`}>
                                        <p className='text-lg font-semibold'>{todo.firstName} {todo.maidenName} {todo.lastName} </p>
                                    </Link>
                                </td>
                                <td className='p-3'>
                                    <span className='block text-xl leading-none pt-1 font-semibold'>{todo.email}</span>
                                       
                                </td>
                                <td className='p-3 font-semibold text-sm'>{todo.gender}</td>
                                <td className='p-3'>
                                    <span className='flex content-center items-center'>
                                       {todo.phone}
                                    </span>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableView;