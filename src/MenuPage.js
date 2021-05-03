import data from './data.json';
import MenuSection from './MenuSection';
import './fonts/ChineseDragon.ttf';
import './fonts/TAKOYAKI.ttf';
import './fonts/Harukaze.ttf';
import './fonts/xing.ttf';
import React, { useEffect, useState } from "react";
import { Checkbox } from 'antd';
import { Radio } from 'antd';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import {Switch} from 'antd';


function MenuPage () {
    const[menuSections, setMenuSections] = useState(data.filter(e => e.chinese ==="烧烤"));
    const { t, i18n } = useTranslation();
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
    const onSwitchClick = (status) => {
        if(status) i18n.changeLanguage("cn");
        else i18n.changeLanguage("en");           
    }
    const changeLang = (lang) => {
        i18n.changeLanguage(lang)
    }
    return (
        <div className="menu-page">
            <div>
            <header>
                <div>
                    {t("title")}
                </div>
            </header>
            </div>
        <div>
                <Switch 
                    style={{"float": "right", "margin":"3%"}}
                    onClick={(checked) => onSwitchClick(checked)}
                    checkedChildren="Lang Switch" 
                    unCheckedChildren="切至中文" 
                    defaultChecked />
            </div>
        <Radio.Group 
            buttonStyle="solid"
            size="large"
            defaultValue={data[0].chinese}> 
            {data.map(section => 
                <Radio.Button 
                    style={{"margin":"1%"}}
                    onClick={(e) => {onRadioButtonClick(section.chinese)}}
                    value={section.chinese}
                >
                    {t(section.chinese)}                    
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

