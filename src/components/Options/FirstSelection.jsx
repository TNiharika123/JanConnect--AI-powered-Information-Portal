import React, { useState } from 'react';
import './firstSelection.css';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';

import { SelectedCategoriesContext } from '../context/SelectedCategoriesContext'; // Correct path // Import the context


const newsData = {
  "Sports": [
    {
      "title": "Para-badminton champ Nitesh Kumar",
      "description": "Para-badminton champ Nitesh Kumar cries foul at BAI’s ‘apathy’, wants PCI to take over operations",
      "url": "https://indianexpress.com/article/sports/sport-others/paralympic-gold-nitesh-kumar-bai-apathy-pci-9562688/",
      "image": "https://images.indianexpress.com/2024/09/Nitesh-Kumar-gold.jpg?w=640"
    },
    {
      "title": "PR Sreejesh Thanks PM Narendra Modi",
      "description": "PR Sreejesh Thanks PM Narendra Modi For Heartfelt Letter Following International Hockey Retirement",
      "url": "https://sports.ndtv.com/hockey/hockey-is-my-life-pr-sreejesh-thanks-pm-modi-for-heartfelt-letter-following-international-hockey-retirement-6543066",
      "image": "https://c.ndtvimg.com/2024-08/84qgffu_pr-sreejesh_625x300_09_August_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
    },
    {
      "title": "India’s Chess Olympiad Campaign Begins",
      "description": "India has fielded strong teams in both the Open and Women's sections for the 2024 Chess Olympiad, with top players like R. Gukesh and Arjun Erigaisi aiming for a podium finish.",
      "url": "https://indianexpress.com/article/sports/chess/chess-olympiad-2024-praggnanandhaa-vaishali-india-winning-start-9562875/",
      "image": "https://images.indianexpress.com/2024/09/Praggnanandhaa-vaishali-crop-fide-Michal-Walusza.jpg?w=640"
    },
    {
      "title": "India vs Malaysia, Asian Champions Trophy Highlights: IND thrash MAS 8-1",
      "description": "India vs Malaysia, Asian Champions Trophy Highlights: A hat-trick from Rajkumar Pal and a brace from Araijeet Singh Hundal helped India steamrolled Malaysia.",
      "url": "https://www.hindustantimes.com/sports/hockey/india-vs-malaysia-live-score-asian-champions-trophy-2024-ind-vs-mas-hockey-match-updates-september-11-101726033720243.html",
      "image": "https://www.hindustantimes.com/ht-img/img/2024/09/11/550x309/harmanpreet_ahf_twitter_1725883519868_1726034324699.jpg"
    },
    {
      "title": "Sports minister felicitates Paralympics medallists, announces cash rewards",
      "description": "Seven champions get ₹75 lakh while silver, bronze and mixed-event medallists receive ₹50, ₹30, and ₹22.5 lakh each respectively",
      "url": "https://www.thehindu.com/sport/sports-minister-felicitates-paralympics-medallists-announces-cash-rewards/article68626888.ece",
      "image": "https://th-i.thgim.com/public/incoming/nb7en5/article68627086.ece/alternates/LANDSCAPE_1200/20240910231L.jpg"
    },
    {
      "title": "Virat is an Australian in thoughts and action...”: Steve Smith",
      "description": "The Border-Gavaskar series between India and Australia will begin on November 22, with the first Test at Perth",
      "url": "https://www.thehindu.com/sport/cricket/virat-is-an-australian-in-thoughts-and-action-steve-smith/article68625708.ece",
      "image": "https://th-i.thgim.com/public/incoming/o4jflr/article68551961.ece/alternates/LANDSCAPE_1200/IMG_TH08KOHLI-SMITH_2_1_1HBAVEG7.jpg"
    },
    {
      "title": "Rishabh Pant returns as India announces squad for 1st Test against Bangladesh",
      "description": "Virat Kohli also returned to the Test side having missed the five-Test series against England at home earlier this year",
      "url": "https://www.thehindu.com/sport/cricket/rishabh-pant-returns-as-india-announces-squad-for-1st-test-against-bangladesh/article68619502.ece",
      "image": "https://th-i.thgim.com/public/incoming/mctci5/article68619503.ece/alternates/LANDSCAPE_1200/_DSC6812.jpg"
    }
  ],
  "World": [
    {
      "title": "Kamala Harris Beats Donald Trump 63%-37%, Post-Debate Survey Suggests",
      "description": "The Democrat candidate is said to have baited her opponent into angry responses on issues ranging from abortion to foreign policy.",
      "url": "https://www.ndtv.com/world-news/kamala-harris-beats-donald-trump-63-37-post-debate-survey-suggests-6542250",
      "image": "https://c.ndtvimg.com/2024-09/cehubsmo_harris-trump-debate-afp_625x300_11_September_24.jpeg"
    },
    {
      "title": "Is Iran supplying ballistic missiles to Russia for the Ukraine war?",
      "description": "The variant Iran allegedly sent to Russia is a tactical battlefield weapon not meant for strikes deep inside Ukraine.",
      "url": "https://www.aljazeera.com/news/2024/9/11/is-iran-supplying-ballistic-missiles-to-russia-for-the-ukraine-war",
      "image": "https://www.aljazeera.com/wp-content/uploads/2023/09/2023-09-20T110722Z_383790689_RC28C3AXWQEU_RTRMADP_3_IRAN-RUSSIA-SHOIGU-1695212078.jpg?resize=770%2C513&quality=80"
    },
    {
      "title": "Jaishankar's Explosive Russia Comment In Front Of NATO Minister Amid PM Modi Peace Push | Ukraine",
      "description": "External Affairs Minister S. Jaishankar said, 'India considers Russia’s involvement crucial for any negotiations aimed at resolving the Ukraine conflict, and New Delhi is open to supporting any serious steps toward peace.'",
      "url": "https://www.hindustantimes.com/videos/world-news/jaishankars-explosive-russia-comment-in-front-of-nato-minister-amid-pm-modi-peace-push-ukraine-101725990811223.html",
      "image": "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/24-09-2022-UN-Photo-UN7955728-India.jpg"
    },
    {
      "title": "Typhoon Yagi: Over 141 dead in flash floods in Vietnam",
      "description": "The death toll from Typhoon Yagi and its subsequent rain that triggered floods and landslides has climbed to 141 as 69 others remain missing and hundreds were injured",
      "url": "https://www.livemint.com/news/india/typhoon-yagi-vietnam-death-toll-flash-floods-latest-news-11726026009252.html",
      "image": "https://www.livemint.com/lm-img/img/2024/09/11/600x338/TOPSHOT-VIETNAM-TYPHOON-WEATHER-2_1726026407605_1726026417167.jpg"
    },
    {
      "title": "U.K. sanctions ten ships from Russia’s ‘shadow fleet’",
      "description": "Three of the vessels on the new sanctions list, Nikolay Zuyev, NS Asia and Zaliv Aniva, have, between them, transported more than $5 billion of Russian oil since Russia invaded Ukraine",
      "url": "https://www.thehindu.com/news/international/uk-sanctions-ten-ships-from-russias-shadow-fleet/article68629815.ece",
      "image": "https://th-i.thgim.com/public/incoming/d8iieq/article68631272.ece/alternates/LANDSCAPE_1200/Russia_Ukraine_War_07902.jpg"
    },
    {
      "title": "Iran threatens 'action' over new Western sanctions",
      "description": "Iran vows to respond to sanctions from European countries over alleged missile supply to Russia for Ukraine, denying accusations",
      "url": "https://www.thehindu.com/news/international/iran-threatens-action-over-new-western-sanctions/article68629240.ece",
      "image": "https://th-i.thgim.com/public/incoming/t62h27/article68629241.ece/alternates/LANDSCAPE_1200/20240203-03-0920.jpg"
    }
  ],
  "Politics": [
    {
      "title": "India Elections 2024: AAP’s Kejriwal Promises Job Creation",
      "description": "Delhi Chief Minister Arvind Kejriwal promises 5 million jobs if Aam Aadmi Party wins the upcoming general elections.",
      "url": "https://www.businessinsider.in/politics/news/india-elections-2024-aaps-kejriwal-promises-job-creation/articleshow/12687220.cms",
      "image": "https://images.businessinsider.in/2024/09/kejriwal-promise.jpg"
    },
    {
      "title": "UK Prime Minister Faces No Confidence Vote",
      "description": "UK Prime Minister Liz Truss is facing a no-confidence vote as internal party disputes continue to escalate.",
      "url": "https://www.bbc.com/news/uk-politics-65898323",
      "image": "https://ichef.bbci.co.uk/news/1024/branded_news/10F47/production/_126781192_gettyimages-1398850875.jpg"
    },
    {
      "title": "Biden’s Build Back Better Plan Hits Roadblock",
      "description": "US President Joe Biden’s Build Back Better plan faces major hurdles in Congress with negotiations stalling over budget concerns.",
      "url": "https://www.cnn.com/2024/09/11/politics/biden-build-back-better-plan-roadblock/index.html",
      "image": "https://cdn.cnn.com/cnnnext/dam/assets/230911113804-joe-biden-1200x675.jpg"
    },
    {
      "title": "Brazilian President Promises Amazon Protection",
      "description": "Brazilian President Luiz Inácio Lula da Silva pledges to combat deforestation and protect the Amazon rainforest.",
      "url": "https://www.theguardian.com/world/2024/sep/11/brazil-amazon-protection-lula",
      "image": "https://i.guim.co.uk/img/media/58fa0929cc2e89fc7a9a61acb9c1d2d00c340b90/0_32_5184_3104/master/5184.jpg"
    },
    {
      "title": "China’s New Economic Policy: Key Takeaways",
      "description": "China unveils a new economic policy aimed at boosting domestic consumption and reducing reliance on exports.",
      "url": "https://www.ft.com/content/3d44c1d0-8f34-11ec-bb3e-35d06c64f2d0",
      "image": "https://www.ft.com/__data/assets/image/0024/12040410/china-economy-2024.jpg"
    }
  ],
  "Technology": [
    {
      "title": "Apple Unveils New iPhone 16 Series",
      "description": "Apple announces the launch of its latest iPhone 16 series, featuring advanced camera capabilities and a new design.",
      "url": "https://www.theverge.com/2024/09/11/apple-iphone-16-series-announcement",
      "image": "https://cdn.vox-cdn.com/thumbor/I8R-mKkQkEOgkvsI6j6lj0n1gjI=/0x0:2040x1360/1200x800/filters:focal(857x690:1183x1016)/cdn.vox-cdn.com/uploads/chorus_image/image/75305417/iphonex_11.jpg"
    },
    {
      "title": "Google’s New AI Chatbot: Bard",
      "description": "Google introduces Bard, its new AI chatbot designed to assist with a wide range of queries and tasks.",
      "url": "https://www.techcrunch.com/2024/09/11/google-bard-ai-chatbot-launch",
      "image": "https://techcrunch.com/wp-content/uploads/2024/09/google-bard-ai.jpg"
    },
    {
      "title": "Microsoft Acquires AI Startup",
      "description": "Microsoft has acquired a leading AI startup to enhance its cloud computing and machine learning capabilities.",
      "url": "https://www.bbc.com/news/technology-65898322",
      "image": "https://ichef.bbci.co.uk/news/1024/branded_news/10F47/production/_126781194_microsoft-acquisition.jpg"
    },
    {
      "title": "Elon Musk’s New SpaceX Project",
      "description": "Elon Musk reveals plans for a new SpaceX project aimed at advancing space exploration and technology.",
      "url": "https://www.cnn.com/2024/09/11/tech/spacex-new-project/index.html",
      "image": "https://cdn.cnn.com/cnnnext/dam/assets/230911123804-elon-musk-spacex.jpg"
    },
    {
      "title": "Samsung’s Foldable Phone Updates",
      "description": "Samsung releases updates on its foldable phone technology, improving durability and user experience.",
      "url": "https://www.theverge.com/2024/09/11/samsung-foldable-phone-updates",
      "image": "https://cdn.vox-cdn.com/thumbor/I8R-mKkQkEOgkvsI6j6lj0n1gjI=/0x0:2040x1360/1200x800/filters:focal(857x690:1183x1016)/cdn.vox-cdn.com/uploads/chorus_image/image/75305418/samsung-foldable.jpg"
    }
  ],
  "Business": [
  {
    "title": "Global Markets Rally After Trade Deal Announcement",
    "description": "Global stock markets surged today following the announcement of a major trade deal between the US and China.",
    "url": "https://www.bbc.com/news/business-65251867",
    "image": "https://ichef.bbci.co.uk/news/1024/branded_news/15E5C/production/_129361112_7859ed5f-3829-459b-abe3-6e1181df5a6f.jpg"
  },
  {
    "title": "Tech Giants Report Record Profits in Q2",
    "description": "Major technology companies have reported record profits for the second quarter of the year, driven by strong demand for their products and services.",
    "url": "https://www.cnbc.com/2024/09/12/tech-giants-report-record-profits.html",
    "image": "https://image.cnbcfm.com/api/v1/image/106819452-1628215357105-tech-giants.jpg"
  },
  {
    "title": "Stock Market Experiences Unexpected Drop",
    "description": "Stocks fell sharply today due to concerns over rising interest rates and economic instability.",
    "url": "https://www.reuters.com/business/stock-market-drop-2024-09-12/",
    "image": "https://www.reuters.com/resizer/REPLACE_WITH_IMAGE_URL"
  },
  {
    "title": "New Start-Up Secures Major Investment Round",
    "description": "A promising start-up has secured a significant investment round, setting it on a path to revolutionize the industry.",
    "url": "https://www.forbes.com/sites/startup-investment-round/",
    "image": "https://image.forbes.com/2024/09/startup-investment.jpg"
  },
  {
    "title": "Government Announces New Economic Stimulus Package",
    "description": "The government has unveiled a new economic stimulus package aimed at boosting growth and employment.",
    "url": "https://www.ft.com/content/economic-stimulus-package-2024",
    "image": "https://www.ft.com/content/2024/economic-stimulus.jpg"
  },
  {
    "title": "E-commerce Growth Accelerates Amid Pandemic",
    "description": "E-commerce has seen accelerated growth as consumers increasingly turn to online shopping during the pandemic.",
    "url": "https://www.bloomberg.com/news/articles/ecommerce-growth-pandemic",
    "image": "https://www.bloomberg.com/images/ecommerce-growth.jpg"
  },
  {
    "title": "Major Retailer Announces Store Closures",
    "description": "A major retailer has announced the closure of several stores due to declining sales and financial challenges.",
    "url": "https://www.nbcnews.com/business/retailer-store-closures-2024-09-12",
    "image": "https://www.nbcnews.com/images/store-closures.jpg"
  }
]
,
"India": [
  {
    "title": "India Launches First Indigenous Electric Car",
    "description": "India has unveiled its first fully indigenous electric car, a milestone in its push towards sustainable transportation.",
    "url": "https://www.ndtv.com/india-news/india-launches-first-indigenous-electric-car-6541234",
    "image": "https://c.ndtvimg.com/2024-09/indigenous-electric-car_625x300_11_September_24.jpeg"
  },
  {
    "title": "Indian Government Announces New Education Reforms",
    "description": "The Indian government has announced a series of education reforms aimed at improving the quality of education in the country.",
    "url": "https://www.thehindu.com/news/national/education-reforms-announced/article6521123.ece",
    "image": "https://www.thehindu.com/news/national/education-reforms.jpg"
  },
  {
    "title": "Bollywood Film Wins International Award",
    "description": "A Bollywood film has won an international award at a prestigious film festival, bringing recognition to Indian cinema.",
    "url": "https://www.hindustantimes.com/entertainment/bollywood-film-international-award-2024",
    "image": "https://www.hindustantimes.com/images/bollywood-film-award.jpg"
  },
  {
    "title": "New Infrastructure Project to Boost Rural Development",
    "description": "A new infrastructure project has been launched to improve facilities and services in rural areas of India.",
    "url": "https://www.theweek.in/news/india/2024/09/12/infrastructure-project-rural-development.html",
    "image": "https://www.theweek.in/images/infrastructure-project.jpg"
  },
  {
    "title": "India to Host International Summit on Climate Change",
    "description": "India will host an international summit focused on climate change and environmental sustainability.",
    "url": "https://www.business-standard.com/article/current-affairs/india-hosts-climate-change-summit-2024-09-12.html",
    "image": "https://www.business-standard.com/images/climate-change-summit.jpg"
  },
  {
    "title": "Indian Space Agency Launches New Satellite",
    "description": "The Indian Space Research Organisation (ISRO) has successfully launched a new satellite for communication and observation.",
    "url": "https://www.theeconomicstimes.indiatimes.com/industry/space/india-launches-new-satellite/articleshow/6539124.cms",
    "image": "https://www.theeconomicstimes.indiatimes.com/images/india-space-satellite.jpg"
  },
  {
    "title": "New Healthcare Initiative Aims to Improve Access",
    "description": "The Indian government has launched a new healthcare initiative to improve access to medical services across the country.",
    "url": "https://www.indianexpress.com/article/education/healthcare-initiative-india-2024/",
    "image": "https://www.indianexpress.com/images/healthcare-initiative.jpg"
  }
],
"India": [
  {
    "title": "India Launches First Indigenous Electric Car",
    "description": "India has unveiled its first fully indigenous electric car, a milestone in its push towards sustainable transportation.",
    "url": "https://www.ndtv.com/india-news/india-launches-first-indigenous-electric-car-6541234",
    "image": "https://c.ndtvimg.com/2024-09/indigenous-electric-car_625x300_11_September_24.jpeg"
  },
  {
    "title": "Indian Government Announces New Education Reforms",
    "description": "The Indian government has announced a series of education reforms aimed at improving the quality of education in the country.",
    "url": "https://www.thehindu.com/news/national/education-reforms-announced/article6521123.ece",
    "image": "https://www.thehindu.com/news/national/education-reforms.jpg"
  },
  {
    "title": "Bollywood Film Wins International Award",
    "description": "A Bollywood film has won an international award at a prestigious film festival, bringing recognition to Indian cinema.",
    "url": "https://www.hindustantimes.com/entertainment/bollywood-film-international-award-2024",
    "image": "https://www.hindustantimes.com/images/bollywood-film-award.jpg"
  },
  {
    "title": "New Infrastructure Project to Boost Rural Development",
    "description": "A new infrastructure project has been launched to improve facilities and services in rural areas of India.",
    "url": "https://www.theweek.in/news/india/2024/09/12/infrastructure-project-rural-development.html",
    "image": "https://www.theweek.in/images/infrastructure-project.jpg"
  },
  {
    "title": "India to Host International Summit on Climate Change",
    "description": "India will host an international summit focused on climate change and environmental sustainability.",
    "url": "https://www.business-standard.com/article/current-affairs/india-hosts-climate-change-summit-2024-09-12.html",
    "image": "https://www.business-standard.com/images/climate-change-summit.jpg"
  },
  {
    "title": "Indian Space Agency Launches New Satellite",
    "description": "The Indian Space Research Organisation (ISRO) has successfully launched a new satellite for communication and observation.",
    "url": "https://www.theeconomicstimes.indiatimes.com/industry/space/india-launches-new-satellite/articleshow/6539124.cms",
    "image": "https://www.theeconomicstimes.indiatimes.com/images/india-space-satellite.jpg"
  },
  {
    "title": "New Healthcare Initiative Aims to Improve Access",
    "description": "The Indian government has launched a new healthcare initiative to improve access to medical services across the country.",
    "url": "https://www.indianexpress.com/article/education/healthcare-initiative-india-2024/",
    "image": "https://www.indianexpress.com/images/healthcare-initiative.jpg"
  }
]
,
"Accidents": [
  {
    "title": "Major Traffic Accident on Highway 401",
    "description": "A major traffic accident on Highway 401 has led to significant delays and multiple injuries.",
    "url": "https://www.cbc.ca/news/canada/major-traffic-accident-highway-401-1.6541234",
    "image": "https://i.cbc.ca/1.6541234.1625130181!/fileImage/httpImage/image.jpg_gen/derivatives/original_1180/traffic-accident.jpg"
  },
  {
    "title": "Explosion at Industrial Plant Injures Several Workers",
    "description": "An explosion at an industrial plant has resulted in injuries to several workers and caused extensive damage.",
    "url": "https://www.reuters.com/business/energy/explosion-industrial-plant-injures-workers-2024-09-11/",
    "image": "https://www.reuters.com/resizer/REPLACE_WITH_IMAGE_URL"
  },
  {
    "title": "Train Derailment Causes Widespread Disruption",
    "description": "A train derailment has caused widespread disruption to services and led to several injuries.",
    "url": "https://www.nytimes.com/2024/09/12/us/train-derailment-disruption.html",
    "image": "https://static.nytimes.com/images/train-derailment.jpg"
  },
  {
    "title": "Fire Breaks Out at Local Warehouse",
    "description": "A large fire has broken out at a warehouse, leading to significant property damage and emergency response.",
    "url": "https://www.bbc.com/news/local-fire-2024-09-12",
    "image": "https://ichef.bbci.co.uk/news/1024/branded_news/fire-warehouse.jpg"
  },
  {
    "title": "Building Collapse in Downtown Area",
    "description": "A building collapse in a downtown area has resulted in injuries and trapped individuals.",
    "url": "https://www.cnn.com/2024/09/12/us/building-collapse-downtown/",
    "image": "https://cdn.cnn.com/images/building-collapse.jpg"
  },
  {
    "title": "Oil Spill Contaminates Coastal Waters",
    "description": "An oil spill has contaminated coastal waters, causing environmental damage and a major clean-up effort.",
    "url": "https://www.washingtonpost.com/environment/oil-spill-coastal-waters-2024/",
    "image": "https://www.washingtonpost.com/images/oil-spill.jpg"
  },
  {
    "title": "Bus Accident Leads to Multiple Casualties",
    "description": "A bus accident has led to multiple casualties and injuries, with emergency services on the scene.",
    "url": "https://www.theguardian.com/world/bus-accident-casualties-2024",
    "image": "https://www.theguardian.com/images/bus-accident.jpg"
  }
]
,
"Accidents": [
  {
    "title": "Major Traffic Accident on Highway 401",
    "description": "A major traffic accident on Highway 401 has led to significant delays and multiple injuries.",
    "url": "https://www.cbc.ca/news/canada/major-traffic-accident-highway-401-1.6541234",
    "image": "https://i.cbc.ca/1.6541234.1625130181!/fileImage/httpImage/image.jpg_gen/derivatives/original_1180/traffic-accident.jpg"
  },
  {
    "title": "Explosion at Industrial Plant Injures Several Workers",
    "description": "An explosion at an industrial plant has resulted in injuries to several workers and caused extensive damage.",
    "url": "https://www.reuters.com/business/energy/explosion-industrial-plant-injures-workers-2024-09-11/",
    "image": "https://www.reuters.com/resizer/REPLACE_WITH_IMAGE_URL"
  },
  {
    "title": "Train Derailment Causes Widespread Disruption",
    "description": "A train derailment has caused widespread disruption to services and led to several injuries.",
    "url": "https://www.nytimes.com/2024/09/12/us/train-derailment-disruption.html",
    "image": "https://static.nytimes.com/images/train-derailment.jpg"
  },
  {
    "title": "Fire Breaks Out at Local Warehouse",
    "description": "A large fire has broken out at a warehouse, leading to significant property damage and emergency response.",
    "url": "https://www.bbc.com/news/local-fire-2024-09-12",
    "image": "https://ichef.bbci.co.uk/news/1024/branded_news/fire-warehouse.jpg"
  },
  {
    "title": "Building Collapse in Downtown Area",
    "description": "A building collapse in a downtown area has resulted in injuries and trapped individuals.",
    "url": "https://www.cnn.com/2024/09/12/us/building-collapse-downtown/",
    "image": "https://cdn.cnn.com/images/building-collapse.jpg"
  },
  {
    "title": "Oil Spill Contaminates Coastal Waters",
    "description": "An oil spill has contaminated coastal waters, causing environmental damage and a major clean-up effort.",
    "url": "https://www.washingtonpost.com/environment/oil-spill-coastal-waters-2024/",
    "image": "https://www.washingtonpost.com/images/oil-spill.jpg"
  },
  {
    "title": "Bus Accident Leads to Multiple Casualties",
    "description": "A bus accident has led to multiple casualties and injuries, with emergency services on the scene.",
    "url": "https://www.theguardian.com/world/bus-accident-casualties-2024",
    "image": "https://www.theguardian.com/images/bus-accident.jpg"
  }
],

"Lifestyle": [
  {
    "title": "10 Tips for a Healthier Lifestyle",
    "description": "Explore these ten essential tips for leading a healthier and more balanced lifestyle.",
    "url": "https://www.healthline.com/health/lifestyle-tips",
    "image": "https://www.healthline.com/images/lifestyle-tips.jpg"
  },
  {
    "title": "How to Create a Cozy Home Environment",
    "description": "Learn how to transform your living space into a cozy and inviting environment with these simple ideas.",
    "url": "https://www.goodhousekeeping.com/home/decorating/a37944021/cozy-home-environment/",
    "image": "https://www.goodhousekeeping.com/wp-content/uploads/2024/09/cozy-home.jpg"
  },
  {
    "title": "The Best Healthy Recipes for 2024",
    "description": "Discover the best healthy recipes to try in 2024 for a nutritious and delicious diet.",
    "url": "https://www.eatingwell.com/recipes/healthy-recipes-2024/",
    "image": "https://www.eatingwell.com/images/healthy-recipes-2024.jpg"
  },
  {
    "title": "How to Stay Productive While Working from Home",
    "description": "Tips and strategies to stay productive and focused while working from home.",
    "url": "https://www.forbes.com/sites/working-from-home-productivity/",
    "image": "https://www.forbes.com/images/working-from-home.jpg"
  },
  {
    "title": "The Ultimate Guide to Sustainable Living",
    "description": "A comprehensive guide to making your lifestyle more sustainable and eco-friendly.",
    "url": "https://www.sustainability.com/guide-to-sustainable-living/",
    "image": "https://www.sustainability.com/images/sustainable-living.jpg"
  },
  {
    "title": "Top 5 Fitness Trends of 2024",
    "description": "Explore the top fitness trends that are shaping the wellness industry in 2024.",
    "url": "https://www.shape.com/fitness-trends-2024/",
    "image": "https://www.shape.com/images/fitness-trends.jpg"
  },
  {
    "title": "How to Decorate Your Home on a Budget",
    "description": "Creative and cost-effective ways to decorate your home without breaking the bank.",
    "url": "https://www.apartmenttherapy.com/decorate-home-budget-2024/",
    "image": "https://www.apartmenttherapy.com/images/decorate-home-budget.jpg"
  }
]


}

const FirstSelection = ({ categories }) => {
  const { selectedCategories } = useContext(SelectedCategoriesContext); 

  const [startIndex, setStartIndex] = useState(0);

  const category = categories[0];
  const filteredNews = newsData[category] || []; 
  const handleNext = () => {
    if (startIndex < filteredNews.length - 4) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="container-wrapper">
      <h2 className="heading1">-----  {category || 'No category selected'} ------</h2>
      <div className="news-container">
        <div className="arrow left-arrow" onClick={handlePrev}>&#9664;</div>
        <div className="news-box">
          {filteredNews.slice(startIndex, startIndex + 4  ).map((news, index) => (
            <div key={index} className="news-item">
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <a href={news.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          ))}
        </div>
        <div className="arrow right-arrow" onClick={handleNext}>&#9654;</div>
      </div>
    </div>
  );
};

export default FirstSelection;

