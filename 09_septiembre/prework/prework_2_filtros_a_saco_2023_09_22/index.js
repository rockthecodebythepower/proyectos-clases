const users = [
  {
    name: "Mr. Carol Mills",
    birthday: "2023-04-27T16:12:05.419Z",
    phone: "1-251-101-0161 x3593",
    zip: "27199",
    city: "North Cristalville",
    email: "Jovanny_Hirthe91@yahoo.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/miguelkooreman/128.jpg",
    job: "Investor Infrastructure Assistant",
  },
  {
    name: "Xavier Hamill",
    birthday: "2023-05-12T04:41:14.312Z",
    phone: "957.516.4964 x47987",
    zip: "11893-9558",
    city: "West Ludwigport",
    email: "Kaleigh57@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/plbabin/128.jpg",
    job: "Forward Implementation Orchestrator",
  },
  {
    name: "Beaulah Marvin",
    birthday: "2023-04-28T05:13:51.467Z",
    phone: "(736) 661-6577 x10764",
    zip: "25954",
    city: "Larkinland",
    email: "Deontae.Kutch21@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/buryaknick/128.jpg",
    job: "Senior Division Developer",
  },
  {
    name: "Berta Skiles MD",
    birthday: "2022-10-01T17:44:27.901Z",
    phone: "(176) 759-9252 x33551",
    zip: "85966-2741",
    city: "Schadenfurt",
    email: "Ellis_Roob77@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/tom_even/128.jpg",
    job: "Global Markets Associate",
  },
  {
    name: "Haven Leannon",
    birthday: "2022-11-11T19:02:40.056Z",
    phone: "(900) 403-9182",
    zip: "32928",
    city: "North Cristalville",
    email: "Gino12@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/mutu_krish/128.jpg",
    job: "Regional Program Administrator",
  },
  {
    name: "Prince Walker",
    birthday: "2023-07-13T05:38:14.722Z",
    phone: "440.591.5433 x525",
    zip: "91093-4263",
    city: "South Kadin",
    email: "Royce40@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/peter576/128.jpg",
    job: "Chief Usability Technician",
  },
  {
    name: "Dr. Reva Kassulke",
    birthday: "2023-08-30T13:45:51.629Z",
    phone: "1-029-885-5636 x88094",
    zip: "83367",
    city: "East Haven",
    email: "Mariane.Heaney@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/rdbannon/128.jpg",
    job: "Direct Security Agent",
  },
  {
    name: "Lexi Moore",
    birthday: "2023-01-11T07:26:53.780Z",
    phone: "1-035-053-0539 x9107",
    zip: "08999",
    city: "Lake Flavio",
    email: "Jalen_Hansen@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/jomarmen/128.jpg",
    job: "Forward Usability Consultant",
  },
  {
    name: "Arthur Boyle",
    birthday: "2023-05-19T00:19:30.657Z",
    phone: "(655) 061-2106 x2074",
    zip: "94002",
    city: "Tomasaville",
    email: "Caroline_OKon3@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/sulaqo/128.jpg",
    job: "District Web Facilitator",
  },
  {
    name: "Miss Jacynthe Klein",
    birthday: "2023-08-11T22:24:21.598Z",
    phone: "025.372.7020 x18609",
    zip: "56020",
    city: "North Cristalville",
    email: "Werner.Rath87@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/flexrs/128.jpg",
    job: "Product Optimization Associate",
  },
  {
    name: "Micheal Ward",
    birthday: "2023-05-20T01:50:02.966Z",
    phone: "1-025-799-0506 x04523",
    zip: "39911-6285",
    city: "Boyerburgh",
    email: "Lilyan_Reilly27@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/danillos/128.jpg",
    job: "Corporate Branding Technician",
  },
  {
    name: "Ursula Daugherty",
    birthday: "2022-12-21T14:48:25.303Z",
    phone: "(598) 109-8672",
    zip: "80872-8419",
    city: "West Marcomouth",
    email: "Haylee.Keebler90@hotmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/abovefunction/128.jpg",
    job: "Future Applications Specialist",
  },
  {
    name: "Jett Balistreri",
    birthday: "2023-04-26T01:33:03.148Z",
    phone: "(628) 843-9524",
    zip: "80131-9340",
    city: "North Reillymouth",
    email: "Darren77@gmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/kalmerrautam/128.jpg",
    job: "Investor Accounts Planner",
  },
  {
    name: "Eleanore MacGyver",
    birthday: "2022-10-10T17:13:52.385Z",
    phone: "1-293-564-0144",
    zip: "31046-4599",
    city: "North Cristalville",
    email: "Rosamond38@yahoo.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/marcobarbosa/128.jpg",
    job: "National Intranet Facilitator",
  },
  {
    name: "Miss Aryanna Greenfelder",
    birthday: "2023-01-07T22:38:30.250Z",
    phone: "219-577-7588 x11814",
    zip: "45422-9846",
    city: "West Everette",
    email: "Adell.Schaefer64@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/j2deme/128.jpg",
    job: "Product Paradigm Architect",
  },
  {
    name: "Brycen Friesen",
    birthday: "2023-09-11T07:28:40.918Z",
    phone: "(281) 351-6474 x96440",
    zip: "41196",
    city: "South Mosesland",
    email: "Sylvester_Moen@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dactrtr/128.jpg",
    job: "National Mobility Associate",
  },
  {
    name: "Skyla Wiza Sr.",
    birthday: "2022-11-03T17:24:21.094Z",
    phone: "657-962-7682 x0562",
    zip: "23785",
    city: "South Mathewhaven",
    email: "Douglas_Kub65@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/pixage/128.jpg",
    job: "Central Accountability Designer",
  },
  {
    name: "Martine Macejkovic",
    birthday: "2023-03-17T03:14:50.808Z",
    phone: "855.554.0914 x25610",
    zip: "79172-6836",
    city: "Krisville",
    email: "Wellington_Harvey@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/reabo101/128.jpg",
    job: "Product Marketing Officer",
  },
  {
    name: "Osbaldo Labadie",
    birthday: "2022-12-15T16:57:06.031Z",
    phone: "505-048-2429",
    zip: "72192",
    city: "Veldashire",
    email: "Name_West@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/mizko/128.jpg",
    job: "Dynamic Interactions Executive",
  },
  {
    name: "Gregg Bayer",
    birthday: "2023-01-28T23:23:37.453Z",
    phone: "749-097-2446 x01218",
    zip: "15874",
    city: "Trystanborough",
    email: "Darien_Bauch34@gmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/gregrwilkinson/128.jpg",
    job: "Human Division Architect",
  },
  {
    name: "Dr. Jeanne Lindgren",
    birthday: "2023-07-27T18:31:56.486Z",
    phone: "(890) 940-5916",
    zip: "33273",
    city: "North Cristalville",
    email: "Russell.Roob88@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/hiemil/128.jpg",
    job: "District Accountability Assistant",
  },
  {
    name: "Rosie Weissnat",
    birthday: "2022-10-10T22:32:21.966Z",
    phone: "(436) 547-0150 x5640",
    zip: "79463",
    city: "Lake Tristian",
    email: "Alexa.Lubowitz15@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/kosmar/128.jpg",
    job: "Dynamic Accountability Technician",
  },
  {
    name: "Domenic Stokes",
    birthday: "2023-08-07T04:41:12.806Z",
    phone: "1-793-475-9656 x829",
    zip: "61822-9973",
    city: "Port Dovieshire",
    email: "Maudie_Cummings@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/prheemo/128.jpg",
    job: "Investor Communications Representative",
  },
  {
    name: "Keaton Nolan",
    birthday: "2022-12-06T07:48:05.240Z",
    phone: "(978) 232-7059",
    zip: "07897-3668",
    city: "Buckridgemouth",
    email: "Armando.Rolfson@hotmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/mandalareopens/128.jpg",
    job: "Internal Solutions Administrator",
  },
  {
    name: "Chelsea White I",
    birthday: "2023-05-24T06:32:00.796Z",
    phone: "270.725.0150 x1385",
    zip: "65355",
    city: "Lake Helgaberg",
    email: "Fermin_Collins@hotmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/gabrielrosser/128.jpg",
    job: "Forward Implementation Producer",
  },
  {
    name: "Cullen Hintz",
    birthday: "2023-07-10T21:19:42.883Z",
    phone: "725-243-4363",
    zip: "05957-6602",
    city: "Bartellview",
    email: "Nicolas_Schaden63@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/elbuscainfo/128.jpg",
    job: "Corporate Branding Assistant",
  },
  {
    name: "Aubrey Upton",
    birthday: "2023-03-09T23:55:01.930Z",
    phone: "1-508-729-1753 x1346",
    zip: "31263-4846",
    city: "Abernathyside",
    email: "Isaac47@gmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/felipeapiress/128.jpg",
    job: "Future Brand Officer",
  },
  {
    name: "Monroe Sporer",
    birthday: "2023-06-19T07:03:15.961Z",
    phone: "1-123-734-5988",
    zip: "24394-9198",
    city: "Kennethland",
    email: "Amaya59@gmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/nicolai_larsen/128.jpg",
    job: "Human Operations Assistant",
  },
  {
    name: "Madalyn Gorczany",
    birthday: "2023-02-13T21:33:56.564Z",
    phone: "243.336.6221 x958",
    zip: "05714-6846",
    city: "Howellside",
    email: "Donna27@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dahparra/128.jpg",
    job: "Principal Solutions Agent",
  },
  {
    name: "Ervin Gorczany",
    birthday: "2023-08-24T23:46:08.375Z",
    phone: "897.222.1365",
    zip: "15192-2198",
    city: "Karolannport",
    email: "Royce20@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/akmalfikri/128.jpg",
    job: "Legacy Solutions Liaison",
  },
  {
    name: "Sigmund Borer III",
    birthday: "2023-07-02T06:27:44.068Z",
    phone: "793.151.9783",
    zip: "59836-3740",
    city: "Amiyaland",
    email: "Neha24@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/scips/128.jpg",
    job: "Investor Brand Supervisor",
  },
  {
    name: "Rosie Harvey",
    birthday: "2022-11-29T09:55:04.898Z",
    phone: "1-623-561-8870",
    zip: "72244-1519",
    city: "Madgeville",
    email: "Paul.Effertz@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/benefritz/128.jpg",
    job: "Corporate Solutions Technician",
  },
  {
    name: "Heloise Lockman",
    birthday: "2023-05-24T09:39:20.774Z",
    phone: "614-066-8180 x89773",
    zip: "73471",
    city: "North Cristalville",
    email: "Magnus_Frami47@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/cofla/128.jpg",
    job: "Dynamic Marketing Representative",
  },
  {
    name: "John Ruecker",
    birthday: "2022-12-08T11:07:12.099Z",
    phone: "(860) 922-7427",
    zip: "73572-8880",
    city: "Keelingstad",
    email: "Reid.Kautzer@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/smenov/128.jpg",
    job: "Customer Factors Liaison",
  },
  {
    name: "Miss Antonia Weissnat",
    birthday: "2023-09-20T04:41:20.900Z",
    phone: "1-546-235-0592 x913",
    zip: "20697",
    city: "Mariantown",
    email: "Lew_Ebert@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/duck4fuck/128.jpg",
    job: "Future Integration Architect",
  },
  {
    name: "Christelle Kovacek",
    birthday: "2023-01-24T17:34:33.905Z",
    phone: "1-309-680-1500 x62947",
    zip: "56889-1996",
    city: "Eldoraberg",
    email: "Lee_Feil@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/bassamology/128.jpg",
    job: "Product Metrics Coordinator",
  },
  {
    name: "Richard McClure Jr.",
    birthday: "2023-08-14T05:01:05.570Z",
    phone: "198-602-0784 x992",
    zip: "50818-2458",
    city: "East Molliechester",
    email: "Malcolm4@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/aoimedia/128.jpg",
    job: "Dynamic Factors Director",
  },
  {
    name: "Monica Barrows",
    birthday: "2023-07-06T10:59:45.961Z",
    phone: "972.082.8172 x02983",
    zip: "89862",
    city: "West Jovanny",
    email: "Jaden99@gmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/michaelcomiskey/128.jpg",
    job: "Dynamic Implementation Executive",
  },
  {
    name: "Elizabeth Robel MD",
    birthday: "2023-03-05T03:49:38.387Z",
    phone: "045-212-7524",
    zip: "28102-7140",
    city: "Tadton",
    email: "Zakary_Keeling62@yahoo.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/joshuasortino/128.jpg",
    job: "Lead Intranet Engineer",
  },
  {
    name: "Juwan Oberbrunner",
    birthday: "2022-09-24T08:04:15.803Z",
    phone: "238.419.1005",
    zip: "74529-0045",
    city: "North Cristalville",
    email: "Antonia71@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/shinze/128.jpg",
    job: "Legacy Marketing Engineer",
  },
  {
    name: "Madonna Kris",
    birthday: "2022-12-01T17:31:45.226Z",
    phone: "(426) 110-0042 x9753",
    zip: "48003-8149",
    city: "North Mabel",
    email: "Jerad.Harvey@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/nutzumi/128.jpg",
    job: "Internal Mobility Designer",
  },
  {
    name: "Jakob Daugherty",
    birthday: "2023-09-06T16:15:55.660Z",
    phone: "158.613.7792",
    zip: "81650-1561",
    city: "Port Amparoland",
    email: "Heber_Erdman66@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dawidwu/128.jpg",
    job: "Customer Creative Supervisor",
  },
  {
    name: "Adeline Kiehn",
    birthday: "2022-10-17T17:24:56.178Z",
    phone: "1-474-190-9804 x789",
    zip: "61213-2805",
    city: "Gottliebburgh",
    email: "Ezequiel_Collins@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/diesellaws/128.jpg",
    job: "Human Security Representative",
  },
  {
    name: "Sanford Prohaska",
    birthday: "2023-05-20T07:34:39.917Z",
    phone: "042-846-4113",
    zip: "16979",
    city: "Celiaberg",
    email: "Cody92@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/switmer777/128.jpg",
    job: "Central Implementation Director",
  },
  {
    name: "Malvina Schaden",
    birthday: "2023-07-21T13:26:35.219Z",
    phone: "1-848-347-3530",
    zip: "26674-4839",
    city: "Port Jonatan",
    email: "Delphia.Rosenbaum@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/ssiskind/128.jpg",
    job: "Global Factors Specialist",
  },
  {
    name: "Harrison Kuphal",
    birthday: "2023-03-06T13:18:34.989Z",
    phone: "207.924.4113",
    zip: "23312",
    city: "Faheyshire",
    email: "Werner44@hotmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/chaabane_wail/128.jpg",
    job: "Principal Applications Director",
  },
  {
    name: "Torrance Schmeler Sr.",
    birthday: "2023-05-01T10:07:32.646Z",
    phone: "739-019-5146 x0417",
    zip: "14905",
    city: "North Ona",
    email: "Miracle78@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/bartjo/128.jpg",
    job: "Direct Group Agent",
  },
  {
    name: "Ludie Raynor",
    birthday: "2023-05-11T05:21:24.056Z",
    phone: "(343) 635-8167 x3018",
    zip: "04040-2262",
    city: "Lake Bridgettemouth",
    email: "America_Schuppe@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/tgormtx/128.jpg",
    job: "Investor Directives Planner",
  },
  {
    name: "Osbaldo Nienow DVM",
    birthday: "2023-03-08T18:22:23.573Z",
    phone: "1-629-038-3768",
    zip: "89187",
    city: "Lake Mariamberg",
    email: "Hortense69@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/bu7921/128.jpg",
    job: "Dynamic Implementation Director",
  },
  {
    name: "Eldora Rempel",
    birthday: "2023-04-21T00:54:36.858Z",
    phone: "(863) 034-8138",
    zip: "78227",
    city: "West Raul",
    email: "Kaitlyn.Muller18@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/lisovsky/128.jpg",
    job: "International Identity Analyst",
  },
  {
    name: "Korey Grady",
    birthday: "2023-04-02T08:15:39.982Z",
    phone: "(622) 507-8841",
    zip: "55764-4491",
    city: "Joland",
    email: "Winston70@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/nicollerich/128.jpg",
    job: "Senior Program Orchestrator",
  },
  {
    name: "Haley Skiles",
    birthday: "2022-12-02T22:42:41.790Z",
    phone: "1-782-996-8756 x052",
    zip: "82291-3278",
    city: "East Hilmaside",
    email: "Isaac_Adams28@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/plasticine/128.jpg",
    job: "Legacy Operations Engineer",
  },
  {
    name: "Jaida Tromp",
    birthday: "2023-03-03T18:10:16.102Z",
    phone: "335-869-4739",
    zip: "69226",
    city: "South Terenceport",
    email: "Daron47@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/airskylar/128.jpg",
    job: "International Factors Technician",
  },
  {
    name: "Samantha Rosenbaum DDS",
    birthday: "2023-02-05T13:57:58.469Z",
    phone: "1-124-746-6115 x5106",
    zip: "71067",
    city: "Duncanmouth",
    email: "Joshua.Satterfield21@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/hanna_smi/128.jpg",
    job: "Chief Identity Strategist",
  },
  {
    name: "Samanta Bartell",
    birthday: "2023-05-29T19:13:57.808Z",
    phone: "024.573.1071",
    zip: "87455",
    city: "South Elvera",
    email: "Kamren43@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/psaikali/128.jpg",
    job: "Product Marketing Manager",
  },
  {
    name: "Lura Frami",
    birthday: "2023-05-01T19:47:30.030Z",
    phone: "189.155.8008 x125",
    zip: "04732",
    city: "West Eda",
    email: "Horace84@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/kylefoundry/128.jpg",
    job: "Chief Program Coordinator",
  },
  {
    name: "Wilfredo Bauch",
    birthday: "2022-10-31T09:39:25.451Z",
    phone: "331.747.3183",
    zip: "35386",
    city: "Jenkinsport",
    email: "Esta_Wintheiser91@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/Skyhartman/128.jpg",
    job: "Investor Optimization Producer",
  },
  {
    name: "Nelson Fay",
    birthday: "2023-04-04T19:34:47.218Z",
    phone: "(532) 614-0963 x2411",
    zip: "35315-0667",
    city: "Bettyberg",
    email: "Arlo_Koch@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/shoaib253/128.jpg",
    job: "Direct Research Representative",
  },
  {
    name: "Jeffery Schneider",
    birthday: "2023-07-09T01:31:21.331Z",
    phone: "996.606.1524 x0275",
    zip: "23526-2854",
    city: "Reynoldshaven",
    email: "Federico.Conn@gmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/markwienands/128.jpg",
    job: "National Interactions Designer",
  },
  {
    name: "Vladimir Hettinger",
    birthday: "2022-12-30T06:54:02.427Z",
    phone: "840-496-3210 x946",
    zip: "97048-8301",
    city: "Terryside",
    email: "Freddy.Davis96@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/gu5taf/128.jpg",
    job: "Customer Paradigm Engineer",
  },
  {
    name: "Greta Crona",
    birthday: "2023-07-17T00:52:19.826Z",
    phone: "1-075-895-0437 x55050",
    zip: "49849-5701",
    city: "Farrellmouth",
    email: "Myrtle_Nienow@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/nerrsoft/128.jpg",
    job: "Investor Intranet Officer",
  },
  {
    name: "Ibrahim Kihn",
    birthday: "2023-08-23T15:42:29.004Z",
    phone: "937.956.7177",
    zip: "87838-7138",
    city: "Sanfordfurt",
    email: "Preston18@hotmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ernestsemerda/128.jpg",
    job: "Forward Intranet Facilitator",
  },
  {
    name: "Josephine Kertzmann",
    birthday: "2022-11-21T16:49:41.499Z",
    phone: "079-955-6951 x66255",
    zip: "77313",
    city: "South Keely",
    email: "Delphine91@hotmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/codysanfilippo/128.jpg",
    job: "Lead Branding Engineer",
  },
  {
    name: "Trever Cronin",
    birthday: "2023-05-21T14:18:08.056Z",
    phone: "(836) 952-2445",
    zip: "51594-9518",
    city: "Meaghanville",
    email: "Randi_Littel40@yahoo.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/namankreative/128.jpg",
    job: "Forward Creative Architect",
  },
  {
    name: "Hilma Larkin",
    birthday: "2023-04-21T11:46:12.862Z",
    phone: "1-491-756-6287 x1810",
    zip: "92990",
    city: "Orentown",
    email: "Adam20@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/lhausermann/128.jpg",
    job: "Internal Intranet Facilitator",
  },
  {
    name: "Jeanne Klocko",
    birthday: "2023-07-30T06:33:07.404Z",
    phone: "1-735-468-8700 x94944",
    zip: "31923",
    city: "Candidamouth",
    email: "Toni.Ebert@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/timothycd/128.jpg",
    job: "Corporate Functionality Engineer",
  },
  {
    name: "Sheila Durgan",
    birthday: "2022-11-18T12:24:27.763Z",
    phone: "858-128-4966 x0181",
    zip: "43193",
    city: "South Albertahaven",
    email: "Eloisa1@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/rtgibbons/128.jpg",
    job: "Future Data Director",
  },
  {
    name: "Lauryn Schoen",
    birthday: "2023-04-10T07:38:43.168Z",
    phone: "(277) 751-3236",
    zip: "94647",
    city: "New Bereniceborough",
    email: "Paul_Yundt@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/begreative/128.jpg",
    job: "Regional Usability Officer",
  },
  {
    name: "Jensen Stokes",
    birthday: "2023-04-14T04:05:23.528Z",
    phone: "1-525-211-5453",
    zip: "01983-7301",
    city: "Port Gina",
    email: "Michelle_Schneider@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/danvierich/128.jpg",
    job: "Lead Program Designer",
  },
  {
    name: "Mayra Hettinger",
    birthday: "2022-11-21T02:02:08.752Z",
    phone: "709-195-6370 x8449",
    zip: "14057-7665",
    city: "Wittingburgh",
    email: "Edwina_Bogan@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/beweinreich/128.jpg",
    job: "Global Quality Strategist",
  },
  {
    name: "Koby Gulgowski",
    birthday: "2023-01-14T02:00:21.306Z",
    phone: "156-720-7939 x4855",
    zip: "31371-1603",
    city: "West Clementinaton",
    email: "Patricia.Trantow@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/nckjrvs/128.jpg",
    job: "Dynamic Marketing Orchestrator",
  },
  {
    name: "Annamarie Dietrich",
    birthday: "2023-03-05T06:00:51.320Z",
    phone: "987-822-9547 x93139",
    zip: "86457-8758",
    city: "West Casper",
    email: "Daisha93@gmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg",
    job: "Central Research Administrator",
  },
  {
    name: "Tod Legros",
    birthday: "2023-08-29T20:59:38.834Z",
    phone: "1-119-926-0501",
    zip: "48444",
    city: "South Heidihaven",
    email: "Janelle29@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/ostirbu/128.jpg",
    job: "Customer Paradigm Analyst",
  },
  {
    name: "Millie Quigley",
    birthday: "2023-05-07T23:46:00.365Z",
    phone: "(810) 931-3174 x87214",
    zip: "42594-1183",
    city: "Hoegerfurt",
    email: "Ines_Farrell@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/solid_color/128.jpg",
    job: "Product Accountability Strategist",
  },
  {
    name: "Anibal Bartoletti",
    birthday: "2022-09-28T02:47:28.719Z",
    phone: "1-203-425-1374",
    zip: "23971-4670",
    city: "Andersonview",
    email: "Ike63@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg",
    job: "Global Creative Facilitator",
  },
  {
    name: "Carlos Hermann",
    birthday: "2022-11-14T04:36:30.996Z",
    phone: "037-379-1417 x940",
    zip: "09426-6741",
    city: "Heathcoteland",
    email: "Izaiah.Hirthe@gmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/mastermindesign/128.jpg",
    job: "Future Research Developer",
  },
  {
    name: "Dalton Walter",
    birthday: "2022-12-04T15:06:54.158Z",
    phone: "1-815-654-5843",
    zip: "27952",
    city: "East Lane",
    email: "Noelia.Collins0@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/ankitind/128.jpg",
    job: "Lead Factors Officer",
  },
  {
    name: "Rickie Bruen",
    birthday: "2023-01-03T21:18:28.401Z",
    phone: "161-274-4684 x4405",
    zip: "59273",
    city: "East Scarletthaven",
    email: "Erna.Schroeder@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/terryxlife/128.jpg",
    job: "Legacy Optimization Assistant",
  },
  {
    name: "Anastacio Heller",
    birthday: "2023-08-08T21:22:56.675Z",
    phone: "741.082.2899 x8384",
    zip: "10349",
    city: "Camylleshire",
    email: "Dusty60@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/jpscribbles/128.jpg",
    job: "Chief Group Agent",
  },
  {
    name: "Miss Eloise Jaskolski",
    birthday: "2023-05-09T14:01:29.057Z",
    phone: "(496) 434-1045",
    zip: "47756",
    city: "Bergnaumbury",
    email: "Vena35@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/nellleo/128.jpg",
    job: "Corporate Marketing Consultant",
  },
  {
    name: "Gaetano Gaylord",
    birthday: "2023-05-07T23:36:01.662Z",
    phone: "132-129-5389",
    zip: "49665-0057",
    city: "Greenborough",
    email: "Alfred_Torp@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/kevka/128.jpg",
    job: "Human Web Technician",
  },
  {
    name: "Bret Lockman",
    birthday: "2023-09-14T12:10:22.856Z",
    phone: "573.418.7002 x54405",
    zip: "25319-3980",
    city: "New Eliasmouth",
    email: "Sanford.Towne@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/fjaguero/128.jpg",
    job: "Forward Quality Liaison",
  },
  {
    name: "Chris Ebert",
    birthday: "2023-02-12T06:19:39.351Z",
    phone: "(712) 992-5779",
    zip: "22324-3127",
    city: "South Kylerchester",
    email: "Mabelle38@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/deviljho_/128.jpg",
    job: "Global Web Associate",
  },
  {
    name: "Dr. Kaylin Rutherford",
    birthday: "2023-08-16T00:43:04.431Z",
    phone: "(733) 568-6718 x830",
    zip: "89773-1602",
    city: "South Meaghanport",
    email: "Leonie_Cole@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/umurgdk/128.jpg",
    job: "Regional Paradigm Specialist",
  },
  {
    name: "Corrine Schultz",
    birthday: "2023-02-13T10:33:36.017Z",
    phone: "018-054-7280 x9962",
    zip: "17583",
    city: "Orenview",
    email: "Destany_Reinger96@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/shvelo96/128.jpg",
    job: "Corporate Operations Executive",
  },
  {
    name: "Landen Dare Sr.",
    birthday: "2022-10-17T10:07:09.242Z",
    phone: "1-078-321-0536",
    zip: "34829-7865",
    city: "South Daphneyborough",
    email: "Marlene.Schmitt29@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/vanchesz/128.jpg",
    job: "Internal Configuration Manager",
  },
  {
    name: "Randall Yundt",
    birthday: "2023-02-19T03:26:10.979Z",
    phone: "581-874-3931 x56171",
    zip: "50682",
    city: "O'Connellland",
    email: "Cordelia31@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/mekal/128.jpg",
    job: "Regional Configuration Orchestrator",
  },
  {
    name: "Lauriane VonRueden",
    birthday: "2023-05-14T07:20:25.458Z",
    phone: "175.100.1757 x1066",
    zip: "66901",
    city: "Adalbertoport",
    email: "Arch17@yahoo.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ainsleywagon/128.jpg",
    job: "Legacy Web Officer",
  },
  {
    name: "Jermey Runte",
    birthday: "2023-05-05T03:46:19.529Z",
    phone: "1-927-192-8990 x6297",
    zip: "53053",
    city: "Deloresbury",
    email: "Corrine_Rutherford@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/bruno_mart/128.jpg",
    job: "Regional Communications Designer",
  },
  {
    name: "Chasity Herzog",
    birthday: "2023-07-25T05:16:36.758Z",
    phone: "437-261-2152",
    zip: "21325-2418",
    city: "Zitaville",
    email: "Raphaelle27@hotmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/aleclarsoniv/128.jpg",
    job: "Direct Integration Technician",
  },
  {
    name: "Frieda Boyle",
    birthday: "2023-08-23T18:59:35.256Z",
    phone: "592.066.0613 x543",
    zip: "62680",
    city: "New Roel",
    email: "Kaycee.Koss96@yahoo.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/loganjlambert/128.jpg",
    job: "Lead Group Manager",
  },
  {
    name: "Madeline Kunze",
    birthday: "2023-02-18T23:50:16.648Z",
    phone: "(415) 883-8459 x9215",
    zip: "87137-4232",
    city: "Hermanside",
    email: "Lilly_Kuhic@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/bungiwan/128.jpg",
    job: "Internal Directives Supervisor",
  },
  {
    name: "Queen Koelpin",
    birthday: "2023-04-05T17:07:14.324Z",
    phone: "251.567.6730 x4673",
    zip: "78757-6101",
    city: "Carrollfurt",
    email: "Torrey.Hickle@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/akmur/128.jpg",
    job: "International Metrics Orchestrator",
  },
  {
    name: "Mrs. Veda Hartmann",
    birthday: "2023-07-16T14:58:41.117Z",
    phone: "(587) 019-5415",
    zip: "75232",
    city: "Berniershire",
    email: "Jennifer55@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/alan_zhang_/128.jpg",
    job: "Customer Interactions Coordinator",
  },
  {
    name: "Noemie Bosco",
    birthday: "2023-08-25T21:00:54.201Z",
    phone: "366-838-2650 x7952",
    zip: "76929-9943",
    city: "Lake Rosalindland",
    email: "Marlon_Turner@gmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/itsajimithing/128.jpg",
    job: "District Web Designer",
  },
  {
    name: "Dixie White",
    birthday: "2023-02-20T06:10:37.100Z",
    phone: "954-006-4825 x195",
    zip: "80400",
    city: "New Assuntaton",
    email: "Elyse.Predovic15@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/terryxlife/128.jpg",
    job: "Human Web Specialist",
  },
  {
    name: "Ruben Nitzsche",
    birthday: "2023-05-31T00:09:42.219Z",
    phone: "(089) 234-7425 x53179",
    zip: "65116",
    city: "East Yvettebury",
    email: "Declan_Stiedemann86@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/we_social/128.jpg",
    job: "Central Solutions Director",
  },
  {
    name: "Florine O'Connell",
    birthday: "2023-02-06T09:22:02.878Z",
    phone: "510.885.8003 x0787",
    zip: "83005-9930",
    city: "Grayceberg",
    email: "Britney.Borer12@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/al_li/128.jpg",
    job: "Dynamic Applications Manager",
  },
  {
    name: "Theodora Jaskolski",
    birthday: "2022-11-04T04:01:19.447Z",
    phone: "226.139.5888",
    zip: "78784",
    city: "Lonieborough",
    email: "Emely.Adams15@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/taylorling/128.jpg",
    job: "District Accountability Officer",
  },
  {
    name: "Hailey Bogisich",
    birthday: "2023-05-05T06:26:32.260Z",
    phone: "345-824-7258",
    zip: "05717-1672",
    city: "Runolfsdottirfort",
    email: "Sadye_Watsica@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/otozk/128.jpg",
    job: "Central Functionality Specialist",
  },
  {
    name: "Mr. Ila Kozey",
    birthday: "2023-01-26T03:30:51.351Z",
    phone: "(887) 197-3926",
    zip: "05100-5997",
    city: "Dickinsonbury",
    email: "Leon_Schinner30@yahoo.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/jeffgolenski/128.jpg",
    job: "Dynamic Division Administrator",
  },
  {
    name: "Alan Blick",
    birthday: "2023-01-31T12:01:27.620Z",
    phone: "1-468-401-9164",
    zip: "34415",
    city: "Schmittshire",
    email: "Magnus_Rosenbaum59@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/coreyweb/128.jpg",
    job: "Internal Functionality Representative",
  },
  {
    name: "Macie Kirlin",
    birthday: "2023-02-10T21:13:33.677Z",
    phone: "825.833.8666 x629",
    zip: "73775",
    city: "Lake Russell",
    email: "Columbus63@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/scips/128.jpg",
    job: "Lead Data Developer",
  },
  {
    name: "Howell Corkery",
    birthday: "2023-01-28T08:39:52.956Z",
    phone: "890-681-6292 x78569",
    zip: "76131",
    city: "Hellermouth",
    email: "Karson_Orn@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/Shriiiiimp/128.jpg",
    job: "Forward Data Director",
  },
  {
    name: "Carlos Schaden",
    birthday: "2023-06-07T05:07:32.566Z",
    phone: "(030) 314-3720 x2335",
    zip: "78398",
    city: "Torphymouth",
    email: "Jolie_Waters@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/mighty55/128.jpg",
    job: "Dynamic Branding Producer",
  },
  {
    name: "Clifton Labadie",
    birthday: "2023-01-18T07:28:05.007Z",
    phone: "(329) 046-5379",
    zip: "25514-3572",
    city: "Sanfordshire",
    email: "Grayson.Fahey@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/creartinc/128.jpg",
    job: "National Tactics Officer",
  },
  {
    name: "Eino Goodwin",
    birthday: "2023-04-26T04:58:20.535Z",
    phone: "1-499-361-1203 x14899",
    zip: "51118",
    city: "Tremaineburgh",
    email: "Amalia.Schumm84@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/nelshd/128.jpg",
    job: "Customer Directives Orchestrator",
  },
  {
    name: "Timothy Kuhn",
    birthday: "2023-09-02T16:23:51.252Z",
    phone: "(254) 236-1568 x89685",
    zip: "19009",
    city: "North Kadeland",
    email: "Adrian.Keeling@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/iduuck/128.jpg",
    job: "Principal Infrastructure Orchestrator",
  },
  {
    name: "Gina Nader",
    birthday: "2023-08-07T13:15:23.169Z",
    phone: "758.520.4392",
    zip: "96403-5472",
    city: "Crookshaven",
    email: "Lindsey94@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/netonet_il/128.jpg",
    job: "Lead Usability Associate",
  },
  {
    name: "Elza Stoltenberg",
    birthday: "2023-09-05T18:22:49.888Z",
    phone: "418-884-9495 x503",
    zip: "01890-2215",
    city: "Port Tierra",
    email: "Arch_Hermiston48@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/andytlaw/128.jpg",
    job: "District Implementation Administrator",
  },
  {
    name: "Burley Rolfson",
    birthday: "2022-10-11T12:27:56.868Z",
    phone: "1-426-504-5052",
    zip: "03667",
    city: "New Marianna",
    email: "Wade41@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/jayrobinson/128.jpg",
    job: "Dynamic Interactions Officer",
  },
  {
    name: "Reed Hayes",
    birthday: "2022-11-14T11:28:53.942Z",
    phone: "695-783-3184 x2214",
    zip: "14806-7814",
    city: "Lake Eugene",
    email: "Reyna_Roob65@yahoo.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/devinhalladay/128.jpg",
    job: "Dynamic Interactions Manager",
  },
  {
    name: "Annamae Swaniawski",
    birthday: "2023-05-12T17:51:12.486Z",
    phone: "(138) 621-3219 x8329",
    zip: "30113-5575",
    city: "North Garrytown",
    email: "Rachelle_Franecki@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/sdidonato/128.jpg",
    job: "Global Optimization Manager",
  },
  {
    name: "Joana Hermann",
    birthday: "2022-12-23T06:18:33.571Z",
    phone: "800-352-4531 x9668",
    zip: "75619-6831",
    city: "Connton",
    email: "Alanna15@gmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/itstotallyamy/128.jpg",
    job: "Principal Mobility Specialist",
  },
  {
    name: "Javon Windler",
    birthday: "2023-06-12T00:50:59.714Z",
    phone: "836.675.5308",
    zip: "75407-5942",
    city: "Whitneyborough",
    email: "Aurelia.Dicki89@hotmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/therealmarvin/128.jpg",
    job: "Internal Operations Executive",
  },
  {
    name: "Miss Lelah Smith",
    birthday: "2023-01-16T07:32:06.034Z",
    phone: "(567) 038-3409",
    zip: "19530",
    city: "Astridland",
    email: "Bernice.Hettinger@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/fluidbrush/128.jpg",
    job: "Investor Web Consultant",
  },
  {
    name: "Roderick Hauck",
    birthday: "2023-02-09T22:11:30.491Z",
    phone: "426-517-5087 x23099",
    zip: "86726-4004",
    city: "Lake Demarco",
    email: "Kelsi.Brakus74@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/lepinski/128.jpg",
    job: "Lead Accountability Manager",
  },
  {
    name: "Kristofer Lehner I",
    birthday: "2022-12-20T17:33:23.709Z",
    phone: "1-901-881-6140 x12345",
    zip: "43382-8109",
    city: "Sibylview",
    email: "Alfonzo14@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/Elt_n/128.jpg",
    job: "District Communications Representative",
  },
  {
    name: "Rickie Nikolaus",
    birthday: "2022-09-30T21:34:37.741Z",
    phone: "1-964-356-6430 x8333",
    zip: "31113-4578",
    city: "West Giannichester",
    email: "Velma.Feeney9@hotmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/claudioguglieri/128.jpg",
    job: "National Operations Officer",
  },
  {
    name: "Dallin Brakus",
    birthday: "2022-10-29T01:08:07.881Z",
    phone: "1-026-572-2657 x2707",
    zip: "51846-4887",
    city: "Myraburgh",
    email: "Meredith62@gmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/_williamguerra/128.jpg",
    job: "Product Interactions Representative",
  },
  {
    name: "Clifford Keebler",
    birthday: "2022-12-26T14:58:14.437Z",
    phone: "(703) 644-9406 x1212",
    zip: "59191-0642",
    city: "Alannaton",
    email: "Cleora.OConner@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/samscouto/128.jpg",
    job: "Product Optimization Liaison",
  },
  {
    name: "Cristian Veum MD",
    birthday: "2023-06-03T15:22:03.461Z",
    phone: "416-462-8145 x79925",
    zip: "52994",
    city: "Heaneymouth",
    email: "Nina_Kulas@hotmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/noufalibrahim/128.jpg",
    job: "Lead Intranet Manager",
  },
  {
    name: "Jacey Rippin",
    birthday: "2022-10-24T07:13:12.823Z",
    phone: "(787) 397-3588",
    zip: "26373-5171",
    city: "Herzogtown",
    email: "Lowell_Medhurst7@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/ManikRathee/128.jpg",
    job: "Human Assurance Agent",
  },
  {
    name: "Ronny Schinner",
    birthday: "2023-05-24T18:53:14.278Z",
    phone: "(297) 630-0141",
    zip: "57409",
    city: "North Roderickfurt",
    email: "Fae_Borer55@yahoo.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/artem_kostenko/128.jpg",
    job: "Investor Tactics Representative",
  },
  {
    name: "Tracy Goldner",
    birthday: "2022-12-13T13:24:39.795Z",
    phone: "602.559.7940",
    zip: "54372",
    city: "South Brendenland",
    email: "Jimmy.Heller@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/buryaknick/128.jpg",
    job: "Product Implementation Strategist",
  },
  {
    name: "Cleve Carter DDS",
    birthday: "2022-12-01T11:53:37.129Z",
    phone: "(634) 569-2063",
    zip: "77011-4602",
    city: "South Evanville",
    email: "Rosa_Jaskolski16@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/alterchuca/128.jpg",
    job: "Customer Research Representative",
  },
  {
    name: "Karen Kuhic",
    birthday: "2022-12-28T06:33:54.970Z",
    phone: "190.155.0551",
    zip: "23730-9526",
    city: "Farrellchester",
    email: "Myriam.Ebert80@hotmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/marcusgorillius/128.jpg",
    job: "Forward Tactics Liaison",
  },
  {
    name: "Eveline Feeney",
    birthday: "2023-04-10T18:25:44.428Z",
    phone: "906-708-1624",
    zip: "19034",
    city: "Westshire",
    email: "Vena.Treutel@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/notbadart/128.jpg",
    job: "National Mobility Producer",
  },
  {
    name: "Rodrigo Hills",
    birthday: "2023-02-20T19:06:12.344Z",
    phone: "408.036.7427 x0722",
    zip: "37427",
    city: "South Orval",
    email: "Teresa80@hotmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/davidhemphill/128.jpg",
    job: "Forward Tactics Engineer",
  },
  {
    name: "Trey Green MD",
    birthday: "2022-12-19T06:07:04.130Z",
    phone: "250.884.6669",
    zip: "71882-9696",
    city: "Aliport",
    email: "Freddie.Smith@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/saschamt/128.jpg",
    job: "Future Marketing Executive",
  },
  {
    name: "Itzel Daniel",
    birthday: "2023-03-31T16:28:12.614Z",
    phone: "699-366-7973 x40769",
    zip: "16115",
    city: "Kamrynfort",
    email: "Brad22@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/toddrew/128.jpg",
    job: "Senior Data Officer",
  },
  {
    name: "Angelina Stark",
    birthday: "2022-12-02T03:44:33.221Z",
    phone: "(263) 325-3694",
    zip: "08778-3876",
    city: "Spencerchester",
    email: "Johnpaul24@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/bboy1895/128.jpg",
    job: "Regional Accounts Technician",
  },
  {
    name: "Max Pouros DVM",
    birthday: "2022-12-02T21:05:18.264Z",
    phone: "419-341-2286",
    zip: "07447",
    city: "Watersmouth",
    email: "Jaleel14@hotmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/robinlayfield/128.jpg",
    job: "Investor Program Assistant",
  },
  {
    name: "Dayne Brown",
    birthday: "2022-09-28T02:56:38.877Z",
    phone: "1-063-909-7060",
    zip: "81053",
    city: "Mohrshire",
    email: "Jillian_Cartwright15@hotmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/oksanafrewer/128.jpg",
    job: "Investor Group Assistant",
  },
  {
    name: "Ruthe Cassin",
    birthday: "2023-02-21T03:38:23.194Z",
    phone: "458-826-0787",
    zip: "83966-3868",
    city: "Aliyashire",
    email: "Geovany37@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/okansurreel/128.jpg",
    job: "Dynamic Web Specialist",
  },
  {
    name: "Jonathon Kuphal III",
    birthday: "2023-01-01T23:01:30.123Z",
    phone: "1-628-556-5026 x5530",
    zip: "51506",
    city: "West Andreane",
    email: "Millie68@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/shesgared/128.jpg",
    job: "Forward Research Manager",
  },
  {
    name: "Elouise Gottlieb",
    birthday: "2022-12-15T18:37:38.998Z",
    phone: "1-308-860-2238 x9942",
    zip: "94799",
    city: "Bayerside",
    email: "Eloy_Weber@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg",
    job: "Future Optimization Associate",
  },
  {
    name: "Isabella Gibson",
    birthday: "2023-06-02T20:55:00.609Z",
    phone: "732-809-1632 x56589",
    zip: "36121",
    city: "Venaview",
    email: "Broderick_Quigley61@yahoo.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ZacharyZorbas/128.jpg",
    job: "Principal Data Consultant",
  },
  {
    name: "Candida Schmitt II",
    birthday: "2022-11-22T09:01:45.672Z",
    phone: "583.974.3033 x3597",
    zip: "97483-1807",
    city: "Tavaresmouth",
    email: "Earl8@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/denisepires/128.jpg",
    job: "International Solutions Consultant",
  },
  {
    name: "Wyatt Schmeler",
    birthday: "2022-10-18T08:58:20.464Z",
    phone: "874-532-6632",
    zip: "62822",
    city: "Port Rhett",
    email: "Precious16@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/ccinojasso1/128.jpg",
    job: "Principal Quality Consultant",
  },
  {
    name: "Matilde Dietrich",
    birthday: "2023-04-20T20:53:43.002Z",
    phone: "(373) 594-9877",
    zip: "37005-8334",
    city: "New Leonel",
    email: "Louie.Mayer@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/ruehldesign/128.jpg",
    job: "Dynamic Implementation Assistant",
  },
  {
    name: "Otilia Conroy",
    birthday: "2023-03-08T15:54:23.533Z",
    phone: "749.886.8577 x53914",
    zip: "63570-2616",
    city: "Port Arnaldoborough",
    email: "Earnest90@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/renbyrd/128.jpg",
    job: "Investor Directives Developer",
  },
  {
    name: "Diamond McClure III",
    birthday: "2023-02-21T16:40:04.917Z",
    phone: "1-748-003-7361 x817",
    zip: "84885",
    city: "North Aidantown",
    email: "Nathen77@hotmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/terryxlife/128.jpg",
    job: "International Accountability Administrator",
  },
  {
    name: "Harrison Stokes",
    birthday: "2022-12-26T06:59:25.849Z",
    phone: "(922) 097-0203 x96606",
    zip: "36019",
    city: "Scarlettberg",
    email: "Larue10@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/darylws/128.jpg",
    job: "Internal Identity Assistant",
  },
  {
    name: "Maybelle Bailey",
    birthday: "2023-07-26T07:05:10.965Z",
    phone: "625.543.6234 x253",
    zip: "25628-1447",
    city: "Romaguerastad",
    email: "Beverly.Mohr@gmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/sasha_shestakov/128.jpg",
    job: "International Marketing Planner",
  },
  {
    name: "Casimir Little DVM",
    birthday: "2023-09-04T17:08:56.239Z",
    phone: "1-667-095-5316 x048",
    zip: "99245-4277",
    city: "Gulgowskimouth",
    email: "Serena_Keebler24@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/jervo/128.jpg",
    job: "Chief Creative Officer",
  },
  {
    name: "Mary Quigley",
    birthday: "2023-05-28T00:22:12.410Z",
    phone: "594.705.4892 x7358",
    zip: "32635",
    city: "Runteburgh",
    email: "Catherine51@yahoo.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/laasli/128.jpg",
    job: "Human Group Associate",
  },
  {
    name: "Deven Abernathy",
    birthday: "2023-08-28T17:20:30.032Z",
    phone: "396.902.5888 x771",
    zip: "79742",
    city: "Alejandraton",
    email: "Nels.Johns83@hotmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/allthingssmitty/128.jpg",
    job: "Dynamic Infrastructure Director",
  },
  {
    name: "Wilford Fisher V",
    birthday: "2023-06-30T07:54:59.121Z",
    phone: "192.702.4003",
    zip: "56628",
    city: "New Lonzo",
    email: "Kade.Gutmann45@yahoo.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/itsajimithing/128.jpg",
    job: "Future Accounts Supervisor",
  },
  {
    name: "Raina Frami",
    birthday: "2022-11-17T18:41:43.326Z",
    phone: "1-734-641-4104 x6925",
    zip: "68423",
    city: "Lake Edna",
    email: "Darrell_Stehr20@hotmail.com",
    image:
      "https://s3.amazonaws.com/uifaces/faces/twitter/alexivanichkin/128.jpg",
    job: "Investor Configuration Director",
  },
];

