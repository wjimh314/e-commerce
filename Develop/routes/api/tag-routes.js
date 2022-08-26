const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
 Tag.findAll({
  attributes: ["id", 'tag_name'],
  include: [
    {
      model: Product,
      attributes: ["id," "product_name", "price", "stock","category_id" ]
    }
  ]
 })
.then(dbTagData => res.json(dbTagData))
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});



router.get('/:id', (req, res) => {
 Tag.findOne({
  where: {
    id: req.params.id
  },
  attributes: ["id", "tag_name"],
  includes: [
{
  model:Product,
  attributes: ["id", "product_name", "price", "stock","category_id"]
  }
]
 })
 .then(dbTagData => {
  if (!dbTagData {
    res.status(400).json({message: "no tags found"});
 return;
  }
  res.json(dbTagData);
})
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});

router.post('/', (req, res) => {
 Tag.create({
  tag_name: req.body.tag_name
 })
 .then(dbTagData => res.json(dbTagData))
 .catch(err => {
  console.log(err);
  res.status(500).json(err);
 });
});


router.put('/:id', (req, res) => {
 Tag.update




});





router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
