const FieldReference = {
    ADMIN     : 'admin',
    BRAND     : 'brand',
    SUBSCRIBER: 'subscriber',
    USER      : 'user',
    PASS      : 'pass',
    CUSTOM    : 'custom'
}

const FieldTypes = {
    URL       : 'url',
    IMAGE_URL : 'imageUrl',
    TEXT      : 'text',
    NUMBER    : 'number',
    DATE      : 'date',
    BOOLEAN   : 'boolean'
}

const CustomFiedlTypes = {
    SUBSCRIBER_FIELD : 'subscriber',
    BRAND_FIELD      : 'brand',
    ASSIGNED_TO      : 'assigned',
    SUB_BRAND_FIELD  : 'subBrand'
}


/* 
 - The reference in the FieldVariables are the collection name in database.
**/

const FieldVariablesOld = [
    {
        key         : 'firstName',
        label       : 'first name',
        description : 'the first name of your customer',
        value       : '',
        reference   : FieldReference.ADMIN
    },
    {
        key         : 'lastName',
        label       : 'last name',
        description : 'the last name of your customer',
        value       : '',
        reference   : FieldReference.ADMIN
    },
    {
        key         : 'email',
        label       : 'email',
        description : 'the email of your customer',
        value       : '',
        reference   : FieldReference.ADMIN
    },
    {
        key         : 'phone',
        label       : 'phone',
        description : 'the phone of your customer',
        value       : '',
        reference   : FieldReference.ADMIN
    },
    {
        key         : 'brandName',
        label       : 'brand name',
        description : 'the name of your brand',
        value       : '',
        reference   : FieldReference.BRAND
    },
    {
        key         : 'email',
        label       : 'email',
        description : 'the email of your brand',
        value       : '',
        reference   : FieldReference.BRAND
    },
    {
        key         : 'phone',
        label       : 'phone',
        description : 'the phone of your brand',
        value       : '',
        reference   : FieldReference.BRAND
    },
    {
        key         : 'description',
        label       : 'description',
        description : 'the description of your brand',
        value       : '',
        reference   : FieldReference.BRAND
    },
    {
        key         : 'location',
        label       : 'location',
        description : 'the location of your brand',
        value       : '',
        reference   : FieldReference.BRAND
    },
    {
        key         : 'about',
        label       : 'about',
        description : 'details about your brand',
        value       : '',
        reference   : FieldReference.BRAND
    },
    {
        key         : 'website',
        label       : 'website',
        description : 'the website of your brand',
        value       : '',
        reference   : FieldReference.BRAND
    },
]

