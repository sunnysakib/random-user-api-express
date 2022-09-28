let tools = [
    {id:1, name: 'sunny'},
    {id:2, name: 'sakib'},
    {id:3, name: 'arif'},
    {id:4, name: 'asad'},
    {id:5, name: 'joy'},
    {id:6, name: 'labib'},
    {id:7, name: 'rakib'},
    {id:8, name: 'arnob'},
    {id:9, name: 'ajad'},
];

module.exports.getAllTools = (req, res, next) => {
   res.send(tools)
};

module.exports.postAllTools = (req, res, next) => {
    console.log(req.body);
    const toolAdded = req.body;
    tools.push(toolAdded);
    res.send(tools);
};

module.exports.getToolDetail = (req, res, next) => {
    // const {id} = req.params;
    // const fondTool = tools.find(tool => tool.id == id)
    // res.send(fondTool)
};

module.exports.updateTool = (req, res, next) => {
    const {id} = req.params;
    const newData = tools.find(tool => tool.id == id)
    newData.id = id;
    newData.name = req.body.name;
    res.send(newData);
}

module.exports.deleteTool = (req, res, next) => {
    const {id} = req.params;
    tools = tools.filter(tool => tool.id != id);
    res.send(tools)
}
