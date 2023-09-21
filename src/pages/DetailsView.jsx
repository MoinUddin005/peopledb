import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import image from "../assets/image/bg.jpg";
import axios from "axios";

const DetailsView = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state.peopleDB);
  const [userList, setUserList] = useState([]);

  const getData = () => {
    const filterItem = users.find((item) => item.id == id);
    setUserList(filterItem);
  };

  async function getUserById(id) {
    try {
      const response = await axios.get(`https://dummyjson.com/users/${id}`);
      const userData = response.data;
      setUserList(userData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    if (id && users.length < 1) {
      getUserById(id);
    } else {
      getData();
    }
  }, []);

  return (
    <div>
      <section className="relative lg:pb-24 pb-16">
        <div className="container-fluid">
          <div className="profile-banner relative text-transparent">
            <input
              id="pro-banner"
              name="profile-banner"
              type="file"
              className="hidden"
             
            />
            <div className="relative shrink-0">
              <img
                src={image}
                className="h-80 w-full object-cover"
                id="profile-banner"
                alt=""
              />
              <div className="absolute inset-0 bg-black/70"></div>
              <label
                className="absolute inset-0 cursor-pointer"
               
              ></label>
            </div>
          </div>
        </div>
        {/* <!--end container--> */}

        <div className="container lg:mt-24 mt-16">
          <div className="md:flex">
            <div className="lg:w-1/4 md:w-1/3 md:px-3">
              <div className="relative md:-mt-48 -mt-32">
                <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                  <div className="profile-pic text-center mb-5">
                    <input
                      id="pro-img"
                      name="profile-image"
                      type="file"
                      className="hidden"
                    />
                    <div>
                      <div className="relative h-28 w-28 mx-auto">
                        <img
                          src={userList?.image}
                          className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                          id="profile-image"
                          alt=""
                        />
                        <label className="absolute inset-0 cursor-pointer"></label>
                      </div>

                      <div className="mt-4">
                        <h5 className="text-lg font-semibold">
                          {userList?.firstName} {userList?.maidenName}{" "}
                          {userList?.lastName}
                        </h5>
                        <p className="text-slate-400">{userList?.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 dark:border-gray-700">
                    <ul
                      className="list-none sidebar-nav mb-0 mt-3"
                      id="navmenu-nav"
                    >
                      <li className="navbar-item account-menu">
                        <Link className="navbar-link text-slate-400 flex items-center py-2 rounded">
                          <span className="mr-2 text-[18px] mb-0">
                            <i className="uil uil-dashboard"></i>
                          </span>
                          <h6 className="mb-0 font-semibold">Profile</h6>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-[30px] md:mt-0">
              <div className="pb-6 border-b border-gray-100 dark:border-gray-700">
                <h5 className="text-xl font-semibold">
                  {userList?.firstName} {userList?.maidenName}{" "}
                  {userList?.lastName}
                </h5>

                <p className="text-slate-400 mt-3">
                  address: {userList?.address?.address} city: {userList?.address?.city} postalCode: {userList?.address?.postalCode}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px] pt-6">
                <div>
                  <h5 className="text-xl font-semibold">Personal Information :</h5>
                  <div className="mt-6">
                    <div className="flex items-center">
                      <i
                        data-feather="mail"
                        className="fea icon-ex-md text-slate-400 mr-3"
                      ></i>
                      <div className="flex-1">
                        <h6 className="text-indigo-600 dark:text-white font-medium mb-0">
                        age : <span className="text-slate-400"> {userList?.age}</span>
                        </h6>
                      </div>
                    </div>
                    <div className="flex items-center mt-3">
                      <i
                        data-feather="bookmark"
                        className="fea icon-ex-md text-slate-400 mr-3"
                      ></i>
                      <div className="flex-1">
                        <h6 className="text-indigo-600 dark:text-white font-medium mb-0">
                        BirthDate : <span className="text-slate-400">{userList.birthDate}</span>
                        </h6>
                      </div>
                    </div>
                    <div className="flex items-center mt-3">
                      <i
                        data-feather="italic"
                        className="fea icon-ex-md text-slate-400 mr-3"
                      ></i>
                      <div className="flex-1">
                        <h6 className="text-indigo-600 dark:text-white font-medium mb-0">
                        BloodGroup : <span className="text-slate-400">{userList?.bloodGroup}</span>
                        </h6>
                      </div>
                    </div>
                    <div className="flex items-center mt-3">
                      <i
                        data-feather="globe"
                        className="fea icon-ex-md text-slate-400 mr-3"
                      ></i>
                      <div className="flex-1">
                      <h6 className="text-indigo-600 dark:text-white font-medium mb-0">
                      EyeColor : <span className="text-slate-400">{userList?.eyeColor}</span>
                        </h6>
                      </div>
                    </div>
                    <div className="flex items-center mt-3">
                      <i
                        data-feather="gift"
                        className="fea icon-ex-md text-slate-400 mr-3"
                      ></i>
                      <div className="flex-1">
                      <h6 className="text-indigo-600 dark:text-white font-medium mb-0">
                      Gender : <span className="text-slate-400">{userList?.gender}</span>
                        </h6>
                      </div>
                    </div>
                    <div className="flex items-center mt-3">
                      <i
                        data-feather="map-pin"
                        className="fea icon-ex-md text-slate-400 mr-3"
                      ></i>
                      <div className="flex-1">
                      <h6 className="text-indigo-600 dark:text-white font-medium mb-0">
                      phone : <span className="text-slate-400">{userList?.phone}</span>
                        </h6>
                      </div>
                    </div>
                    <div className="flex items-center mt-3">
                      <i
                        data-feather="phone"
                        className="fea icon-ex-md text-slate-400 mr-3"
                      ></i>
                      <div className="flex-1">
                      <h6 className="text-indigo-600 dark:text-white font-medium mb-0">
                      university : <span className="text-slate-400">{userList?.university}</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[30px] lg:mt-0">
                  <h5 className="text-xl font-semibold">Company Information :</h5>

                  <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-4 rounded-md bg-white dark:bg-slate-900 mt-6">
                    
                    <div className="flex-1 content ml-4">
                      <h4 className="text-lg text-indigo-600 text-medium">
                        Company Name : <span className="text-slate-400">{userList?.company?.name}</span>
                      </h4>
                      <p className="text-indigo-600 mb-0">
                        <span>
                        title : <span className="text-slate-400">{userList?.company?.title}</span>
                        </span>
                      </p>
                      <p className="text-indigo-600 mb-0">
                        <span>
                        Department : <span className="text-slate-400">{userList?.company?.department}</span>
                        </span>
                      </p>
                      <p className="text-indigo-600 mb-0">
                        <span>
                        Address : <span className="text-slate-400">{userList?.company?.address?.address}</span>
                        </span>
                      </p>
                      <p className="text-indigo-600 mb-0">
                        <span>
                        City : <span className="text-slate-400">{userList?.company?.address?.city}</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--end grid--> */}
        </div>
        {/* <!--end container--> */}
      </section>
    </div>
  );
};

export default DetailsView;
