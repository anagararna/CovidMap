import "../organismos/Top10CountryRigth.css";
import ApiConsum from "../../services/ApiConsum";

function Top10Country({filtro}){
  
  const dataCountry = ApiConsum("countries/");
 
  switch (filtro) {
    case "cases":
      dataCountry.sort((a,b) =>  b.cases - a.cases);
      break;

    case "todayCases":
      dataCountry.sort((a,b) =>  b.todayCases - a.todayCases);
      break;

    case "deaths":
      dataCountry.sort((a,b) =>  b.deaths - a.deaths);
      break;

    case "todayDeaths":
      dataCountry.sort((a,b) =>  b.todayDeaths - a.todayDeaths);
      break;

    case "active":
      dataCountry.sort((a,b) =>  b.active - a.active);
      break;

    case "recovered":
      dataCountry.sort((a,b) =>  b.recovered - a.recovered);
      break;
    
  }
  
  return (
    <ul class="pt-2">
      {dataCountry.slice(0,10).map((item) => ( 
          <li class="li-top10country-main  " key = {item.countryInfo._id}>
              <div className="div-list-top10country-main">
                  <p>
                    <span className="span-div-list-top10country-main-1">
                      <img src={item.countryInfo.flag} alt="" className="flag-top10country"  />  
                    </span>
                    <span className="span-div-list-top10country-main-2" >
                        <p className="p-span-div-list-top10country-main-2-1">{ item.country}</p>
                        <p className="p-span-div-list-top10country-main-2-2">
                          { filtro==="cases" && item.cases}
                          { filtro==="todayCases" && item.todayCases}
                          { filtro==="deaths" && item.deaths}
                          { filtro==="todayDeaths" && item.todayDeaths}
                          { filtro==="active" && item.active}
                          { filtro==="recovered" && item.recovered}

                        </p>
                    </span>
                  </p>
              </div>
          </li> 
      ))}
    </ul>
  );
};

export default Top10Country;