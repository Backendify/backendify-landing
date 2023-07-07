import axios from 'axios'

export const sendEmailToWaitlist = async (email: string) => {
  const apiKey = import.meta.env.VITE_API_KEY
  const baseUrl = import.meta.env.VITE_API_URL

  const result = await axios.post(
    `${baseUrl}/spreadsheets`,
    { email },
    {headers: {
      Authorization: apiKey
    }}
  )

  return result
}
