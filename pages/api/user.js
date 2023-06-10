import connectDB from '../../middleware/mongodb';

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const ProjectSchema = new mongoose.Schema(
{
    category: { type: ObjectId, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String }],
    skills: [{ type: String }],
    url: { type: String, default: '' },
    github: { type: String, default: '' }
});

mongoose.models = {};

const Project = mongoose.model('Project', ProjectSchema);

const handler = async (req, res) => {
  const projects = await Project.find({});
  return res.status(200).send(projects);
};

export default connectDB(handler);