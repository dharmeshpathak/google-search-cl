//  import axios from 'axios'
// // const API_KEY = process.env.React_App_Google_Search_Api_Key
// // const ENGINE_KEY = process.env.React_App_Search_Engine_Id 
// export const SearchData = async(term)=>{
//     console.log("in search data og google search")
//     const data = await axios.get(`
// `)
//  const data = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_KEY}&q=${term}`);
    
//  return data;
//  } 
import axios from 'axios';

export const SearchData = async (term) => {
  const { data } = await axios.get(
    'https://www.googleapis.com/customsearch/v1',
    {
    //   params: {
    //     key: "AIzaSyB2cKn4YRwB_zDyvSC0WyU2aZSOyaKtOlo",
    //     cx: "2ca1b8b9860939878",
    //     q: term,
    //   },
      params: {
        key: process.env.React_App_Google_Search_Api_Key,
        cx: process.env.React_App_Search_Engine_Id,
        q: term,
      },
    }
  );

  return data;
};