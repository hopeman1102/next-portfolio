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

module.exports = Project;