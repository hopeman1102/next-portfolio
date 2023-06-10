import connectDB from '../../middleware/mongodb';
import Project from '../../models/project';

const handler = async (req, res) => {
  const projects = await Project.find({});
  return res.status(200).send(projects);
};

export default connectDB(handler);