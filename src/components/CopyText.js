import React, { useState } from 'react'

import ReactTooltip from 'react-tooltip';
import { ColorSchemeCode } from '../enums/ColorScheme';

import { SvgIcons } from '../icons'

function CopyText({content, tooltip, hideText, color}) {

    const [tooltipText, setTooltipText] = useState('copy')
    
    const handleCopy = () => {
        const element = document.getElementById('content')
        const r = document.createRange()
        r.selectNode(element)
        window.getSelection().removeAllRanges()
        window.getSelection().addRange(r)
        document.execCommand('copy')
        window.getSelection().removeAllRanges()
        ReactTooltip.show(document.getElementById('tooltip'))
        setTooltipText('copied')
    }

    return (
        <div id="CopyText">
            <div className="text-wraper d-flex">
                <div id="content"  className={`text Body14R ${hideText && 'hideText'}`}>{content || ''}</div>
                <div onClick={handleCopy} id="tooltip" className="cp ml_10" data-for={'tooltipCopy'} data-tip={tooltipText} ><SvgIcons.CopyIcon color={color} /></div>
            </div>
            {<ReactTooltip backgroundColor={ColorSchemeCode.GeneralBlack} className="opacity-8 p_8 borderRadius-6" id="tooltipCopy" getContent={()=>tooltipText}/>}
        </div>
    )
}

export default CopyText
