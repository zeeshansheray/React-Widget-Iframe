const PassTypes = {
    COUPON          : 'coupon',
    TICKET          : 'ticket',
    LOYALTY_CARD    : 'loyaltyCard',
    STAMP_CARD      : 'stampCard',
    MEMBERSHIP_CARD : 'membershiCard'
}

const ApplePassModels = {
    COUPON   : 'coupon',
    TICKET   : 'ticket',
    STORE    : 'store',
    GENERIC  : 'generic',
    BOARDING : 'boarding'
}

const GooglePassModels = {
    OFFER   : 'offer',
    LOYALTY : 'loyalty',
    TICKET  : 'ticket'
}

const PassModels = {
    COUPON   : 'coupon',
    TICKET   : 'ticket',
    CARD     : 'card',
    BOARDING : 'boarding'
}

const DesignTypes = {
    APPLE        : 'apple',
    GOOGLE       : 'google',
    BEASTY       : 'beasty',
    WALLETPASSES : 'walletPasses'
}

const STAMPCOVER_URL = "https://isystematic.s3.us-west-2.amazonaws.com/walletly/StampCover/"

const PassDesign = {
    PassTypes,
    ApplePassModels,
    GooglePassModels,
    PassModels,
    DesignTypes,
    STAMPCOVER_URL
}

export default PassDesign