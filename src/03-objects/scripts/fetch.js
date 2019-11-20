
// const fetch =  require('node-fetch');

const functions = {

  url: 'https://uinames.com/api/?amount=10',

  getFirstName(data) {
    return data[0].name;
  },

  getAllFirstNames(data) {
    return data.map(element => element.name);
  },
};

export default functions;
