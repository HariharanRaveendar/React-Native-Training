import React from 'react';
import {StyleSheet} from 'react-native';

import { wDP ,hDP } from '../const/utils';

const colors= {

    Blue :'#005b96',
    Gray : '#D7DFE5',
    Red : '#ff002b',
    white:'#FFFFFF',
    voilet:'#5C4DCB',
    orange:'#ffa500',
    
    Base1 : '#3d1f1d',
    Base2 : '#a73728',
    Base3: '#df643f',
    BackGround : '#D3D3D3',
    BlurFont : '#656565',
    BoldFont : '#0f0f0f',
    Black: '#0f0f0f',
    BoxBackGround : '#212121',
    FadeBoldFont : '#373737',
    Green: '#29AB87',
    White : '#fff',
    violet: '#8b16ff',
    Yellow : '#FFDF00',
    Green2 : '#979797',
    Blue :'#005b96',
   
    Red : '#ff002b',
    Black : '#000',
    LiteGray1 : '#CFCFCF',
    LiteGray : '#E5E5E5',
    LitePink : '#F9CDAF',
    fCoral : '#FF634D',
  
    
    }
const Shadow = {
    color : '#000',
    offset : {height: 3, width: 0},
    radius : 5,
    opacity : 1
    }
    const sFONT = {
      Title : hDP('3%'),
      subTitle : hDP('2%'),
      Regular : hDP ('1.5%'),
      Medium : hDP ('2%'),
      Large : hDP('2.5%'),
      Small : hDP('1.25%'),
      xl:hDP('6%'),
      vl:hDP('4%')
    }
    
    export default {
      colors,sFONT,
      Shadow
    };
