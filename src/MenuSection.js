import './MenuSection.css'
import { useTranslation } from 'react-i18next';

function MenuSection (props) {
    const { t, i18n } = useTranslation();
    return (
        <div className="menu-section">
            {/* <div className="menu-section-header">{props.chinese}</div> */}
                {props.items.map(
                    item => 
                    <div className="menu-item">
                        <img className="item-picture" 
                            src={require(`./images/${props.chinese}/${item.name}.jpg`).default}/>
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