const FieldVariables = {
    ADMIN : [
        {
            key         : 'firstName',
            label       : 'first name',
            description : 'the first name of your customer',
            value       : '',
            reference   : FieldReference.ADMIN 
        },
        {
            key         : 'lastName',
            label       : 'last name',
            description : 'the last name of your customer',
            value       : '',
            reference   : FieldReference.ADMIN
        },
        {
            key         : 'email',
            label       : 'email',
            description : 'the email of your customer',
            value       : '',
            reference   : FieldReference.ADMIN
        },
        {
            key         : 'phone',
            label       : 'phone',
            description : 'the phone of your customer',
            value       : '',
            reference   : FieldReference.ADMIN
        },
        {
            key         : 'dialingCode',
            label       : 'dialing code',
            description : 'the dialing code of your customer',
            value       : '',
            reference   : FieldReference.ADMIN
        },
        {
            key         : 'jobDescription',
            label       : 'job description',
            description : 'the job description of your customer',
            value       : '',
            reference   : FieldReference.ADMIN
        },
        {
            key         : 'companyStrength',
            label       : 'company strength',
            description : 'the company strength of your customer',
            value       : '',
            reference   : FieldReference.ADMIN
        },
        {
            key         : 'experience',
            label       : 'experience',
            description : 'the experience of your customer',
            value       : '',
            reference   : FieldReference.ADMIN
        },
        {
            key         : 'birthday',
            label       : 'birthday',
            description : 'the birthday of your customer',
            value       : '',
            reference   : FieldReference.ADMIN
        },
        {
            key         : 'gender',
            label       : 'gender',
            description : 'the gender of your customer',
            value       : '',
            reference   : FieldReference.ADMIN
        },
        {
            key         : 'avatar',
            label       : 'avatar',
            description : 'the avatar of your customer',
            value       : '',
            reference   : FieldReference.ADMIN
        },
        {
            key         : 'location',
            label       : 'location',
            description : 'the location of your customer',
            value       : '',
            reference   : FieldReference.ADMIN
        },
    ],
    BRAND : [
        {
            key         : 'brandName',
            label       : 'brand name',
            description : 'the name of your brand',
            value       : '',
            reference   : FieldReference.BRAND
        },
        {
            key         : 'email',
            label       : 'email',
            description : 'the email of your brand',
            value       : '',
            reference   : FieldReference.BRAND
        },
        {
            key         : 'phone',
            label       : 'phone',
            description : 'the phone of your brand',
            value       : '',
            reference   : FieldReference.BRAND
        },
        {
            key         : 'description',
            label       : 'description',
            description : 'the description of your brand',
            value       : '',
            reference   : FieldReference.BRAND
        },
        {
            key         : 'location',
            label       : 'location',
            description : 'the location of your brand',
            value       : '',
            reference   : FieldReference.BRAND
        },
        {
            key         : 'about',
            label       : 'about',
            description : 'details about your brand',
            value       : '',
            reference   : FieldReference.BRAND
        },
        {
            key         : 'website',
            label       : 'website',
            description : 'the website of your brand',
            value       : '',
            reference   : FieldReference.BRAND
        },
        {
            key         : 'brandColor',
            label       : 'brand color',
            description : 'the brand color of your brand',
            value       : '',
            reference   : FieldReference.BRAND
        },
        {
            key         : 'brandCover',
            label       : 'brand cover',
            description : 'the brand cover of your brand',
            value       : '',
            reference   : FieldReference.BRAND
        },
        {
            key         : 'brandLogo',
            label       : 'brand logo',
            description : 'the brand logo of your brand',
            value       : '',
            reference   : FieldReference.BRAND
        },
        {
            key         : 'brandCover',
            label       : 'brand cover',
            description : 'the brand cover of your brand',
            value       : '',
            reference   : FieldReference.BRAND
        },
        {
            key         : 'numberOfStaff',
            label       : 'number of staff',
            description : 'the number of staff of your brand',
            value       : '',
            reference   : FieldReference.BRAND
        },
        {
            key         : 'owner',
            label       : 'owner',
            description : 'the owner of your brand',
            value       : '',
            reference   : FieldReference.BRAND
        },
        {
            key         : 'currency',
            label       : 'currency',
            description : 'the currency of your brand',
            value       : '',
            reference   : FieldReference.BRAND
        },
    ],
    SUBSCRIBER : [
        {
            USER : [
                {
                    key         : 'firstName',
                    label       : 'first name',
                    description : 'the first name of your customer',
                    value       : '',
                    reference   : FieldReference.USER 
                },
                {
                    key         : 'lastName',
                    label       : 'last name',
                    description : 'the last name of your customer',
                    value       : '',
                    reference   : FieldReference.USER
                },
                {
                    key         : 'email',
                    label       : 'email',
                    description : 'the email of your customer',
                    value       : '',
                    reference   : FieldReference.USER
                },
                {
                    key         : 'phone',
                    label       : 'phone',
                    description : 'the phone of your customer',
                    value       : '',
                    reference   : FieldReference.USER
                },
                {
                    key         : 'dialingCode',
                    label       : 'dialing code',
                    description : 'the dialing code of your customer',
                    value       : '',
                    reference   : FieldReference.USER
                },
                {
                    key         : 'jobDescription',
                    label       : 'job description',
                    description : 'the job description of your customer',
                    value       : '',
                    reference   : FieldReference.USER
                },
                {
                    key         : 'companyStrength',
                    label       : 'company strength',
                    description : 'the company strength of your customer',
                    value       : '',
                    reference   : FieldReference.USER
                },
                {
                    key         : 'experience',
                    label       : 'experience',
                    description : 'the experience of your customer',
                    value       : '',
                    reference   : FieldReference.USER
                },
                {
                    key         : 'birthday',
                    label       : 'birthday',
                    description : 'the birthday of your customer',
                    value       : '',
                    reference   : FieldReference.USER
                },
                {
                    key         : 'gender',
                    label       : 'gender',
                    description : 'the gender of your customer',
                    value       : '',
                    reference   : FieldReference.USER
                },
                {
                    key         : 'avatar',
                    label       : 'avatar',
                    description : 'the avatar of your customer',
                    value       : '',
                    reference   : FieldReference.USER
                },
                {
                    key         : 'location',
                    label       : 'location',
                    description : 'the location of your customer',
                    value       : '',
                    reference   : FieldReference.USER
                },
            ],
            PASSES : {
                LOYALTY_CARD : [
                    {
                        key         : 'loyaltyCard.currentPoints',
                        label       : 'current points',
                        description : 'the current points of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                    {
                        key         : 'loyaltyCard.totalPoints',
                        label       : 'total points',
                        description : 'the total points of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                    {
                        key         : 'loyaltyCard.redeemCount',
                        label       : 'redeem count',
                        description : 'the redeem count of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                    {
                        key         : 'loyaltyCard.lastRedeemAt',
                        label       : 'last redeem at',
                        description : 'the last redeem at of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                    {
                        key         : 'loyaltyCard.lastAmountSpent',
                        label       : 'last amount spent',
                        description : 'the last amount spent of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                    {
                        key         : 'loyaltyCard.totalSpending',
                        label       : 'total spending',
                        description : 'the total spending of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                    {
                        key         : 'nextDeal',
                        label       : 'next Deal',
                        description : 'the name of your next deal',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                    {
                        key         : 'referralLink',
                        label       : 'Referral Link',
                        description : 'the name of your Referral Link',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                    {
                        key         : 'remainingTarget',
                        label       : 'Remaining Target',
                        description : 'the name of your next deal',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                    {
                        key         : 'earningMethod',
                        label       : 'Earning Method',
                        description : 'the earning method for points',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                ],
                COUPON : [
                    {
                        key         : 'coupon.totalSpending',
                        label       : 'total spending',
                        description : 'the total spending of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                    {
                        key         : 'coupon.expiredAt',
                        label       : 'expired at',
                        description : 'the expired at of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                ],
                STAMP_CARD : [
                    {
                        key         : 'stampCard.currentStamps',
                        label       : 'current stamps',
                        description : 'the current stamps of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                    {
                        key         : 'stampCard.totalStamps',
                        label       : 'total stamps',
                        description : 'the total stamps of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                    {
                        key         : 'stampCard.redeemCount',
                        label       : 'redeem count',
                        description : 'the redeem count of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                    {
                        key         : 'stampCard.lastRedeemAt',
                        label       : 'last redeem at',
                        description : 'the last redeem at of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                    {
                        key         : 'stampCard.lastAmountSpent',
                        label       : 'last amount spent',
                        description : 'the last amount spent of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                    {
                        key         : 'stampCard.totalSpending',
                        label       : 'total spending',
                        description : 'the total spending of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                ],
                MEMBERSHIP_CARD : [
                    {
                        key         : 'membershipCard.redeemCount',
                        label       : 'redeem count',
                        description : 'the redeem count of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                    {
                        key         : 'membershipCard.status',
                        label       : 'status',
                        description : 'the status of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                    {
                        key         : 'membershipCard.lastRedeemAt',
                        label       : 'last redeem at',
                        description : 'the last redeem at of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                ],
                TICKET : [
                    {
                        key         : 'ticket.totalSpending',
                        label       : 'total spending',
                        description : 'the total spending of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                    {
                        key         : 'ticket.expiredAt',
                        label       : 'expired at',
                        description : 'the expired at of your customer',
                        value       : '',
                        reference   : FieldReference.PASS
                    },
                ],
            }
        }
    ],
    CUSTOM : []
}



const Fields = {
    FieldReference,
    FieldTypes,
    CustomFiedlTypes,
    FieldVariables
}

export default Fields