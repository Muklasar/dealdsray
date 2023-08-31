import { useState } from "react";
import EmployeeForm from "../../components/forms/EmployeeFrom";

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
                    <EmployeeForm
                      employee={employee}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
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
export default CreateEmployee;
