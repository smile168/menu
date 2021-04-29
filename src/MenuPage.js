import data from './data.json';
import MenuSection from './MenuSection';
import './fonts/ChineseDragon.ttf';
import './fonts/TAKOYAKI.ttf';
import './fonts/Harukaze.ttf';
import React, { useEffect, useState } from "react";
import { Checkbox } from 'antd';


function MenuPage () {
    const[menuSections, setMenuSections] = useState(data);
    const onCheckMenuSection = (name, checked) => {
        // uncheck
        if(menuSections.some(e => e.chinese === name) && !checked){
            setMenuSections(menuSections.filter(sec => sec.chinese != name));
        };
        // check -- add
        if(menuSections == undefined || !menuSections.some(e => e.chinese === name) && checked){
            // todo: simplify 
            menuSections.push(data.find(sec => sec.chinese === name));
            let after = menuSections.filter(e => e.chinese != 'none');
            setMenuSections(after);
        }
    }
    return (
        <div className="menu-page">
            <header>
                No.1 BBQ
            </header>
            {/* todo: take this inline out */}
        <div style={{"width":"75%","alignSelf":'center'}}> 
            {data.map(section => 
                <Checkbox 
                    style={{"margin": "10%", "borderTop":"10%"}}
                    defaultChecked={true}
                    onClick={(e) => {onCheckMenuSection(section.chinese, e.target.checked)}}>
                    {section.chinese}                    
                </Checkbox>)}    
        </div>                   
        {menuSections.map(section =>         
            <MenuSection 
            {...section}
            />
        )}
        </div>)
}

export default MenuPage;