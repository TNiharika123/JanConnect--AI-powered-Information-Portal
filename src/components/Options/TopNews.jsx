  import React, { useContext, useEffect, useState } from 'react';
  import LocationContext from '../context/LocationContext';
  import './topnews.css';

  const newsDataset = [
      {
          "Title": "Fire at Vaishno Devi shrine complex; cash counter damaged",
          "Description": "No one was injured in the fire, which broke out from the structure adjoining the 'Bhawan' (sanctum sanctorum), the officials said.",
          "Date": "June 8, 2021 7:28:32 PM",
          "Category": "India",
          "URL": "https://indianexpress.com/article/india/vaishno-devi-jammu-fire-7349829/",
          "Location": "jammu-kashmir",
          "ImageUrl": "https://indianexpress.com/wp-content/uploads/2021/06/Jammu-2-1.jpg"
      },
      {
          "Title": "Had not gone to meet Nawaz Sharif, says Uddhav Thackeray as he plays down one-on-one meeting with PM Modi",
          "Description": "Uddhav Thackeray led a delegation of his cabinet colleagues comprising his deputy Ajit Pawar, a senior NCP leader, and Congress' Ashok Chavan to meet Narendra Modi and discuss issues pertaining to the state.",
          "Date": "June 8, 2021 6:56:40 PM",
          "Category": "India",
          "URL": "https://indianexpress.com/article/india/had-not-gone-to-meet-nawaz-sharif-says-uddhav-thackeray-as-he-plays-down-one-on-one-meeting-with-pm-modi-7349795/",
          "Location": "mumbai",
          "ImageUrl": "https://images.indianexpress.com/2021/06/PTI06_08_2021_000055B-1.jpg?w=640"
      },
      {
          "Title": "Corruption case: Former Haryana I-T deputy commissioner gets 4 years in prison",
          "Description": "It was in 2016 that the CBI had arrested Nitin Garg deployed in Sirsa at the time, for accepting a bribe of Rs two lakh from a private firm proprietor for giving relief while levying penalty.",
          "Date": "June 8, 2021 6:25:24 PM",
          "Category": "India",
          "URL": "https://indianexpress.com/article/india/corruption-case-former-haryana-i-t-deputy-commissioner-gets-4-years-in-prison-7349752/",
          "Location": "haryana",
          "ImageUrl": "https://images.indianexpress.com/2021/06/jail-2.jpg?w=640"
      },
      {
          "Title": "Kannur MP K Sudhakaran appointed chief of Congress in Kerala",
          "Description": "Sudhakaran will replace Ramachandran who had apprised the national leadership of his desire to step down, taking responsibility for the party's debacle in the recent Assembly elections.",
          "Date": "June 8, 2021 5:04:40 PM",
          "Category": "India",
          "URL": "https://indianexpress.com/article/india/sudhakaran-appointed-chief-of-congress-in-kerala-7349696/",
          "Location": "kochi",
          "ImageUrl": "https://img.etimg.com/thumb/msid-83358492,width-300,height-225,imgsize-527629,resizemode-75/newly-appointed-kpcc-president-k-sudhakaran-at-his-residence-in-thiruvananthapuram-on-tuesday.jpg"
      },
      {
          "Title": "Kerala girl of Class 5 writes to CJI, lauds SC for saving lives in fight with Covid",
          "Description": "Chief Justice N V Ramana responded to the Class V student of Kerala, Lidwina Joseph, giving her best wishes for her 'beautiful letter' and 'heart-warming illustration of a judge at work'.",
          "Date": "June 8, 2021 4:43:10 PM",
          "Category": "India",
          "URL": "https://indianexpress.com/article/india/kerala-girl-of-class-5-writes-to-cji-lauds-sc-for-saving-lives-in-fight-with-covid-7349677/",
          "Location": "kochi",
          "ImageUrl": "https://images.indianexpress.com/2021/05/nv-ramana.jpg?w=640"
      },
      {
          "Title": "Madhya Pradesh govt gets HC notice on communal clashes during fundraising for Ram temple",
          "Description": "Hearing a petition on the matter filed by former chief minister Digvijaya Singh, the HC asked the government to respond in six weeks on the alleged negligence in curbing communal clashes in Ujjain, Indore and Mandsaur.",
          "Date": "June 8, 2021 4:10:12 PM",
          "Category": "India",
          "URL": "https://indianexpress.com/article/india/mp-hc-seeks-govt-response-on-clashes-in-indore-ujjain-mandsaur-7349546/",
          "Location": "bhopal",
          "ImageUrl": "https://images.indianexpress.com/2021/06/Indore22.jpg?w=640"
      },
      {
          "Title": "Uddhav Thackeray meets PM Modi; discusses Maratha quota issue, GST compensation",
          "Description": "Deputy Chief Minister and senior NCP leader Ajit Pawar, and senior Congress leader Ashok Chavan accompanied the Maharashtra Chief Minister.",
          "Date": "June 8, 2021 2:25:23 PM",
          "Category": "India",
          "URL": "https://indianexpress.com/article/india/maharashtra-cm-uddhav-thackeray-pm-modi-maratha-quota-gst-compensation-7349474/",
          "Location": "mumbai",
          "ImageUrl": "https://images.indianexpress.com/2021/06/E3VzhRaVoAwOU5Y.jpg?w=640"
      },
      {
          "Title": "New Covid-19 vaccination guidelines out, allocation based on state population",
          "Description": "As per the revised guidelines, the Centre will buy 75 per cent of doses from vaccine makers, including 25 per cent of the state quota, and give it for free to state governments.",
          "Date": "June 8, 2021 4:27:29 PM",
          "Category": "India",
          "URL": "https://indianexpress.com/article/india/govt-releases-revised-covid-19-vaccination-guidelines-7349408/",
          "Location": "delhi",
          "ImageUrl": "https://images.indianexpress.com/2021/06/covid-10.jpg?w=640"
      },
      {
          "Title": "Dantewada: 24-year-old tribal woman killed in ‘maoist encounter’; family claims it was staged, alleges rape",
          "Description": "The victim's mother alleged she was raped, and claimed her body was mutilated when it was handed to them.",
          "Date": "June 8, 2021 2:53:00 PM",
          "Category": "India",
          "URL": "https://indianexpress.com/article/india/chhattisgarh-geedam-maoist-encounter-alleged-rape-7349199/",
          "Location": "chhattisgarh",
          "ImageUrl": "https://static.toiimg.com/thumb/msid-83313881,imgsize-95354,width-400,height-225,resizemode-72/83313881.jpg"
      },
      {
          "Title": "Fire at TMC MLA Madan Mitra’s residence in Kolkata",
          "Description": "Mitra along with his family members rushed out of the house as soon as the fire was spotted in a room on the ground floor. A visibly shaken Mitra was seen sitting outside the house.",
          "Date": "June 8, 2021 12:53:24 PM",
          "Category": "India",
          "URL": "https://indianexpress.com/article/india/fire-madan-mitras-residence-kolkata-7349336/",
          "Location": "kolkata",
          "ImageUrl": "https://images.indianexpress.com/2016/09/madan-mitra-12001.jpg?w=640"
      },
      {
          "Title": "Why govt used COVID-19 data as ‘propaganda tool’ rather than to stop virus, asks Priyanka Gandhi",
          "Description": "Congress leader Priyanka Gandhi Vadra, in her posers to the Centre, she asked why there is such a massive deficit between official death data of Covid and unofficial data gathered from crematoriums, graveyards and other sources.",
          "Date": "June 8, 2021 12:21:43 PM",
          "Category": "India",
          "URL": "https://indianexpress.com/article/india/govt-covid-19-data-propaganda-tool-than-stop-virus-priyanka-gandhi-7349327/",
          "Location": "delhi",
          "ImageUrl": "https://images.indianexpress.com/2021/06/priyanka-gandhi.jpg?w=640"
      },
      {
        "Title":"Twitter seeks more time from govt to comply with new IT rules: Report	According to sources, the micro-blogging site has said that it intends to comply with the rules but needs more time due to the pandemic situation in India.",
        "Date":"	June 8, 2021 2:45:13 PM",
        "Category":"India",
        "URL":"	https://indianexpress.com/article/india/twitter-seeks-more-time-from-govt-to-comply-with-new-it-rules-7349026/",
          "Location":"mumbai",
          "ImageUrl":"	https://images.indianexpress.com/2021/06/Untitled-design-2021-06-06T123845.012.png?w=640"
      },
      {
        "Title":"10 yrs ago, Modi as CM had flagged UPA threat; federal shoe now on the other foot	Over the last one month, especially after the May 2 election results, several state governments are accusing the Modi government of hardening Centre-state battlelines on a sweeping range of issues.",
        "Date":"June 4, 2021 1:53:25 PM	",
        "Category":"India",
        "URL":"https://indianexpress.com/article/india/10-yrs-ago-modi-as-cm-had-flagged-upa-threat-federal-shoe-now-on-the-other-foot-7343235/	",
        "Location":"delhi",
        "ImageUrl":"https://images.indianexpress.com/2021/06/Modi-Gujarat-CM.jpg?w=640"
      }
  ];

  const TopNews = () => {
      const { location } = useContext(LocationContext); // Get the location from context
      const [news, setNews] = useState([]);

      useEffect(() => {
          const fetchNews = () => {
              // Filter news based on location
              const filteredNews = newsDataset.filter(item =>
                  item.Location.toLowerCase() === (location || 'delhi').toLowerCase()
              );
              setNews(filteredNews);
          };
          fetchNews();
      }, [location]); // Re-fetch news when the location changes

      return (
          <div className="container-layout">
              <div className="left-container">
              {/* <img /> */}
              </div>
              <div className="right-container">
              <div className="top-right-container">
      {news.slice(0, 4).map((item, index) => (
          <div key={index} className="grid-item">
              <h3>{item.Title}</h3>
              <p>{item.Location}</p>
              <a href={item.URL}>Read more</a>
          </div>
      ))}
  </div>


              </div>
          </div>
      );
  };

  export default TopNews;
