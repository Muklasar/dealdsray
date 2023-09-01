import axios from "axios";

export const createEmployee = async (employee) => {
  return await axios.post(`${process.env.REACT_APP_API}/employee`, employee, {
    headers: {},
  });
};

export const updateEmployee = async (employee) => {
  return await axios.put(
    `${process.env.REACT_APP_API}/employee/${employee.email}`,
    employee,
    {
      headers: {},
    }
  );
};

export const readEmployee = async (email) => {
  return await axios.get(
    `${process.env.REACT_APP_API}/employee/${email}`
  );
};

export const listEmployee = async (email) => {
  return await axios.get(
    `${process.env.REACT_APP_API}/employees`
  );
};


export const removeEmployee = async (email) => {
  return await axios.delete(
    `${process.env.REACT_APP_API}/employee/${email}`
  );
};