// crear arrays vacíos para las iniciales y las ciudades, que son dos tipos de filtros que vamos a tener que rellenar de manera dinámica mediante js, porque no voy a crear cada inicial de una en una en html ni cada ciudad que serían opciones del select.
const INICIALES = [];
const CITIES = [];

// voy guardando cada uno de los posibles valores que quiero filtrar
let LETRA_SELECCIONADA = "";
let NAME_VALUE = "";
let EMAIL_VALUE = "";
let PHONE_VALUE = "";
let CITY_VALUE = "";

// los nuevos usuarios que quiero mostrar
let USERS_FILTERED = [];

// declaración
const filtrar = (array) => {
  USERS_FILTERED = array.filter(
    (element) =>
      element.name[0].includes(LETRA_SELECCIONADA) &&
      element.name.toLowerCase().includes(NAME_VALUE) &&
      element.email.toLowerCase().includes(EMAIL_VALUE) &&
      element.phone.toLowerCase().includes(PHONE_VALUE) &&
      element.city.includes(CITY_VALUE)
  );
  print(USERS_FILTERED);
};

// declaración
const limpiarLetras = () => {
  // selecciona todas la letras 
  const allDivs = document.querySelectorAll(".divInicial");
  // las recorre para acceder a cada una de ellas
  for (const element of allDivs) {
    // les cambia el backgroundColor 
    element.style.backgroundColor = "var(--secondary)";
  }
};

