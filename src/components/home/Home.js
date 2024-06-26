import React, { useEffect } from "react";
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);  

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1 data-aos="zoom-in-up"   data-aos-delay="1000" data-aos-duration="1000">Hi, my name is <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} type={bio.type} emoji={bio.emoji} display={bio.display} text={bio.text}/>
               ))}
            </Box>
         </Box>

         <a href="/#/special_cait" style={{position: 'fixed', right: '20px', bottom: '50px'}}>👔</a>
      </Box>
   )
}