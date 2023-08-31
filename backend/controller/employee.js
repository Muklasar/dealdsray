const Employee = require("../models/employee");

exports.remove = async (req, res) => {
  try {
    const { email } = req.params;
    const employee = await Employee.findOneAndRemove({ email }).exec();
    res.json(employee);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
};


exports.update = async (req, res) => {
  try {
    const { email } = req.params;
    const employee = await Employee.findOneAndUpdate({ email }, req.body, {
      new: true,
    }).exec();
    res.json(employee);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
};

exports.create = async (req, res) => {
  try {
    console.log(req.body)
    const { email } = req.body;
    const dublicateEmail = await Employee.findOne({ email });
    if (dublicateEmail) {
      throw new Error("Email is already in use.");
    }
    const employee = await new Employee(req.body).save();
    res.json(employee);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
};

exports.list = async (req, res) => {
  try {
    const employees = await Employee.find({}).exec();
    res.json(employees);
  } catch (err) {
    res.status(400).json(err.message);
  }
};


exports.read = async(req, res)=>{
  try {
    const { email } = req.params
    console.log('email', email)
    const employee = await Employee.findOne({email}).exec()
    res.json(employee)
  } catch (err) {
    res.status(400).json(err.message)
  }
}