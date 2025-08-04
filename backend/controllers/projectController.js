const Project = require('../models/Project');

const getProjects = async (req, res) => {
  const projects = await Project.find({ createdBy: req.user._id });
  res.json(projects);
};

const createProject = async (req, res) => {
  const { name, description, startDate, endDate } = req.body;
  const project = await Project.create({
    name,
    description,
    startDate,
    endDate,
    createdBy: req.user._id,
    progress: 0
  });
  res.status(201).json(project);
};

const updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(project);
};

const deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: 'Project deleted' });
};

module.exports = { getProjects, createProject, updateProject, deleteProject };

