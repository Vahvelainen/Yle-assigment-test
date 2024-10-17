

export async function fetchVakaData(locationCode) {
  try {
    const response = await fetch('https://pxdata.stat.fi:443/PxWeb/api/v1/fi/StatFin/vaka/statfin_vaka_pxt_14jt.px', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: [
          {
            code: 'Vuosi',
            selection: {
              filter: 'item',
              values: ['2022']
            }
          },
          // {
          //   code: 'Ikä',
          //   selection: {
          //     filter: 'item',
          //     values: ['3', '4']
          //   }
          // },
          {
            code: 'Alue',
            selection: {
              filter: 'item',
              values: [locationCode]
            }
          },
          {
            code: 'Tiedot',
            selection: {
              filter: 'item',
              values: [
                "vaka_lapsi_lkm",
                "vko"
              ]
            }
          }
        ],
        response: {
          format: 'json'
        }
      })
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      //Returns three values as an array where first is the total number and second is the foreign languages
      console.log(jsonResponse)
      return jsonResponse.data[0].values;
    } else {
      console.error('Error fetching data:', response.statusText);
    }
  } catch (error) {
    console.error('Request failed:', error);
  }
};
