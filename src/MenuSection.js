import './MenuSection.css'

function MenuSection (props) {
    // console.log(props.data)
    return (
        <div className="menu-section">
            <div className="menu-section-header">{props.chinese}</div>
            <div>
                {props.items.map(
                    item => 
                    <div className="menu-item">
                        <div className="item-name">{item.name}</div>
                        <div className="item-price">{item.price}</div>
                    </div>)
                }
            </div>
        </div>
    ) 
}

export default MenuSection;