module.exports = function(app) {
  const bodyParser = require("body-parser");
  const resources = []
  let resourceCounter = 0

  app.use(bodyParser.json({ limit: "5mb" }))

  app.route("/cards")
     /* INDEX */
     .get((req, res) => {
       res.json(resources)
     })
     /* CREATE */
     .post((req, res) => {
       const date = (new Date).toISOString()
       const resource = Object.assign({}, req.body, {
         id: ++resourceCounter,
         createdAt: date,
         updatedAt: date
       })
       resources.push(resource)
       res.status(201).json(resource)
     })
  app.route("/cards/:id")
     /* SHOW */
     .get((req, res) => {
       const resource = resources.filter( ({ id }) => (id === parseInt(req.params.id)) )[0]
       if (resource) {
         res.json(resource)
       }
       else {
         res.status(404).send();
       }
     })
     /* UPDATE */
     .put((req, res) => {
       let resourceIndex = null
       const resource = resources.filter( ({ id }, index) => {
         if (id === parseInt(req.params.id)) resourceIndex = index;
         return id === parseInt(req.params.id)
       } )[0]
       if (resource) {
         const nextTodo = Object.assign(resource, req.body, {
           id: resource.id,
           createdAt: resource.createdAt,
           updatedAt: (new Date).toISOString()
         })
         resources.splice(resourceIndex, 1, nextTodo)
         res.status(202).json(nextTodo)
       }
       else {
         res.status(404).send();
       }
     })
     /* DESTROY */
     .delete((req, res) => {
       let resourceIndex = null
       const resource = resources.filter( ({ id }, index) => {
         if (id === parseInt(req.params.id)) resourceIndex = index;
         return id === parseInt(req.params.id)
       } )[0]

       if (resource) {
         resources.splice(resourceIndex, 1)
         res.status(204).send();
       }
       else {
         res.status(404).send();
       }
     })
}
