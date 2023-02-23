import React from 'react';
import './AboutMe.css';
import '../Main.css';
import photo from '../../../images/photo.png'

function AboutMe() {
    return (
        <section className='about-me'>
            <h2 id='about-me' className='main__section-title'>Студент</h2>
            <div className='about-me__full'>
            <img src={photo} alt='Фото' className='about-me__photo' />
            <div className='about-me__text'>
                <h3 className='about-me__name'>Виталий</h3>
                <h4 className='about-me__info'>Фронтенд-разработчик, 30 лет</h4>
                <p className='about-me__bio'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <div className='about-me__links'>
                    <a href='https://github.com/sveta-klimenko' target='_blank' rel='noreferrer noopener' className='about-me__link'>Github</a>
                </div>
            </div>
            </div>
        </section>
    )
}

export default AboutMe;