const helloFunction = (req, res, next) => {
    res.json("Joseph Asante");
  };

const anotherPerson = (req, res, next) => {
    res.json("Isaac Asiedu");
  };

module.exports = {helloFunction, anotherPerson};