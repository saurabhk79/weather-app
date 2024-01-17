/* eslint-disable react/prop-types */

const DayCard = ({info}) => {
  return (
    <div style={{width : "200px"}}>
        {info.dt_txt}
    </div>
  )
}

export default DayCard