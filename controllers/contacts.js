const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db('cse341').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('cse341').collection('contacts').findOne({ _id: userId });
    if (!result) {
      res.status(404).json({ message: 'Object not found' });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAll, getSingle};
