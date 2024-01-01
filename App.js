import React from "react";
import ReactDOM from "react-dom/client"


/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restraurant Container
 *  - Restaurant card
 *      - Image
 *      - Name of Restaurant, Cuisine, Star Rating, Delivery Time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}
const styleCard = {
    backgroundColor: "#f0f0f0",
}
const restaurantsList= [
    {
      "info": {
        "id": "71350",
        "name": "Sweet Magic Mithai Shop",
        "cloudinaryImageId": "p2k9r9zkeqcjhohsgrfu",
        "locality": "Mg Road",
        "areaName": "Labbipet",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "South Indian",
          "Indian",
          "Biryani",
          "Desserts",
          "Sweets",
          "Bakery"
        ],
        "avgRating": 4.3,
        "parentId": "199307",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "31 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-01 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹120 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-e1142553-b9a7-47de-91f0-4f3bfaa5763c"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sweet-magic-mithai-shop-mg-road-labbipet-vijayawada-71350",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "68615",
        "name": "Silver Dum Biryani - Original",
        "cloudinaryImageId": "rlyepihgnuxcs74qjitv",
        "locality": "Panta Kaluva Road",
        "areaName": "Gurunanak Colony",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Biryani",
          "Chinese",
          "Seafood"
        ],
        "avgRating": 4.4,
        "parentId": "471039",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-01 16:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹120 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-e1142553-b9a7-47de-91f0-4f3bfaa5763c"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/silver-dum-biryani-original-panta-kaluva-road-gurunanak-colony-vijayawada-68615",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "695744",
        "name": "Bengaluru Bhavan",
        "cloudinaryImageId": "6bfb48bb2346de77aeded4f829465ac3",
        "locality": "Pinnamaneni Poly Clinic Road",
        "areaName": "Benz Circle And Auto Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Biryani",
          "Chinese"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "416232",
        "avgRatingString": "4.5",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 0.5,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "0.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-01 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              "description": "OnlyOnSwiggy"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "OnlyOnSwiggy",
                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹120 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-e1142553-b9a7-47de-91f0-4f3bfaa5763c"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/bengaluru-bhavan-pinnamaneni-poly-clinic-road-benz-circle-and-auto-nagar-vijayawada-695744",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "80777",
        "name": "Hotel Raj Towers",
        "cloudinaryImageId": "hdum49wbfeg5lmgqlgnt",
        "locality": "Eluru Road",
        "areaName": "Governorpet",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "Chinese",
          "Tandoor"
        ],
        "avgRating": 4.3,
        "parentId": "101299",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "34 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-01 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹120 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-e1142553-b9a7-47de-91f0-4f3bfaa5763c"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hotel-raj-towers-eluru-road-governorpet-vijayawada-80777",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "315269",
        "name": "Sri Ramaiah Mess & Caterers",
        "cloudinaryImageId": "k20dmfehfggy751vaiir",
        "locality": "Prakasam Road",
        "areaName": "Governorpet",
        "costForTwo": "₹160 for two",
        "cuisines": [
          "South Indian"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "194319",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-01 16:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹120 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-e1142553-b9a7-47de-91f0-4f3bfaa5763c"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sri-ramaiah-mess-and-caterers-prakasam-road-governorpet-vijayawada-315269",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "537439",
        "name": "4m Biryani House",
        "cloudinaryImageId": "ulbrrcoke5fgzqnwwcjn",
        "locality": "Pullatikata Street",
        "areaName": "Gunadala",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani"
        ],
        "avgRating": 3.3,
        "parentId": "19646",
        "avgRatingString": "3.3",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 2.9,
          "serviceability": "SERVICEABLE",
          "slaString": "36 mins",
          "lastMileTravelString": "2.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-01 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹120 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-e1142553-b9a7-47de-91f0-4f3bfaa5763c"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/4m-biryani-house-pullatikata-street-gunadala-vijayawada-537439",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "666667",
        "name": "Raj Darbar Restaurants",
        "cloudinaryImageId": "2a9921eabc6c0423a108f9a8db094c39",
        "locality": "Moghalrajpuram",
        "areaName": "Benz Circle and Auto Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Biryani",
          "Tandoor",
          "Chinese",
          "North Indian",
          "Andhra"
        ],
        "avgRating": 4.2,
        "parentId": "361086",
        "avgRatingString": "4.2",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "24 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-01 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹120 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-e1142553-b9a7-47de-91f0-4f3bfaa5763c"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/raj-darbar-restaurants-moghalrajpuram-benz-circle-and-auto-nagar-vijayawada-666667",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "282628",
        "name": "Kadiapattanam Military Hotel",
        "cloudinaryImageId": "uxvrijxlgq04jmcfth5p",
        "locality": "PVP Mall Road",
        "areaName": "Labbipet",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "Indian"
        ],
        "avgRating": 4,
        "parentId": "13304",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1,
          "serviceability": "SERVICEABLE",
          "slaString": "24 mins",
          "lastMileTravelString": "1.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-01 15:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹120 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-e1142553-b9a7-47de-91f0-4f3bfaa5763c"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kadiapattanam-military-hotel-pvp-mall-road-labbipet-vijayawada-282628",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "74011",
        "name": "Dolphins family restaurnat",
        "cloudinaryImageId": "lnnqnw14nplf6hvfta1i",
        "locality": "Ramachandra Nagar",
        "areaName": "Labbipet",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Chinese",
          "Thalis",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "13980",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-01-01 23:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹120 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-e1142553-b9a7-47de-91f0-4f3bfaa5763c"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dolphins-family-restaurnat-ramachandra-nagar-labbipet-vijayawada-74011",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
];
const RestaurantCard = (props) =>{
    const {name, cuisines, avgRating, sla,cloudinaryImageId} = props.resObj;
    return (
        <div className="res-card" style={styleCard}>
            <div className="res-img-container">
                <img className="res-logo" alt="Res Image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            </div>
            <h3> {name}</h3>
            <h3> {cuisines.join(', ')}</h3>
            <h3> {avgRating} Stars</h3>
            <h3> {sla.slaString}</h3>
        </div>
    )
    
}
// Not using keys (Not acceptable) <<<< index as keys <<<< Unique id as key (Best Practice)
const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    restaurantsList.map((res)=> <RestaurantCard key={res.info.id} resObj={res.info}/> )
                }
            </div>
        </div>
    )
}
const AppLayout = () =>{
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);