import { useState } from "react";
import EmployeeForm from "../../components/forms/EmployeeFrom";
import { createEmployee } from "../../function/employee";
import { toast } from "react-toastify";
import FileUpload from "../../components/forms/FileUpload";
import { useNavigate } from "react-router-dom";

const intialState = {
  name: "",
  email: "",
  mobile_no: "",
  designation: "",
  gender: "",
  course: "",
  images:[]
};

const CreateEmployee = () => {
  const [employee, setEmployee] = useState(intialState);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("employee", employee);
    createEmployee(employee)
      .then((res) => {
        console.log("res", res.data);
        toast.success(`employee has created`)
        setEmployee(intialState)
        navigate('/dashboard/employees')
      })
      .catch((err) => {
        console.log("err", err.response.data)
        toast.error(err.response.data)
    });
  };
  console.log('employee', employee)
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
                    <div className="p-4">
                        <FileUpload
                            setValues={setEmployee}
                            values={employee}
                            loading={loading}
                            setLoading={setLoading}
                        />
                    </div>
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
