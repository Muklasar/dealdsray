import { useEffect, useState } from "react";
import EmployeeForm from "../../components/forms/EmployeeFrom";
import {
  createEmployee,
  readEmployee,
  updateEmployee,
} from "../../function/employee";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import UpdateFrom from "../../components/forms/UpdateFrom";
import FileUpload from "../../components/forms/FileUpload";

const intialState = {
  name: "",
  email: "",
  mobile_no: "",
  designation: "",
  gender: "",
  course: "",
  images: []
};

const UpdateEmployee = () => {
  const [employee, setEmployee] = useState(intialState);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const { email } = useParams();
  console.log("update email", email);

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = () => {
    readEmployee(email)
      .then((res) => {
        console.log("update res", res);
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log("update err", err);
      });
  };

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("employee", employee);
    updateEmployee(employee)
      .then((res) => {
        console.log("res", res.data);
        toast.success(`employee is upadated`);
        navigate('/dashboard/employees')
      })
      .catch((err) => {
        console.log("err", err.response.data);
        toast.error(err.response.data);
      });
  };
  return (
    <main id="main" class="main">
      <div class="pagetitle">
        <p className="dashboard-heading">Update Employee</p>
      </div>
      <section class="section dashboard mt-3">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div className="row ps-3 pe-2 mt-3">
                  <div className="col-12 p-1 pe-2 dashbord-news-card">
                    <div className="p-4">
                      <FileUpload
                        setValues={setEmployee}
                        values={employee}
                        loading={loading}
                        setLoading={setLoading}
                      />
                    </div>
                    <UpdateFrom
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
export default UpdateEmployee;
