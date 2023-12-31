import { useEffect, useState } from "react";
import {
  listEmployee,
  removeEmployee,
  searchFilter,
} from "../../function/employee";
import LocalSearch from "../../components/forms/LocalSearch";
import EmpTable from "../../components/table/EmpTable";
import { toast } from "react-toastify";
// import { searchFilter } from "../../../../backend/controller/employee";

const Employees = () => {
  const [emplyees, setEmployees] = useState([]);
  const [keyword, setKeyword] = useState("");

  const handleDelete = (email) => {
    removeEmployee(email)
      .then((res) => {
        console.log(res.data);
        const filterEmployee = emplyees.filter((emp) => emp.email != email);
        setEmployees(filterEmployee);
        toast.success("Emplyee deleted");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    if(keyword===''){
      loadEmployees()
    }
    if (keyword) {
      searchFilter(keyword)
        .then((res) => {
          console.log("serach res", res.data);
          setEmployees(res.data)
        })
        .catch((err) => {
          console.log("search err", err);
        });
      console.log("key", keyword);
    }
  }, [keyword]);

  const loadEmployees = () => {
    listEmployee()
      .then((res) => {
        // console.log(res.data);
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main id="main" class="main">
      <div class="pagetitle d-flex align-items-center justify-content-between mb-0">
        <p className="dashboard-heading">Employees</p>
        <div className="dashboard-heading float-end">
          <LocalSearch keyword={keyword} setKeyword={setKeyword} />
        </div>
      </div>
      <section class="section dashboard ">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div className="row ps-3 pe-2 mt-3">
                  <div className="col-12 p-1 pe-2 dashbord-news-card">
                    {/* <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Unique Id</th>
                          <th scope="col" className="text-center">
                            Image
                          </th>
                          <th scope="col" className="text-center">
                            Name
                          </th>
                          <th scope="col" className="text-center">
                            Email
                          </th>
                          <th scope="col" className="text-center">
                            Mobile No
                          </th>
                          <th scope="col" className="text-center">
                            Designation
                          </th>
                          <th scope="col" className="text-center">
                            Gender
                          </th>
                          <th scope="col" className="text-center">
                            Course
                          </th>
                          <th scope="col" className="text-center">
                            Create date
                          </th>
                          <th scope="col" className="text-center">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {emplyees.length > 0 &&
                          emplyees
                            .filter(searchedName(keyword))
                            // .filter(searchedEmail(keyword))
                            .map((emp, index) => (
                              <tr>
                                <th scope="row">{index + 1}</th>
                                <td className="text-center"></td>
                                <td className="text-center">{emp.name}</td>
                                <td className="text-center">{emp.email}</td>
                                <td className="text-center">{emp.mobile_no}</td>
                                <td className="text-center">
                                  {emp.designation}
                                </td>
                                <td className="text-center">
                                  {emp.gender === "M"
                                    ? "Male"
                                    : emp.gender === "F"
                                    ? "Female"
                                    : ""}
                                </td>
                                <td className="text-center">{emp.course}</td>
                                <td className="text-center">{emp.createdAt}</td>
                                <td className="text-center">@mdo</td>
                              </tr>
                            ))}
                      </tbody>
                    </table> */}
                    <EmpTable
                      data={emplyees}
                      handleDelete={handleDelete}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Page Title --> */}
    </main>
  );
};
export default Employees;
