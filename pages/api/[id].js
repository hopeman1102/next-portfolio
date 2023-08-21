import connectDB from '../../middleware/mongodb';

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

mongoose.models = {};

const ProjectSchema = new mongoose.Schema({
    category: { type: ObjectId, required: true },
    resume: { type: ObjectId, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String }],
    keywords: [{ type: String }],
    url: { type: String, default: '' },
    github: { type: String, default: '' }
});

const Project = mongoose.model('Project', ProjectSchema);

const BidSchema = new mongoose.Schema({
    email: { type: String, required: true },
    jobURL: { type: String, required: true },
    projects: [{type: ObjectId}],
    auto: { type: Boolean, default: false },
    status: { type: Number, default: 0 }, // 0: sending, 1: send, 2: hired
}, 
{   
    timestamps: true    
});

const Bid = mongoose.model('Bid', BidSchema);

const BaseSchema = new mongoose.Schema(
{
    country: { type: String, required: true },
    photo: { type: String, rquired: true },
    firstName: { type: String },
    lastName: { type: String },
    education: [{
        type: {
            school: { type: String, required: true },
            degree: { type: String, default: "Bachelor of Computer Science (BCompSc)"},
            study: { type: String, default: "Computer science" },
            from: { type: Number, default: 2011 },
            to: { type: Number, default: 2014},
            description: { type: String, deafult: "" }
        },
        required: true
    }],
    experience: [{
        type: {
            title: { type: String, default: "Software Engineer" },
            company: { type: String, required: true },
            location: { type: String },
            start: {
                type: {
                    year: { type: Number },
                    month: { type: Number }
                },
                required: true,
                default: {
                    year: 2014, month: 1
                }
            },
            end: {
                type: {
                    year: { type: Number },
                    month: { type: Number }
                },
                required: true,
                default: {
                    year: 2022, month: 2
                }
            },
            description: { type: String, default: "" }
        },
        required: true
    }],
    address: {
        type: {
            street: { type: String, required: true },
            city: { type: String, required: true },
            phone: { type: String, required: true }
        },
        required: true
    }
});

const Base = mongoose.model('Base', BaseSchema);

const ResumeSchema = new mongoose.Schema(
{
    category: { type: ObjectId, required: true },
    baseId: {type: ObjectId, required: true, ref: 'Base'},
    niche: { type: String, required: true },
    title: { type: String, required: true },
    hourly: { type: Number, required: true },
    overView: { type: String, required: true },
    skills: [{type: String}],
    coverLetter: { type: String },
    count: { type: Number, default: 2 },
    useCount: { type: Number, default: 0 }
});

const Resume = mongoose.model('Resume', ResumeSchema);

const AccountSchema = new mongoose.Schema(
{
    email: { type: String, required: true },
    gmail: { type: String, required: true},
    category: { type: ObjectId, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    photo: { type: String, required:  true },
    password: { type: String, required: true, default: "wkahtlr0327" },
    resumeId: { type: ObjectId, required: true, ref: 'Resume' },
    connects: { type: Number, default: 50 },
    status: { type: Number, required: true, default: 0 },      // 0: not sign up, 1: sign up, 2: verify, 3: profile, 4: submit, 5: block 
    verifyURL: { type: String }
}, 
{
    timestamps: true
}
);

const Account = mongoose.model('Account', AccountSchema);

const NicheSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rss: { type: String, required: true },
    enable: {type: Boolean, default: true },
    auto: { type: Boolean, default: false },
    mix: { type: Boolean, default: false }
});

const Niche = mongoose.model('Niche', NicheSchema);


const handler = async (req, res) => {
    if(req.query.id === 'undefined') {
        return res.status(400).json({ success: false });
    }
    try {
        const bid = await Bid.findById(req.query.id);
        if(bid) {
            const account = await Account.findOne({email: bid.email});
            if(account) {
                const category = await Niche.findById(account.category);
                const resume = await Resume.findById(account.resumeId).populate('baseId');
                const projects = await Project.find({_id: {$in: bid.projects}});
                if(projects.length == 0) {
                    return res.status(400).json({ success: false });
                }
                const data = {
                    category: category.name,
                    firstName: account.firstName,
                    lastName: account.lastName,
                    photo: account.photo,
                    overView: resume.overView,
                    skills: resume.skills,
                    education: resume.baseId.education,
                    experience: resume.baseId.experience,
                    projects
                }
                return res.status(200).json({ success: true, data })
            }
        } else {
            const account = await Account.findById(req.query.id);
            if(account) {
                const category = await Niche.findById(account.category);
                const resume = await Resume.findById(account.resumeId).populate('baseId');
                const projects = await Project.find({resume});
                if(projects.length == 0) {
                    return res.status(400).json({ success: false });
                }
                const data = {
                    category: category.name,
                    firstName: account.firstName,
                    lastName: account.lastName,
                    photo: account.photo,
                    overView: resume.overView,
                    skills: resume.skills,
                    education: resume.baseId.education,
                    experience: resume.baseId.experience,
                    projects
                }
                return res.status(200).json({ success: true, data })
            }
        }
        return res.status(400).json({ success: false });
    } catch(e) {
        return res.status(400).json({ success: false });
    }
};

export default connectDB(handler);