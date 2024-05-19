import React from 'react'
import style from './HomePage.module.css'
import HeroSession from '../../Components/HeroSession/HeroSession'
import Section from '../../Components/Section/Section'
import Carousal from '../../Components/Carousal/Carousal'
import Card, { cardType } from '../../Components/Card/Card'
import Icon, { IconName } from '../../Components/Icon/Icons'
import FAQ from '../../Components/FAQ/FAQ'
import Button, { btnVarient } from '../../Components/Button/Button'
import Footer from '../../Components/Footer/Footer'
import { useOutletContext } from 'react-router-dom'

export default function HomePage({ children }) {
  

  const{info}=useOutletContext();
  // console.clear()
  console.log(info,'hi')


  return (
    <div >
      <HeroSession />
      <div className={style.section}>
        <Section ><Carousal data={info?.offers} Component={(data) => <Card cardtype={cardType.Horizontal} ImgIcon={<Icon Iconname={data % 2 !== 0 ? IconName.Group10 : IconName.Group11} />} />} /></Section>
      </div>
      <div className={style.findbyspecialisation}>
        <Section>
          <p className={style.secHeading}>Find by specialisation</p>
          <div className={style.flexContainer}>
            <Card className={style.card} cardtype={cardType.VerticalBoxBig} ImgIcon={<Icon Iconname={IconName.Specilazation.SPDrugstore} />} heading={'Dentistry'} />
            <Card className={style.card} cardtype={cardType.VerticalBoxBig} ImgIcon={<Icon Iconname={IconName.Specilazation.Stethoscope} />} heading={'Primary car'} />
            <Card className={style.card} cardtype={cardType.VerticalBoxBig} ImgIcon={<Icon Iconname={IconName.Specilazation.HeartRate} />} heading={'Cardiology'} />
            <Card className={style.card} cardtype={cardType.VerticalBoxBig} ImgIcon={<Icon Iconname={IconName.Specilazation.HeartRateMonitor} />} heading={'MRI Resonance'} />
            <Card className={style.card} cardtype={cardType.VerticalBoxBig} ImgIcon={<Icon Iconname={IconName.Specilazation.BloodSample} />} heading={'Blood Test'} />
            <Card className={style.card} cardtype={cardType.VerticalBoxBig} ImgIcon={<Icon Iconname={IconName.Specilazation.Protection} />} heading={'Piscologist'} />
            <Card className={style.card} cardtype={cardType.VerticalBoxBig} ImgIcon={<Icon Iconname={IconName.Specilazation.SPDrugstore} />} heading={'Laboratory'} />
            <Card className={style.card} cardtype={cardType.VerticalBoxBig} ImgIcon={<Icon Iconname={IconName.Specilazation.XRay} />} heading={'X-ray'} />
          </div>
          <div className={style.btn}>
            <Button varient={btnVarient.LIGHTBLUE} handleClick={''} btnText={'View All'}></Button>
          </div>
        </Section>
        {children}
      </div>
      <div className={style.OurMedicalSpecialist}>
        <Section >
          <p className={style.secHeading}>Our Medical Specialist</p>
          <div className={style.specialistsCarousal}>
            <Carousal data={info?.specialists}
              Component={(data) => <Card cardtype={cardType.Profile}
                ImgIcon={<Icon Iconname={IconName.MedicalSpecialist[`Dr${data?.name?.split('Dr.').join('').split(' ').join('')}`]} />}
                heading={data?.name} >
                <p className={style.specialisation}>{data?.specialisation}</p></Card>
              } /></div></Section>
      </div>
      <div className={style.PatientCaring}>
        <Section>
          <div className={style.hero_inner}>
            <div className={style.PCC}>
              <div className={style.PC}>
                <Icon Iconname={IconName.PC} className={style.PCIcon} /></div>
              <div className={style.PC1}>
                <Icon Iconname={IconName.PC1} className={style.PCIcon} /></div>
              <div className={style.PC3}>
                <p className={style.hero_txt3}><Icon Iconname={IconName.Call}></Icon>Free Consultation</p>
                <p className={style.hero_txt2}> &nbsp; Consultation with the best</p>
              </div>
            </div>
            <div className={style.heroTxtGP}>
              <p className={style.hero_txt1}>
                HELPING PATIENTS FROM AROUND THE GLOBE!!
              </p><p>
                <span className={style.span1}>
                  Patient
                </span>
                <span className={style.span2}> Caring </span>
              </p>
              <p className={style.hero_txt2}>
                Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare. </p>
              <div className={style.pc}>
                <p className={style.hero_txt3}><Icon Iconname={IconName.StarIcon}></Icon>Stay Updated About Your Health</p>
                <p className={style.hero_txt3}><Icon Iconname={IconName.StarIcon}></Icon>Check Your Results Online</p>
                <p className={style.hero_txt3}><Icon Iconname={IconName.StarIcon}></Icon>Manage Your Appointments</p>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <div className={style.LatestNews}>
        <Section>
          <h5 className={style.smallHeading}>Blog & News</h5>
          <p className={style.secHeading}>Read Our Latest News</p>
          <div className={style.flexNewsContainer}>
            <Card cardtype={cardType.NewsCard} ImgIcon={<Icon Iconname={IconName.Detox}></Icon>}>
              <p className={style.ntopic}>Medical | <span className={style.ndate}> March 31, 2022</span></p>
              <p className={style.hero_txt4}>6 Tips To Protect Your Mental Health When You’re Sick</p>
              <p className={style.hero_txt4}><Icon Iconname={IconName.Reporter}></Icon>Rebecca Lee</p>
            </Card>
            <Card cardtype={cardType.NewsCard} ImgIcon={<Icon Iconname={IconName.Detox}></Icon>}>
              <p className={style.ntopic}>Medical | <span className={style.ndate}> March 31, 2022</span></p>
              <p className={style.hero_txt4}>6 Tips To Protect Your Mental Health When You’re Sick</p>
              <p className={style.hero_txt4}><Icon Iconname={IconName.Reporter}></Icon>Rebecca Lee</p>
            </Card>
            <Card cardtype={cardType.NewsCard} ImgIcon={<Icon Iconname={IconName.Detox}></Icon>}>
              <p className={style.ntopic}>Medical | <span className={style.ndate}> March 31, 2022</span></p>
              <p className={style.hero_txt4}>6 Tips To Protect Your Mental Health When You’re Sick</p>
              <p className={style.hero_txt4}><Icon Iconname={IconName.Reporter}></Icon>Rebecca Lee</p>
            </Card>
          </div>
        </Section>
        {children}
      </div>
      <div className={style.OurFamilies}>
        <Section>
          {/* <div className={style.hero_inner}> */}
          <div className={style.hero_inner}>
            <div className={style.heroTxtGP}>
              <p className={style.hero_txt1}>
                CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
              </p>
              <p className={style.span3}>
                <span className={style.span3}>
                  Our Families
                </span>
              </p>
              <p className={style.hero_txt2} style={{lineHeight:'40.8px'}}>
                We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
            </div>
            <div className={style.PCC1}>
              <div className={style.PC4}>
                <Card cardtype={cardType.PerformanceCard} ImgIcon={
                  <Icon Iconname={IconName.performanceCard.Heart} className={style.PCIcon} />} >
                  <span className={style.span3}>
                    5000+
                  </span>
                  <p className={style.hero_txt2}>
                    Happy Patients</p>
                </Card>
                <Card cardtype={cardType.PerformanceCard} ImgIcon={
                  <Icon Iconname={IconName.performanceCard.DrugstoreP} className={style.PCIcon} />} >
                  <span className={style.span3}>
                    1000+
                  </span>
                  <p className={style.hero_txt2}>
                  Laboratories</p>
                </Card>
              </div>
              <div className={style.PC5}>
                <Card cardtype={cardType.PerformanceCard} ImgIcon={
                  <Icon Iconname={IconName.performanceCard.HospitalP} className={style.PCIcon} />} >
                  <span className={style.span3}>
                    200+
                  </span>
                  <p className={style.hero_txt2}>
                  Hospitals</p>
                </Card>
                <Card cardtype={cardType.PerformanceCard} ImgIcon={
                  <Icon Iconname={IconName.performanceCard.Doctor} className={style.PCIcon} />} >
                  <span className={style.span3}>
                    700+
                  </span>
                  <p className={style.hero_txt2}>
                    Expert Doctors</p>
                </Card></div>
            </div>
          </div>
          {/* </div> */}
        </Section>
      </div>
      <FAQ data={info?.faqs}/>
      <Footer/>
    </div>
  )
}
