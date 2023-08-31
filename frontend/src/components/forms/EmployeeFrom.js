import { useState } from "react";
const EmployeeForm = ({ employee, handleChange, handleSubmit }) => {
  const { name, email, mobile_no, designation, gender, course } = employee;
  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="exampleInputName" class="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputName"
          aria-describedby="nameHelp"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputMobile" class="form-label">
          Mobile No.
        </label>
        <input
          type="Phone"
          name="mobile_no"
          onChange={handleChange}
          value={mobile_no}
          class="form-control"
          id="exampleInputName"
          aria-describedby="mobileHelp"
        />
      </div>
      <div class="mb-3">
        <label for="inputGroupSelect01" class="form-label">
          Designation
        </label>
        <select
          class="form-select"
          id="inputGroupSelect01"
          name="designation"
          value={designation}
          onChange={handleChange}
        >
          <option selected>Choose...</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
        </select>
      </div>
      <div className="d-flex align-items-center mt-5">
        <label>Gender</label>
        <div class="form-check ms-5">
          <input
            class="form-check-input"
            type="radio"
            id="inputGender"
            name="gender"
            value="M"
            onChange={handleChange} 
          />
          <label class="form-check-label" for="flexRadioDefault2">
            M
          </label>
        </div>
        <div class="form-check ms-5">
          <input
            class="form-check-input"
            type="radio"
            id="inputGenderF"
            name="gender"
            value="F"
            onChange={handleChange} 
          />
          <label class="form-check-label" for="inputGenderF">
            F
          </label>
        </div>
      </div>
      {/* <div className="d-flex align-items-center mt-4">
        <label>Course</label>
        <div class="form-check ms-5">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            name="course"
          />
          <label class="form-check-label" for="flexCheckDefault">
            MCA
          </label>
        </div>
        <div class="form-check ms-5">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            name="course"
          />
          <label class="form-check-label" for="flexCheckChecked">
            BCA
          </label>
        </div>
        <div class="form-check ms-5">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            name="course"
          />
          <label class="form-check-label" for="flexCheckChecked">
            BSC
          </label>
        </div>
      </div> */}
      <button type="submit" class="btn btn-primary mt-5">
        Submit
      </button>
    </form>
  );
};

export default EmployeeForm;
