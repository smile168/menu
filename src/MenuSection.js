import './MenuSection.css'
import { useTranslation } from 'react-i18next';

function MenuSection (props) {
    const { t, i18n } = useTranslation();
    const findImg = (cat, itemName) => {
        let img;
        try {
            img = require(`./images/${itemName}.jpg`).default
        } catch(error) {
            img = require(`./images/alt.jpg`).default
        }
        return img;
    }
    return (
        <div className="menu-section">
            {/* <div className="menu-section-header">{props.chinese}</div> */}
                {props.items.map(
                    item => 
                    <div className="menu-item">
                        <img className="item-picture" 
                            src={findImg(props.chinese, item.name)}/>
                        <div className="item-details">
                            <div>{t(item.name)}</div>
                            <div>{item.price}</div>
                        </div>
                    </div>)
                }
        </div>
    ) 
}

export default MenuSection;