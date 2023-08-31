import axios from "axios";

export const createEmployee = async (employee) => {
  return await axios.post(`${process.env.REACT_APP_API}/employee`, employee, {
    headers: {},
  });
};
