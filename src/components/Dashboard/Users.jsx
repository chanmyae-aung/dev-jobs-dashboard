import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./Shadow.css";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";

const Users = () => {
  const [data, setData] = useState([
    {
      id: 1,
      userId: "#9564",
      image:
        "	https://d33wubrfki0l68.cloudfront.net/b12e43e592a36b25ced24c52bc8ae78595f1f2c6/2ceab/assets/images/profiles/profile-24.jpeg",
      name: "Rosalyn Cherry",
      email: "at.egestas.a@eunullaat.co.uk",
      date: "07.01.2021",
      status: "Pending",
    },
    {
      id: 2,
      userId: "#8987",
      image:
        "https://d33wubrfki0l68.cloudfront.net/963edcf9fc0c25098f00370b3b3d021e2ddac277/e69d6/assets/images/profiles/profile-17.jpeg",

      name: " Galena Oliver",
      email: "eleifend.nec@ligulaconsectetuerrhoncus.ca",
      date: "	12.15.2021",
      status: "Pending",
    },
    {
      id: 3,
      userId: "	#4445",
      image:
        "https://d33wubrfki0l68.cloudfront.net/236af360580cfc7622e3a7d309d709a5018937c5/e3ee4/assets/images/profiles/profile-16.jpeg",

      name: " Halee P. Lane",
      email: "diam@nislNullaeu.net",
      date: "03.14.2021",
      status: "Pending",
    },
    {
      id: 4,
      userId: "#9846",
      image:
        "https://d33wubrfki0l68.cloudfront.net/14bd6c6c1ba1296a1542d31d7dd9490e8bc9e472/d1f70/assets/images/profiles/profile-18.jpeg",

      name: " Hally Gilmore",
      email: "lacus.Etiam@Pellentesquehabitantmorbi.net",
      date: "10.04.2021",
      status: "Pending",
    },
    {
      id: 5,
      userId: "#1960",
      image:
        "https://d33wubrfki0l68.cloudfront.net/ea01948f5a48922378b407c27d2b4e5809ed4949/35ecd/assets/images/profiles/profile-11.jpeg",
      name: "Yoko Grimes",
      email: "	ut.eros@Donecporttitor.co.uk",
      date: "10.27.2021",
      status: "Pending",
    },
    {
      id: 6,
      userId: "	#8385",
      image:
        "https://d33wubrfki0l68.cloudfront.net/395009794393b7ec5f8c3faaf9823b0a3692032b/71f55/assets/images/profiles/profile-27.jpeg",
      name: " Jordan Douglas",
      email: "fermentum.convallis.ligula@euenimEtiam.edu",
      date: "03.03.2022",
      status: "Pending",
    },
    {
      id: 7,
      userId: "#9151",
      image:
        "https://d33wubrfki0l68.cloudfront.net/693e2209e9a62e54c60745dd18751d70c3dec10a/9d43e/assets/images/profiles/profile-22.jpeg",
      name: "Tyler Hartman",
      email: "arcu.imperdiet@Pellentesqueultriciesdignissim.com",
      date: "05.01.2022",
      status: "Pending",
    },
    {
      id: 8,
      userId: "	#1246",
      image:
        "https://d33wubrfki0l68.cloudfront.net/d48629dc873bf03c72cd58826b5de65bc800aaac/5bb69/assets/images/profiles/profile-10.jpeg",
      name: " Kitra F. Strickland",
      email: "Donec.consectetuer@dolorNulla.net",
      date: "05.06.2022",
      status: "Pending",
    },
    {
      id: 9,
      userId: "#9380",
      image:
        "https://d33wubrfki0l68.cloudfront.net/408c347002e5d3c7a119c65184b1959dac40f3d7/46d8d/assets/images/profiles/profile-30.jpeg",
      name: " Carly Beard ",
      email: "dolor.dolor@lacusMaurisnon.org",
      date: "06.11.2022",
      status: "Pending",
    },

    {
      id: 10,
      userId: "#4885",
      image:
        "https://d33wubrfki0l68.cloudfront.net/f3d8c9fbcd994759c966476a8349d5d053e38964/e7323/assets/images/profiles/profile-26.jpeg",
      name: "Macon Dean",
      email: "	aliquam@nec.edu",
      date: "02.28.2021",
      status: "Successful",
    },
    {
      id: 11,
      userId: "#2391",
      image:
        "https://d33wubrfki0l68.cloudfront.net/23af178af51cd04f5a1b181720a77e2839e7a4be/5d54f/assets/images/profiles/profile-25.jpeg",
      name: "Kimberly Salinas",
      email: "in.lobortis.tellus@faucibusorci.co.uk",
      date: "03.17.2021",
      status: "Successful",
    },
    {
      id: 12,
      userId: "#9258",
      image:
        "https://d33wubrfki0l68.cloudfront.net/23af178af51cd04f5a1b181720a77e2839e7a4be/5d54f/assets/images/profiles/profile-25.jpeg",
      name: " Leo Johnston",
      email: "	Cum.sociis@Etiambibendumfermentum.co.uk",
      date: "06.27.2021",
      status: "Successful",
    },
    {
      id: 13,
      userId: "#4798",
      image:
        "https://d33wubrfki0l68.cloudfront.net/23af178af51cd04f5a1b181720a77e2839e7a4be/5d54f/assets/images/profiles/profile-25.jpeg",
      name: "Drew R. Hatfield",
      email: "Integer.vulputate@facilisi.edu",
      date: "	07.18.2021",
      status: "Successful",
    },
    {
      id: 14,
      userId: "#8545",
      image:
        "https://d33wubrfki0l68.cloudfront.net/23af178af51cd04f5a1b181720a77e2839e7a4be/5d54f/assets/images/profiles/profile-25.jpeg",
      name: "Orli J. Goodman",
      email: "pede@at.com",
      date: "08.02.2021",
      status: "Successful",
    },
    {
      id: 15,
      userId: "#9265",
      image:
        "https://d33wubrfki0l68.cloudfront.net/9e7ac59225f733be5944b3e91271b33adb30cae7/56230/assets/images/profiles/profile-14.jpeg",
      name: "Hakeem Chan",
      email: "lobortis.augue@natoquepenatibuset.ca",
      date: "03.26.2022",
      status: "Successful",
    },
    {
      id: 16,
      userId: "#3431",
      image:
        "https://d33wubrfki0l68.cloudfront.net/0b34af989cce5e54297f16547b3eff1ace44dad5/eb8ea/assets/images/profiles/profile-20.jpeg",
      name: "Keane Wyatt",
      email: "quam@Ut.org",
      date: "06.18.2022",
      status: "Successful",
    },
    {
      id: 17,
      userId: "#1099",
      image:
        "https://d33wubrfki0l68.cloudfront.net/5dfa4398a7f2beddbcfa617402e193f2f13aaa94/2ecb0/assets/images/profiles/profile-28.jpeg",
      name: " Jack Dennis",
      email: "Quisque.libero.lacus@torquentper.com",
      date: "07.25.2022",
      status: "Successful",
    },

    {
      id: 18,
      userId: "#6701",
      image:
        "https://d33wubrfki0l68.cloudfront.net/5dfa4398a7f2beddbcfa617402e193f2f13aaa94/2ecb0/assets/images/profiles/profile-28.jpeg",
      name: "Nasim Aguirre",
      email: "nisl@mollis.net",
      date: "10.18.2021",
      status: "Overduce",
    },
    {
      id: 19,
      userId: "	#9761",
      image:
        "https://d33wubrfki0l68.cloudfront.net/5dfa4398a7f2beddbcfa617402e193f2f13aaa94/2ecb0/assets/images/profiles/profile-28.jpeg",
      name: " Kareem Q. Weeks",
      email: "eget@aliquetProinvelit.co.uk",
      date: "	05.30.2021",
      status: "Overduce",
    },
    {
      id: 20,
      userId: "#5898",
      image:
        "https://d33wubrfki0l68.cloudfront.net/768c1ecfdff6a59ab55d514b80bd59e8dfa28996/35a64/assets/images/profiles/profile-19.jpeg",
      name: "Kelly Doyle",
      email: "urna.et@volutpatNulladignissim.org",
      date: "04.21.2022",
      status: "Overduce",
    },
  ]);

  const [nameSortDirection, setNameSortDirection] = useState(null);
  const [userIdSortDirection, setUserIdSortDirection] = useState(null);
  const [dateSortDirection, setDateSortDirection] = useState(null);
  const [statusSortDirection, setStatusSortDirection] = useState(null);
  const [emailSortDirection, setEmailSortDirection] = useState(null);
  const [allChecked, setAllChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const sortByName = () => {
    setData((prevData) => {
      const newData = [...prevData];
      newData.sort(
        (a, b) => a.name.localeCompare(b.name) * (nameSortDirection || 1)
      );
      setNameSortDirection((prevDirection) => (prevDirection === 1 ? -1 : 1));
      return newData;
    });
  };

  const sortByUserId = () => {
    setData((prevData) => {
      const newData = [...prevData];
      newData.sort(
        (a, b) => a.userId.localeCompare(b.userId) * (userIdSortDirection || 1)
      );
      setUserIdSortDirection((prevDirection) => (prevDirection === 1 ? -1 : 1));
      return newData;
    });
  };

  const sortByDate = () => {
    setData((prevData) => {
      const newData = [...prevData];
      newData.sort(
        (a, b) =>
          (new Date(a.date) - new Date(b.date)) * (dateSortDirection || 1)
      );
      setDateSortDirection((prevDirection) => (prevDirection === 1 ? -1 : 1));
      return newData;
    });
  };

  const sortByStatus = () => {
    setData((prevData) => {
      const newData = [...prevData];
      newData.sort(
        (a, b) => a.status.localeCompare(b.status) * (statusSortDirection || 1)
      );
      setStatusSortDirection((prevDirection) => (prevDirection === 1 ? -1 : 1));
      return newData;
    });
  };

  const sortByEmail = () => {
    setData((prevData) => {
      const newData = [...prevData];
      newData.sort(
        (a, b) => a.email.localeCompare(b.email) * (emailSortDirection || 1)
      );
      setEmailSortDirection((prevDirection) => (prevDirection === 1 ? -1 : 1));
      return newData;
    });
  };

  const getArrowIcon = (sortDirection) => {
    if (sortDirection === 1) {
      return (
        <div className="flex flex-col items-center">
          <VscTriangleUp /> <VscTriangleDown style={{ opacity: 0.5 }} />
        </div>
      );
    } else if (sortDirection === -1) {
      return (
        <div className="flex flex-col items-center">
          <VscTriangleUp style={{ opacity: 0.5 }} /> <VscTriangleDown />
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center">
        <VscTriangleUp style={{ opacity: 1 }} />{" "}
        <VscTriangleDown style={{ opacity: 1 }} />
      </div>
    );
  };

  const handleCheckboxChange = (index) => {
    const updatedData = [...data];
    updatedData[index].checked = !updatedData[index].checked;
    setData(updatedData);

    const allChecked = updatedData.every((item) => item.checked);
    setAllChecked(allChecked);
  };

  const handleCheckAll = () => {
    const updatedData = data.map((item) => ({
      ...item,
      checked: !allChecked,
    }));
    setData(updatedData);
    setAllChecked(!allChecked);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Math.ceil(data.length / itemsPerPage);
  const paginationLinks = Array.from({ length: pageNumbers }, (_, i) => i + 1);

  return (
    <div className="bg-white flex flex-col rounded-xl shadow-lg">
      <div className="flex justify-between items-center p-5">
        <h5 className="text-sm font-bold tracking-tight">USERS</h5>
        <BsThreeDotsVertical className="text-xl text-[#a8b2bc]" />
      </div>

      <div className="">
        <table className="w-full">
          <thead className="bg-[#f4f5f6] p-5">
            <tr>
              <th className="pe-8 text-start py-2 px-4">
                <input
                  type="checkbox"
                  checked={allChecked}
                  onChange={handleCheckAll}
                  className="inputShadow"
                />
              </th>
              <th
                className=" text-start text-xs text-gray-400  font-semibold  py-2 "
                onClick={sortByName}
              >
                <span className="flex items-center gap-1">
                  {" "}
                  Full name {getArrowIcon(nameSortDirection)}
                </span>
              </th>
              <th
                onClick={sortByEmail}
                className="  text-xs text-start font-semibold text-gray-400 py-2"
              >
                <span className="flex items-center gap-1">
                  {" "}
                  Email {getArrowIcon(emailSortDirection)}
                </span>
              </th>
              <th
                onClick={sortByUserId}
                className="  text-xs text-start font-semibold text-gray-400 py-2"
              >
                <span className="flex items-center gap-1">
                  User ID {getArrowIcon(userIdSortDirection)}
                </span>
              </th>
              <th
                onClick={sortByDate}
                className="  text-xs text-start font-semibold text-gray-400 py-2"
              >
                <span className="flex items-center gap-1">
                  Signed up {getArrowIcon(dateSortDirection)}
                </span>
              </th>
              <th
                onClick={sortByStatus}
                className="  text-xs text-start font-semibold text-gray-400 py-2"
              >
                <span className="flex items-center gap-1">
                  Status {getArrowIcon(statusSortDirection)}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => {
              return (
                <tr
                  key={item.id}
                  className="h-[60px] border-b border-b-gray-100 hover:bg-blue-50 transition"
                >
                  <td className="py-2 px-4">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                  <td className="py-2 text-sm font-bold">
                    <div className="flex items-center gap-2">
                      <div>
                        <img
                          src={item?.image}
                          className="h-[30px] w-[30px] rounded-full"
                          alt=""
                        />
                      </div>
                      <div>{item.name}</div>
                    </div>
                  </td>
                  <td className="py-2 text-sm">{item.email}</td>
                  <td className="py-2 text-sm">{item.userId}</td>
                  <td className="py-2 text-sm">{item.date}</td>
                  <td className="py-2 text-sm">
                    <div className="flex items-center gap-2">
                      <p
                        className={`
                ${
                  (item.status === "Successful" && "bg-green-500") ||
                  (item.status === "Pending" && "bg-orange-400") ||
                  (item.status === "Overduce" && "bg-red-500")
                } w-[7px] h-[7px] rounded-full
              `}
                      ></p>
                      {item.status}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center gap-2 p-5">
        <div className="text-sm text-gray-400">
          showing : {startIndex + 1} - {endIndex} of {data.length}
        </div>
        <div className="flex border rounded-lg overflow-hidden">
          {paginationLinks.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-3 py-1 text-[#00C5D9] text-md ${
                pageNumber === currentPage ? "bg-[#00C5D9] text-white" : ""
              }`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
