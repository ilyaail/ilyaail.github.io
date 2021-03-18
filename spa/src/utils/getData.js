import axios from 'axios';

export const getData = (searchTerms, limit, offset) => {
  const trending = 'trending?';
  const searchQuery = `search?&q=${searchTerms}`;
  const emptyResult = {
    src:
      'https://media1.giphy.com/media/eIV8AvO3EC3xhscTIW/giphy.gif?cid=ecf05e47xkz4isf9vg0xdjifoalk7g8517ydd2alu4flinwq&rid=giphy.gif',
  };

  return axios
    .get(
      `https://api.giphy.com/v1/gifs/${
        searchTerms ? searchQuery : trending
      }&api_key=sJyfAmgIhQ0eC8s93fpN2YxXTDK2PKHr&limit=${limit}&offset=${offset}&rating=g`,
    )
    .then(response => {
      const imgsArrTranding = response.data.data;
      const images = Object.values(imgsArrTranding);
      const result = images.map(item => {
        return {
          src: item.images.original.webp,
        };
      });
      if (result.length === 0) {
        result.push(emptyResult);
      }

      return result;
    })
    .catch(function(err) {
      console.log(err);
    });
};
