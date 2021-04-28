import './MenuSection.css'

function MenuSection (props) {
    return (
        <div className="menu-section">
            {/* <div className="menu-section-header">{props.chinese}</div> */}
                {props.items.map(
                    item => 
                    <div className="menu-item">
                        <img className="item-picture" 
                            src={require(`./images/${props.chinese}/${item.name}.jpg`).default}/>
                        <div className="item-price">{item.name}<br/>{item.price}</div>
                    </div>)
                }
        </div>
    ) 
}

export default MenuSection;