import React from 'react'
import style from "./Card.module.css"
import Button, { btnVarient } from '../Button/Button'
import Icon, { IconName } from '../Icon/Icons'
import Carousal from '../Carousal/Carousal'
import FullWidthTabs from '../Tab/Tab'
function Card({ data, heading, handleClick, cardtype, children, ImgIcon, }) {
  console.log(heading)
  switch (cardtype) {

    case cardType.VerticalBox:
      return (
        <div className={style.card} onClick={handleClick}>
          {ImgIcon}
          {heading && <p className={style.heading}>{heading}</p>}
          {children}
        </div>
      )

    case cardType.VerticalBoxBig:
      return (
        <div className={style.VerticalBoxBig} onClick={handleClick}>
          {ImgIcon}
          {heading && <p className={style.heading}>{heading}</p>}
          {children}
        </div>
      )

    case cardType.Horizontal:
      return (
        <div className={style.Horizontal} onClick={handleClick}>
          {ImgIcon}
          {heading && <p className={style.heading}>{heading}</p>}
          {children}
        </div>
      )

    case cardType.Profile: return (
      <div className={style.Profile} onClick={handleClick}>
        <div className={style.pImg}>
          {ImgIcon}
        </div>
        <div className={style.Profileheading}>
          {heading}
        </div>
        {children}
      </div>
    )
    case cardType.NewsCard: return (
      <div className={style.NewsCard} onClick={handleClick}>
        <div className={style.nImg}>
          {ImgIcon}
        </div>
        <div className={style.Profileheading}>
          {heading}
        </div>
        <div className={style.children}>
          {children}
        </div>
      </div>
    )

    case cardType.PerformanceCard: return (
      <div className={style.PerformanceCard} onClick={handleClick}>
        <div className={style.sImg}>
          {ImgIcon}
        </div>
        <div className={style.Profileheading}>
          {heading}
        </div>
        <div className={style.children}>
          {children}
        </div>
      </div>
    )

    case cardType.Hospital:
      console.log(data)
      return <div className={style.Hospital}>
        <div className={style.cardSec}>

          {ImgIcon ? ImgIcon : <Icon Iconname={IconName.Medical.Medical} />}
          <div className={style.HD}>
            <div className={style.HN}>{data["Hospital Name"]}</div>
            <p className={style.location}>{data['City']},{data['State']}</p>
            <p className={style.HT}>{data['Hospital Type']}</p>
            <p className={style.Offer}>

              <span className={style.Free}>FREE</span> <span className={style.Money}>₹500</span> Consultation fee at clinic</p>
            <hr style={{ "borderTop": '1px dashed #E8E8F0' }} />
            <span className={style.rating}>
              <Icon Iconname={IconName.Medical.Like} />{data['Hospital overall rating']}
            </span>
          </div>

          {!data?.isbooked && <div className={style.btns}>
            <p className={style.avail}>Available Today</p>
            <div className={style.bookingBtn}>
              <Button varient={btnVarient.LIGHTBLUE} btnText={'Book FREE Center Visit'}></Button>
            </div>
          </div>}

          {data?.isbooked && <div className={style.booked}>
            <p className={style.time}>{data?.booking?.time}</p>
            <p className={style.date}>{data?.booking?.date}</p>
          </div>}

        </div>
        <div className={style.bookingSec}>
          {/* <div className={style.days}> */}
            <FullWidthTabs data={data} Component={(ele,idx)=><Slots data={ele} />}></FullWidthTabs>
          {/* </div> */}
          
        </div>
      </div>

    default: return (
      <div className={style.Profile} onClick={handleClick}>{ }
        {ImgIcon}
        {heading && <p className={style.Profileheading}>{heading}</p>}
        {children}
      </div>
    )
  }

  // <div className={style.card}>
  //   {heading && <h2 className={style.heading}>{heading}:<span className={type===cardType.Balance?style.balance:type===cardType.Expences?style.expenses:""}> {value}</span></h2>}
  //   
  // </div>

}
const Slots=(data)=>{
  return <div className={style.slots}>
  <div className={style.slot}>
    <p className={style.SN}>Morning</p>
    <p className={style.time}>10:30PM</p>
  </div>
  <div className={style.slot}>
    <p className={style.SN}>Afternoon</p>
    <p className={style.time}>10:30PM</p>
    <p className={style.time}>10:30PM</p>
    <p className={style.time}>10:30PM</p>
    <p className={style.time}>10:30PM</p>
    <p className={style.time}>10:30PM</p>
    <p className={style.time}>10:30PM</p>
  </div>
  <div className={style.slot}>
  <p className={style.SN}>Afternoon</p>
  <p className={style.time}>10:30PM</p>
  <p className={style.time}>10:30PM</p>
  </div>
</div>
}
export const cardType = Object.freeze({
  VerticalBox: "VerticalBox",
  Horizontal: 'Horizontal',
  Hospital: 'Hospital',
  Profile: 'Profile',
  PerformanceCard: 'PerformanceCard',
  NewsCard: 'NewsCard',
  VerticalBoxBig: 'VerticalBoxBig',
})
export default Card