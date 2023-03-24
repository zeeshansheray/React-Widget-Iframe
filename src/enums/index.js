import env from '../config'

import * as enums from './enums'
import * as ColorScheme from './ColorScheme'
import Fields from './Fields'

import User from './User'
import Brand from './Brand'
import Campaign from './Campaign'
import PassDesign from './PassDesign'
import GrowthTools from './GrowthTools';
import Communication from './Communication'
import Transactions from './Transaction'
import Tier from './Tier'

import CountryCode from './CountryCode'
import Currencies from './Currencies'

const GOOGLE_MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${env.GOOGLE_MAP_API}&v=3.exp&libraries=geometry,drawing,places`


export {
    enums,
    ColorScheme,
    User,
    Brand,
    Campaign,
    PassDesign,
    CountryCode,
    Currencies,
    GOOGLE_MAP_URL,
    Fields,
    GrowthTools,
    Communication,
    Transactions,
    Tier

}