// declaración
const seleccionarLetra = (letra, div) => {
  limpiarLetras();
  // le cambia el backgroundColor a la seleccionada en este momento
  div.style.backgroundColor = "var(--terciary)";
  // guardamos el valor en la variable
  LETRA_SELECCIONADA = letra;
  // filtramos
  filtrar(users);
};

// declaración
// vamos a preparar la lógica de las iniciales
const getIniciales = (usersArray) => {
  // recorremos todos los usuarios y guardamos las iniciales de cada uno de ellos sin que se repita ninguna
  for (const user of usersArray) {
    if (!INICIALES.includes(user.name[0])) {
      INICIALES.push(user.name[0]);
    }
  }

  INICIALES.sort();

  // seleccionamos el div donde vamos a pintarlas
  const inincialesDiv = document.querySelector("#iniciales");

  // recorremos el array de iniciales y las pintamos
  for (const inicial of INICIALES) {
    const divInicial = document.createElement("div");
    const letra = document.createElement("h3");

    divInicial.className = "divInicial";
    letra.textContent = inicial;

    // le damos la funcionalidad a las iniciales
    divInicial.addEventListener("click", (e) =>
      seleccionarLetra(inicial, divInicial)
    );

    inincialesDiv.append(divInicial);
    divInicial.append(letra);
  }
};

