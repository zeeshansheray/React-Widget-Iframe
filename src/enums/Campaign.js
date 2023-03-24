const CampaignTypes = {
    PERCENT_COUPON    : 1,
    AMOUNT_COUPON     : 2,
    GIVEAWAY_COUPON   : 3,
    COMPETITION_COUPON: 4,
    LOYALTY_CARD      : 5,
    STAMP_CARD        : 6,
    MEMBERSHIP_CARD   : 7,
    EVENT_TICKET      : 8,
    WEBINAR_TICKET    : 9,
    FIXED_AMOUNT      : 'Fixed Amount Coupon',
    GIFTCARD_COUPON   : 10,
}

const CampaignTypesNames = {
    '1' : 'Percentage Coupon',
    '2' : 'Discount Coupon',
    '3' : 'Giveaway Coupon',
    '4' : 'Competition Coupon',
    '5' : 'Loyalty Card',
    '6' : 'Stamp Card',
    '7' : 'Membership Card',
    '8' : 'Event Ticket',
    '9' : 'Webinar Ticket',
}

const Activities = {
    EARNING: {
        SPENDING : 'spending',
        BIRTHDAY : 'birthday',
        VISIT    : 'visit',
        SIGNUP   : 'signup',
        CUSTOM   : 'custom',
        CHECKIN  : 'checkIn',
    },
    REDEEMING: {
        AMOUNT         : 'amount',
        PRECENTAGE     : 'percentage',
        SHIPPING       : 'shipping',
        POS_AMOUNT     : 'pos_amount',
        POS_PERCENTAGE : 'pos_percentage'
    }

}

const PasscodeTypes = {
    FIXED  : 'fixed',
    DYNAMIC: 'dynamic',
}

const EarningTypes = {
    INCREMENTAL : 'incremental',
    FIXED       : 'fixed',
    RANGE       : 'range'
}

const ApprovalTypes = {
    IMMEDIATELY    : 'immediately',
    MANUALLY       : 'manually',
    AFTER_DURATION : 'fixed_duration'
}

const RedeemingTypes = {
    INCREMENTAL : 'incremental',
    FIXED       : 'fixed'
}

const RedeemActivityApplies = {
    ENTIRE   : 'entire',
    SPECIFIC : 'specific'
}

const Campaign = {
    CampaignTypes,
    CampaignTypesNames,
    Activities,
    EarningTypes,
    ApprovalTypes,
    RedeemingTypes,
    RedeemActivityApplies,
    PasscodeTypes
}

export default Campaign