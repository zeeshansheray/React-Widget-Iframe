const Platforms = {
    SHOPIFY  : 'shopify',
    FACEBOOK : 'facebook',
    WALLETLY : 'walletly'
}

const Plans = {
    PAY_AS_YOU_GO : 'pay as you go',
    UNLIMITED     : 'unlimited',
    BRAND_CONNECTION: 'brand connection'
}

const Tags = {
    BRAND_TAG : 'brandTag',
    SUBSCRIBER_TAG : 'subscriberTag'
}

const RedeemingWaysDiscountType = {
    
}


const BrandTypes = {
    DEMO           : 'demo',
    NORMAL         : 'normal',
    SHARED_LOYALITY: 'sharedLoyality',
    SUB_BRAND      : 'subBrand'
}

const DiscountType = {
    CUSTOM      : 'custom',
    FIXED_AMOUNT: 'fixed amount'
}

const RemotePointCheck = {
    SMS : 'sms',
    APP : 'app',
    NONE: 'none'
}



const Analytics = {
    REVENUE               : 'revenue',
    FILTERED_REVENUE      : 'filteredRevenue',
    FILTERED_REVENUE_LABEL: 'filteredRevenueLabel',
    POINT                 : 'point',
    FILTERED_POINT        : 'filteredPoint',
    FILTERED_POINT_LABEL  : 'filteredPointLabel',
    MEMBER                : 'member',
    FILTERED_MEMBER       : 'filteredMember',
    FILTERED_MEMBER_LABEL : 'filteredMemberLabel',
    STARTDATE             : 'startDate',
    ENDDATE               : 'endDate',
    MONTH_TOTAL_AMOUNT    : 'monthTotalAmount',
    MONTH_TOTAL_MEMBER    : 'monthTotalSubscriber',
    MONTH_TOTAL_POINT     : 'monthTotalPoints'
}


const DealDiscountType = {
    FREE_PRODUCT             : 'freeProduct',
    PERCENT_SPECIFIC_PRODUCT : 'percentSpecificProduct',
    AMOUNT_SPECIFIC_PRODUCT  : 'amountSpecificProduct',
    PERCENT_TOTAL_PRODUCT    : 'percentTotalProduct',
    AMOUNT_TOTAL_PRODUCT     : 'amountTotalProduct',

}


const Brand = {
    Platforms,
    Plans,
    BrandTypes,
    DiscountType,
    Analytics,
    Tags,
    DealDiscountType,
    RemotePointCheck
}


export default Brand