import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *    - Restaurant cards
 *      - Img
 *      - Name of res, star rating, cusine,
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const resObj = [
  {
    info: {
      id: "2552",
      name: "Gullu's Chaat",
      cloudinaryImageId: "dzwlfxw0hqb0txqs9y9g",
      locality: "Serpentine Road",
      areaName: "Seshadripuram",
      costForTwo: "₹250 for two",
      cuisines: ["Chaat", "Snacks"],
      avgRating: 4.1,
      veg: true,
      parentId: "21103",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-24 21:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-71a1f83b-ff07-41cf-b6cb-6e36cb31b957",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/gullus-chaat-serpentine-road-seshadripuram-bangalore-2552",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "3883",
      name: "Vidyarthi Bhavan",
      cloudinaryImageId: "tvur6lwwvnd2euflpswm",
      locality: "Basavanagudi",
      areaName: "Basavanagudi",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      parentId: "20949",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-24 20:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-71a1f83b-ff07-41cf-b6cb-6e36cb31b957",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/vidyarthi-bhavan-basavanagudi-bangalore-3883",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "20637",
      name: "Szechuan Dragon",
      cloudinaryImageId: "o1hvh788liketqhmbes2",
      locality: "HanumanthaNagar",
      areaName: "HanumanthaNagar",
      costForTwo: "₹500 for two",
      cuisines: ["Chinese", "Thai"],
      avgRating: 4.3,
      parentId: "7539",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-24 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹599",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-71a1f83b-ff07-41cf-b6cb-6e36cb31b957",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/szechuan-dragon-hanumanthanagar-bangalore-20637",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "264863",
      name: "Al Zara Mandi Arabian Restaurant",
      cloudinaryImageId: "glqxlss2oht3etcbysmt",
      locality: "MM Road",
      areaName: "Frazer Town",
      costForTwo: "₹500 for two",
      cuisines: ["Arabian", "North Indian", "Indian", "Desserts"],
      avgRating: 4.3,
      parentId: "29562",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-24 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-71a1f83b-ff07-41cf-b6cb-6e36cb31b957",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/al-zara-mandi-arabian-restaurant-mm-road-frazer-town-bangalore-264863",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "35307",
      name: "Chaat Street Express",
      cloudinaryImageId: "aqenclsr4kwkbzomahyx",
      locality: "5th Block",
      areaName: "Koramangala",
      costForTwo: "₹150 for two",
      cuisines: ["Snacks", "Chaat", "Street Food", "North Indian", "Fast Food"],
      avgRating: 4,
      veg: true,
      parentId: "231468",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-25 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-71a1f83b-ff07-41cf-b6cb-6e36cb31b957",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/chaat-street-express-5th-block-koramangala-bangalore-35307",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "48581",
      name: "Rotti Walla",
      cloudinaryImageId: "kvlaq1ugkoozqr741zrv",
      locality: "Appareddy Palya",
      areaName: "Indiranagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Snacks",
        "Beverages",
        "Tandoor",
        "South Indian",
      ],
      avgRating: 4.1,
      parentId: "9541",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 6.2,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "6.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-25 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹175 OFF",
        subHeader: "ABOVE ₹449",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-71a1f83b-ff07-41cf-b6cb-6e36cb31b957",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/rotti-walla-appareddy-palya-indiranagar-bangalore-48581",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "323337",
      name: "Melange by Asha Sweet Center",
      cloudinaryImageId: "gzeyrvrbxcwaz5zv673c",
      locality: "Yalappa Garden",
      areaName: "Malleshwaram",
      costForTwo: "₹250 for two",
      cuisines: [
        "Bakery",
        "Fast Food",
        "Cafe",
        "Burgers",
        "Pizzas",
        "Pastas",
        "Juices",
        "Sweets",
        "Snacks",
        "Desserts",
      ],
      avgRating: 4.5,
      veg: true,
      parentId: "453146",
      avgRatingString: "4.5",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-24 21:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-71a1f83b-ff07-41cf-b6cb-6e36cb31b957",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/melange-by-asha-sweet-center-yalappa-garden-malleshwaram-bangalore-323337",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "319688",
      name: "The SnackStop(Eswaris Homemade snacks)",
      cloudinaryImageId: "fz6ntufihvcbdxmfmkju",
      locality: "HAL 2nd Stage",
      areaName: "Indiranagar",
      costForTwo: "₹150 for two",
      cuisines: [
        "Snacks",
        "Indian",
        "Sweets",
        "Bakery",
        "North Indian",
        "South Indian",
        "Home Food",
      ],
      avgRating: 4.5,
      parentId: "373978",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-24 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-71a1f83b-ff07-41cf-b6cb-6e36cb31b957",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-snackstop-eswaris-homemade-snacks-hal-2nd-stage-indiranagar-bangalore-319688",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "491572",
      name: "Kaapi Katte",
      cloudinaryImageId: "rmssgdcxzzkkjb9aussv",
      locality: "Gubbi Veeranna Road",
      areaName: "Malleshwaram",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Combo"],
      avgRating: 4.3,
      veg: true,
      parentId: "113011",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-24 21:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-71a1f83b-ff07-41cf-b6cb-6e36cb31b957",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kaapi-katte-gubbi-veeranna-road-malleshwaram-bangalore-491572",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "690730",
      name: "Omm Nom Nomm",
      cloudinaryImageId: "0b6ccedf0af57a82ecea2910397bb947",
      locality: "BTM Layout",
      areaName: "Koramangala",
      costForTwo: "₹600 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.8,
      parentId: "21184",
      avgRatingString: "4.8",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 6.2,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "6.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-24 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-71a1f83b-ff07-41cf-b6cb-6e36cb31b957",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/omm-nom-nomm-btm-layout-koramangala-bangalore-690730",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "109787",
      name: "Chianti",
      cloudinaryImageId: "byb52jmakvfk71lqd0av",
      locality: "MG Road",
      areaName: "MG Road",
      costForTwo: "₹1250 for two",
      cuisines: ["Italian", "Pizzas", "Salads", "Pastas", "Desserts"],
      avgRating: 4.5,
      parentId: "7396",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-24 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-71a1f83b-ff07-41cf-b6cb-6e36cb31b957",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/chianti-mg-road-bangalore-109787",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "354531",
      name: "Burger Seigneur",
      cloudinaryImageId: "t8qo8yuimdpduzbozybj",
      locality: "St. Marks Road",
      areaName: "St. Marks Road",
      costForTwo: "₹1200 for two",
      cuisines: ["American", "Continental", "Beverages"],
      avgRating: 4.5,
      parentId: "12095",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-25 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
            shortDescription: "Kids Favourite options",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                  shortDescription: "Kids Favourite options",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-71a1f83b-ff07-41cf-b6cb-6e36cb31b957",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-seigneur-st-marks-road-bangalore-354531",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "59234",
      name: "Ramji Chaiwale",
      cloudinaryImageId: "pgs8vd3skpvt17vscltz",
      locality: "Residency Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹100 for two",
      cuisines: ["Fast Food", "Punjabi", "Desserts"],
      avgRating: 4.4,
      veg: true,
      parentId: "4216",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-24 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-71a1f83b-ff07-41cf-b6cb-6e36cb31b957",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/ramji-chaiwale-residency-road-ashok-nagar-bangalore-59234",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "342643",
      name: "The Pizza Bakery",
      cloudinaryImageId: "0335dd45be555d0a4187255e57d2ca88",
      locality: "Church Street",
      areaName: "Ashok Nagar",
      costForTwo: "₹700 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Continental"],
      avgRating: 4.5,
      parentId: "11108",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-24 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-71a1f83b-ff07-41cf-b6cb-6e36cb31b957",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-pizza-bakery-church-street-ashok-nagar-bangalore-342643",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "32510",
      name: "Toscano",
      cloudinaryImageId: "f6idsoj8oevlwas80b9c",
      locality: "Lavelle Road",
      areaName: "UB City",
      costForTwo: "₹1200 for two",
      cuisines: [
        "Italian",
        "Pizzas",
        "Pastas",
        "Continental",
        "Desserts",
        "Bakery",
      ],
      avgRating: 4.4,
      parentId: "22481",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 0.6,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "0.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-24 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-71a1f83b-ff07-41cf-b6cb-6e36cb31b957",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/toscano-lavelle-road-ub-city-bangalore-32510",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://imgs.search.brave.com/bbbM8VrzmP3X4rgRtEvcwdOu3MCRl7wCk68j1VMb1o8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvbG9nby9mb29k/LWNsb2NoZS0yODM2/bGQucG5nP253bT0x/Jm53cz0xJmluZHVz/dHJ5PWZvb2Qmc2Y9"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="res-logo"
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}🌟</h4>
      <h4>{sla.deliveryTime}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container ">
        {resObj.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