// declaración
const getCities = (usersArray) => {
  // mismo que getIniciales pero con las ciudades
  for (const user of usersArray) {
    if (!CITIES.includes(user.city)) {
      CITIES.push(user.city);
    }
  }

  CITIES.sort();

  // selecciono donde las quiero pintar
  const select = document.querySelector("#city");

  // recorro el array de ciudades
  for (const city of CITIES) {
    /* pinto cada option */
    select.innerHTML += `<option value="${city}">${city}</option>`;
  }
};

// declaración
const print = (array) => {
  // seleccionamos el div donde queremos pintar los usuarios filtrados o todos los usuarios
  const usersContainer = document.querySelector("#usersContainer");

  // lo primero que añado es un div con todas las propiedades que van a tener los usuarios, a nivel informativo
  usersContainer.innerHTML = `
    <div class="info">
        <h3>Nombre</h3>
        <p>Email</p>
        <p>Teléfono</p>
        <p>Ciudad</p>
        <p>Trabajo</p>
    </div>
`;

  // si no he encontrado ningún usuario con esas características muestro un h4 informativo de que no coincide
  if (!array.length) {
    usersContainer.innerHTML += `
        <h4 class="notFound">No se han encontrado usuarios con esos filtros</h4>
    `;
  }

  // en el caso de que si que tenga recorro el array y pinto cada uno de ellos
  for (const element of array) {
    usersContainer.innerHTML += `
        <div class="user">
            <h3>${element.name}</h3>
            <p>${element.email}</p>
            <p>${element.phone}</p>
            <p>${element.city}</p>
            <p>${element.job}</p>
        </div>
    `;
  }
};

