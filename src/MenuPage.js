import data from './data.json';
import MenuSection from './MenuSection';


function MenuPage () {
    return (
        <div className="menu-page">
        {data.map(section => 
        
            <MenuSection 
            {...section}
            />
        )}
        </div>)
}

export default MenuPage;