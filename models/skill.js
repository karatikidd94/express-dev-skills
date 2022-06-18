const skills = [
    {id: 125223, skill: 'Front End', done: true},
    {id: 127904, skill: 'Python', done: true},
    {id: 139608, skill: 'Back End', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New skill wouldn't be done :)
    skill.done = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function update(editCriteria, id) {
    id = parseInt(id);
    const skillUpdate = skills.find(skill => skill.id === id);
    skillUpdate.skill = editCriteria.skill;
  }

