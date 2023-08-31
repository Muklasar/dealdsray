import { useState } from "react";
import EmployeeForm from "../../components/forms/EmployeeFrom";
import { createEmployee } from "../../function/employee";
import { toast } from "react-toastify";

const intialState = {
  name: "",
  email: "",
  mobile_no: "",
  designation: "",
  gender: "",
  course: "",
};

const CreateEmployee = () => {
  const [employee, setEmployee] = useState(intialState);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("employee", employee);
    createEmployee(employee)
      .then((res) => {
        console.log("res", res.data);
        toast.success(`${res.data.name} is created`)
        setEmployee(intialState)
      })
      .catch((err) => {
        console.log("err", err.response.data)
        toast.error(err.response.data)
    });
  };
  return (
    <main id="main" class="main">
      <div class="pagetitle">
        <p className="dashboard-heading">Create Employee</p>
      </div>
      <section class="section dashboard mt-3">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div className="row ps-3 pe-2 mt-3">
                  <div className="col-12 p-1 pe-2 dashbord-news-card">
                    {/* {employee && employee.name && */}
                    <EmployeeForm
                      employee={employee}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                    />
                    {/* } */}
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
export default CreateEmployee;
