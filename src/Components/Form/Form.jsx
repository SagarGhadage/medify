import React from 'react'
import style from './form.module.css'
import Button, { btnVarient } from '../Button/Button';
import { ReactComponent as SearchIcon } from '../../assets/SearchGreay.svg'
import { ReactComponent as SearchIconGrey } from '../../assets/Search.svg'
import Icon, { IconName } from '../Icon/Icons';
function Form({ children, data, type,backGround, handleSubmit, setData, handleCancel }) {
  const handleInputChange = (e) => {
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  switch (type) {

    case Formtype.Search: {
      return (

          <form className={backGround==='White'?style.searchForm:style.searchFormW} onSubmit={handleSubmit}>
            <div className={style.inputbox}>
              <div className={style.iconC}>
                <SearchIconGrey className={style.icon}></SearchIconGrey>
              </div>
              <input
                type="text"
                placeholder="State"
                className={style.input}
                name="state"
                // value={data.state}
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div>
            <div className={style.inputbox}>
              <div className={style.iconC}>
                <SearchIconGrey className={style.icon}></SearchIconGrey>
              </div>
              <input
                type="text"
                placeholder="City"
                className={style.input}
                name="city"
                // value={data.city}
                onChange={(e) => handleInputChange(e)}
                required
              /></div>

            <div className={style.btns}>
              <Button varient={btnVarient.LIGHTBLUE} handleClick={handleSubmit} type={"submit"} ><SearchIcon></SearchIcon> Search</Button>
            </div>
          </form>
      )
    }

    case Formtype.SearchByHospital:
      {
        return <div className={style.searchByHospital}>
          <form className={style.SearchByHospital} onSubmit={handleSubmit}>
            <input
              name="searchByHospital"
              className={style.input}
              placeholder="SearchByHospital"
              value={data?.searchByHospital}
              onChange={handleInputChange}
              required
            />


            <div className={style.btns}>
              <Button varient={btnVarient.LIGHTBLUE} type={"submit"}>
                <SearchIcon></SearchIcon> Search
              </Button>
            </div>
          </form>
        </div>
      }
    case Formtype.GetApp:
      {
        return <div className="getAppF">
          <p className={style.hero_txt3}>Get the link to download the app</p>
          <form className={style.GetApp}onSubmit={handleSubmit}>
            <select name="country" className={style.country} id="country" onChange={handleInputChange}  >
              <option value="+91">+91</option>
            </select>
            <input type='number' className={style.phone}
              name="phone"
              placeholder="Enter phone no"
              value={data?.phone}
              onChange={handleInputChange}
              requireds
            />
            <div className={style.btns}>
              <Button varient={btnVarient.LIGHTBLUE} type={"submit"}>Send MSG
              </Button>
            </div>
          </form>
          <div className={style.appBtns}>
              <Button varient={btnVarient.default} type={"submit"}>
              <Icon Iconname={IconName.Footer.Google}></Icon>
              </Button>
              <Button varient={btnVarient.default} type={"submit"}>
              <Icon Iconname={IconName.Footer.Apple}></Icon>
              </Button>
            </div>
        </div>
      }
    default: {
      return <>Form</>
    }
  }
}
export const Formtype = Object.freeze({
  GetApp: 'GetApp',
  Search: 'Search',
  SearchByHospital: 'SearchByHospital',
  default: 'default',
})
export default Form