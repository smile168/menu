import data from './data.json';
import MenuSection from './MenuSection';
import './fonts/ChineseDragon.ttf';
import './fonts/TAKOYAKI.ttf';
import './fonts/Harukaze.ttf';
import React, { useEffect, useState } from "react";
import { Checkbox } from 'antd';
import { Radio } from 'antd';
import 'antd/dist/antd.css';

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
            menuSections.unshift(data.find(sec => sec.chinese === name));
            let after = menuSections.filter(e => e.chinese != 'none');
            setMenuSections(after);
        }
    }
    const onRadioButtonClick = (name) => {
        setMenuSections(data.filter(sec => sec.chinese === name))
    }
    return (
        <div className="menu-page">
            <header>
                No.1 BBQ
            </header>
        <Radio.Group 
            buttonStyle="outline"
            size="large"> 
            {data.map(section => 
                <Radio.Button 
                    style={{"margin":"1%"}}
                    onClick={(e) => {onRadioButtonClick(section.chinese)}}
                    value={section.chinese}
                >
                    {section.chinese}                    
                </Radio.Button>)}    
        </Radio.Group>                   
        {menuSections.map(section =>         
            <MenuSection 
            {...section}
            />
        )}
        </div>)
}

export default MenuPage;