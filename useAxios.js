const axios = require('axios')

const base_url = "http://localhost:3000/api"

exports.useAxios = async (method, path, req={}, ) => {

  const ENDPOINT = `${base_url}${path}`

  let config = {
    url: ENDPOINT,
    method: method,
    validateStatus: function (status) {
      return status >= 200 && status < 600
    },
  }
	
	if (req) {
    config.data = req
	}
	
  try {

    let response = await axios(config)
    let code = response.status
    let data = response.data

    if (code >= 200 && code < 300) {
      console.log(`\nSUCCESS:  ${code} ${path} `)
		} else {
			console.log(`\nFAILED:  ${code} ${path} `)
		}
		console.log(data)
	} catch (error) {
		console.log(`\nERROR:  ${error} ${path} ${req}`)
  }
}

