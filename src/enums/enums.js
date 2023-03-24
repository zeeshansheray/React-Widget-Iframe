import Agency from './Agency'

const Environment = {
    DEVELOPMENT     : 'development',
    STAGING         : 'staging',
    PRODUCTION      : 'production'
}

const Server = {
    DEV_URL     : 'v2dev.walletly.ai',
    PROD_URL    : 'api.walletly.ai'
}

const RedeemingDiscountType = {
    PercentageOff   : 'percent_off',
    AmountOff       : 'amount_off',
    GiveFreeProduct : 'give_free_product',
    NoDiscount      : 'no_discount'
}

const ApiVersions = {
    V3 : 'v3',
    V4 : 'v4'
}

const RedemptionType = {
    SELF      : "self",
    CASHIER   : "cashier",
    // PROMOTION : "promotion",
    ORDER     : 'order'
}

const ResponseStatus = {
    SUCCESS         : 200,
    BAD_REQUEST     : 400,
    UNAUTHORIZED    : 401,
    FORBIDDEN       : 403,
    NOT_FOUND       : 404,
    INTERNAL_ERROR  : 500,
}

const Months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const Images = {
    LOGO_FILE_SIZE        : 5 * 1024 * 1024,
    LOGO_SUPPORTED_FORMAT : ['image/jpg', 'image/jpeg', 'image/png'],
    ICON_FILE_SIZE        : 2 * 1024 * 1024
}

const TOASTER_DELAY = 4 * 1000

const Operands = {
    GREATER   : 'greater',
    LESSER    : 'lesser',
    EQUAL     : 'equal',
    NOT_EQUAL : 'not_equal'
}

const BusinessType = {
    BRAND  : 'brand',
    AGENCY : 'agency'
}

const DeviceType = {
    ANDRIOD: 'andriod',
    APPLE  : 'apple'
}

const RedeemingWays = {
    AMOUNT  : 'amount',
    PERCENT : 'percent',
    PRODUCT : 'product'
}


//selectdropdown values of components 

const Moreoptions = [
    {
        name : 'More',
        value: 'more',
    },
    {
        name : 'Delete',
        value: 'delete',
    }
]

const PointExpiry = [
    {
        name    : 'After a certain period of inactivity',
        value   : 'After a certain period of inactivity'
    }
]

const PurchaseTypes = [
    {
        name : 'Total Purchase',
        value: 'Total Purchase'
    }
]

const PassVariables = [
    {
        name : 'Brand Name',
        value: 'Brand Name',
    }, 
    {
        name : 'Days Left',
        value: 'Days Left',
    }, 
    {
        name : 'Customer Lable',
        value: 'Customer Lable',
    }, 
    {
        name : 'First Name',
        value: 'First Name',
    }, 
    {
        name : 'Discount Table',
        value: 'Discount Table',
    }, 
    {
        name : 'Discount Field',
        value: 'Discount Field',
    }
]

const Notification_Type = {
    CREATE               : "passCreateNotification",
    STAMP_CARD_UPDATE    : "stampsUpdateNotification",
    LOYALTY_POINT_UPDATE : "pointsUpdateNotification",
    COUPON_REDEEMEED     : "couponUpdateNotification",
    TEXT                 : "textNotification",
    IMAGE                : "imageNotification",
    GENERAL              : "generalNotification"
}

const ExtraPoints = 
    ['Existing', 
     'Double', 
     'Triple'
    ]

const AgencyApp = {
//   'o6tVUtOO9L3sdSqqgVn7' : 'https://apps.apple.com/us/app/gosee-local/id1579468202',
//   'UA95bkhlgEIkHuEUCXq' : 'https://apps.apple.com/us/app/shire-rewardѕ/id1584615494',
  'DXpIns4NdgQ9IF0uGxvW' : 'https://apps.apple.com/us/app/future-money-club/id1579469209',
//   'iR8E4NFjO9iZqPRqHPf5' : 'https://apps.apple.com/us/app/walletly-global/id1588038162',  
//   'WQeEgJhH0SirUT531Rqm' : 'https://apps.apple.com/us/app/walletly-global/id1588038162',
//   'w3qYg7ln9dBwVQRMnNKA' : 'https://apps.apple.com/us/app/walletly-global/id1588038162'    
}

const Triggers = {
    CHECK_IN      : 'checkIn',
    POINTS        : 'points',
    TAGS          : 'tags',
    POINTS_UPDATE : 'points update',
    DEALS         : 'deals',
    FLOW          : 'flow',
    DAYS_INACTIVE : 'daysInactive',
    DAYS          : 'days',
    EVENT         : 'event'
}

const Actions = {
    ADD_TAG           : 'addTag',
    REMOVE_TAG        : 'removeTag',
    MANYCHAT          : 'manychat',
    U_CHAT            : 'uChat',
    CHATRACE          : 'chatrace',
    GHL               : 'ghl',
    WEBHOOKS          : 'webhooks',
    EMAIL             : 'email',
    SMS               : 'sms',
    WELCOME_SMS       : 'welcome_sms',
    GIVE_DEAL         : 'givedeal',
    PUSH_NOTIFICATION : 'pushNotification'
}



export {
    Triggers,
    Actions,
    Agency,
    ExtraPoints,
    Notification_Type,
    Environment,
    Server,
    ApiVersions,
    ResponseStatus,
    Months,
    Images,
    TOASTER_DELAY,
    Operands,
    BusinessType,
    DeviceType,
    Moreoptions,
    PointExpiry,
    PurchaseTypes,
    PassVariables,
    RedemptionType,
    AgencyApp,
    RedeemingDiscountType,
    RedeemingWays
}