// selector del párrafo mostrar, lo selecciono porque quiero que cuando le hagan click "abra" el div de los filtros para poder utilizarlos
const pMostrar = document.querySelector(".mostrar");

// declaración
// cambiar una clase a un div y cambiar el texto a un párrafo
const abrir = () => {
  // seleccionar el div de los filtros
  const filters = document.querySelector("#filters");

  // preguntar que clase tiene para saber que texto poner
  if (filters.className !== "abierto") {
    // si está abierto ponermos cerrar Filtros
    pMostrar.textContent = "Cerrar Filtros";
  } else {
    // si no está abierto ponermos mostrar filtros
    pMostrar.textContent = "Mostrar Filtros";
  }

  // cambiar la clase abierto a filters, ponerla o quitarla dependiendo de si la tiene o no
  filters.classList.toggle("abierto");
};

// añadimos al párrafo seleccionado previamente el escuchador de eventos click para que cuando le hagan click ejecute la función abrir
pMostrar.addEventListener("click", abrir);

// selectores de los filtros
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone");
const selectCity = document.querySelector("#city");

const getValue = (variable, input) => {
  let value = input.value.toLowerCase();

  if (variable === "name") {
    NAME_VALUE = value;
  } else if (variable === "email") {
    EMAIL_VALUE = value;
  } else if (variable === "phone") {
    PHONE_VALUE = value;
  } else {
    CITY_VALUE = input.value;
  }

  filtrar(users);
};

inputName.addEventListener("input", () => getValue("name", inputName));
inputEmail.addEventListener("input", () => getValue("email", inputEmail));
inputPhone.addEventListener("input", () => getValue("phone", inputPhone));
selectCity.addEventListener("change", () => getValue("city", selectCity));

getIniciales(users);
getCities(users);
// el primer pintado de usuarios sin filtrar ni nada
print(users);

// seleccionamos el botón de limpiar
const limpiarButton = document.querySelector("#limpiar");

const limpiar = () => {
  // resetea TODOS los valores
  LETRA_SELECCIONADA = "";
  NAME_VALUE = "";
  EMAIL_VALUE = "";
  PHONE_VALUE = "";
  CITY_VALUE = "";
  inputEmail.value = "";
  inputName.value = "";
  inputPhone.value = "";
  limpiarLetras();
  selectCity.value = "Abernathyside";
  // pinta con todos los usuarios
  print(users);
};

// cuando hagamos click llamamos a la función limpiar
limpiarButton.addEventListener("click", limpiar);