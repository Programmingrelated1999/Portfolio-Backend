//create projectRouter from express Router module
const projectRouter = require("express").Router();
//require Modals
const Projects = require("../models/projects");

//GET ALL
projectRouter.get("/", (request, response) => {
  Projects.find({}).then((projects) => {
      response.json(projects);
    });
});

//GET ONE
projectRouter.get("/:id", (request, response) => {
    const id = request.params.id;
    Projects.findById(id).then((project) => {
        response.json(project);
      });
});

//POST
projectRouter.post("/", async (request, response) => {
    let project = new Projects(
        {
            name: request.body.name,
            description: request.body.description,
            image: request.body.image,
            purpose: request.body.purpose,
            live: request.body.live,
            github: request.body.github
        }
    );
    const savedProject = await project.save();
    response.json(savedProject);
});

//POST
projectRouter.put("/:id", async (request, response) => {
    let projectToUpdate = await Projects.findById(request.params.id);

    projectToUpdate.name = request.body.name? request.body.name: projectToUpdate.name;
    projectToUpdate.description = request.body.description? request.body.description: projectToUpdate.description;
    projectToUpdate.image = request.body.image? request.body.image: projectToUpdate.image;
    projectToUpdate.purpose = request.body.purpose? request.body.purpose: projectToUpdate.purpose;
    projectToUpdate.live = request.body.live? request.body.live: projectToUpdate.live;
    projectToUpdate.github = request.body.github? request.body.github: projectToUpdate.github;

    const savedProject = await project.save();
    response.json(savedProject);
});

//DELETE
projectRouter.delete("/:id", async (request, response) => {
    let projectToDelete = await Projects.findById(request.params.id);

    const deletedProject = await projectToDelete.remove();
    response.json(deletedProject);
});

module.exports = projectRouter;
