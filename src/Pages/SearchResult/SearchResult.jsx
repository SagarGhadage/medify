import React from 'react'
import style from './SearchResult.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Form, { Formtype } from '../../Components/Form/Form'
import FAQ from '../../Components/FAQ/FAQ'
import Footer from '../../Components/Footer/Footer'
import Card, { cardType } from '../../Components/Card/Card'
import Icon, { IconName } from '../../Components/Icon/Icons'
//
export default function SearchResult() {
  return <div className={style.SearchResult}>
    <Navbar />

    <div className={style.BlueStrip}>
      <div className={style.Form}><Form id={'Form'} type={Formtype.Search}></Form>
      </div>
    </div>

    <div className={style.resultSec}>
      <div className={style.cards}>
        <div className={style.careH}>
          <p className={style.careHM}>15 medical centers available in Alaska</p>
          <p className={style.careHS}>Book appointments with minimum wait-time & verified doctor details</p>
        </div>
        <Card
          cardtype={cardType.Hospital}
          // bookingData={slots} 
          data={data[0]}
          ImgIcon={<Icon Iconname={IconName.Medical.Medical}></Icon>}>
        </Card>
      </div>
      <div className={style.add}>
        <Icon Iconname={'ADD'}
        />
      </div>
    </div>
    <FAQ data={dataFAQ} />
    <Footer />
  </div>
}
let dataFAQ = [
  {
    que: 'Why we are different from others?', ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  },
  {
    que: 'Why choose our medical for your family?', ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.`
  },
  {
    que: 'Trusted & experience senior care & love', ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  }
  ,
  {
    que: 'How to get appointment for emergency cases?', ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  }
]
let slots = [
  { day: 'Today', slots: 3 },
  { day: 'Today', slots: 3 },
  { day: 'Today', slots: 3 },
  { day: 'Today', slots: 3 },
  { day: 'Today', slots: 3 },
  { day: 'Today', slots: 3 },
  { day: 'Today', slots: 3 },
]
let data = [
  {
    'slots': slots,
    "Provider ID": "020024",
    "Hospital Name": "CENTRAL PENINSULA GENERAL HOSPITAL",
    "Address": "250 HOSPITAL PLACE",
    "City": "SOLDOTNA",
    "State": "Alaska",
    "ZIP Code": 99669,
    "County Name": "",
    "Phone Number": 9072624404,
    "Hospital Type": "Acute Care Hospitals",
    "Hospital Ownership": "Voluntary non-profit - Other",
    "Emergency Services": "Yes",
    "Meets criteria for meaningful use of EHRs": "Y",
    "Hospital overall rating": 3,
    "Hospital overall rating footnote": "",
    "Mortality national comparison": "Same as the national average",
    "Mortality national comparison footnote": "",
    "Safety of care national comparison": "Same as the national average",
    "Safety of care national comparison footnote": "",
    "Readmission national comparison": "Same as the national average",
    "Readmission national comparison footnote": "",
    "Patient experience national comparison": "Same as the national average",
    "Patient experience national comparison footnote": "",
    "Effectiveness of care national comparison": "Same as the national average",
    "Effectiveness of care national comparison footnote": "",
    "Timeliness of care national comparison": "Below the national average",
    "Timeliness of care national comparison footnote": "",
    "Efficient use of medical imaging national comparison": "Same as the national average",
    "Efficient use of medical imaging national comparison footnote": ""
  }
]